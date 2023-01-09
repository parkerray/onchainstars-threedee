import * as THREE from "./node_modules/three";
import * as SVGSON from "./node_modules/svgson";
import "./style.css";
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls";

//get a random number
const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let result = Math.floor(Math.random() * (max - min) + min) + 1;
  return result;
};

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

const testData = [
  `<svg id="1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 64 64" fill="#000"><rect x="0" y="0" width="64" height="64" fill="#000"></rect><rect x="17" y="26" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="39" y="17" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="51" y="39" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="58" y="28" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="28" y="58" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="46" y="63" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="49" y="22" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="39" y="22" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="42" y="40" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="20" y="58" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="58" y="30" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="44" y="7" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="52" y="35" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="55" y="8" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="8" y="63" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="51" y="56" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="16" y="37" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="10" y="13" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="45" y="19" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="46" y="30" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="48" y="22" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="33" y="26" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="38" y="32" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="49" y="4" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="11" y="15" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="0" y="41" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="27" y="62" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="8" y="31" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="25" y="42" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="58" y="37" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="63" y="27" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="42" y="4" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="20" y="13" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="41" y="43" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="37" y="55" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="17" y="14" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="44" y="36" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="47" y="28" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="35" y="37" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="18" y="5" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="9" y="21" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="62" y="18" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="32" y="60" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="39" y="36" width="1" height="1" fill="#FFE790" opacity="1"></rect><rect x="42" y="49" width="1" height="1" fill="#FFE790" opacity="1"></rect><rect x="20" y="61" width="1" height="1" fill="#FFE790" opacity="1"></rect><rect x="58" y="47" width="1" height="1" fill="#FFE790" opacity="1"></rect><rect x="44" y="44" width="1" height="1" fill="#FFE790" opacity="1"></rect></svg>`,
  `<svg id="2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 64 64" fill="#000"><rect x="0" y="0" width="64" height="64" fill="#000"></rect><rect x="39" y="26" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="51" y="39" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="44" y="44" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="11" y="44" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="59" y="28" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="46" y="59" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="60" y="37" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="53" y="33" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="47" y="30" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="29" y="55" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="24" y="26" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="55" y="32" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="54" y="22" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="43" y="3" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="10" y="15" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="28" y="4" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="5" y="4" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="56" y="51" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="34" y="23" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="42" y="54" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="9" y="33" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="52" y="6" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="33" y="33" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="49" y="25" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="22" y="39" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="13" y="6" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="40" y="17" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="0" y="11" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="45" y="53" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="44" y="45" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="0" y="14" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="46" y="4" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="35" y="0" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="57" y="60" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="47" y="7" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="6" y="52" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="43" y="4" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="63" y="16" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="27" y="60" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="54" y="0" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="35" y="38" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="4" y="36" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="25" y="20" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="23" y="46" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="55" y="50" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="7" y="29" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="18" y="51" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="40" y="7" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="50" y="47" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="0" y="39" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="30" y="30" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="21" y="36" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="36" y="49" width="1" height="1" fill="#7DD0FF" opacity="1"></rect><rect x="15" y="36" width="1" height="1" fill="#7DD0FF" opacity="1"></rect><rect x="0" y="0" width="1" height="1" fill="#7DD0FF" opacity="1"></rect></svg>`,
  `<svg id="3" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 64 64" fill="#000"><rect x="0" y="0" width="64" height="64" fill="#000"></rect><rect x="51" y="26" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="44" y="51" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="11" y="28" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="36" y="11" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="63" y="50" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="44" y="20" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="40" y="30" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="42" y="18" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="6" y="46" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="3" y="16" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="3" y="48" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="59" y="34" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="16" y="6" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="60" y="17" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="47" y="40" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="36" y="58" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="60" y="38" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="57" y="29" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="40" y="30" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="50" y="46" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="18" y="52" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="27" y="37" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="41" y="13" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="26" y="41" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="38" y="51" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="42" y="15" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="10" y="31" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="50" y="49" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="1" y="13" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="15" y="28" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="49" y="21" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="38" y="2" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="46" y="24" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="6" y="48" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="29" y="2" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="9" y="38" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="63" y="55" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="35" y="14" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="27" y="31" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="60" y="61" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="42" y="34" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="5" y="6" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="6" y="36" width="1" height="1" fill="#FFE790" opacity="1"></rect><rect x="3" y="52" width="1" height="1" fill="#FFE790" opacity="1"></rect></svg>`,
  `<svg id="4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 64 64" fill="#000"><rect x="0" y="0" width="64" height="64" fill="#000"></rect><rect x="44" y="26" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="11" y="44" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="21" y="28" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="44" y="21" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="34" y="46" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="8" y="26" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="12" y="50" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="34" y="32" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="52" y="15" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="55" y="38" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="25" y="54" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="39" y="38" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="54" y="25" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="27" y="11" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="36" y="5" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="63" y="36" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="38" y="9" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="17" y="25" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="59" y="43" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="5" y="10" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="2" y="15" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="53" y="6" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="57" y="10" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="10" y="19" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="47" y="19" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="20" y="34" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="8" y="39" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="12" y="7" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="2" y="17" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="32" y="28" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="52" y="7" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="2" y="44" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="48" y="14" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="42" y="6" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="2" y="19" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="36" y="2" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="7" y="30" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="56" y="56" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="42" y="14" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="58" y="51" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="7" y="47" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="7" y="0" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="16" y="29" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="61" y="59" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="15" y="27" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="10" y="17" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="13" y="24" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="5" y="7" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="40" y="49" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="6" y="42" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="30" y="26" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="48" y="19" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="58" y="17" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="56" y="33" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="58" y="61" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="58" y="53" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="21" y="50" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="63" y="23" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="36" y="5" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="58" y="31" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="61" y="27" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="35" y="31" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="43" y="47" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="55" y="57" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="40" y="3" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="58" y="31" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect></svg>`,
  `<svg id="5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 64 64" fill="#000"><rect x="0" y="0" width="64" height="64" fill="#000"></rect><rect x="11" y="26" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="44" y="11" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="27" y="51" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="3" y="9" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="27" y="28" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="61" y="27" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="26" y="38" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="57" y="19" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="59" y="32" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="19" y="62" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="0" y="4" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="2" y="57" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="45" y="20" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="24" y="63" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="3" y="62" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="6" y="51" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="4" y="13" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="42" y="19" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="15" y="48" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="53" y="42" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="28" y="14" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="33" y="12" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="11" y="31" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="5" y="17" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="12" y="58" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="21" y="8" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="44" y="13" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="34" y="29" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="8" y="0" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="12" y="35" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="34" y="25" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="52" y="50" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="55" y="35" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="25" y="5" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="39" y="44" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="54" y="16" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="27" y="42" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="36" y="37" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="63" y="38" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="38" y="14" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="17" y="40" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="59" y="0" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="5" y="52" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="2" y="60" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="53" y="55" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="57" y="57" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="10" y="45" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="47" y="51" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="20" y="28" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="8" y="7" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="12" y="43" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="2" y="44" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="32" y="20" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="52" y="39" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="2" y="55" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="48" y="57" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="42" y="2" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="2" y="12" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="36" y="9" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="7" y="11" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="56" y="52" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="42" y="24" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="58" y="27" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="7" y="38" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="7" y="16" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="16" y="21" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="61" y="55" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="15" y="2" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="45" y="36" width="1" height="1" fill="#FFE790" opacity="1"></rect></svg>`,
  `<svg id="19" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 64 64" fill="#000"><rect x="0" y="0" width="64" height="64" fill="#000"></rect><rect x="24" y="26" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="29" y="24" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="29" y="43" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="36" y="28" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="57" y="36" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="42" y="8" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="57" y="61" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="18" y="18" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="3" y="2" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="63" y="14" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="63" y="38" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="5" y="22" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="24" y="4" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="4" y="61" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="54" y="27" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="53" y="55" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="7" y="25" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="1" y="17" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="14" y="12" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="4" y="34" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="26" y="21" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="34" y="21" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="23" y="58" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="19" y="29" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="45" y="22" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="11" y="38" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="4" y="40" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="58" y="57" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="60" y="5" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="8" y="2" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="5" y="59" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="60" y="9" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="51" y="52" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="58" y="60" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="5" y="14" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="10" y="49" width="1" height="1" fill="#7DD0FF" opacity="1"></rect><rect x="11" y="36" width="1" height="1" fill="#FFE790" opacity="1"></rect></svg>`,
  `<svg id="27" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 64 64" fill="#000"><rect x="0" y="0" width="64" height="64" fill="#000"></rect><rect x="26" y="26" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="16" y="26" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="2" y="45" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="26" y="47" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="28" y="5" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="1" y="28" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="15" y="1" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="49" y="4" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="38" y="42" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="46" y="42" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="6" y="28" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="29" y="17" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="9" y="60" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="63" y="18" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="35" y="53" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="27" y="51" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="60" y="47" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="42" y="49" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="5" y="57" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="23" y="50" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="45" y="28" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="15" y="26" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="52" y="18" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="20" y="36" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="50" y="29" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="36" y="55" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="52" y="17" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="22" y="26" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="31" y="11" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="25" y="56" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="4" y="21" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="48" y="2" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="59" y="55" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="37" y="10" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="59" y="29" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="63" y="57" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="21" y="7" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="30" y="60" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="40" y="26" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="3" y="14" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="9" y="49" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="40" y="57" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="5" y="12" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="20" y="20" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="42" y="12" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="48" y="46" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="33" y="4" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="15" y="27" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="43" y="13" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="45" y="31" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="20" y="6" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="21" y="24" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="3" y="36" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="22" y="23" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="44" y="46" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="61" y="23" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="25" y="51" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="44" y="61" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="61" y="56" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="40" y="23" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="20" y="18" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="62" y="43" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="52" y="46" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="8" y="36" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="14" y="55" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="49" y="4" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="40" y="25" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="47" y="47" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="0" y="9" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="15" y="9" width="1" height="1" fill="#FF8D8D" opacity="1"></rect></svg>`,
];

let svgs = [];
let testCount = 8;

const genTests = new Promise((resolve) => {
  for (let i = 0; i < testCount; i++) {
    svgs.push(testData[getRandom(0, testData.length - 1)]);
  }
  resolve();
});

genTests.then(handleFunctions);

async function handleFunctions() {
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
    width: window.innerWidth,
    height: window.innerHeight,
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