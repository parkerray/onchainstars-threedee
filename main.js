import * as THREE from "three";
import * as SVGSON from "svgson";
import "./style.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//import { ENS } from '@ensdomains/ensjs'

const ownerInput = document.querySelector('.owner-input');
const refreshButton = document.querySelector('.button');
const urlParams = new URLSearchParams(window.location.search);
let currentUrl = new URL(window.location);

const holdersList = document.querySelector('#holders');
const holdersWrapper = document.querySelector('.top-wrapper');

//desktop listeners
holdersWrapper.addEventListener("mouseenter", () => {
  holdersList.setAttribute('style', 'display: block')
});
holdersWrapper.addEventListener("mouseleave", () => {
  holdersList.setAttribute('style', 'display: none')
});

//touchscreen listeners
holdersWrapper.addEventListener("touch", () => {
  holdersList.setAttribute('style', 'display: block')
});

refreshButton.addEventListener('click', handleButton);

function handleButton() {
  const url = new URL(window.location);
  url.searchParams.set('address',ownerInput.value)
  window.history.pushState({},'',url)
  if (ownerInput.value) {
    getSvgs(ownerInput.value);
  } else {
    console.log('something seems wrong with your wallet address')
  }
}

async function getTopHolders() {

  let holders = [];
  const response = await fetch(`https://main.api314.com/api:public/top-holders`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  });
  const data = await response.json();

  const items = data.map(item => item);

  holdersList.innerHTML = "";


  items.forEach(item => {
    let address = item.constellations_owner;
    let holder = {
      "address": address,
      "label": address.substring(0, 6) + "..." + address.substring(address.length - 4),
      "tokenCount": item.tokens
    }
    holders.push(holder)
    const holderItem = document.createElement('li');
    holderItem.innerHTML = `${holder.label}: ${holder.tokenCount}`
    holderItem.setAttribute('id', holder.address);
    holderItem.addEventListener("click", function(event) {
      ownerInput.value = holderItem.id;
      handleButton();
    })
    holdersList.appendChild(holderItem)
  });
  return holders;
}

async function initialize() {
  let address = urlParams.get('address');
  if (address) {
    ownerInput.value = address;
  } else {
    address = '0x93da86E4231908179b738E88DD0510F7078a5Cac';
  }
  getSvgs(address)
  const holders = await getTopHolders();
}

initialize();

const getPosition = (token, i, min, max) => {
  let seed = token * i;
  seed = seed & 0xffffffff;
  seed = (seed + 0x7ed55d16 + (seed << 12)) & 0xffffffff;
  seed = (seed ^ 0xc761c23c ^ (seed >>> 19)) & 0xffffffff;
  seed = (seed + 0x165667b1 + (seed << 5)) & 0xffffffff;
  seed = ((seed + 0xd3a2646c) ^ (seed << 9)) & 0xffffffff;
  seed = (seed + 0xfd7046c5 + (seed << 3)) & 0xffffffff;
  seed = (seed ^ 0xb55a4f09 ^ (seed >>> 16)) & 0xffffffff;
  seed = (seed & 0xfffffff) / 0x10000000;
  seed = seed * (max - min) + min + 1;
  return seed;
};

async function getImages(address) {
  let svgs = [];
  const response = await fetch(`https://main.api314.com/api:public/owned-constellations?owner=${address}`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  });
  const data = await response.json();

  const images = data.map(item => item.metadata.image);

  images.forEach(e => {
    let svg = atob(e.replace("data:image/svg+xml;base64,", ""))
    svgs.push(svg)
  });
  return svgs;
}

async function getSvgs(address) {
  let svgs = await getImages(address);
  await handleFunctions(svgs);
}

async function handleFunctions(svgs) {
  const cbrt = Math.ceil(Math.cbrt(svgs.length));
  let x = cbrt * 64;
  let y = cbrt * 64;
  let z = cbrt * 64;

  async function convertSvg(svg) {
    let json = await SVGSON.parse(svg);
    return json;
  }

  const svgObjects = [];

  for (let i = 0; i < svgs.length; i++) {
    const newsvg = await convertSvg(svgs[i]);
    svgObjects.push(newsvg);
  }

  //scene
  const scene = new THREE.Scene();

  //sizes
  let sizes = {
    width: window.innerWidth - 32,
    height: window.innerHeight - 32,
  };

  let xInit = 32;
  let yInit = 32;
  let zInit = 32;

  const counter = svgObjects.length;
  if (counter > 1) {
    xInit = (x / 2) * -1;
    yInit = y / 2;
    zInit = (z / 2) * -1;
  }

  let planeRefX = xInit;
  let planeRefY = yInit;
  let planeRefZ = zInit;

  let xCount = 0;
  let yCount = 0;
  let zCount = 0;

  const group = new THREE.Group();

  for (let e = 0; e < svgObjects.length; e++) {
    const stars = svgObjects[e].children;

    for (let i = 1; i < stars.length; i++) {
      let size = stars[i].attributes.width;
      const geometry = new THREE.BoxGeometry(size, size, size);
      const material = new THREE.MeshBasicMaterial({
        color: stars[i].attributes.fill,
      });
      material.opacity = stars[i].attributes.opacity;
      material.transparent = true;
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        planeRefX - stars[i].attributes.x,
        planeRefY - stars[i].attributes.y,
        getPosition(
          svgObjects[e].attributes.id,
          i,
          planeRefZ - 32,
          planeRefZ + 32
        )
      );
      group.add(mesh);
    }

    if (xCount < cbrt - 1) {
      planeRefX += 64;
      xCount++;
    } else {
      planeRefX = xInit;
      xCount = 0;
      yCount++;
      if (yCount > 0 && yCount < cbrt) {
        planeRefY -= 64;
      } else if (yCount >= cbrt) {
        planeRefY = yInit;
        yCount = 0;
        zCount++;
        if (zCount > 0 && zCount < cbrt) {
          planeRefZ += 64;
        } else if (zCount >= cbrt) {
          planeRefZ = zInit;
          zCount = 0;
        }
      }
    }
  }

  const centerPoint = new THREE.Vector3();
  const box = new THREE.Box3().setFromObject(group);
  const boxCenter = box.getCenter(centerPoint);

  if (counter == 2) {
    group.position.set(boxCenter.x * -1, boxCenter.y - 64, boxCenter.z * -1);
  } else {
    group.position.set(boxCenter.x * -1, boxCenter.y, boxCenter.z * -1);
  }
  scene.add(group);

  //camera
  const camera = new THREE.PerspectiveCamera(
    10,
    sizes.width / sizes.height,
    10,
    5000
  );
  camera.position.set(0, 0, 600 * cbrt);
  scene.add(camera);

  //light
  const light = new THREE.AmbientLight(0xffffff, 1);
  light.position.set(0, 100, 100);
  scene.add(light);

  //renderer
  const canvas = document.querySelector(".webgl");
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(1.5);
  renderer.render(scene, camera);

  //resize
  window.addEventListener("resize", () => {
    (sizes.width = window.innerWidth),
      (sizes.height = window.innerHeight),
      (camera.aspect = sizes.width / sizes.height),
      camera.updateProjectionMatrix(),
      renderer.setSize(sizes.width, sizes.height);
  });

  //controls
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.5;

  const loop = () => {
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
  };
  loop();
}