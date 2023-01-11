(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nr="148",Fn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Mn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ba=0,Xr=1,Ga=2,oa=1,Va=2,ri=3,dn=0,Te=1,Or=2,fi=3,$e=0,Bn=1,qr=2,Yr=3,jr=4,ka=5,Un=100,Ha=101,Wa=102,Zr=103,$r=104,Xa=200,qa=201,Ya=202,ja=203,la=204,ca=205,Za=206,$a=207,Ka=208,Ja=209,Qa=210,to=0,eo=1,no=2,Er=3,io=4,ro=5,so=6,ao=7,ha=0,oo=1,lo=2,Xe=0,co=1,ho=2,uo=3,fo=4,po=5,ua=300,Vn=301,kn=302,Tr=303,Ar=304,zi=306,Cr=1e3,De=1001,Lr=1002,ue=1003,Kr=1004,Xi=1005,Se=1006,mo=1007,oi=1008,pn=1009,go=1010,_o=1011,fa=1012,xo=1013,ln=1014,cn=1015,li=1016,yo=1017,vo=1018,Gn=1020,Fo=1021,Mo=1022,Pe=1023,wo=1024,bo=1025,hn=1026,Hn=1027,So=1028,Eo=1029,To=1030,Ao=1031,Co=1033,qi=33776,Yi=33777,ji=33778,Zi=33779,Jr=35840,Qr=35841,ts=35842,es=35843,Lo=36196,ns=37492,is=37496,rs=37808,ss=37809,as=37810,os=37811,ls=37812,cs=37813,hs=37814,us=37815,fs=37816,ds=37817,ps=37818,ms=37819,gs=37820,_s=37821,xs=36492,mn=3e3,Gt=3001,Do=3200,Po=3201,Ro=0,Io=1,Re="srgb",ci="srgb-linear",$i=7680,No=519,ys=35044,vs="300 es",Dr=1035;class yn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ki=Math.PI/180,Fs=180/Math.PI;function hi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ae[s&255]+ae[s>>8&255]+ae[s>>16&255]+ae[s>>24&255]+"-"+ae[t&255]+ae[t>>8&255]+"-"+ae[t>>16&15|64]+ae[t>>24&255]+"-"+ae[e&63|128]+ae[e>>8&255]+"-"+ae[e>>16&255]+ae[e>>24&255]+ae[n&255]+ae[n>>8&255]+ae[n>>16&255]+ae[n>>24&255]).toLowerCase()}function de(s,t,e){return Math.max(t,Math.min(e,s))}function Oo(s,t){return(s%t+t)%t}function Ji(s,t,e){return(1-e)*s+e*t}function Ms(s){return(s&s-1)===0&&s!==0}function Pr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function di(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function _e(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class At{constructor(t=0,e=0){At.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ve{constructor(){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],p=i[0],f=i[3],_=i[6],S=i[1],M=i[4],b=i[7],v=i[2],T=i[5],N=i[8];return r[0]=o*p+a*S+c*v,r[3]=o*f+a*M+c*T,r[6]=o*_+a*b+c*N,r[1]=l*p+h*S+u*v,r[4]=l*f+h*M+u*T,r[7]=l*_+h*b+u*N,r[2]=d*p+m*S+g*v,r[5]=d*f+m*M+g*T,r[8]=d*_+m*b+g*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,m=l*r-o*c,g=e*u+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return t[0]=u*p,t[1]=(i*l-h*n)*p,t[2]=(a*n-i*o)*p,t[3]=d*p,t[4]=(h*e-i*c)*p,t[5]=(i*r-a*e)*p,t[6]=m*p,t[7]=(n*c-l*e)*p,t[8]=(o*e-n*r)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Qi.makeScale(t,e)),this}rotate(t){return this.premultiply(Qi.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qi.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qi=new ve;function da(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Oi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function un(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ri(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const tr={[Re]:{[ci]:un},[ci]:{[Re]:Ri}},ce={legacyMode:!0,get workingColorSpace(){return ci},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.legacyMode||t===e||!t||!e)return s;if(tr[t]&&tr[t][e]!==void 0){const n=tr[t][e];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}},pa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$t={r:0,g:0,b:0},Ae={h:0,s:0,l:0},pi={h:0,s:0,l:0};function er(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function mi(s,t){return t.r=s.r,t.g=s.g,t.b=s.b,t}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ce.workingColorSpace){if(t=Oo(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=er(o,r,t+1/3),this.g=er(o,r,t),this.b=er(o,r,t-1/3)}return ce.toWorkingColorSpace(this,i),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,ce.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,ce.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,h,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,ce.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,ce.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=Re){const n=pa[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=un(t.r),this.g=un(t.g),this.b=un(t.b),this}copyLinearToSRGB(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return ce.fromWorkingColorSpace(mi(this,$t),t),de($t.r*255,0,255)<<16^de($t.g*255,0,255)<<8^de($t.b*255,0,255)<<0}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(mi(this,$t),e);const n=$t.r,i=$t.g,r=$t.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(mi(this,$t),e),t.r=$t.r,t.g=$t.g,t.b=$t.b,t}getStyle(t=Re){return ce.fromWorkingColorSpace(mi(this,$t),t),t!==Re?`color(${t} ${$t.r} ${$t.g} ${$t.b})`:`rgb(${$t.r*255|0},${$t.g*255|0},${$t.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(Ae),Ae.h+=t,Ae.s+=e,Ae.l+=n,this.setHSL(Ae.h,Ae.s,Ae.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ae),t.getHSL(pi);const n=Ji(Ae.h,pi.h,e),i=Ji(Ae.s,pi.s,e),r=Ji(Ae.l,pi.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}kt.NAMES=pa;let wn;class ma{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{wn===void 0&&(wn=Oi("canvas")),wn.width=t.width,wn.height=t.height;const n=wn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=wn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Oi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=un(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(un(e[n]/255)*255):e[n]=un(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class ga{constructor(t=null){this.isSource=!0,this.uuid=hi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(nr(i[o].image)):r.push(nr(i[o]))}else r=nr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function nr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ma.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uo=0;class Fe extends yn{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=De,i=De,r=Se,o=oi,a=Pe,c=pn,l=Fe.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uo++}),this.uuid=hi(),this.name="",this.source=new ga(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ua)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cr:t.x=t.x-Math.floor(t.x);break;case De:t.x=t.x<0?0:1;break;case Lr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cr:t.y=t.y-Math.floor(t.y);break;case De:t.y=t.y<0?0:1;break;case Lr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=ua;Fe.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,i=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],p=c[2],f=c[6],_=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+p)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,b=(m+1)/2,v=(_+1)/2,T=(h+d)/4,N=(u+p)/4,x=(g+f)/4;return M>b&&M>v?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=T/n,r=N/n):b>v?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=T/i,r=x/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=N/r,i=x/r),this.set(n,i,r,e),this}let S=Math.sqrt((f-g)*(f-g)+(u-p)*(u-p)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(f-g)/S,this.y=(u-p)/S,this.z=(d-h)/S,this.w=Math.acos((l+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gn extends yn{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Fe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Se,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ga(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _a extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ue,this.minFilter=ue,this.wrapR=De,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zo extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ue,this.minFilter=ue,this.wrapR=De,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],m=r[o+1],g=r[o+2],p=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=p;return}if(u!==p||c!==d||l!==m||h!==g){let f=1-a;const _=c*d+l*m+h*g+u*p,S=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const v=Math.sqrt(M),T=Math.atan2(v,_*S);f=Math.sin(f*T)/v,a=Math.sin(a*T)/v}const b=a*S;if(c=c*f+d*b,l=l*f+m*b,h=h*f+g*b,u=u*f+p*b,f===1-a){const v=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=v,l*=v,h*=v,u*=v}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*m-l*d,t[e+1]=c*g+h*d+l*u-a*m,t[e+2]=l*g+h*m+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),m=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ws.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ws.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*i-a*n,h=c*n+a*e-r*i,u=c*i+r*n-o*e,d=-r*e-o*n-a*i;return this.x=l*c+d*-r+h*-a-u*-o,this.y=h*c+d*-o+u*-r-l*-a,this.z=u*c+d*-a+l*-o-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ir.copy(this).projectOnVector(t),this.sub(ir)}reflect(t){return this.sub(ir.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ir=new U,ws=new _n;class Xn{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.length;c<l;c+=3){const h=t[c],u=t[c+1],d=t[c+2];h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.count;c<l;c++){const h=t.getX(c),u=t.getY(c),d=t.getZ(c);h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)en.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(en)}else n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox),rr.applyMatrix4(t.matrixWorld),this.union(rr);const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zn),gi.subVectors(this.max,Zn),bn.subVectors(t.a,Zn),Sn.subVectors(t.b,Zn),En.subVectors(t.c,Zn),qe.subVectors(Sn,bn),Ye.subVectors(En,Sn),nn.subVectors(bn,En);let e=[0,-qe.z,qe.y,0,-Ye.z,Ye.y,0,-nn.z,nn.y,qe.z,0,-qe.x,Ye.z,0,-Ye.x,nn.z,0,-nn.x,-qe.y,qe.x,0,-Ye.y,Ye.x,0,-nn.y,nn.x,0];return!sr(e,bn,Sn,En,gi)||(e=[1,0,0,0,1,0,0,0,1],!sr(e,bn,Sn,En,gi))?!1:(_i.crossVectors(qe,Ye),e=[_i.x,_i.y,_i.z],sr(e,bn,Sn,En,gi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return en.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(en).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ze[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ze[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ze[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ze[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ze[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ze[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ze[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ze[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ze),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ze=[new U,new U,new U,new U,new U,new U,new U,new U],en=new U,rr=new Xn,bn=new U,Sn=new U,En=new U,qe=new U,Ye=new U,nn=new U,Zn=new U,gi=new U,_i=new U,rn=new U;function sr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){rn.fromArray(s,r);const a=i.x*Math.abs(rn.x)+i.y*Math.abs(rn.y)+i.z*Math.abs(rn.z),c=t.dot(rn),l=e.dot(rn),h=n.dot(rn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Bo=new Xn,$n=new U,ar=new U;class Ur{constructor(t=new U,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Bo.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$n.subVectors(t,this.center);const e=$n.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector($n,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ar.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($n.copy(t.center).add(ar)),this.expandByPoint($n.copy(t.center).sub(ar))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Be=new U,or=new U,xi=new U,je=new U,lr=new U,yi=new U,cr=new U;class Go{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Be)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Be.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Be.copy(this.direction).multiplyScalar(e).add(this.origin),Be.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){or.copy(t).add(e).multiplyScalar(.5),xi.copy(e).sub(t).normalize(),je.copy(this.origin).sub(or);const r=t.distanceTo(e)*.5,o=-this.direction.dot(xi),a=je.dot(this.direction),c=-je.dot(xi),l=je.lengthSq(),h=Math.abs(1-o*o);let u,d,m,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const p=1/h;u*=p,d*=p,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(xi).multiplyScalar(d).add(or),m}intersectSphere(t,e){Be.subVectors(t.center,this.origin);const n=Be.dot(this.direction),i=Be.dot(Be)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Be)!==null}intersectTriangle(t,e,n,i,r){lr.subVectors(e,t),yi.subVectors(n,t),cr.crossVectors(lr,yi);let o=this.direction.dot(cr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;je.subVectors(this.origin,t);const c=a*this.direction.dot(yi.crossVectors(je,yi));if(c<0)return null;const l=a*this.direction.dot(lr.cross(je));if(l<0||c+l>o)return null;const h=-a*je.dot(cr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,o,a,c,l,h,u,d,m,g,p,f){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=h,_[10]=u,_[14]=d,_[3]=m,_[7]=g,_[11]=p,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Tn.setFromMatrixColumn(t,0).length(),r=1/Tn.setFromMatrixColumn(t,1).length(),o=1/Tn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,m=o*u,g=a*h,p=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=d-p*l,e[9]=-a*c,e[2]=p-d*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,m=c*u,g=l*h,p=l*u;e[0]=d+p*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=p+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,m=c*u,g=l*h,p=l*u;e[0]=d-p*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=p-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,m=o*u,g=a*h,p=a*u;e[0]=c*h,e[4]=g*l-m,e[8]=d*l+p,e[1]=c*u,e[5]=p*l+d,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,m=o*l,g=a*c,p=a*l;e[0]=c*h,e[4]=p-d*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+g,e[10]=d-p*u}else if(t.order==="XZY"){const d=o*c,m=o*l,g=a*c,p=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+p,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=p*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vo,t,ko)}lookAt(t,e,n){const i=this.elements;return xe.subVectors(t,e),xe.lengthSq()===0&&(xe.z=1),xe.normalize(),Ze.crossVectors(n,xe),Ze.lengthSq()===0&&(Math.abs(n.z)===1?xe.x+=1e-4:xe.z+=1e-4,xe.normalize(),Ze.crossVectors(n,xe)),Ze.normalize(),vi.crossVectors(xe,Ze),i[0]=Ze.x,i[4]=vi.x,i[8]=xe.x,i[1]=Ze.y,i[5]=vi.y,i[9]=xe.y,i[2]=Ze.z,i[6]=vi.z,i[10]=xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],p=n[6],f=n[10],_=n[14],S=n[3],M=n[7],b=n[11],v=n[15],T=i[0],N=i[4],x=i[8],A=i[12],I=i[1],Y=i[5],K=i[9],P=i[13],L=i[2],W=i[6],Z=i[10],j=i[14],X=i[3],nt=i[7],Q=i[11],z=i[15];return r[0]=o*T+a*I+c*L+l*X,r[4]=o*N+a*Y+c*W+l*nt,r[8]=o*x+a*K+c*Z+l*Q,r[12]=o*A+a*P+c*j+l*z,r[1]=h*T+u*I+d*L+m*X,r[5]=h*N+u*Y+d*W+m*nt,r[9]=h*x+u*K+d*Z+m*Q,r[13]=h*A+u*P+d*j+m*z,r[2]=g*T+p*I+f*L+_*X,r[6]=g*N+p*Y+f*W+_*nt,r[10]=g*x+p*K+f*Z+_*Q,r[14]=g*A+p*P+f*j+_*z,r[3]=S*T+M*I+b*L+v*X,r[7]=S*N+M*Y+b*W+v*nt,r[11]=S*x+M*K+b*Z+v*Q,r[15]=S*A+M*P+b*j+v*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],p=t[7],f=t[11],_=t[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*m-n*c*m)+p*(+e*c*m-e*l*d+r*o*d-i*o*m+i*l*h-r*c*h)+f*(+e*l*u-e*a*m-r*o*u+n*o*m+r*a*h-n*l*h)+_*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],p=t[13],f=t[14],_=t[15],S=u*f*l-p*d*l+p*c*m-a*f*m-u*c*_+a*d*_,M=g*d*l-h*f*l-g*c*m+o*f*m+h*c*_-o*d*_,b=h*p*l-g*u*l+g*a*m-o*p*m-h*a*_+o*u*_,v=g*u*c-h*p*c-g*a*d+o*p*d+h*a*f-o*u*f,T=e*S+n*M+i*b+r*v;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/T;return t[0]=S*N,t[1]=(p*d*r-u*f*r-p*i*m+n*f*m+u*i*_-n*d*_)*N,t[2]=(a*f*r-p*c*r+p*i*l-n*f*l-a*i*_+n*c*_)*N,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*m-n*c*m)*N,t[4]=M*N,t[5]=(h*f*r-g*d*r+g*i*m-e*f*m-h*i*_+e*d*_)*N,t[6]=(g*c*r-o*f*r-g*i*l+e*f*l+o*i*_-e*c*_)*N,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*m+e*c*m)*N,t[8]=b*N,t[9]=(g*u*r-h*p*r-g*n*m+e*p*m+h*n*_-e*u*_)*N,t[10]=(o*p*r-g*a*r+g*n*l-e*p*l-o*n*_+e*a*_)*N,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*m-e*a*m)*N,t[12]=v*N,t[13]=(h*p*i-g*u*i+g*n*d-e*p*d-h*n*f+e*u*f)*N,t[14]=(g*a*i-o*p*i-g*n*c+e*p*c+o*n*f-e*a*f)*N,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*N,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,m=r*h,g=r*u,p=o*h,f=o*u,_=a*u,S=c*l,M=c*h,b=c*u,v=n.x,T=n.y,N=n.z;return i[0]=(1-(p+_))*v,i[1]=(m+b)*v,i[2]=(g-M)*v,i[3]=0,i[4]=(m-b)*T,i[5]=(1-(d+_))*T,i[6]=(f+S)*T,i[7]=0,i[8]=(g+M)*N,i[9]=(f-S)*N,i[10]=(1-(d+p))*N,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Tn.set(i[0],i[1],i[2]).length();const o=Tn.set(i[4],i[5],i[6]).length(),a=Tn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ce.copy(this);const l=1/r,h=1/o,u=1/a;return Ce.elements[0]*=l,Ce.elements[1]*=l,Ce.elements[2]*=l,Ce.elements[4]*=h,Ce.elements[5]*=h,Ce.elements[6]*=h,Ce.elements[8]*=u,Ce.elements[9]*=u,Ce.elements[10]*=u,e.setFromRotationMatrix(Ce),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o){const a=this.elements,c=2*r/(e-t),l=2*r/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),d=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,r,o){const a=this.elements,c=1/(e-t),l=1/(n-i),h=1/(o-r),u=(e+t)*c,d=(n+i)*l,m=(o+r)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Tn=new U,Ce=new re,Vo=new U(0,0,0),ko=new U(1,1,1),Ze=new U,vi=new U,xe=new U,bs=new re,Ss=new _n;class ui{constructor(t=0,e=0,n=0,i=ui.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-de(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(de(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bs.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bs,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ss.setFromEuler(this),this.setFromQuaternion(Ss,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ui.DefaultOrder="XYZ";ui.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class xa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ho=0;const Es=new U,An=new _n,Ge=new re,Fi=new U,Kn=new U,Wo=new U,Xo=new _n,Ts=new U(1,0,0),As=new U(0,1,0),Cs=new U(0,0,1),qo={type:"added"},Ls={type:"removed"};class pe extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ho++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DefaultUp.clone();const t=new U,e=new ui,n=new _n,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new re},normalMatrix:{value:new ve}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=pe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=pe.DefaultMatrixWorldAutoUpdate,this.layers=new xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return An.setFromAxisAngle(t,e),this.quaternion.multiply(An),this}rotateOnWorldAxis(t,e){return An.setFromAxisAngle(t,e),this.quaternion.premultiply(An),this}rotateX(t){return this.rotateOnAxis(Ts,t)}rotateY(t){return this.rotateOnAxis(As,t)}rotateZ(t){return this.rotateOnAxis(Cs,t)}translateOnAxis(t,e){return Es.copy(t).applyQuaternion(this.quaternion),this.position.add(Es.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ts,t)}translateY(t){return this.translateOnAxis(As,t)}translateZ(t){return this.translateOnAxis(Cs,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ge.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fi.copy(t):Fi.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Kn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ge.lookAt(Kn,Fi,this.up):Ge.lookAt(Fi,Kn,this.up),this.quaternion.setFromRotationMatrix(Ge),i&&(Ge.extractRotation(i.matrixWorld),An.setFromRotationMatrix(Ge),this.quaternion.premultiply(An.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(qo)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ls)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Ls)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Ge.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ge.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ge),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kn,t,Wo),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kn,Xo,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}pe.DefaultUp=new U(0,1,0);pe.DefaultMatrixAutoUpdate=!0;pe.DefaultMatrixWorldAutoUpdate=!0;const Le=new U,Ve=new U,hr=new U,ke=new U,Cn=new U,Ln=new U,Ds=new U,ur=new U,fr=new U,dr=new U;class He{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Le.subVectors(t,e),i.cross(Le);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Le.subVectors(i,e),Ve.subVectors(n,e),hr.subVectors(t,e);const o=Le.dot(Le),a=Le.dot(Ve),c=Le.dot(hr),l=Ve.dot(Ve),h=Ve.dot(hr),u=o*l-a*a;if(u===0)return r.set(-2,-1,-1);const d=1/u,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ke),ke.x>=0&&ke.y>=0&&ke.x+ke.y<=1}static getUV(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,ke),c.set(0,0),c.addScaledVector(r,ke.x),c.addScaledVector(o,ke.y),c.addScaledVector(a,ke.z),c}static isFrontFacing(t,e,n,i){return Le.subVectors(n,e),Ve.subVectors(t,e),Le.cross(Ve).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Le.subVectors(this.c,this.b),Ve.subVectors(this.a,this.b),Le.cross(Ve).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return He.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return He.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return He.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return He.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return He.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Cn.subVectors(i,n),Ln.subVectors(r,n),ur.subVectors(t,n);const c=Cn.dot(ur),l=Ln.dot(ur);if(c<=0&&l<=0)return e.copy(n);fr.subVectors(t,i);const h=Cn.dot(fr),u=Ln.dot(fr);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Cn,o);dr.subVectors(t,r);const m=Cn.dot(dr),g=Ln.dot(dr);if(g>=0&&m<=g)return e.copy(r);const p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ln,a);const f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return Ds.subVectors(r,i),a=(u-h)/(u-h+(m-g)),e.copy(i).addScaledVector(Ds,a);const _=1/(f+p+d);return o=p*_,a=d*_,e.copy(n).addScaledVector(Cn,o).addScaledVector(Ln,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Yo=0;class Bi extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yo++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=Bn,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=la,this.blendDst=ca,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=No,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bn&&(n.blending=this.blending),this.side!==dn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class zr extends Bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Yt=new U,Mi=new At;class Ne{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ys,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mi.fromBufferAttribute(this,e),Mi.applyMatrix3(t),this.setXY(e,Mi.x,Mi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.applyMatrix3(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.applyMatrix4(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.applyNormalMatrix(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.transformDirection(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=di(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=di(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=di(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=di(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),i=_e(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),i=_e(i,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ys&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ya extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class va extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fn extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}}let jo=0;const be=new re,pr=new pe,Dn=new U,ye=new Xn,Jn=new Xn,ne=new U;class vn extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jo++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(da(t)?va:ya)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ve().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return be.makeRotationFromQuaternion(t),this.applyMatrix4(be),this}rotateX(t){return be.makeRotationX(t),this.applyMatrix4(be),this}rotateY(t){return be.makeRotationY(t),this.applyMatrix4(be),this}rotateZ(t){return be.makeRotationZ(t),this.applyMatrix4(be),this}translate(t,e,n){return be.makeTranslation(t,e,n),this.applyMatrix4(be),this}scale(t,e,n){return be.makeScale(t,e,n),this.applyMatrix4(be),this}lookAt(t){return pr.lookAt(t),pr.updateMatrix(),this.applyMatrix4(pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dn).negate(),this.translate(Dn.x,Dn.y,Dn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new fn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];ye.setFromBufferAttribute(r),this.morphTargetsRelative?(ne.addVectors(this.boundingBox.min,ye.min),this.boundingBox.expandByPoint(ne),ne.addVectors(this.boundingBox.max,ye.max),this.boundingBox.expandByPoint(ne)):(this.boundingBox.expandByPoint(ye.min),this.boundingBox.expandByPoint(ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Jn.setFromBufferAttribute(a),this.morphTargetsRelative?(ne.addVectors(ye.min,Jn.min),ye.expandByPoint(ne),ne.addVectors(ye.max,Jn.max),ye.expandByPoint(ne)):(ye.expandByPoint(Jn.min),ye.expandByPoint(Jn.max))}ye.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ne.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ne));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ne.fromBufferAttribute(a,l),c&&(Dn.fromBufferAttribute(t,l),ne.add(Dn)),i=Math.max(i,n.distanceToSquared(ne))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let I=0;I<a;I++)l[I]=new U,h[I]=new U;const u=new U,d=new U,m=new U,g=new At,p=new At,f=new At,_=new U,S=new U;function M(I,Y,K){u.fromArray(i,I*3),d.fromArray(i,Y*3),m.fromArray(i,K*3),g.fromArray(o,I*2),p.fromArray(o,Y*2),f.fromArray(o,K*2),d.sub(u),m.sub(u),p.sub(g),f.sub(g);const P=1/(p.x*f.y-f.x*p.y);isFinite(P)&&(_.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(P),S.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(P),l[I].add(_),l[Y].add(_),l[K].add(_),h[I].add(S),h[Y].add(S),h[K].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let I=0,Y=b.length;I<Y;++I){const K=b[I],P=K.start,L=K.count;for(let W=P,Z=P+L;W<Z;W+=3)M(n[W+0],n[W+1],n[W+2])}const v=new U,T=new U,N=new U,x=new U;function A(I){N.fromArray(r,I*3),x.copy(N);const Y=l[I];v.copy(Y),v.sub(N.multiplyScalar(N.dot(Y))).normalize(),T.crossVectors(x,Y);const P=T.dot(h[I])<0?-1:1;c[I*4]=v.x,c[I*4+1]=v.y,c[I*4+2]=v.z,c[I*4+3]=P}for(let I=0,Y=b.length;I<Y;++I){const K=b[I],P=K.start,L=K.count;for(let W=P,Z=P+L;W<Z;W+=3)A(n[W+0]),A(n[W+1]),A(n[W+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),p=t.getX(d+1),f=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,p),o.fromBufferAttribute(e,f),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,f),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ne.fromBufferAttribute(t,e),ne.normalize(),t.setXYZ(e,ne.x,ne.y,ne.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let m=0,g=0;for(let p=0,f=c.length;p<f;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*h;for(let _=0;_<h;_++)d[g++]=l[m++]}return new Ne(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new vn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],m=t(d,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ps=new re,Pn=new Go,mr=new Ur,Qn=new U,ti=new U,ei=new U,gr=new U,wi=new U,bi=new At,Si=new At,Ei=new At,_r=new U,Ti=new U;class We extends pe{constructor(t=new vn,e=new zr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){wi.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(gr.fromBufferAttribute(u,t),o?wi.addScaledVector(gr,h):wi.addScaledVector(gr.sub(e),h))}e.add(wi)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(r),t.ray.intersectsSphere(mr)===!1)||(Ps.copy(r).invert(),Pn.copy(t.ray).applyMatrix4(Ps),n.boundingBox!==null&&Pn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,u=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,g=u.length;m<g;m++){const p=u[m],f=i[p.materialIndex],_=Math.max(p.start,d.start),S=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=_,b=S;M<b;M+=3){const v=a.getX(M),T=a.getX(M+1),N=a.getX(M+2);o=Ai(this,f,t,Pn,l,h,v,T,N),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,e.push(o))}}else{const m=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=m,f=g;p<f;p+=3){const _=a.getX(p),S=a.getX(p+1),M=a.getX(p+2);o=Ai(this,i,t,Pn,l,h,_,S,M),o&&(o.faceIndex=Math.floor(p/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,g=u.length;m<g;m++){const p=u[m],f=i[p.materialIndex],_=Math.max(p.start,d.start),S=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let M=_,b=S;M<b;M+=3){const v=M,T=M+1,N=M+2;o=Ai(this,f,t,Pn,l,h,v,T,N),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,e.push(o))}}else{const m=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let p=m,f=g;p<f;p+=3){const _=p,S=p+1,M=p+2;o=Ai(this,i,t,Pn,l,h,_,S,M),o&&(o.faceIndex=Math.floor(p/3),e.push(o))}}}}function Zo(s,t,e,n,i,r,o,a){let c;if(t.side===Te?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===dn,a),c===null)return null;Ti.copy(a),Ti.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ti);return l<e.near||l>e.far?null:{distance:l,point:Ti.clone(),object:s}}function Ai(s,t,e,n,i,r,o,a,c){s.getVertexPosition(o,Qn),s.getVertexPosition(a,ti),s.getVertexPosition(c,ei);const l=Zo(s,t,e,n,Qn,ti,ei,_r);if(l){i&&(bi.fromBufferAttribute(i,o),Si.fromBufferAttribute(i,a),Ei.fromBufferAttribute(i,c),l.uv=He.getUV(_r,Qn,ti,ei,bi,Si,Ei,new At)),r&&(bi.fromBufferAttribute(r,o),Si.fromBufferAttribute(r,a),Ei.fromBufferAttribute(r,c),l.uv2=He.getUV(_r,Qn,ti,ei,bi,Si,Ei,new At));const h={a:o,b:a,c,normal:new U,materialIndex:0};He.getNormal(Qn,ti,ei,h.normal),l.face=h}return l}class qn extends vn{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new fn(l,3)),this.setAttribute("normal",new fn(h,3)),this.setAttribute("uv",new fn(u,2));function g(p,f,_,S,M,b,v,T,N,x,A){const I=b/N,Y=v/x,K=b/2,P=v/2,L=T/2,W=N+1,Z=x+1;let j=0,X=0;const nt=new U;for(let Q=0;Q<Z;Q++){const z=Q*Y-P;for(let k=0;k<W;k++){const J=k*I-K;nt[p]=J*S,nt[f]=z*M,nt[_]=L,l.push(nt.x,nt.y,nt.z),nt[p]=0,nt[f]=0,nt[_]=T>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(k/N),u.push(1-Q/x),j+=1}}for(let Q=0;Q<x;Q++)for(let z=0;z<N;z++){const k=d+z+W*Q,J=d+z+W*(Q+1),et=d+(z+1)+W*(Q+1),st=d+(z+1)+W*Q;c.push(k,J,st),c.push(J,et,st),X+=6}a.addGroup(m,X,A),m+=X,d+=j}}static fromJSON(t){return new qn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wn(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function he(s){const t={};for(let e=0;e<s.length;e++){const n=Wn(s[e]);for(const i in n)t[i]=n[i]}return t}function $o(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Fa(s){return s.getRenderTarget()===null&&s.outputEncoding===Gt?Re:ci}const Ko={clone:Wn,merge:he};var Jo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends Bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jo,this.fragmentShader=Qo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wn(t.uniforms),this.uniformsGroups=$o(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ma extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ee extends Ma{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ki*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(Ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ki*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Rn=-90,In=1;class tl extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ee(Rn,In,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Ee(Rn,In,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Ee(Rn,In,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Ee(Rn,In,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Ee(Rn,In,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Ee(Rn,In,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,c,l]=this.children,h=t.getRenderTarget(),u=t.toneMapping,d=t.xr.enabled;t.toneMapping=Xe,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class wa extends Fe{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Vn,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class el extends gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new wa(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Se}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new qn(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:Wn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:$e});r.uniforms.tEquirect.value=e;const o=new We(i,r),a=e.minFilter;return e.minFilter===oi&&(e.minFilter=Se),new tl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const xr=new U,nl=new U,il=new ve;class sn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=xr.subVectors(n,e).cross(nl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(xr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||il.getNormalMatrix(t),i=this.coplanarPoint(xr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new Ur,Ci=new U;class ba{constructor(t=new sn,e=new sn,n=new sn,i=new sn,r=new sn,o=new sn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7],d=n[8],m=n[9],g=n[10],p=n[11],f=n[12],_=n[13],S=n[14],M=n[15];return e[0].setComponents(a-i,u-c,p-d,M-f).normalize(),e[1].setComponents(a+i,u+c,p+d,M+f).normalize(),e[2].setComponents(a+r,u+l,p+m,M+_).normalize(),e[3].setComponents(a-r,u-l,p-m,M-_).normalize(),e[4].setComponents(a-o,u-h,p-g,M-S).normalize(),e[5].setComponents(a+o,u+h,p+g,M+S).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Nn)}intersectsSprite(t){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ci.x=i.normal.x>0?t.max.x:t.min.x,Ci.y=i.normal.y>0?t.max.y:t.min.y,Ci.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ci)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sa(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function rl(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,u,d),l.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function r(l,h,u){const d=h.array,m=h.updateRange;s.bindBuffer(u,l),m.count===-1?s.bufferSubData(u,0,d):(e?s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(r(u.buffer,l,h),u.version=l.version)}return{get:o,remove:a,update:c}}class Br extends vn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,m=[],g=[],p=[],f=[];for(let _=0;_<h;_++){const S=_*d-o;for(let M=0;M<l;M++){const b=M*u-r;g.push(b,-S,0),p.push(0,0,1),f.push(M/a),f.push(1-_/c)}}for(let _=0;_<c;_++)for(let S=0;S<a;S++){const M=S+l*_,b=S+l*(_+1),v=S+1+l*(_+1),T=S+1+l*_;m.push(M,b,T),m.push(b,v,T)}this.setIndex(m),this.setAttribute("position",new fn(g,3)),this.setAttribute("normal",new fn(p,3)),this.setAttribute("uv",new fn(f,2))}static fromJSON(t){return new Br(t.width,t.height,t.widthSegments,t.heightSegments)}}var sl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,al=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ol=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ll=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ul="vec3 transformed = vec3( position );",fl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dl=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,pl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ml=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,_l=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ml=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bl=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Sl=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,El=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Al=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Cl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ll=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pl=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Il=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nl=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ol=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ul=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kl=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hl=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ql=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yl=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jl=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Zl=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$l=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kl=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jl=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ql=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,tc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ec=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ic=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,rc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ac=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,oc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,gc=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_c=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,xc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,yc=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,bc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Sc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ec=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Tc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ac=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Lc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ic=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Oc=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Uc=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zc=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Bc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,kc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hc=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jc=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Zc=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,$c=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Kc=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Jc=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Qc=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,th=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,eh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,nh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ih=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ah=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,oh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ch=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,uh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ph=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_h=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Th=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ah=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ch=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ph=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ih=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Nh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Oh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,bt={alphamap_fragment:sl,alphamap_pars_fragment:al,alphatest_fragment:ol,alphatest_pars_fragment:ll,aomap_fragment:cl,aomap_pars_fragment:hl,begin_vertex:ul,beginnormal_vertex:fl,bsdfs:dl,iridescence_fragment:pl,bumpmap_pars_fragment:ml,clipping_planes_fragment:gl,clipping_planes_pars_fragment:_l,clipping_planes_pars_vertex:xl,clipping_planes_vertex:yl,color_fragment:vl,color_pars_fragment:Fl,color_pars_vertex:Ml,color_vertex:wl,common:bl,cube_uv_reflection_fragment:Sl,defaultnormal_vertex:El,displacementmap_pars_vertex:Tl,displacementmap_vertex:Al,emissivemap_fragment:Cl,emissivemap_pars_fragment:Ll,encodings_fragment:Dl,encodings_pars_fragment:Pl,envmap_fragment:Rl,envmap_common_pars_fragment:Il,envmap_pars_fragment:Nl,envmap_pars_vertex:Ol,envmap_physical_pars_fragment:jl,envmap_vertex:Ul,fog_vertex:zl,fog_pars_vertex:Bl,fog_fragment:Gl,fog_pars_fragment:Vl,gradientmap_pars_fragment:kl,lightmap_fragment:Hl,lightmap_pars_fragment:Wl,lights_lambert_fragment:Xl,lights_lambert_pars_fragment:ql,lights_pars_begin:Yl,lights_toon_fragment:Zl,lights_toon_pars_fragment:$l,lights_phong_fragment:Kl,lights_phong_pars_fragment:Jl,lights_physical_fragment:Ql,lights_physical_pars_fragment:tc,lights_fragment_begin:ec,lights_fragment_maps:nc,lights_fragment_end:ic,logdepthbuf_fragment:rc,logdepthbuf_pars_fragment:sc,logdepthbuf_pars_vertex:ac,logdepthbuf_vertex:oc,map_fragment:lc,map_pars_fragment:cc,map_particle_fragment:hc,map_particle_pars_fragment:uc,metalnessmap_fragment:fc,metalnessmap_pars_fragment:dc,morphcolor_vertex:pc,morphnormal_vertex:mc,morphtarget_pars_vertex:gc,morphtarget_vertex:_c,normal_fragment_begin:xc,normal_fragment_maps:yc,normal_pars_fragment:vc,normal_pars_vertex:Fc,normal_vertex:Mc,normalmap_pars_fragment:wc,clearcoat_normal_fragment_begin:bc,clearcoat_normal_fragment_maps:Sc,clearcoat_pars_fragment:Ec,iridescence_pars_fragment:Tc,output_fragment:Ac,packing:Cc,premultiplied_alpha_fragment:Lc,project_vertex:Dc,dithering_fragment:Pc,dithering_pars_fragment:Rc,roughnessmap_fragment:Ic,roughnessmap_pars_fragment:Nc,shadowmap_pars_fragment:Oc,shadowmap_pars_vertex:Uc,shadowmap_vertex:zc,shadowmask_pars_fragment:Bc,skinbase_vertex:Gc,skinning_pars_vertex:Vc,skinning_vertex:kc,skinnormal_vertex:Hc,specularmap_fragment:Wc,specularmap_pars_fragment:Xc,tonemapping_fragment:qc,tonemapping_pars_fragment:Yc,transmission_fragment:jc,transmission_pars_fragment:Zc,uv_pars_fragment:$c,uv_pars_vertex:Kc,uv_vertex:Jc,uv2_pars_fragment:Qc,uv2_pars_vertex:th,uv2_vertex:eh,worldpos_vertex:nh,background_vert:ih,background_frag:rh,backgroundCube_vert:sh,backgroundCube_frag:ah,cube_vert:oh,cube_frag:lh,depth_vert:ch,depth_frag:hh,distanceRGBA_vert:uh,distanceRGBA_frag:fh,equirect_vert:dh,equirect_frag:ph,linedashed_vert:mh,linedashed_frag:gh,meshbasic_vert:_h,meshbasic_frag:xh,meshlambert_vert:yh,meshlambert_frag:vh,meshmatcap_vert:Fh,meshmatcap_frag:Mh,meshnormal_vert:wh,meshnormal_frag:bh,meshphong_vert:Sh,meshphong_frag:Eh,meshphysical_vert:Th,meshphysical_frag:Ah,meshtoon_vert:Ch,meshtoon_frag:Lh,points_vert:Dh,points_frag:Ph,shadow_vert:Rh,shadow_frag:Ih,sprite_vert:Nh,sprite_frag:Oh},rt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ve},uv2Transform:{value:new ve},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ve}}},Ie={basic:{uniforms:he([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:he([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new kt(0)}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:he([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:he([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:he([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new kt(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:he([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:he([rt.points,rt.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:he([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:he([rt.common,rt.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:he([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:he([rt.sprite,rt.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distanceRGBA:{uniforms:he([rt.common,rt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distanceRGBA_vert,fragmentShader:bt.distanceRGBA_frag},shadow:{uniforms:he([rt.lights,rt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};Ie.physical={uniforms:he([Ie.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new At(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const Li={r:0,b:0,g:0};function Uh(s,t,e,n,i,r,o){const a=new kt(0);let c=r===!0?0:1,l,h,u=null,d=0,m=null;function g(f,_){let S=!1,M=_.isScene===!0?_.background:null;M&&M.isTexture&&(M=(_.backgroundBlurriness>0?e:t).get(M));const b=s.xr,v=b.getSession&&b.getSession();v&&v.environmentBlendMode==="additive"&&(M=null),M===null?p(a,c):M&&M.isColor&&(p(M,1),S=!0),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),M&&(M.isCubeTexture||M.mapping===zi)?(h===void 0&&(h=new We(new qn(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Wn(Ie.backgroundCube.uniforms),vertexShader:Ie.backgroundCube.vertexShader,fragmentShader:Ie.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,N,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=M.encoding!==Gt,(u!==M||d!==M.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,m=s.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new We(new Br(2,2),new xn({name:"BackgroundMaterial",uniforms:Wn(Ie.background.uniforms),vertexShader:Ie.background.vertexShader,fragmentShader:Ie.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=M.encoding!==Gt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,m=s.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function p(f,_){f.getRGB(Li,Fa(s)),n.buffers.color.setClear(Li.r,Li.g,Li.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(f,_=1){a.set(f),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,p(a,c)},render:g}}function zh(s,t,e,n){const i=s.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=f(null);let l=c,h=!1;function u(L,W,Z,j,X){let nt=!1;if(o){const Q=p(j,Z,W);l!==Q&&(l=Q,m(l.object)),nt=_(L,j,Z,X),nt&&S(L,j,Z,X)}else{const Q=W.wireframe===!0;(l.geometry!==j.id||l.program!==Z.id||l.wireframe!==Q)&&(l.geometry=j.id,l.program=Z.id,l.wireframe=Q,nt=!0)}X!==null&&e.update(X,34963),(nt||h)&&(h=!1,x(L,W,Z,j),X!==null&&s.bindBuffer(34963,e.get(X).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function p(L,W,Z){const j=Z.wireframe===!0;let X=a[L.id];X===void 0&&(X={},a[L.id]=X);let nt=X[W.id];nt===void 0&&(nt={},X[W.id]=nt);let Q=nt[j];return Q===void 0&&(Q=f(d()),nt[j]=Q),Q}function f(L){const W=[],Z=[],j=[];for(let X=0;X<i;X++)W[X]=0,Z[X]=0,j[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Z,attributeDivisors:j,object:L,attributes:{},index:null}}function _(L,W,Z,j){const X=l.attributes,nt=W.attributes;let Q=0;const z=Z.getAttributes();for(const k in z)if(z[k].location>=0){const et=X[k];let st=nt[k];if(st===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(st=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(st=L.instanceColor)),et===void 0||et.attribute!==st||st&&et.data!==st.data)return!0;Q++}return l.attributesNum!==Q||l.index!==j}function S(L,W,Z,j){const X={},nt=W.attributes;let Q=0;const z=Z.getAttributes();for(const k in z)if(z[k].location>=0){let et=nt[k];et===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(et=L.instanceColor));const st={};st.attribute=et,et&&et.data&&(st.data=et.data),X[k]=st,Q++}l.attributes=X,l.attributesNum=Q,l.index=j}function M(){const L=l.newAttributes;for(let W=0,Z=L.length;W<Z;W++)L[W]=0}function b(L){v(L,0)}function v(L,W){const Z=l.newAttributes,j=l.enabledAttributes,X=l.attributeDivisors;Z[L]=1,j[L]===0&&(s.enableVertexAttribArray(L),j[L]=1),X[L]!==W&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,W),X[L]=W)}function T(){const L=l.newAttributes,W=l.enabledAttributes;for(let Z=0,j=W.length;Z<j;Z++)W[Z]!==L[Z]&&(s.disableVertexAttribArray(Z),W[Z]=0)}function N(L,W,Z,j,X,nt){n.isWebGL2===!0&&(Z===5124||Z===5125)?s.vertexAttribIPointer(L,W,Z,X,nt):s.vertexAttribPointer(L,W,Z,j,X,nt)}function x(L,W,Z,j){if(n.isWebGL2===!1&&(L.isInstancedMesh||j.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();const X=j.attributes,nt=Z.getAttributes(),Q=W.defaultAttributeValues;for(const z in nt){const k=nt[z];if(k.location>=0){let J=X[z];if(J===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),J!==void 0){const et=J.normalized,st=J.itemSize,H=e.get(J);if(H===void 0)continue;const Ct=H.buffer,ft=H.type,xt=H.bytesPerElement;if(J.isInterleavedBufferAttribute){const ut=J.data,Ot=ut.stride,wt=J.offset;if(ut.isInstancedInterleavedBuffer){for(let yt=0;yt<k.locationSize;yt++)v(k.location+yt,ut.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let yt=0;yt<k.locationSize;yt++)b(k.location+yt);s.bindBuffer(34962,Ct);for(let yt=0;yt<k.locationSize;yt++)N(k.location+yt,st/k.locationSize,ft,et,Ot*xt,(wt+st/k.locationSize*yt)*xt)}else{if(J.isInstancedBufferAttribute){for(let ut=0;ut<k.locationSize;ut++)v(k.location+ut,J.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ut=0;ut<k.locationSize;ut++)b(k.location+ut);s.bindBuffer(34962,Ct);for(let ut=0;ut<k.locationSize;ut++)N(k.location+ut,st/k.locationSize,ft,et,st*xt,st/k.locationSize*ut*xt)}}else if(Q!==void 0){const et=Q[z];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(k.location,et);break;case 3:s.vertexAttrib3fv(k.location,et);break;case 4:s.vertexAttrib4fv(k.location,et);break;default:s.vertexAttrib1fv(k.location,et)}}}}T()}function A(){K();for(const L in a){const W=a[L];for(const Z in W){const j=W[Z];for(const X in j)g(j[X].object),delete j[X];delete W[Z]}delete a[L]}}function I(L){if(a[L.id]===void 0)return;const W=a[L.id];for(const Z in W){const j=W[Z];for(const X in j)g(j[X].object),delete j[X];delete W[Z]}delete a[L.id]}function Y(L){for(const W in a){const Z=a[W];if(Z[L.id]===void 0)continue;const j=Z[L.id];for(const X in j)g(j[X].object),delete j[X];delete Z[L.id]}}function K(){P(),h=!0,l!==c&&(l=c,m(l.object))}function P(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:K,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:I,releaseStatesOfProgram:Y,initAttributes:M,enableAttribute:b,disableUnusedAttributes:T}}function Bh(s,t,e,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,h){s.drawArrays(r,l,h),e.update(h,r,1)}function c(l,h,u){if(u===0)return;let d,m;if(i)d=s,m="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,l,h,u),e.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=c}function Gh(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(N){if(N==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(34930),d=s.getParameter(35660),m=s.getParameter(3379),g=s.getParameter(34076),p=s.getParameter(34921),f=s.getParameter(36347),_=s.getParameter(36348),S=s.getParameter(36349),M=d>0,b=o||t.has("OES_texture_float"),v=M&&b,T=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:M,floatFragmentTextures:b,floatVertexTextures:v,maxSamples:T}}function Vh(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new sn,a=new ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,m){const g=u.length!==0||d||n!==0||i;return i=d,e=h(u,m,0),n=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,l()},this.setState=function(u,d,m){const g=u.clippingPlanes,p=u.clipIntersection,f=u.clipShadows,_=s.get(u);if(!i||g===null||g.length===0||r&&!f)r?h(null):l();else{const S=r?0:n,M=S*4;let b=_.clippingState||null;c.value=b,b=h(g,d,M,m);for(let v=0;v!==M;++v)b[v]=e[v];_.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){const p=u!==null?u.length:0;let f=null;if(p!==0){if(f=c.value,g!==!0||f===null){const _=m+p*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(f===null||f.length<_)&&(f=new Float32Array(_));for(let M=0,b=m;M!==p;++M,b+=4)o.copy(u[M]).applyMatrix4(S,a),o.normal.toArray(f,b),f[b+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,f}}function kh(s){let t=new WeakMap;function e(o,a){return a===Tr?o.mapping=Vn:a===Ar&&(o.mapping=kn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Tr||a===Ar)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new el(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Hh extends Ma{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const zn=4,Rs=[.125,.215,.35,.446,.526,.582],on=20,yr=new Hh,Is=new kt;let vr=null;const an=(1+Math.sqrt(5))/2,On=1/an,Ns=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,an,On),new U(0,an,-On),new U(On,0,an),new U(-On,0,an),new U(an,On,0),new U(-an,On,0)];class Os{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){vr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vr),t.scissorTest=!1,Di(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vn||t.mapping===kn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vr=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Se,minFilter:Se,generateMipmaps:!1,type:li,format:Pe,encoding:mn,depthBuffer:!1},i=Us(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Us(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wh(r)),this._blurMaterial=Xh(r,t,e)}return i}_compileMaterial(t){const e=new We(this._lodPlanes[0],t);this._renderer.compile(e,yr)}_sceneToCubeUV(t,e,n,i){const a=new Ee(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Is),h.toneMapping=Xe,h.autoClear=!1;const m=new zr({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),g=new We(new qn,m);let p=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,p=!0):(m.color.copy(Is),p=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(a.up.set(0,c[_],0),a.lookAt(l[_],0,0)):S===1?(a.up.set(0,0,c[_]),a.lookAt(0,l[_],0)):(a.up.set(0,c[_],0),a.lookAt(0,0,l[_]));const M=this._cubeSize;Di(i,S*M,_>2?M:0,M,M),h.setRenderTarget(i),p&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Vn||t.mapping===kn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bs()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zs());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new We(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Di(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,yr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ns[(i-1)%Ns.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new We(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*on-1),p=r/g,f=isFinite(r)?1+Math.floor(h*p):on;f>on&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${on}`);const _=[];let S=0;for(let N=0;N<on;++N){const x=N/p,A=Math.exp(-x*x/2);_.push(A),N===0?S+=A:N<f&&(S+=2*A)}for(let N=0;N<_.length;N++)_[N]=_[N]/S;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const b=this._sizeLods[i],v=3*b*(i>M-zn?i-M+zn:0),T=4*(this._cubeSize-b);Di(e,v,T,3*b,2*b),c.setRenderTarget(e),c.render(u,yr)}}function Wh(s){const t=[],e=[],n=[];let i=s;const r=s-zn+1+Rs.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-zn?c=Rs[o-s+zn-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,p=3,f=2,_=1,S=new Float32Array(p*g*m),M=new Float32Array(f*g*m),b=new Float32Array(_*g*m);for(let T=0;T<m;T++){const N=T%3*2/3-1,x=T>2?0:-1,A=[N,x,0,N+2/3,x,0,N+2/3,x+1,0,N,x,0,N+2/3,x+1,0,N,x+1,0];S.set(A,p*g*T),M.set(d,f*g*T);const I=[T,T,T,T,T,T];b.set(I,_*g*T)}const v=new vn;v.setAttribute("position",new Ne(S,p)),v.setAttribute("uv",new Ne(M,f)),v.setAttribute("faceIndex",new Ne(b,_)),t.push(v),i>zn&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Us(s,t,e){const n=new gn(s,t,e);return n.texture.mapping=zi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Di(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Xh(s,t,e){const n=new Float32Array(on),i=new U(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:on,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$e,depthTest:!1,depthWrite:!1})}function zs(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$e,depthTest:!1,depthWrite:!1})}function Bs(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$e,depthTest:!1,depthWrite:!1})}function Gr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qh(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Tr||c===Ar,h=c===Vn||c===kn;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Os(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Os(s));const d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Yh(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function jh(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],34962);const m=u.morphAttributes;for(const g in m){const p=m[g];for(let f=0,_=p.length;f<_;f++)t.update(p[f],34962)}}function l(u){const d=[],m=u.index,g=u.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let M=0,b=S.length;M<b;M+=3){const v=S[M+0],T=S[M+1],N=S[M+2];d.push(v,T,T,N,N,v)}}else{const S=g.array;p=g.version;for(let M=0,b=S.length/3-1;M<b;M+=3){const v=M+0,T=M+1,N=M+2;d.push(v,T,T,N,N,v)}}const f=new(da(d)?va:ya)(d,1);f.version=p;const _=r.get(u);_&&t.remove(_),r.set(u,f)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Zh(s,t,e,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,m){s.drawElements(r,m,a,d*c),e.update(m,r,1)}function u(d,m,g){if(g===0)return;let p,f;if(i)p=s,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,m,a,d*c,g),e.update(m,r,g)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function $h(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Kh(s,t){return s[0]-t[0]}function Jh(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Qh(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new ie,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u,d){const m=l.morphTargetInfluences;if(t.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=p!==void 0?p.length:0;let _=r.get(h);if(_===void 0||_.count!==f){let Z=function(){L.dispose(),r.delete(h),h.removeEventListener("dispose",Z)};var g=Z;_!==void 0&&_.texture.dispose();const b=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,N=h.morphAttributes.position||[],x=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let I=0;b===!0&&(I=1),v===!0&&(I=2),T===!0&&(I=3);let Y=h.attributes.position.count*I,K=1;Y>t.maxTextureSize&&(K=Math.ceil(Y/t.maxTextureSize),Y=t.maxTextureSize);const P=new Float32Array(Y*K*4*f),L=new _a(P,Y,K,f);L.type=cn,L.needsUpdate=!0;const W=I*4;for(let j=0;j<f;j++){const X=N[j],nt=x[j],Q=A[j],z=Y*K*4*j;for(let k=0;k<X.count;k++){const J=k*W;b===!0&&(o.fromBufferAttribute(X,k),P[z+J+0]=o.x,P[z+J+1]=o.y,P[z+J+2]=o.z,P[z+J+3]=0),v===!0&&(o.fromBufferAttribute(nt,k),P[z+J+4]=o.x,P[z+J+5]=o.y,P[z+J+6]=o.z,P[z+J+7]=0),T===!0&&(o.fromBufferAttribute(Q,k),P[z+J+8]=o.x,P[z+J+9]=o.y,P[z+J+10]=o.z,P[z+J+11]=Q.itemSize===4?o.w:1)}}_={count:f,texture:L,size:new At(Y,K)},r.set(h,_),h.addEventListener("dispose",Z)}let S=0;for(let b=0;b<m.length;b++)S+=m[b];const M=h.morphTargetsRelative?1:1-S;d.getUniforms().setValue(s,"morphTargetBaseInfluence",M),d.getUniforms().setValue(s,"morphTargetInfluences",m),d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let f=n[h.id];if(f===void 0||f.length!==p){f=[];for(let v=0;v<p;v++)f[v]=[v,0];n[h.id]=f}for(let v=0;v<p;v++){const T=f[v];T[0]=v,T[1]=m[v]}f.sort(Jh);for(let v=0;v<8;v++)v<p&&f[v][1]?(a[v][0]=f[v][0],a[v][1]=f[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Kh);const _=h.morphAttributes.position,S=h.morphAttributes.normal;let M=0;for(let v=0;v<8;v++){const T=a[v],N=T[0],x=T[1];N!==Number.MAX_SAFE_INTEGER&&x?(_&&h.getAttribute("morphTarget"+v)!==_[N]&&h.setAttribute("morphTarget"+v,_[N]),S&&h.getAttribute("morphNormal"+v)!==S[N]&&h.setAttribute("morphNormal"+v,S[N]),i[v]=x,M+=x):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),S&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const b=h.morphTargetsRelative?1:1-M;d.getUniforms().setValue(s,"morphTargetBaseInfluence",b),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function tu(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);return i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const Ea=new Fe,Ta=new _a,Aa=new zo,Ca=new wa,Gs=[],Vs=[],ks=new Float32Array(16),Hs=new Float32Array(9),Ws=new Float32Array(4);function Yn(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Gs[i];if(r===void 0&&(r=new Float32Array(i),Gs[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Kt(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Jt(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Gi(s,t){let e=Vs[t];e===void 0&&(e=new Int32Array(t),Vs[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function eu(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function nu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Kt(e,t))return;s.uniform2fv(this.addr,t),Jt(e,t)}}function iu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Kt(e,t))return;s.uniform3fv(this.addr,t),Jt(e,t)}}function ru(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Kt(e,t))return;s.uniform4fv(this.addr,t),Jt(e,t)}}function su(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Kt(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Jt(e,t)}else{if(Kt(e,n))return;Ws.set(n),s.uniformMatrix2fv(this.addr,!1,Ws),Jt(e,n)}}function au(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Kt(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Jt(e,t)}else{if(Kt(e,n))return;Hs.set(n),s.uniformMatrix3fv(this.addr,!1,Hs),Jt(e,n)}}function ou(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Kt(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Jt(e,t)}else{if(Kt(e,n))return;ks.set(n),s.uniformMatrix4fv(this.addr,!1,ks),Jt(e,n)}}function lu(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function cu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Kt(e,t))return;s.uniform2iv(this.addr,t),Jt(e,t)}}function hu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Kt(e,t))return;s.uniform3iv(this.addr,t),Jt(e,t)}}function uu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Kt(e,t))return;s.uniform4iv(this.addr,t),Jt(e,t)}}function fu(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function du(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Kt(e,t))return;s.uniform2uiv(this.addr,t),Jt(e,t)}}function pu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Kt(e,t))return;s.uniform3uiv(this.addr,t),Jt(e,t)}}function mu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Kt(e,t))return;s.uniform4uiv(this.addr,t),Jt(e,t)}}function gu(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Ea,i)}function _u(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Aa,i)}function xu(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ca,i)}function yu(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ta,i)}function vu(s){switch(s){case 5126:return eu;case 35664:return nu;case 35665:return iu;case 35666:return ru;case 35674:return su;case 35675:return au;case 35676:return ou;case 5124:case 35670:return lu;case 35667:case 35671:return cu;case 35668:case 35672:return hu;case 35669:case 35673:return uu;case 5125:return fu;case 36294:return du;case 36295:return pu;case 36296:return mu;case 35678:case 36198:case 36298:case 36306:case 35682:return gu;case 35679:case 36299:case 36307:return _u;case 35680:case 36300:case 36308:case 36293:return xu;case 36289:case 36303:case 36311:case 36292:return yu}}function Fu(s,t){s.uniform1fv(this.addr,t)}function Mu(s,t){const e=Yn(t,this.size,2);s.uniform2fv(this.addr,e)}function wu(s,t){const e=Yn(t,this.size,3);s.uniform3fv(this.addr,e)}function bu(s,t){const e=Yn(t,this.size,4);s.uniform4fv(this.addr,e)}function Su(s,t){const e=Yn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Eu(s,t){const e=Yn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Tu(s,t){const e=Yn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Au(s,t){s.uniform1iv(this.addr,t)}function Cu(s,t){s.uniform2iv(this.addr,t)}function Lu(s,t){s.uniform3iv(this.addr,t)}function Du(s,t){s.uniform4iv(this.addr,t)}function Pu(s,t){s.uniform1uiv(this.addr,t)}function Ru(s,t){s.uniform2uiv(this.addr,t)}function Iu(s,t){s.uniform3uiv(this.addr,t)}function Nu(s,t){s.uniform4uiv(this.addr,t)}function Ou(s,t,e){const n=this.cache,i=t.length,r=Gi(e,i);Kt(n,r)||(s.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Ea,r[o])}function Uu(s,t,e){const n=this.cache,i=t.length,r=Gi(e,i);Kt(n,r)||(s.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Aa,r[o])}function zu(s,t,e){const n=this.cache,i=t.length,r=Gi(e,i);Kt(n,r)||(s.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ca,r[o])}function Bu(s,t,e){const n=this.cache,i=t.length,r=Gi(e,i);Kt(n,r)||(s.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Ta,r[o])}function Gu(s){switch(s){case 5126:return Fu;case 35664:return Mu;case 35665:return wu;case 35666:return bu;case 35674:return Su;case 35675:return Eu;case 35676:return Tu;case 5124:case 35670:return Au;case 35667:case 35671:return Cu;case 35668:case 35672:return Lu;case 35669:case 35673:return Du;case 5125:return Pu;case 36294:return Ru;case 36295:return Iu;case 36296:return Nu;case 35678:case 36198:case 36298:case 36306:case 35682:return Ou;case 35679:case 36299:case 36307:return Uu;case 35680:case 36300:case 36308:case 36293:return zu;case 36289:case 36303:case 36311:case 36292:return Bu}}class Vu{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=vu(e.type)}}class ku{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Gu(e.type)}}class Hu{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Fr=/(\w+)(\])?(\[|\.)?/g;function Xs(s,t){s.seq.push(t),s.map[t.id]=t}function Wu(s,t,e){const n=s.name,i=n.length;for(Fr.lastIndex=0;;){const r=Fr.exec(n),o=Fr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Xs(e,l===void 0?new Vu(a,s,t):new ku(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Hu(a),Xs(e,u)),e=u}}}class Ii{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Wu(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function qs(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let Xu=0;function qu(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Yu(s){switch(s){case mn:return["Linear","( value )"];case Gt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Ys(s,t,e){const n=s.getShaderParameter(t,35713),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+qu(s.getShaderSource(t),o)}else return i}function ju(s,t){const e=Yu(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Zu(s,t){let e;switch(t){case co:e="Linear";break;case ho:e="Reinhard";break;case uo:e="OptimizedCineon";break;case fo:e="ACESFilmic";break;case po:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $u(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(si).join(`
`)}function Ku(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ju(s,t){const e={},n=s.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function si(s){return s!==""}function js(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zs(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Qu=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rr(s){return s.replace(Qu,tf)}function tf(s,t){const e=bt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Rr(e)}const ef=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $s(s){return s.replace(ef,nf)}function nf(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ks(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function rf(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===oa?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Va?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function sf(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vn:case kn:t="ENVMAP_TYPE_CUBE";break;case zi:t="ENVMAP_TYPE_CUBE_UV";break}return t}function af(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case kn:t="ENVMAP_MODE_REFRACTION";break}return t}function of(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ha:t="ENVMAP_BLENDING_MULTIPLY";break;case oo:t="ENVMAP_BLENDING_MIX";break;case lo:t="ENVMAP_BLENDING_ADD";break}return t}function lf(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function cf(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=rf(e),l=sf(e),h=af(e),u=of(e),d=lf(e),m=e.isWebGL2?"":$u(e),g=Ku(r),p=i.createProgram();let f,_,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=[g].filter(si).join(`
`),f.length>0&&(f+=`
`),_=[m,g].filter(si).join(`
`),_.length>0&&(_+=`
`)):(f=[Ks(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(si).join(`
`),_=[m,Ks(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xe?"#define TONE_MAPPING":"",e.toneMapping!==Xe?bt.tonemapping_pars_fragment:"",e.toneMapping!==Xe?Zu("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",bt.encodings_pars_fragment,ju("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(si).join(`
`)),o=Rr(o),o=js(o,e),o=Zs(o,e),a=Rr(a),a=js(a,e),a=Zs(a,e),o=$s(o),a=$s(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",e.glslVersion===vs?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=S+f+o,b=S+_+a,v=qs(i,35633,M),T=qs(i,35632,b);if(i.attachShader(p,v),i.attachShader(p,T),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const A=i.getProgramInfoLog(p).trim(),I=i.getShaderInfoLog(v).trim(),Y=i.getShaderInfoLog(T).trim();let K=!0,P=!0;if(i.getProgramParameter(p,35714)===!1){K=!1;const L=Ys(i,v,"vertex"),W=Ys(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+L+`
`+W)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(I===""||Y==="")&&(P=!1);P&&(this.diagnostics={runnable:K,programLog:A,vertexShader:{log:I,prefix:f},fragmentShader:{log:Y,prefix:_}})}i.deleteShader(v),i.deleteShader(T);let N;this.getUniforms=function(){return N===void 0&&(N=new Ii(i,p)),N};let x;return this.getAttributes=function(){return x===void 0&&(x=Ju(i,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=Xu++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=T,this}let hf=0;class uf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ff(t),e.set(t,n)),n}}class ff{constructor(t){this.id=hf++,this.code=t,this.usedTimes=0}}function df(s,t,e,n,i,r,o){const a=new xa,c=new uf,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,A,I,Y,K){const P=Y.fog,L=K.geometry,W=x.isMeshStandardMaterial?Y.environment:null,Z=(x.isMeshStandardMaterial?e:t).get(x.envMap||W),j=Z&&Z.mapping===zi?Z.image.height:null,X=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const nt=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Q=nt!==void 0?nt.length:0;let z=0;L.morphAttributes.position!==void 0&&(z=1),L.morphAttributes.normal!==void 0&&(z=2),L.morphAttributes.color!==void 0&&(z=3);let k,J,et,st;if(X){const Ot=Ie[X];k=Ot.vertexShader,J=Ot.fragmentShader}else k=x.vertexShader,J=x.fragmentShader,c.update(x),et=c.getVertexShaderID(x),st=c.getFragmentShaderID(x);const H=s.getRenderTarget(),Ct=x.alphaTest>0,ft=x.clearcoat>0,xt=x.iridescence>0;return{isWebGL2:h,shaderID:X,shaderName:x.type,vertexShader:k,fragmentShader:J,defines:x.defines,customVertexShaderID:et,customFragmentShaderID:st,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:d,outputEncoding:H===null?s.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:mn,map:!!x.map,matcap:!!x.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:j,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Io,tangentSpaceNormalMap:x.normalMapType===Ro,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Gt,clearcoat:ft,clearcoatMap:ft&&!!x.clearcoatMap,clearcoatRoughnessMap:ft&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ft&&!!x.clearcoatNormalMap,iridescence:xt,iridescenceMap:xt&&!!x.iridescenceMap,iridescenceThicknessMap:xt&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Bn,alphaMap:!!x.alphaMap,alphaTest:Ct,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!L.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!P,useFog:x.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:z,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:Xe,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Or,flipSided:x.side===Te,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)A.push(I),A.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(_(A,x),S(A,x),A.push(s.outputEncoding)),A.push(x.customProgramCacheKey),A.join()}function _(x,A){x.push(A.precision),x.push(A.outputEncoding),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.combine),x.push(A.vertexUvs),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function S(x,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),x.push(a.mask)}function M(x){const A=g[x.type];let I;if(A){const Y=Ie[A];I=Ko.clone(Y.uniforms)}else I=x.uniforms;return I}function b(x,A){let I;for(let Y=0,K=l.length;Y<K;Y++){const P=l[Y];if(P.cacheKey===A){I=P,++I.usedTimes;break}}return I===void 0&&(I=new cf(s,A,x,r),l.push(I)),I}function v(x){if(--x.usedTimes===0){const A=l.indexOf(x);l[A]=l[l.length-1],l.pop(),x.destroy()}}function T(x){c.remove(x)}function N(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:b,releaseProgram:v,releaseShaderCache:T,programs:l,dispose:N}}function pf(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function mf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Js(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Qs(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,m,g,p,f){let _=s[t];return _===void 0?(_={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:p,group:f},s[t]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=m,_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=p,_.group=f),t++,_}function a(u,d,m,g,p,f){const _=o(u,d,m,g,p,f);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function c(u,d,m,g,p,f){const _=o(u,d,m,g,p,f);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function l(u,d){e.length>1&&e.sort(u||mf),n.length>1&&n.sort(d||Js),i.length>1&&i.sort(d||Js)}function h(){for(let u=t,d=s.length;u<d;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function gf(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Qs,s.set(n,[o])):i>=r.length?(o=new Qs,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function _f(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new kt};break;case"SpotLight":e={position:new U,direction:new U,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function xf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let yf=0;function vf(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ff(s,t){const e=new _f,n=xf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new U);const r=new U,o=new re,a=new re;function c(h,u){let d=0,m=0,g=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let p=0,f=0,_=0,S=0,M=0,b=0,v=0,T=0,N=0,x=0;h.sort(vf);const A=u!==!0?Math.PI:1;for(let Y=0,K=h.length;Y<K;Y++){const P=h[Y],L=P.color,W=P.intensity,Z=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=L.r*W*A,m+=L.g*W*A,g+=L.b*W*A;else if(P.isLightProbe)for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],W);else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*A),P.castShadow){const nt=P.shadow,Q=n.get(P);Q.shadowBias=nt.bias,Q.shadowNormalBias=nt.normalBias,Q.shadowRadius=nt.radius,Q.shadowMapSize=nt.mapSize,i.directionalShadow[p]=Q,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=P.shadow.matrix,b++}i.directional[p]=X,p++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(L).multiplyScalar(W*A),X.distance=Z,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[_]=X;const nt=P.shadow;if(P.map&&(i.spotLightMap[N]=P.map,N++,nt.updateMatrices(P),P.castShadow&&x++),i.spotLightMatrix[_]=nt.matrix,P.castShadow){const Q=n.get(P);Q.shadowBias=nt.bias,Q.shadowNormalBias=nt.normalBias,Q.shadowRadius=nt.radius,Q.shadowMapSize=nt.mapSize,i.spotShadow[_]=Q,i.spotShadowMap[_]=j,T++}_++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(L).multiplyScalar(W),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[S]=X,S++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*A),X.distance=P.distance,X.decay=P.decay,P.castShadow){const nt=P.shadow,Q=n.get(P);Q.shadowBias=nt.bias,Q.shadowNormalBias=nt.normalBias,Q.shadowRadius=nt.radius,Q.shadowMapSize=nt.mapSize,Q.shadowCameraNear=nt.camera.near,Q.shadowCameraFar=nt.camera.far,i.pointShadow[f]=Q,i.pointShadowMap[f]=j,i.pointShadowMatrix[f]=P.shadow.matrix,v++}i.point[f]=X,f++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(W*A),X.groundColor.copy(P.groundColor).multiplyScalar(W*A),i.hemi[M]=X,M++}}S>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==p||I.pointLength!==f||I.spotLength!==_||I.rectAreaLength!==S||I.hemiLength!==M||I.numDirectionalShadows!==b||I.numPointShadows!==v||I.numSpotShadows!==T||I.numSpotMaps!==N)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=S,i.point.length=f,i.hemi.length=M,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=T+N-x,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=x,I.directionalLength=p,I.pointLength=f,I.spotLength=_,I.rectAreaLength=S,I.hemiLength=M,I.numDirectionalShadows=b,I.numPointShadows=v,I.numSpotShadows=T,I.numSpotMaps=N,i.version=yf++)}function l(h,u){let d=0,m=0,g=0,p=0,f=0;const _=u.matrixWorldInverse;for(let S=0,M=h.length;S<M;S++){const b=h[S];if(b.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),d++}else if(b.isSpotLight){const v=i.spot[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const v=i.rectArea[p];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(_),a.identity(),o.copy(b.matrixWorld),o.premultiply(_),a.extractRotation(o),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){const v=i.point[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(_),m++}else if(b.isHemisphereLight){const v=i.hemi[f];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(_),f++}}}return{setup:c,setupView:l,state:i}}function ta(s,t){const e=new Ff(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Mf(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new ta(s,t),e.set(r,[c])):o>=a.length?(c=new ta(s,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class wf extends Bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Do,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bf extends Bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Sf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ef=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tf(s,t,e){let n=new ba;const i=new At,r=new At,o=new ie,a=new wf({depthPacking:Po}),c=new bf,l={},h=e.maxTextureSize,u={0:Te,1:dn,2:Or},d=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:Sf,fragmentShader:Ef}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new vn;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new We(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oa,this.render=function(b,v,T){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const N=s.getRenderTarget(),x=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),I=s.state;I.setBlending($e),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let Y=0,K=b.length;Y<K;Y++){const P=b[Y],L=P.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);const W=L.getFrameExtents();if(i.multiply(W),r.copy(L.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,L.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,L.mapSize.y=r.y)),L.map===null){const j=this.type!==ri?{minFilter:ue,magFilter:ue}:{};L.map=new gn(i.x,i.y,j),L.map.texture.name=P.name+".shadowMap",L.camera.updateProjectionMatrix()}s.setRenderTarget(L.map),s.clear();const Z=L.getViewportCount();for(let j=0;j<Z;j++){const X=L.getViewport(j);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),I.viewport(o),L.updateMatrices(P,j),n=L.getFrustum(),M(v,T,L.camera,P,this.type)}L.isPointLightShadow!==!0&&this.type===ri&&_(L,T),L.needsUpdate=!1}f.needsUpdate=!1,s.setRenderTarget(N,x,A)};function _(b,v){const T=t.update(p);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new gn(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(v,null,T,d,p,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(v,null,T,m,p,null)}function S(b,v,T,N,x,A){let I=null;const Y=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(Y!==void 0)I=Y;else if(I=T.isPointLight===!0?c:a,s.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const K=I.uuid,P=v.uuid;let L=l[K];L===void 0&&(L={},l[K]=L);let W=L[P];W===void 0&&(W=I.clone(),L[P]=W),I=W}return I.visible=v.visible,I.wireframe=v.wireframe,A===ri?I.side=v.shadowSide!==null?v.shadowSide:v.side:I.side=v.shadowSide!==null?v.shadowSide:u[v.side],I.alphaMap=v.alphaMap,I.alphaTest=v.alphaTest,I.map=v.map,I.clipShadows=v.clipShadows,I.clippingPlanes=v.clippingPlanes,I.clipIntersection=v.clipIntersection,I.displacementMap=v.displacementMap,I.displacementScale=v.displacementScale,I.displacementBias=v.displacementBias,I.wireframeLinewidth=v.wireframeLinewidth,I.linewidth=v.linewidth,T.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(T.matrixWorld),I.nearDistance=N,I.farDistance=x),I}function M(b,v,T,N,x){if(b.visible===!1)return;if(b.layers.test(v.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===ri)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);const Y=t.update(b),K=b.material;if(Array.isArray(K)){const P=Y.groups;for(let L=0,W=P.length;L<W;L++){const Z=P[L],j=K[Z.materialIndex];if(j&&j.visible){const X=S(b,j,N,T.near,T.far,x);s.renderBufferDirect(T,null,Y,X,b,Z)}}}else if(K.visible){const P=S(b,K,N,T.near,T.far,x);s.renderBufferDirect(T,null,Y,P,b,null)}}const I=b.children;for(let Y=0,K=I.length;Y<K;Y++)M(I[Y],v,T,N,x)}}function Af(s,t,e){const n=e.isWebGL2;function i(){let C=!1;const G=new ie;let $=null;const ct=new ie(0,0,0,0);return{setMask:function(mt){$!==mt&&!C&&(s.colorMask(mt,mt,mt,mt),$=mt)},setLocked:function(mt){C=mt},setClear:function(mt,Ut,te,se,Ke){Ke===!0&&(mt*=se,Ut*=se,te*=se),G.set(mt,Ut,te,se),ct.equals(G)===!1&&(s.clearColor(mt,Ut,te,se),ct.copy(G))},reset:function(){C=!1,$=null,ct.set(-1,0,0,0)}}}function r(){let C=!1,G=null,$=null,ct=null;return{setTest:function(mt){mt?Ct(2929):ft(2929)},setMask:function(mt){G!==mt&&!C&&(s.depthMask(mt),G=mt)},setFunc:function(mt){if($!==mt){switch(mt){case to:s.depthFunc(512);break;case eo:s.depthFunc(519);break;case no:s.depthFunc(513);break;case Er:s.depthFunc(515);break;case io:s.depthFunc(514);break;case ro:s.depthFunc(518);break;case so:s.depthFunc(516);break;case ao:s.depthFunc(517);break;default:s.depthFunc(515)}$=mt}},setLocked:function(mt){C=mt},setClear:function(mt){ct!==mt&&(s.clearDepth(mt),ct=mt)},reset:function(){C=!1,G=null,$=null,ct=null}}}function o(){let C=!1,G=null,$=null,ct=null,mt=null,Ut=null,te=null,se=null,Ke=null;return{setTest:function(Vt){C||(Vt?Ct(2960):ft(2960))},setMask:function(Vt){G!==Vt&&!C&&(s.stencilMask(Vt),G=Vt)},setFunc:function(Vt,Oe,we){($!==Vt||ct!==Oe||mt!==we)&&(s.stencilFunc(Vt,Oe,we),$=Vt,ct=Oe,mt=we)},setOp:function(Vt,Oe,we){(Ut!==Vt||te!==Oe||se!==we)&&(s.stencilOp(Vt,Oe,we),Ut=Vt,te=Oe,se=we)},setLocked:function(Vt){C=Vt},setClear:function(Vt){Ke!==Vt&&(s.clearStencil(Vt),Ke=Vt)},reset:function(){C=!1,G=null,$=null,ct=null,mt=null,Ut=null,te=null,se=null,Ke=null}}}const a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap;let d={},m={},g=new WeakMap,p=[],f=null,_=!1,S=null,M=null,b=null,v=null,T=null,N=null,x=null,A=!1,I=null,Y=null,K=null,P=null,L=null;const W=s.getParameter(35661);let Z=!1,j=0;const X=s.getParameter(7938);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=j>=2);let nt=null,Q={};const z=s.getParameter(3088),k=s.getParameter(2978),J=new ie().fromArray(z),et=new ie().fromArray(k);function st(C,G,$){const ct=new Uint8Array(4),mt=s.createTexture();s.bindTexture(C,mt),s.texParameteri(C,10241,9728),s.texParameteri(C,10240,9728);for(let Ut=0;Ut<$;Ut++)s.texImage2D(G+Ut,0,6408,1,1,0,6408,5121,ct);return mt}const H={};H[3553]=st(3553,3553,1),H[34067]=st(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ct(2929),c.setFunc(Er),Zt(!1),oe(Xr),Ct(2884),Qt($e);function Ct(C){d[C]!==!0&&(s.enable(C),d[C]=!0)}function ft(C){d[C]!==!1&&(s.disable(C),d[C]=!1)}function xt(C,G){return m[C]!==G?(s.bindFramebuffer(C,G),m[C]=G,n&&(C===36009&&(m[36160]=G),C===36160&&(m[36009]=G)),!0):!1}function ut(C,G){let $=p,ct=!1;if(C)if($=g.get(G),$===void 0&&($=[],g.set(G,$)),C.isWebGLMultipleRenderTargets){const mt=C.texture;if($.length!==mt.length||$[0]!==36064){for(let Ut=0,te=mt.length;Ut<te;Ut++)$[Ut]=36064+Ut;$.length=mt.length,ct=!0}}else $[0]!==36064&&($[0]=36064,ct=!0);else $[0]!==1029&&($[0]=1029,ct=!0);ct&&(e.isWebGL2?s.drawBuffers($):t.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function Ot(C){return f!==C?(s.useProgram(C),f=C,!0):!1}const wt={[Un]:32774,[Ha]:32778,[Wa]:32779};if(n)wt[Zr]=32775,wt[$r]=32776;else{const C=t.get("EXT_blend_minmax");C!==null&&(wt[Zr]=C.MIN_EXT,wt[$r]=C.MAX_EXT)}const yt={[Xa]:0,[qa]:1,[Ya]:768,[la]:770,[Qa]:776,[Ka]:774,[Za]:772,[ja]:769,[ca]:771,[Ja]:775,[$a]:773};function Qt(C,G,$,ct,mt,Ut,te,se){if(C===$e){_===!0&&(ft(3042),_=!1);return}if(_===!1&&(Ct(3042),_=!0),C!==ka){if(C!==S||se!==A){if((M!==Un||T!==Un)&&(s.blendEquation(32774),M=Un,T=Un),se)switch(C){case Bn:s.blendFuncSeparate(1,771,1,771);break;case qr:s.blendFunc(1,1);break;case Yr:s.blendFuncSeparate(0,769,0,1);break;case jr:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Bn:s.blendFuncSeparate(770,771,1,771);break;case qr:s.blendFunc(770,1);break;case Yr:s.blendFuncSeparate(0,769,0,1);break;case jr:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}b=null,v=null,N=null,x=null,S=C,A=se}return}mt=mt||G,Ut=Ut||$,te=te||ct,(G!==M||mt!==T)&&(s.blendEquationSeparate(wt[G],wt[mt]),M=G,T=mt),($!==b||ct!==v||Ut!==N||te!==x)&&(s.blendFuncSeparate(yt[$],yt[ct],yt[Ut],yt[te]),b=$,v=ct,N=Ut,x=te),S=C,A=!1}function jt(C,G){C.side===Or?ft(2884):Ct(2884);let $=C.side===Te;G&&($=!$),Zt($),C.blending===Bn&&C.transparent===!1?Qt($e):Qt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);const ct=C.stencilWrite;l.setTest(ct),ct&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),zt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ct(32926):ft(32926)}function Zt(C){I!==C&&(C?s.frontFace(2304):s.frontFace(2305),I=C)}function oe(C){C!==Ba?(Ct(2884),C!==Y&&(C===Xr?s.cullFace(1029):C===Ga?s.cullFace(1028):s.cullFace(1032))):ft(2884),Y=C}function Wt(C){C!==K&&(Z&&s.lineWidth(C),K=C)}function zt(C,G,$){C?(Ct(32823),(P!==G||L!==$)&&(s.polygonOffset(G,$),P=G,L=$)):ft(32823)}function Me(C){C?Ct(3089):ft(3089)}function fe(C){C===void 0&&(C=33984+W-1),nt!==C&&(s.activeTexture(C),nt=C)}function w(C,G,$){$===void 0&&(nt===null?$=33984+W-1:$=nt);let ct=Q[$];ct===void 0&&(ct={type:void 0,texture:void 0},Q[$]=ct),(ct.type!==C||ct.texture!==G)&&(nt!==$&&(s.activeTexture($),nt=$),s.bindTexture(C,G||H[C]),ct.type=C,ct.texture=G)}function y(){const C=Q[nt];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function B(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function it(){try{s.texSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function at(){try{s.texSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function vt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function E(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function D(){try{s.texStorage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function lt(){try{s.texStorage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ht(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ot(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pt(C){J.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),J.copy(C))}function dt(C){et.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),et.copy(C))}function Lt(C,G){let $=u.get(G);$===void 0&&($=new WeakMap,u.set(G,$));let ct=$.get(C);ct===void 0&&(ct=s.getUniformBlockIndex(G,C.name),$.set(C,ct))}function Dt(C,G){const ct=u.get(G).get(C);h.get(G)!==ct&&(s.uniformBlockBinding(G,ct,C.__bindingPointIndex),h.set(G,ct))}function Bt(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},nt=null,Q={},m={},g=new WeakMap,p=[],f=null,_=!1,S=null,M=null,b=null,v=null,T=null,N=null,x=null,A=!1,I=null,Y=null,K=null,P=null,L=null,J.set(0,0,s.canvas.width,s.canvas.height),et.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ct,disable:ft,bindFramebuffer:xt,drawBuffers:ut,useProgram:Ot,setBlending:Qt,setMaterial:jt,setFlipSided:Zt,setCullFace:oe,setLineWidth:Wt,setPolygonOffset:zt,setScissorTest:Me,activeTexture:fe,bindTexture:w,unbindTexture:y,compressedTexImage2D:B,compressedTexImage3D:tt,texImage2D:ht,texImage3D:ot,updateUBOMapping:Lt,uniformBlockBinding:Dt,texStorage2D:D,texStorage3D:lt,texSubImage2D:it,texSubImage3D:at,compressedTexSubImage2D:vt,compressedTexSubImage3D:E,scissor:pt,viewport:dt,reset:Bt}}function Cf(s,t,e,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,y){return _?new OffscreenCanvas(w,y):Oi("canvas")}function M(w,y,B,tt){let it=1;if((w.width>tt||w.height>tt)&&(it=tt/Math.max(w.width,w.height)),it<1||y===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const at=y?Pr:Math.floor,vt=at(it*w.width),E=at(it*w.height);p===void 0&&(p=S(vt,E));const D=B?S(vt,E):p;return D.width=vt,D.height=E,D.getContext("2d").drawImage(w,0,0,vt,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+vt+"x"+E+")."),D}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function b(w){return Ms(w.width)&&Ms(w.height)}function v(w){return a?!1:w.wrapS!==De||w.wrapT!==De||w.minFilter!==ue&&w.minFilter!==Se}function T(w,y){return w.generateMipmaps&&y&&w.minFilter!==ue&&w.minFilter!==Se}function N(w){s.generateMipmap(w)}function x(w,y,B,tt,it=!1){if(a===!1)return y;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let at=y;return y===6403&&(B===5126&&(at=33326),B===5131&&(at=33325),B===5121&&(at=33321)),y===33319&&(B===5126&&(at=33328),B===5131&&(at=33327),B===5121&&(at=33323)),y===6408&&(B===5126&&(at=34836),B===5131&&(at=34842),B===5121&&(at=tt===Gt&&it===!1?35907:32856),B===32819&&(at=32854),B===32820&&(at=32855)),(at===33325||at===33326||at===33327||at===33328||at===34842||at===34836)&&t.get("EXT_color_buffer_float"),at}function A(w,y,B){return T(w,B)===!0||w.isFramebufferTexture&&w.minFilter!==ue&&w.minFilter!==Se?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function I(w){return w===ue||w===Kr||w===Xi?9728:9729}function Y(w){const y=w.target;y.removeEventListener("dispose",Y),P(y),y.isVideoTexture&&g.delete(y)}function K(w){const y=w.target;y.removeEventListener("dispose",K),W(y)}function P(w){const y=n.get(w);if(y.__webglInit===void 0)return;const B=w.source,tt=f.get(B);if(tt){const it=tt[y.__cacheKey];it.usedTimes--,it.usedTimes===0&&L(w),Object.keys(tt).length===0&&f.delete(B)}n.remove(w)}function L(w){const y=n.get(w);s.deleteTexture(y.__webglTexture);const B=w.source,tt=f.get(B);delete tt[y.__cacheKey],o.memory.textures--}function W(w){const y=w.texture,B=n.get(w),tt=n.get(y);if(tt.__webglTexture!==void 0&&(s.deleteTexture(tt.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let it=0;it<6;it++)s.deleteFramebuffer(B.__webglFramebuffer[it]),B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer[it]);else{if(s.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&s.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let it=0;it<B.__webglColorRenderbuffer.length;it++)B.__webglColorRenderbuffer[it]&&s.deleteRenderbuffer(B.__webglColorRenderbuffer[it]);B.__webglDepthRenderbuffer&&s.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let it=0,at=y.length;it<at;it++){const vt=n.get(y[it]);vt.__webglTexture&&(s.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(y[it])}n.remove(y),n.remove(w)}let Z=0;function j(){Z=0}function X(){const w=Z;return w>=c&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+c),Z+=1,w}function nt(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.encoding),y.join()}function Q(w,y){const B=n.get(w);if(w.isVideoTexture&&Me(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const tt=w.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(B,w,y);return}}e.bindTexture(3553,B.__webglTexture,33984+y)}function z(w,y){const B=n.get(w);if(w.version>0&&B.__version!==w.version){ft(B,w,y);return}e.bindTexture(35866,B.__webglTexture,33984+y)}function k(w,y){const B=n.get(w);if(w.version>0&&B.__version!==w.version){ft(B,w,y);return}e.bindTexture(32879,B.__webglTexture,33984+y)}function J(w,y){const B=n.get(w);if(w.version>0&&B.__version!==w.version){xt(B,w,y);return}e.bindTexture(34067,B.__webglTexture,33984+y)}const et={[Cr]:10497,[De]:33071,[Lr]:33648},st={[ue]:9728,[Kr]:9984,[Xi]:9986,[Se]:9729,[mo]:9985,[oi]:9987};function H(w,y,B){if(B?(s.texParameteri(w,10242,et[y.wrapS]),s.texParameteri(w,10243,et[y.wrapT]),(w===32879||w===35866)&&s.texParameteri(w,32882,et[y.wrapR]),s.texParameteri(w,10240,st[y.magFilter]),s.texParameteri(w,10241,st[y.minFilter])):(s.texParameteri(w,10242,33071),s.texParameteri(w,10243,33071),(w===32879||w===35866)&&s.texParameteri(w,32882,33071),(y.wrapS!==De||y.wrapT!==De)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,10240,I(y.magFilter)),s.texParameteri(w,10241,I(y.minFilter)),y.minFilter!==ue&&y.minFilter!==Se&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===ue||y.minFilter!==Xi&&y.minFilter!==oi||y.type===cn&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===li&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(s.texParameterf(w,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Ct(w,y){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",Y));const tt=y.source;let it=f.get(tt);it===void 0&&(it={},f.set(tt,it));const at=nt(y);if(at!==w.__cacheKey){it[at]===void 0&&(it[at]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),it[at].usedTimes++;const vt=it[w.__cacheKey];vt!==void 0&&(it[w.__cacheKey].usedTimes--,vt.usedTimes===0&&L(y)),w.__cacheKey=at,w.__webglTexture=it[at].texture}return B}function ft(w,y,B){let tt=3553;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(tt=35866),y.isData3DTexture&&(tt=32879);const it=Ct(w,y),at=y.source;e.bindTexture(tt,w.__webglTexture,33984+B);const vt=n.get(at);if(at.version!==vt.__version||it===!0){e.activeTexture(33984+B),s.pixelStorei(37440,y.flipY),s.pixelStorei(37441,y.premultiplyAlpha),s.pixelStorei(3317,y.unpackAlignment),s.pixelStorei(37443,0);const E=v(y)&&b(y.image)===!1;let D=M(y.image,E,!1,h);D=fe(y,D);const lt=b(D)||a,ht=r.convert(y.format,y.encoding);let ot=r.convert(y.type),pt=x(y.internalFormat,ht,ot,y.encoding,y.isVideoTexture);H(tt,y,lt);let dt;const Lt=y.mipmaps,Dt=a&&y.isVideoTexture!==!0,Bt=vt.__version===void 0||it===!0,C=A(y,D,lt);if(y.isDepthTexture)pt=6402,a?y.type===cn?pt=36012:y.type===ln?pt=33190:y.type===Gn?pt=35056:pt=33189:y.type===cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===hn&&pt===6402&&y.type!==fa&&y.type!==ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=ln,ot=r.convert(y.type)),y.format===Hn&&pt===6402&&(pt=34041,y.type!==Gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Gn,ot=r.convert(y.type))),Bt&&(Dt?e.texStorage2D(3553,1,pt,D.width,D.height):e.texImage2D(3553,0,pt,D.width,D.height,0,ht,ot,null));else if(y.isDataTexture)if(Lt.length>0&&lt){Dt&&Bt&&e.texStorage2D(3553,C,pt,Lt[0].width,Lt[0].height);for(let G=0,$=Lt.length;G<$;G++)dt=Lt[G],Dt?e.texSubImage2D(3553,G,0,0,dt.width,dt.height,ht,ot,dt.data):e.texImage2D(3553,G,pt,dt.width,dt.height,0,ht,ot,dt.data);y.generateMipmaps=!1}else Dt?(Bt&&e.texStorage2D(3553,C,pt,D.width,D.height),e.texSubImage2D(3553,0,0,0,D.width,D.height,ht,ot,D.data)):e.texImage2D(3553,0,pt,D.width,D.height,0,ht,ot,D.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Dt&&Bt&&e.texStorage3D(35866,C,pt,Lt[0].width,Lt[0].height,D.depth);for(let G=0,$=Lt.length;G<$;G++)dt=Lt[G],y.format!==Pe?ht!==null?Dt?e.compressedTexSubImage3D(35866,G,0,0,0,dt.width,dt.height,D.depth,ht,dt.data,0,0):e.compressedTexImage3D(35866,G,pt,dt.width,dt.height,D.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?e.texSubImage3D(35866,G,0,0,0,dt.width,dt.height,D.depth,ht,ot,dt.data):e.texImage3D(35866,G,pt,dt.width,dt.height,D.depth,0,ht,ot,dt.data)}else{Dt&&Bt&&e.texStorage2D(3553,C,pt,Lt[0].width,Lt[0].height);for(let G=0,$=Lt.length;G<$;G++)dt=Lt[G],y.format!==Pe?ht!==null?Dt?e.compressedTexSubImage2D(3553,G,0,0,dt.width,dt.height,ht,dt.data):e.compressedTexImage2D(3553,G,pt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?e.texSubImage2D(3553,G,0,0,dt.width,dt.height,ht,ot,dt.data):e.texImage2D(3553,G,pt,dt.width,dt.height,0,ht,ot,dt.data)}else if(y.isDataArrayTexture)Dt?(Bt&&e.texStorage3D(35866,C,pt,D.width,D.height,D.depth),e.texSubImage3D(35866,0,0,0,0,D.width,D.height,D.depth,ht,ot,D.data)):e.texImage3D(35866,0,pt,D.width,D.height,D.depth,0,ht,ot,D.data);else if(y.isData3DTexture)Dt?(Bt&&e.texStorage3D(32879,C,pt,D.width,D.height,D.depth),e.texSubImage3D(32879,0,0,0,0,D.width,D.height,D.depth,ht,ot,D.data)):e.texImage3D(32879,0,pt,D.width,D.height,D.depth,0,ht,ot,D.data);else if(y.isFramebufferTexture){if(Bt)if(Dt)e.texStorage2D(3553,C,pt,D.width,D.height);else{let G=D.width,$=D.height;for(let ct=0;ct<C;ct++)e.texImage2D(3553,ct,pt,G,$,0,ht,ot,null),G>>=1,$>>=1}}else if(Lt.length>0&&lt){Dt&&Bt&&e.texStorage2D(3553,C,pt,Lt[0].width,Lt[0].height);for(let G=0,$=Lt.length;G<$;G++)dt=Lt[G],Dt?e.texSubImage2D(3553,G,0,0,ht,ot,dt):e.texImage2D(3553,G,pt,ht,ot,dt);y.generateMipmaps=!1}else Dt?(Bt&&e.texStorage2D(3553,C,pt,D.width,D.height),e.texSubImage2D(3553,0,0,0,ht,ot,D)):e.texImage2D(3553,0,pt,ht,ot,D);T(y,lt)&&N(tt),vt.__version=at.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function xt(w,y,B){if(y.image.length!==6)return;const tt=Ct(w,y),it=y.source;e.bindTexture(34067,w.__webglTexture,33984+B);const at=n.get(it);if(it.version!==at.__version||tt===!0){e.activeTexture(33984+B),s.pixelStorei(37440,y.flipY),s.pixelStorei(37441,y.premultiplyAlpha),s.pixelStorei(3317,y.unpackAlignment),s.pixelStorei(37443,0);const vt=y.isCompressedTexture||y.image[0].isCompressedTexture,E=y.image[0]&&y.image[0].isDataTexture,D=[];for(let G=0;G<6;G++)!vt&&!E?D[G]=M(y.image[G],!1,!0,l):D[G]=E?y.image[G].image:y.image[G],D[G]=fe(y,D[G]);const lt=D[0],ht=b(lt)||a,ot=r.convert(y.format,y.encoding),pt=r.convert(y.type),dt=x(y.internalFormat,ot,pt,y.encoding),Lt=a&&y.isVideoTexture!==!0,Dt=at.__version===void 0||tt===!0;let Bt=A(y,lt,ht);H(34067,y,ht);let C;if(vt){Lt&&Dt&&e.texStorage2D(34067,Bt,dt,lt.width,lt.height);for(let G=0;G<6;G++){C=D[G].mipmaps;for(let $=0;$<C.length;$++){const ct=C[$];y.format!==Pe?ot!==null?Lt?e.compressedTexSubImage2D(34069+G,$,0,0,ct.width,ct.height,ot,ct.data):e.compressedTexImage2D(34069+G,$,dt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?e.texSubImage2D(34069+G,$,0,0,ct.width,ct.height,ot,pt,ct.data):e.texImage2D(34069+G,$,dt,ct.width,ct.height,0,ot,pt,ct.data)}}}else{C=y.mipmaps,Lt&&Dt&&(C.length>0&&Bt++,e.texStorage2D(34067,Bt,dt,D[0].width,D[0].height));for(let G=0;G<6;G++)if(E){Lt?e.texSubImage2D(34069+G,0,0,0,D[G].width,D[G].height,ot,pt,D[G].data):e.texImage2D(34069+G,0,dt,D[G].width,D[G].height,0,ot,pt,D[G].data);for(let $=0;$<C.length;$++){const mt=C[$].image[G].image;Lt?e.texSubImage2D(34069+G,$+1,0,0,mt.width,mt.height,ot,pt,mt.data):e.texImage2D(34069+G,$+1,dt,mt.width,mt.height,0,ot,pt,mt.data)}}else{Lt?e.texSubImage2D(34069+G,0,0,0,ot,pt,D[G]):e.texImage2D(34069+G,0,dt,ot,pt,D[G]);for(let $=0;$<C.length;$++){const ct=C[$];Lt?e.texSubImage2D(34069+G,$+1,0,0,ot,pt,ct.image[G]):e.texImage2D(34069+G,$+1,dt,ot,pt,ct.image[G])}}}T(y,ht)&&N(34067),at.__version=it.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function ut(w,y,B,tt,it){const at=r.convert(B.format,B.encoding),vt=r.convert(B.type),E=x(B.internalFormat,at,vt,B.encoding);n.get(y).__hasExternalTextures||(it===32879||it===35866?e.texImage3D(it,0,E,y.width,y.height,y.depth,0,at,vt,null):e.texImage2D(it,0,E,y.width,y.height,0,at,vt,null)),e.bindFramebuffer(36160,w),zt(y)?d.framebufferTexture2DMultisampleEXT(36160,tt,it,n.get(B).__webglTexture,0,Wt(y)):(it===3553||it>=34069&&it<=34074)&&s.framebufferTexture2D(36160,tt,it,n.get(B).__webglTexture,0),e.bindFramebuffer(36160,null)}function Ot(w,y,B){if(s.bindRenderbuffer(36161,w),y.depthBuffer&&!y.stencilBuffer){let tt=33189;if(B||zt(y)){const it=y.depthTexture;it&&it.isDepthTexture&&(it.type===cn?tt=36012:it.type===ln&&(tt=33190));const at=Wt(y);zt(y)?d.renderbufferStorageMultisampleEXT(36161,at,tt,y.width,y.height):s.renderbufferStorageMultisample(36161,at,tt,y.width,y.height)}else s.renderbufferStorage(36161,tt,y.width,y.height);s.framebufferRenderbuffer(36160,36096,36161,w)}else if(y.depthBuffer&&y.stencilBuffer){const tt=Wt(y);B&&zt(y)===!1?s.renderbufferStorageMultisample(36161,tt,35056,y.width,y.height):zt(y)?d.renderbufferStorageMultisampleEXT(36161,tt,35056,y.width,y.height):s.renderbufferStorage(36161,34041,y.width,y.height),s.framebufferRenderbuffer(36160,33306,36161,w)}else{const tt=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let it=0;it<tt.length;it++){const at=tt[it],vt=r.convert(at.format,at.encoding),E=r.convert(at.type),D=x(at.internalFormat,vt,E,at.encoding),lt=Wt(y);B&&zt(y)===!1?s.renderbufferStorageMultisample(36161,lt,D,y.width,y.height):zt(y)?d.renderbufferStorageMultisampleEXT(36161,lt,D,y.width,y.height):s.renderbufferStorage(36161,D,y.width,y.height)}}s.bindRenderbuffer(36161,null)}function wt(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Q(y.depthTexture,0);const tt=n.get(y.depthTexture).__webglTexture,it=Wt(y);if(y.depthTexture.format===hn)zt(y)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,tt,0,it):s.framebufferTexture2D(36160,36096,3553,tt,0);else if(y.depthTexture.format===Hn)zt(y)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,tt,0,it):s.framebufferTexture2D(36160,33306,3553,tt,0);else throw new Error("Unknown depthTexture format")}function yt(w){const y=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");wt(y.__webglFramebuffer,w)}else if(B){y.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(36160,y.__webglFramebuffer[tt]),y.__webglDepthbuffer[tt]=s.createRenderbuffer(),Ot(y.__webglDepthbuffer[tt],w,!1)}else e.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),Ot(y.__webglDepthbuffer,w,!1);e.bindFramebuffer(36160,null)}function Qt(w,y,B){const tt=n.get(w);y!==void 0&&ut(tt.__webglFramebuffer,w,w.texture,36064,3553),B!==void 0&&yt(w)}function jt(w){const y=w.texture,B=n.get(w),tt=n.get(y);w.addEventListener("dispose",K),w.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=y.version,o.memory.textures++);const it=w.isWebGLCubeRenderTarget===!0,at=w.isWebGLMultipleRenderTargets===!0,vt=b(w)||a;if(it){B.__webglFramebuffer=[];for(let E=0;E<6;E++)B.__webglFramebuffer[E]=s.createFramebuffer()}else{if(B.__webglFramebuffer=s.createFramebuffer(),at)if(i.drawBuffers){const E=w.texture;for(let D=0,lt=E.length;D<lt;D++){const ht=n.get(E[D]);ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&zt(w)===!1){const E=at?y:[y];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let D=0;D<E.length;D++){const lt=E[D];B.__webglColorRenderbuffer[D]=s.createRenderbuffer(),s.bindRenderbuffer(36161,B.__webglColorRenderbuffer[D]);const ht=r.convert(lt.format,lt.encoding),ot=r.convert(lt.type),pt=x(lt.internalFormat,ht,ot,lt.encoding,w.isXRRenderTarget===!0),dt=Wt(w);s.renderbufferStorageMultisample(36161,dt,pt,w.width,w.height),s.framebufferRenderbuffer(36160,36064+D,36161,B.__webglColorRenderbuffer[D])}s.bindRenderbuffer(36161,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Ot(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(36160,null)}}if(it){e.bindTexture(34067,tt.__webglTexture),H(34067,y,vt);for(let E=0;E<6;E++)ut(B.__webglFramebuffer[E],w,y,36064,34069+E);T(y,vt)&&N(34067),e.unbindTexture()}else if(at){const E=w.texture;for(let D=0,lt=E.length;D<lt;D++){const ht=E[D],ot=n.get(ht);e.bindTexture(3553,ot.__webglTexture),H(3553,ht,vt),ut(B.__webglFramebuffer,w,ht,36064+D,3553),T(ht,vt)&&N(3553)}e.unbindTexture()}else{let E=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?E=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(E,tt.__webglTexture),H(E,y,vt),ut(B.__webglFramebuffer,w,y,36064,E),T(y,vt)&&N(E),e.unbindTexture()}w.depthBuffer&&yt(w)}function Zt(w){const y=b(w)||a,B=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let tt=0,it=B.length;tt<it;tt++){const at=B[tt];if(T(at,y)){const vt=w.isWebGLCubeRenderTarget?34067:3553,E=n.get(at).__webglTexture;e.bindTexture(vt,E),N(vt),e.unbindTexture()}}}function oe(w){if(a&&w.samples>0&&zt(w)===!1){const y=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],B=w.width,tt=w.height;let it=16384;const at=[],vt=w.stencilBuffer?33306:36096,E=n.get(w),D=w.isWebGLMultipleRenderTargets===!0;if(D)for(let lt=0;lt<y.length;lt++)e.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+lt,36161,null),e.bindFramebuffer(36160,E.__webglFramebuffer),s.framebufferTexture2D(36009,36064+lt,3553,null,0);e.bindFramebuffer(36008,E.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,E.__webglFramebuffer);for(let lt=0;lt<y.length;lt++){at.push(36064+lt),w.depthBuffer&&at.push(vt);const ht=E.__ignoreDepthValues!==void 0?E.__ignoreDepthValues:!1;if(ht===!1&&(w.depthBuffer&&(it|=256),w.stencilBuffer&&(it|=1024)),D&&s.framebufferRenderbuffer(36008,36064,36161,E.__webglColorRenderbuffer[lt]),ht===!0&&(s.invalidateFramebuffer(36008,[vt]),s.invalidateFramebuffer(36009,[vt])),D){const ot=n.get(y[lt]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,ot,0)}s.blitFramebuffer(0,0,B,tt,0,0,B,tt,it,9728),m&&s.invalidateFramebuffer(36008,at)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),D)for(let lt=0;lt<y.length;lt++){e.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+lt,36161,E.__webglColorRenderbuffer[lt]);const ht=n.get(y[lt]).__webglTexture;e.bindFramebuffer(36160,E.__webglFramebuffer),s.framebufferTexture2D(36009,36064+lt,3553,ht,0)}e.bindFramebuffer(36009,E.__webglMultisampledFramebuffer)}}function Wt(w){return Math.min(u,w.samples)}function zt(w){const y=n.get(w);return a&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Me(w){const y=o.render.frame;g.get(w)!==y&&(g.set(w,y),w.update())}function fe(w,y){const B=w.encoding,tt=w.format,it=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Dr||B!==mn&&(B===Gt?a===!1?t.has("EXT_sRGB")===!0&&tt===Pe?(w.format=Dr,w.minFilter=Se,w.generateMipmaps=!1):y=ma.sRGBToLinear(y):(tt!==Pe||it!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),y}this.allocateTextureUnit=X,this.resetTextureUnits=j,this.setTexture2D=Q,this.setTexture2DArray=z,this.setTexture3D=k,this.setTextureCube=J,this.rebindTextures=Qt,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=zt}function Lf(s,t,e){const n=e.isWebGL2;function i(r,o=null){let a;if(r===pn)return 5121;if(r===yo)return 32819;if(r===vo)return 32820;if(r===go)return 5120;if(r===_o)return 5122;if(r===fa)return 5123;if(r===xo)return 5124;if(r===ln)return 5125;if(r===cn)return 5126;if(r===li)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Fo)return 6406;if(r===Pe)return 6408;if(r===wo)return 6409;if(r===bo)return 6410;if(r===hn)return 6402;if(r===Hn)return 34041;if(r===Mo)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Dr)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===So)return 6403;if(r===Eo)return 36244;if(r===To)return 33319;if(r===Ao)return 33320;if(r===Co)return 36249;if(r===qi||r===Yi||r===ji||r===Zi)if(o===Gt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===qi)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Yi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ji)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===qi)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Yi)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ji)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zi)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jr||r===Qr||r===ts||r===es)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Jr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ts)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===es)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lo)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ns||r===is)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ns)return o===Gt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===is)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rs||r===ss||r===as||r===os||r===ls||r===cs||r===hs||r===us||r===fs||r===ds||r===ps||r===ms||r===gs||r===_s)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===rs)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ss)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===as)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===os)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ls)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===cs)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===hs)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===us)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fs)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ds)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ps)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ms)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===gs)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_s)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xs)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===xs)return o===Gt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Gn?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Df extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ai extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pf={type:"move"};class Mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const p of t.hand.values()){const f=e.getJointPose(p,n),_=this._getHandJoint(l,p);f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pf)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ai;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Rf extends Fe{constructor(t,e,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:hn,h!==hn&&h!==Hn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hn&&(n=ln),n===void 0&&h===Hn&&(n=Gn),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ue,this.minFilter=c!==void 0?c:ue,this.flipY=!1,this.generateMipmaps=!1}}class If extends yn{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=null,l=null,h=null,u=null,d=null,m=null;const g=e.getContextAttributes();let p=null,f=null;const _=[],S=[],M=new Set,b=new Map,v=new Ee;v.layers.enable(1),v.viewport=new ie;const T=new Ee;T.layers.enable(2),T.viewport=new ie;const N=[v,T],x=new Df;x.layers.enable(1),x.layers.enable(2);let A=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let k=_[z];return k===void 0&&(k=new Mr,_[z]=k),k.getTargetRaySpace()},this.getControllerGrip=function(z){let k=_[z];return k===void 0&&(k=new Mr,_[z]=k),k.getGripSpace()},this.getHand=function(z){let k=_[z];return k===void 0&&(k=new Mr,_[z]=k),k.getHandSpace()};function Y(z){const k=S.indexOf(z.inputSource);if(k===-1)return;const J=_[k];J!==void 0&&J.dispatchEvent({type:z.type,data:z.inputSource})}function K(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",P);for(let z=0;z<_.length;z++){const k=S[z];k!==null&&(S[z]=null,_[z].disconnect(k))}A=null,I=null,t.setRenderTarget(p),d=null,u=null,h=null,i=null,f=null,Q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",K),i.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const k={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,k),i.updateRenderState({baseLayer:d}),f=new gn(d.framebufferWidth,d.framebufferHeight,{format:Pe,type:pn,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let k=null,J=null,et=null;g.depth&&(et=g.stencil?35056:33190,k=g.stencil?Hn:hn,J=g.stencil?Gn:ln);const st={colorFormat:32856,depthFormat:et,scaleFactor:r};h=new XRWebGLBinding(i,e),u=h.createProjectionLayer(st),i.updateRenderState({layers:[u]}),f=new gn(u.textureWidth,u.textureHeight,{format:Pe,type:pn,depthTexture:new Rf(u.textureWidth,u.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const H=t.properties.get(f);H.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(a),Q.setContext(i),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function P(z){for(let k=0;k<z.removed.length;k++){const J=z.removed[k],et=S.indexOf(J);et>=0&&(S[et]=null,_[et].disconnect(J))}for(let k=0;k<z.added.length;k++){const J=z.added[k];let et=S.indexOf(J);if(et===-1){for(let H=0;H<_.length;H++)if(H>=S.length){S.push(J),et=H;break}else if(S[H]===null){S[H]=J,et=H;break}if(et===-1)break}const st=_[et];st&&st.connect(J)}}const L=new U,W=new U;function Z(z,k,J){L.setFromMatrixPosition(k.matrixWorld),W.setFromMatrixPosition(J.matrixWorld);const et=L.distanceTo(W),st=k.projectionMatrix.elements,H=J.projectionMatrix.elements,Ct=st[14]/(st[10]-1),ft=st[14]/(st[10]+1),xt=(st[9]+1)/st[5],ut=(st[9]-1)/st[5],Ot=(st[8]-1)/st[0],wt=(H[8]+1)/H[0],yt=Ct*Ot,Qt=Ct*wt,jt=et/(-Ot+wt),Zt=jt*-Ot;k.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Zt),z.translateZ(jt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const oe=Ct+jt,Wt=ft+jt,zt=yt-Zt,Me=Qt+(et-Zt),fe=xt*ft/Wt*oe,w=ut*ft/Wt*oe;z.projectionMatrix.makePerspective(zt,Me,fe,w,oe,Wt)}function j(z,k){k===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(k.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;x.near=T.near=v.near=z.near,x.far=T.far=v.far=z.far,(A!==x.near||I!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,I=x.far);const k=z.parent,J=x.cameras;j(x,k);for(let st=0;st<J.length;st++)j(J[st],k);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),z.matrix.copy(x.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const et=z.children;for(let st=0,H=et.length;st<H;st++)et[st].updateMatrixWorld(!0);J.length===2?Z(x,v,T):x.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(z){u!==null&&(u.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.getPlanes=function(){return M};let X=null;function nt(z,k){if(l=k.getViewerPose(c||o),m=k,l!==null){const J=l.views;d!==null&&(t.setRenderTargetFramebuffer(f,d.framebuffer),t.setRenderTarget(f));let et=!1;J.length!==x.cameras.length&&(x.cameras.length=0,et=!0);for(let st=0;st<J.length;st++){const H=J[st];let Ct=null;if(d!==null)Ct=d.getViewport(H);else{const xt=h.getViewSubImage(u,H);Ct=xt.viewport,st===0&&(t.setRenderTargetTextures(f,xt.colorTexture,u.ignoreDepthValues?void 0:xt.depthStencilTexture),t.setRenderTarget(f))}let ft=N[st];ft===void 0&&(ft=new Ee,ft.layers.enable(st),ft.viewport=new ie,N[st]=ft),ft.matrix.fromArray(H.transform.matrix),ft.projectionMatrix.fromArray(H.projectionMatrix),ft.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),st===0&&x.matrix.copy(ft.matrix),et===!0&&x.cameras.push(ft)}}for(let J=0;J<_.length;J++){const et=S[J],st=_[J];et!==null&&st!==void 0&&st.update(et,k,c||o)}if(X&&X(z,k),k.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:k.detectedPlanes});let J=null;for(const et of M)k.detectedPlanes.has(et)||(J===null&&(J=[]),J.push(et));if(J!==null)for(const et of J)M.delete(et),b.delete(et),n.dispatchEvent({type:"planeremoved",data:et});for(const et of k.detectedPlanes)if(!M.has(et))M.add(et),b.set(et,k.lastChangedTime),n.dispatchEvent({type:"planeadded",data:et});else{const st=b.get(et);et.lastChangedTime>st&&(b.set(et,et.lastChangedTime),n.dispatchEvent({type:"planechanged",data:et}))}}m=null}const Q=new Sa;Q.setAnimationLoop(nt),this.setAnimationLoop=function(z){X=z},this.dispose=function(){}}}function Nf(s,t){function e(p,f){f.color.getRGB(p.fogColor.value,Fa(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,_,S,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),h(p,f)):f.isMeshPhongMaterial?(i(p,f),l(p,f)):f.isMeshStandardMaterial?(i(p,f),u(p,f),f.isMeshPhysicalMaterial&&d(p,f,M)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),g(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(r(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?a(p,f,_,S):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Te&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Te&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const _=t.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const b=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*b}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let S;f.map?S=f.map:f.specularMap?S=f.specularMap:f.displacementMap?S=f.displacementMap:f.normalMap?S=f.normalMap:f.bumpMap?S=f.bumpMap:f.roughnessMap?S=f.roughnessMap:f.metalnessMap?S=f.metalnessMap:f.alphaMap?S=f.alphaMap:f.emissiveMap?S=f.emissiveMap:f.clearcoatMap?S=f.clearcoatMap:f.clearcoatNormalMap?S=f.clearcoatNormalMap:f.clearcoatRoughnessMap?S=f.clearcoatRoughnessMap:f.iridescenceMap?S=f.iridescenceMap:f.iridescenceThicknessMap?S=f.iridescenceThicknessMap:f.specularIntensityMap?S=f.specularIntensityMap:f.specularColorMap?S=f.specularColorMap:f.transmissionMap?S=f.transmissionMap:f.thicknessMap?S=f.thicknessMap:f.sheenColorMap?S=f.sheenColorMap:f.sheenRoughnessMap&&(S=f.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let M;f.aoMap?M=f.aoMap:f.lightMap&&(M=f.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uv2Transform.value.copy(M.matrix))}function r(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,_,S){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=S*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let M;f.map?M=f.map:f.alphaMap&&(M=f.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Te&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Of(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(35375):0;function c(S,M){const b=M.program;n.uniformBlockBinding(S,b)}function l(S,M){let b=i[S.id];b===void 0&&(g(S),b=h(S),i[S.id]=b,S.addEventListener("dispose",f));const v=M.program;n.updateUBOMapping(S,v);const T=t.render.frame;r[S.id]!==T&&(d(S),r[S.id]=T)}function h(S){const M=u();S.__bindingPointIndex=M;const b=s.createBuffer(),v=S.__size,T=S.usage;return s.bindBuffer(35345,b),s.bufferData(35345,v,T),s.bindBuffer(35345,null),s.bindBufferBase(35345,M,b),b}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const M=i[S.id],b=S.uniforms,v=S.__cache;s.bindBuffer(35345,M);for(let T=0,N=b.length;T<N;T++){const x=b[T];if(m(x,T,v)===!0){const A=x.__offset,I=Array.isArray(x.value)?x.value:[x.value];let Y=0;for(let K=0;K<I.length;K++){const P=I[K],L=p(P);typeof P=="number"?(x.__data[0]=P,s.bufferSubData(35345,A+Y,x.__data)):P.isMatrix3?(x.__data[0]=P.elements[0],x.__data[1]=P.elements[1],x.__data[2]=P.elements[2],x.__data[3]=P.elements[0],x.__data[4]=P.elements[3],x.__data[5]=P.elements[4],x.__data[6]=P.elements[5],x.__data[7]=P.elements[0],x.__data[8]=P.elements[6],x.__data[9]=P.elements[7],x.__data[10]=P.elements[8],x.__data[11]=P.elements[0]):(P.toArray(x.__data,Y),Y+=L.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,A,x.__data)}}s.bindBuffer(35345,null)}function m(S,M,b){const v=S.value;if(b[M]===void 0){if(typeof v=="number")b[M]=v;else{const T=Array.isArray(v)?v:[v],N=[];for(let x=0;x<T.length;x++)N.push(T[x].clone());b[M]=N}return!0}else if(typeof v=="number"){if(b[M]!==v)return b[M]=v,!0}else{const T=Array.isArray(b[M])?b[M]:[b[M]],N=Array.isArray(v)?v:[v];for(let x=0;x<T.length;x++){const A=T[x];if(A.equals(N[x])===!1)return A.copy(N[x]),!0}}return!1}function g(S){const M=S.uniforms;let b=0;const v=16;let T=0;for(let N=0,x=M.length;N<x;N++){const A=M[N],I={boundary:0,storage:0},Y=Array.isArray(A.value)?A.value:[A.value];for(let K=0,P=Y.length;K<P;K++){const L=Y[K],W=p(L);I.boundary+=W.boundary,I.storage+=W.storage}if(A.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=b,N>0){T=b%v;const K=v-T;T!==0&&K-I.boundary<0&&(b+=v-T,A.__offset=b)}b+=I.storage}return T=b%v,T>0&&(b+=v-T),S.__size=b,S.__cache={},this}function p(S){const M={boundary:0,storage:0};return typeof S=="number"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function f(S){const M=S.target;M.removeEventListener("dispose",f);const b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function _(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:c,update:l,dispose:_}}function Uf(){const s=Oi("canvas");return s.style.display="block",s}function La(s={}){this.isWebGLRenderer=!0;const t=s.canvas!==void 0?s.canvas:Uf(),e=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=s.alpha!==void 0?s.alpha:!1;let u=null,d=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=mn,this.physicallyCorrectLights=!1,this.toneMapping=Xe,this.toneMappingExposure=1;const p=this;let f=!1,_=0,S=0,M=null,b=-1,v=null;const T=new ie,N=new ie;let x=null,A=t.width,I=t.height,Y=1,K=null,P=null;const L=new ie(0,0,A,I),W=new ie(0,0,A,I);let Z=!1;const j=new ba;let X=!1,nt=!1,Q=null;const z=new re,k=new At,J=new U,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function st(){return M===null?Y:1}let H=e;function Ct(F,O){for(let V=0;V<F.length;V++){const R=F[V],q=t.getContext(R,O);if(q!==null)return q}return null}try{const F={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nr}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",Lt,!1),H===null){const O=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&O.shift(),H=Ct(O,F),H===null)throw Ct(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let ft,xt,ut,Ot,wt,yt,Qt,jt,Zt,oe,Wt,zt,Me,fe,w,y,B,tt,it,at,vt,E,D,lt;function ht(){ft=new Yh(H),xt=new Gh(H,ft,s),ft.init(xt),E=new Lf(H,ft,xt),ut=new Af(H,ft,xt),Ot=new $h,wt=new pf,yt=new Cf(H,ft,ut,wt,xt,E,Ot),Qt=new kh(p),jt=new qh(p),Zt=new rl(H,xt),D=new zh(H,ft,Zt,xt),oe=new jh(H,Zt,Ot,D),Wt=new tu(H,oe,Zt,Ot),it=new Qh(H,xt,yt),y=new Vh(wt),zt=new df(p,Qt,jt,ft,xt,D,y),Me=new Nf(p,wt),fe=new gf,w=new Mf(ft,xt),tt=new Uh(p,Qt,jt,ut,Wt,h,o),B=new Tf(p,Wt,xt),lt=new Of(H,Ot,xt,ut),at=new Bh(H,ft,Ot,xt),vt=new Zh(H,ft,Ot,xt),Ot.programs=zt.programs,p.capabilities=xt,p.extensions=ft,p.properties=wt,p.renderLists=fe,p.shadowMap=B,p.state=ut,p.info=Ot}ht();const ot=new If(p,H);this.xr=ot,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const F=ft.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=ft.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(F){F!==void 0&&(Y=F,this.setSize(A,I,!1))},this.getSize=function(F){return F.set(A,I)},this.setSize=function(F,O,V){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=F,I=O,t.width=Math.floor(F*Y),t.height=Math.floor(O*Y),V!==!1&&(t.style.width=F+"px",t.style.height=O+"px"),this.setViewport(0,0,F,O)},this.getDrawingBufferSize=function(F){return F.set(A*Y,I*Y).floor()},this.setDrawingBufferSize=function(F,O,V){A=F,I=O,Y=V,t.width=Math.floor(F*V),t.height=Math.floor(O*V),this.setViewport(0,0,F,O)},this.getCurrentViewport=function(F){return F.copy(T)},this.getViewport=function(F){return F.copy(L)},this.setViewport=function(F,O,V,R){F.isVector4?L.set(F.x,F.y,F.z,F.w):L.set(F,O,V,R),ut.viewport(T.copy(L).multiplyScalar(Y).floor())},this.getScissor=function(F){return F.copy(W)},this.setScissor=function(F,O,V,R){F.isVector4?W.set(F.x,F.y,F.z,F.w):W.set(F,O,V,R),ut.scissor(N.copy(W).multiplyScalar(Y).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(F){ut.setScissorTest(Z=F)},this.setOpaqueSort=function(F){K=F},this.setTransparentSort=function(F){P=F},this.getClearColor=function(F){return F.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(F=!0,O=!0,V=!0){let R=0;F&&(R|=16384),O&&(R|=256),V&&(R|=1024),H.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Lt,!1),fe.dispose(),w.dispose(),wt.dispose(),Qt.dispose(),jt.dispose(),Wt.dispose(),D.dispose(),lt.dispose(),zt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",ct),ot.removeEventListener("sessionend",mt),Q&&(Q.dispose(),Q=null),Ut.stop()};function pt(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const F=Ot.autoReset,O=B.enabled,V=B.autoUpdate,R=B.needsUpdate,q=B.type;ht(),Ot.autoReset=F,B.enabled=O,B.autoUpdate=V,B.needsUpdate=R,B.type=q}function Lt(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function Dt(F){const O=F.target;O.removeEventListener("dispose",Dt),Bt(O)}function Bt(F){C(F),wt.remove(F)}function C(F){const O=wt.get(F).programs;O!==void 0&&(O.forEach(function(V){zt.releaseProgram(V)}),F.isShaderMaterial&&zt.releaseShaderCache(F))}this.renderBufferDirect=function(F,O,V,R,q,gt){O===null&&(O=et);const Mt=q.isMesh&&q.matrixWorld.determinant()<0,St=Na(F,O,V,R,q);ut.setMaterial(R,Mt);let Tt=V.index,Nt=1;R.wireframe===!0&&(Tt=oe.getWireframeAttribute(V),Nt=2);const Pt=V.drawRange,Rt=V.attributes.position;let Xt=Pt.start*Nt,me=(Pt.start+Pt.count)*Nt;gt!==null&&(Xt=Math.max(Xt,gt.start*Nt),me=Math.min(me,(gt.start+gt.count)*Nt)),Tt!==null?(Xt=Math.max(Xt,0),me=Math.min(me,Tt.count)):Rt!=null&&(Xt=Math.max(Xt,0),me=Math.min(me,Rt.count));const Ue=me-Xt;if(Ue<0||Ue===1/0)return;D.setup(q,R,St,V,Tt);let Je,qt=at;if(Tt!==null&&(Je=Zt.get(Tt),qt=vt,qt.setIndex(Je)),q.isMesh)R.wireframe===!0?(ut.setLineWidth(R.wireframeLinewidth*st()),qt.setMode(1)):qt.setMode(4);else if(q.isLine){let It=R.linewidth;It===void 0&&(It=1),ut.setLineWidth(It*st()),q.isLineSegments?qt.setMode(1):q.isLineLoop?qt.setMode(2):qt.setMode(3)}else q.isPoints?qt.setMode(0):q.isSprite&&qt.setMode(4);if(q.isInstancedMesh)qt.renderInstances(Xt,Ue,q.count);else if(V.isInstancedBufferGeometry){const It=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Vi=Math.min(V.instanceCount,It);qt.renderInstances(Xt,Ue,Vi)}else qt.render(Xt,Ue)},this.compile=function(F,O){function V(R,q,gt){R.transparent===!0&&R.side===fi?(R.side=Te,R.needsUpdate=!0,we(R,q,gt),R.side=dn,R.needsUpdate=!0,we(R,q,gt),R.side=fi):we(R,q,gt)}d=w.get(F),d.init(),g.push(d),F.traverseVisible(function(R){R.isLight&&R.layers.test(O.layers)&&(d.pushLight(R),R.castShadow&&d.pushShadow(R))}),d.setupLights(p.physicallyCorrectLights),F.traverse(function(R){const q=R.material;if(q)if(Array.isArray(q))for(let gt=0;gt<q.length;gt++){const Mt=q[gt];V(Mt,F,R)}else V(q,F,R)}),g.pop(),d=null};let G=null;function $(F){G&&G(F)}function ct(){Ut.stop()}function mt(){Ut.start()}const Ut=new Sa;Ut.setAnimationLoop($),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(F){G=F,ot.setAnimationLoop(F),F===null?Ut.stop():Ut.start()},ot.addEventListener("sessionstart",ct),ot.addEventListener("sessionend",mt),this.render=function(F,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(O),O=ot.getCamera()),F.isScene===!0&&F.onBeforeRender(p,F,O,M),d=w.get(F,g.length),d.init(),g.push(d),z.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),j.setFromProjectionMatrix(z),nt=this.localClippingEnabled,X=y.init(this.clippingPlanes,nt,O),u=fe.get(F,m.length),u.init(),m.push(u),te(F,O,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(K,P),X===!0&&y.beginShadows();const V=d.state.shadowsArray;if(B.render(V,F,O),X===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(u,F),d.setupLights(p.physicallyCorrectLights),O.isArrayCamera){const R=O.cameras;for(let q=0,gt=R.length;q<gt;q++){const Mt=R[q];se(u,F,Mt,Mt.viewport)}}else se(u,F,O);M!==null&&(yt.updateMultisampleRenderTarget(M),yt.updateRenderTargetMipmap(M)),F.isScene===!0&&F.onAfterRender(p,F,O),D.resetDefaultState(),b=-1,v=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function te(F,O,V,R){if(F.visible===!1)return;if(F.layers.test(O.layers)){if(F.isGroup)V=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(O);else if(F.isLight)d.pushLight(F),F.castShadow&&d.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||j.intersectsSprite(F)){R&&J.setFromMatrixPosition(F.matrixWorld).applyMatrix4(z);const Mt=Wt.update(F),St=F.material;St.visible&&u.push(F,Mt,St,V,J.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(F.isSkinnedMesh&&F.skeleton.frame!==Ot.render.frame&&(F.skeleton.update(),F.skeleton.frame=Ot.render.frame),!F.frustumCulled||j.intersectsObject(F))){R&&J.setFromMatrixPosition(F.matrixWorld).applyMatrix4(z);const Mt=Wt.update(F),St=F.material;if(Array.isArray(St)){const Tt=Mt.groups;for(let Nt=0,Pt=Tt.length;Nt<Pt;Nt++){const Rt=Tt[Nt],Xt=St[Rt.materialIndex];Xt&&Xt.visible&&u.push(F,Mt,Xt,V,J.z,Rt)}}else St.visible&&u.push(F,Mt,St,V,J.z,null)}}const gt=F.children;for(let Mt=0,St=gt.length;Mt<St;Mt++)te(gt[Mt],O,V,R)}function se(F,O,V,R){const q=F.opaque,gt=F.transmissive,Mt=F.transparent;d.setupLightsView(V),gt.length>0&&Ke(q,O,V),R&&ut.viewport(T.copy(R)),q.length>0&&Vt(q,O,V),gt.length>0&&Vt(gt,O,V),Mt.length>0&&Vt(Mt,O,V),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Ke(F,O,V){const R=xt.isWebGL2;Q===null&&(Q=new gn(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")?li:pn,minFilter:oi,samples:R&&r===!0?4:0})),p.getDrawingBufferSize(k),R?Q.setSize(k.x,k.y):Q.setSize(Pr(k.x),Pr(k.y));const q=p.getRenderTarget();p.setRenderTarget(Q),p.clear();const gt=p.toneMapping;p.toneMapping=Xe,Vt(F,O,V),p.toneMapping=gt,yt.updateMultisampleRenderTarget(Q),yt.updateRenderTargetMipmap(Q),p.setRenderTarget(q)}function Vt(F,O,V){const R=O.isScene===!0?O.overrideMaterial:null;for(let q=0,gt=F.length;q<gt;q++){const Mt=F[q],St=Mt.object,Tt=Mt.geometry,Nt=R===null?Mt.material:R,Pt=Mt.group;St.layers.test(V.layers)&&Oe(St,O,V,Tt,Nt,Pt)}}function Oe(F,O,V,R,q,gt){F.onBeforeRender(p,O,V,R,q,gt),F.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),q.onBeforeRender(p,O,V,R,F,gt),q.transparent===!0&&q.side===fi?(q.side=Te,q.needsUpdate=!0,p.renderBufferDirect(V,O,R,q,F,gt),q.side=dn,q.needsUpdate=!0,p.renderBufferDirect(V,O,R,q,F,gt),q.side=fi):p.renderBufferDirect(V,O,R,q,F,gt),F.onAfterRender(p,O,V,R,q,gt)}function we(F,O,V){O.isScene!==!0&&(O=et);const R=wt.get(F),q=d.state.lights,gt=d.state.shadowsArray,Mt=q.state.version,St=zt.getParameters(F,q.state,gt,O,V),Tt=zt.getProgramCacheKey(St);let Nt=R.programs;R.environment=F.isMeshStandardMaterial?O.environment:null,R.fog=O.fog,R.envMap=(F.isMeshStandardMaterial?jt:Qt).get(F.envMap||R.environment),Nt===void 0&&(F.addEventListener("dispose",Dt),Nt=new Map,R.programs=Nt);let Pt=Nt.get(Tt);if(Pt!==void 0){if(R.currentProgram===Pt&&R.lightsStateVersion===Mt)return kr(F,St),Pt}else St.uniforms=zt.getUniforms(F),F.onBuild(V,St,p),F.onBeforeCompile(St,p),Pt=zt.acquireProgram(St,Tt),Nt.set(Tt,Pt),R.uniforms=St.uniforms;const Rt=R.uniforms;(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Rt.clippingPlanes=y.uniform),kr(F,St),R.needsLights=Ua(F),R.lightsStateVersion=Mt,R.needsLights&&(Rt.ambientLightColor.value=q.state.ambient,Rt.lightProbe.value=q.state.probe,Rt.directionalLights.value=q.state.directional,Rt.directionalLightShadows.value=q.state.directionalShadow,Rt.spotLights.value=q.state.spot,Rt.spotLightShadows.value=q.state.spotShadow,Rt.rectAreaLights.value=q.state.rectArea,Rt.ltc_1.value=q.state.rectAreaLTC1,Rt.ltc_2.value=q.state.rectAreaLTC2,Rt.pointLights.value=q.state.point,Rt.pointLightShadows.value=q.state.pointShadow,Rt.hemisphereLights.value=q.state.hemi,Rt.directionalShadowMap.value=q.state.directionalShadowMap,Rt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Rt.spotShadowMap.value=q.state.spotShadowMap,Rt.spotLightMatrix.value=q.state.spotLightMatrix,Rt.spotLightMap.value=q.state.spotLightMap,Rt.pointShadowMap.value=q.state.pointShadowMap,Rt.pointShadowMatrix.value=q.state.pointShadowMatrix);const Xt=Pt.getUniforms(),me=Ii.seqWithValue(Xt.seq,Rt);return R.currentProgram=Pt,R.uniformsList=me,Pt}function kr(F,O){const V=wt.get(F);V.outputEncoding=O.outputEncoding,V.instancing=O.instancing,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Na(F,O,V,R,q){O.isScene!==!0&&(O=et),yt.resetTextureUnits();const gt=O.fog,Mt=R.isMeshStandardMaterial?O.environment:null,St=M===null?p.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:mn,Tt=(R.isMeshStandardMaterial?jt:Qt).get(R.envMap||Mt),Nt=R.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Pt=!!R.normalMap&&!!V.attributes.tangent,Rt=!!V.morphAttributes.position,Xt=!!V.morphAttributes.normal,me=!!V.morphAttributes.color,Ue=R.toneMapped?p.toneMapping:Xe,Je=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,qt=Je!==void 0?Je.length:0,It=wt.get(R),Vi=d.state.lights;if(X===!0&&(nt===!0||F!==v)){const ge=F===v&&R.id===b;y.setState(R,F,ge)}let ee=!1;R.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Vi.state.version||It.outputEncoding!==St||q.isInstancedMesh&&It.instancing===!1||!q.isInstancedMesh&&It.instancing===!0||q.isSkinnedMesh&&It.skinning===!1||!q.isSkinnedMesh&&It.skinning===!0||It.envMap!==Tt||R.fog===!0&&It.fog!==gt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==y.numPlanes||It.numIntersection!==y.numIntersection)||It.vertexAlphas!==Nt||It.vertexTangents!==Pt||It.morphTargets!==Rt||It.morphNormals!==Xt||It.morphColors!==me||It.toneMapping!==Ue||xt.isWebGL2===!0&&It.morphTargetsCount!==qt)&&(ee=!0):(ee=!0,It.__version=R.version);let Qe=It.currentProgram;ee===!0&&(Qe=we(R,O,q));let Hr=!1,jn=!1,ki=!1;const le=Qe.getUniforms(),tn=It.uniforms;if(ut.useProgram(Qe.program)&&(Hr=!0,jn=!0,ki=!0),R.id!==b&&(b=R.id,jn=!0),Hr||v!==F){if(le.setValue(H,"projectionMatrix",F.projectionMatrix),xt.logarithmicDepthBuffer&&le.setValue(H,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),v!==F&&(v=F,jn=!0,ki=!0),R.isShaderMaterial||R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshStandardMaterial||R.envMap){const ge=le.map.cameraPosition;ge!==void 0&&ge.setValue(H,J.setFromMatrixPosition(F.matrixWorld))}(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&le.setValue(H,"isOrthographic",F.isOrthographicCamera===!0),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial||R.isShadowMaterial||q.isSkinnedMesh)&&le.setValue(H,"viewMatrix",F.matrixWorldInverse)}if(q.isSkinnedMesh){le.setOptional(H,q,"bindMatrix"),le.setOptional(H,q,"bindMatrixInverse");const ge=q.skeleton;ge&&(xt.floatVertexTextures?(ge.boneTexture===null&&ge.computeBoneTexture(),le.setValue(H,"boneTexture",ge.boneTexture,yt),le.setValue(H,"boneTextureSize",ge.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Hi=V.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0&&xt.isWebGL2===!0)&&it.update(q,V,R,Qe),(jn||It.receiveShadow!==q.receiveShadow)&&(It.receiveShadow=q.receiveShadow,le.setValue(H,"receiveShadow",q.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(tn.envMap.value=Tt,tn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),jn&&(le.setValue(H,"toneMappingExposure",p.toneMappingExposure),It.needsLights&&Oa(tn,ki),gt&&R.fog===!0&&Me.refreshFogUniforms(tn,gt),Me.refreshMaterialUniforms(tn,R,Y,I,Q),Ii.upload(H,It.uniformsList,tn,yt)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(Ii.upload(H,It.uniformsList,tn,yt),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&le.setValue(H,"center",q.center),le.setValue(H,"modelViewMatrix",q.modelViewMatrix),le.setValue(H,"normalMatrix",q.normalMatrix),le.setValue(H,"modelMatrix",q.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const ge=R.uniformsGroups;for(let Wi=0,za=ge.length;Wi<za;Wi++)if(xt.isWebGL2){const Wr=ge[Wi];lt.update(Wr,Qe),lt.bind(Wr,Qe)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qe}function Oa(F,O){F.ambientLightColor.needsUpdate=O,F.lightProbe.needsUpdate=O,F.directionalLights.needsUpdate=O,F.directionalLightShadows.needsUpdate=O,F.pointLights.needsUpdate=O,F.pointLightShadows.needsUpdate=O,F.spotLights.needsUpdate=O,F.spotLightShadows.needsUpdate=O,F.rectAreaLights.needsUpdate=O,F.hemisphereLights.needsUpdate=O}function Ua(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(F,O,V){wt.get(F.texture).__webglTexture=O,wt.get(F.depthTexture).__webglTexture=V;const R=wt.get(F);R.__hasExternalTextures=!0,R.__hasExternalTextures&&(R.__autoAllocateDepthBuffer=V===void 0,R.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(F,O){const V=wt.get(F);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(F,O=0,V=0){M=F,_=O,S=V;let R=!0,q=null,gt=!1,Mt=!1;if(F){const Tt=wt.get(F);Tt.__useDefaultFramebuffer!==void 0?(ut.bindFramebuffer(36160,null),R=!1):Tt.__webglFramebuffer===void 0?yt.setupRenderTarget(F):Tt.__hasExternalTextures&&yt.rebindTextures(F,wt.get(F.texture).__webglTexture,wt.get(F.depthTexture).__webglTexture);const Nt=F.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Mt=!0);const Pt=wt.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(q=Pt[O],gt=!0):xt.isWebGL2&&F.samples>0&&yt.useMultisampledRTT(F)===!1?q=wt.get(F).__webglMultisampledFramebuffer:q=Pt,T.copy(F.viewport),N.copy(F.scissor),x=F.scissorTest}else T.copy(L).multiplyScalar(Y).floor(),N.copy(W).multiplyScalar(Y).floor(),x=Z;if(ut.bindFramebuffer(36160,q)&&xt.drawBuffers&&R&&ut.drawBuffers(F,q),ut.viewport(T),ut.scissor(N),ut.setScissorTest(x),gt){const Tt=wt.get(F.texture);H.framebufferTexture2D(36160,36064,34069+O,Tt.__webglTexture,V)}else if(Mt){const Tt=wt.get(F.texture),Nt=O||0;H.framebufferTextureLayer(36160,36064,Tt.__webglTexture,V||0,Nt)}b=-1},this.readRenderTargetPixels=function(F,O,V,R,q,gt,Mt){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=wt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Mt!==void 0&&(St=St[Mt]),St){ut.bindFramebuffer(36160,St);try{const Tt=F.texture,Nt=Tt.format,Pt=Tt.type;if(Nt!==Pe&&E.convert(Nt)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Rt=Pt===li&&(ft.has("EXT_color_buffer_half_float")||xt.isWebGL2&&ft.has("EXT_color_buffer_float"));if(Pt!==pn&&E.convert(Pt)!==H.getParameter(35738)&&!(Pt===cn&&(xt.isWebGL2||ft.has("OES_texture_float")||ft.has("WEBGL_color_buffer_float")))&&!Rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=F.width-R&&V>=0&&V<=F.height-q&&H.readPixels(O,V,R,q,E.convert(Nt),E.convert(Pt),gt)}finally{const Tt=M!==null?wt.get(M).__webglFramebuffer:null;ut.bindFramebuffer(36160,Tt)}}},this.copyFramebufferToTexture=function(F,O,V=0){const R=Math.pow(2,-V),q=Math.floor(O.image.width*R),gt=Math.floor(O.image.height*R);yt.setTexture2D(O,0),H.copyTexSubImage2D(3553,V,0,0,F.x,F.y,q,gt),ut.unbindTexture()},this.copyTextureToTexture=function(F,O,V,R=0){const q=O.image.width,gt=O.image.height,Mt=E.convert(V.format),St=E.convert(V.type);yt.setTexture2D(V,0),H.pixelStorei(37440,V.flipY),H.pixelStorei(37441,V.premultiplyAlpha),H.pixelStorei(3317,V.unpackAlignment),O.isDataTexture?H.texSubImage2D(3553,R,F.x,F.y,q,gt,Mt,St,O.image.data):O.isCompressedTexture?H.compressedTexSubImage2D(3553,R,F.x,F.y,O.mipmaps[0].width,O.mipmaps[0].height,Mt,O.mipmaps[0].data):H.texSubImage2D(3553,R,F.x,F.y,Mt,St,O.image),R===0&&V.generateMipmaps&&H.generateMipmap(3553),ut.unbindTexture()},this.copyTextureToTexture3D=function(F,O,V,R,q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const gt=F.max.x-F.min.x+1,Mt=F.max.y-F.min.y+1,St=F.max.z-F.min.z+1,Tt=E.convert(R.format),Nt=E.convert(R.type);let Pt;if(R.isData3DTexture)yt.setTexture3D(R,0),Pt=32879;else if(R.isDataArrayTexture)yt.setTexture2DArray(R,0),Pt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,R.flipY),H.pixelStorei(37441,R.premultiplyAlpha),H.pixelStorei(3317,R.unpackAlignment);const Rt=H.getParameter(3314),Xt=H.getParameter(32878),me=H.getParameter(3316),Ue=H.getParameter(3315),Je=H.getParameter(32877),qt=V.isCompressedTexture?V.mipmaps[0]:V.image;H.pixelStorei(3314,qt.width),H.pixelStorei(32878,qt.height),H.pixelStorei(3316,F.min.x),H.pixelStorei(3315,F.min.y),H.pixelStorei(32877,F.min.z),V.isDataTexture||V.isData3DTexture?H.texSubImage3D(Pt,q,O.x,O.y,O.z,gt,Mt,St,Tt,Nt,qt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Pt,q,O.x,O.y,O.z,gt,Mt,St,Tt,qt.data)):H.texSubImage3D(Pt,q,O.x,O.y,O.z,gt,Mt,St,Tt,Nt,qt),H.pixelStorei(3314,Rt),H.pixelStorei(32878,Xt),H.pixelStorei(3316,me),H.pixelStorei(3315,Ue),H.pixelStorei(32877,Je),q===0&&R.generateMipmaps&&H.generateMipmap(Pt),ut.unbindTexture()},this.initTexture=function(F){F.isCubeTexture?yt.setTextureCube(F,0):F.isData3DTexture?yt.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?yt.setTexture2DArray(F,0):yt.setTexture2D(F,0),ut.unbindTexture()},this.resetState=function(){_=0,S=0,M=null,ut.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class zf extends La{}zf.prototype.isWebGL1Renderer=!0;class Bf extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Gf extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Vf extends Gf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ea{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(de(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nr);/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */var Da=function(t){return t!=null&&typeof t=="object"&&Array.isArray(t)===!1};/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */var kf=Da;function na(s){return kf(s)===!0&&Object.prototype.toString.call(s)==="[object Object]"}var Hf=function(t){var e,n;return!(na(t)===!1||(e=t.constructor,typeof e!="function")||(n=e.prototype,na(n)===!1)||n.hasOwnProperty("isPrototypeOf")===!1)},Wf={}.toString,Xf=Array.isArray||function(s){return Wf.call(s)=="[object Array]"};/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var qf=Xf,Yf=function(t){return t!=null&&typeof t=="object"&&qf(t)===!1};/*!
 * has-values <https://github.com/jonschlinkert/has-values>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var jf=function(t,e){if(t==null)return!1;if(typeof t=="boolean")return!0;if(typeof t=="number")return!(t===0&&e===!0);if(t.length!==void 0)return t.length!==0;for(var n in t)if(t.hasOwnProperty(n))return!0;return!1};/*!
 * get-value <https://github.com/jonschlinkert/get-value>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var Zf=function(s,t,e,n,i){if(!$f(s)||!t)return s;if(t=Pi(t),e&&(t+="."+Pi(e)),n&&(t+="."+Pi(n)),i&&(t+="."+Pi(i)),t in s)return s[t];for(var r=t.split("."),o=r.length,a=-1;s&&++a<o;){for(var c=r[a];c[c.length-1]==="\\";)c=c.slice(0,-1)+"."+r[++a];s=s[c]}return s};function $f(s){return s!==null&&(typeof s=="object"||typeof s=="function")}function Pi(s){return s?Array.isArray(s)?s.join("."):s:""}/*!
 * has-value <https://github.com/jonschlinkert/has-value>
 *
 * Copyright (c) 2014-2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */var Kf=Yf,ia=jf,Jf=Zf,Qf=function(s,t,e){return Kf(s)?ia(Jf(s,t),e):ia(s,t)};/*!
 * unset-value <https://github.com/jonschlinkert/unset-value>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */var td=Da,ed=Qf,nd=function(t,e){if(!td(t))throw new TypeError("expected an object.");if(t.hasOwnProperty(e))return delete t[e],!0;if(ed(t,e)){for(var n=e.split("."),i=n.pop();n.length&&n[n.length-1].slice(-1)==="\\";)i=n.pop().slice(0,-1)+"."+i;for(;n.length;)t=t[e=n.shift()];return delete t[i]}return!0},id=Hf,rd=nd,sd=function s(t,e){if(typeof t>"u")return{};if(Array.isArray(t)){for(var n=0;n<t.length;n++)t[n]=s(t[n],e);return t}if(!id(t)||(typeof e=="string"&&(e=[e]),!Array.isArray(e)))return t;for(var i=0;i<e.length;i++)rd(t,e[i]);for(var r in t)t.hasOwnProperty(r)&&(t[r]=s(t[r],e));return t};/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var ad=function(s){return s!=null&&(Pa(s)||od(s)||!!s._isBuffer)};function Pa(s){return!!s.constructor&&typeof s.constructor.isBuffer=="function"&&s.constructor.isBuffer(s)}function od(s){return typeof s.readFloatLE=="function"&&typeof s.slice=="function"&&Pa(s.slice(0,0))}var ld=ad,cd=Object.prototype.toString,hd=function(t){if(typeof t>"u")return"undefined";if(t===null)return"null";if(t===!0||t===!1||t instanceof Boolean)return"boolean";if(typeof t=="string"||t instanceof String)return"string";if(typeof t=="number"||t instanceof Number)return"number";if(typeof t=="function"||t instanceof Function)return"function";if(typeof Array.isArray<"u"&&Array.isArray(t))return"array";if(t instanceof RegExp)return"regexp";if(t instanceof Date)return"date";var e=cd.call(t);return e==="[object RegExp]"?"regexp":e==="[object Date]"?"date":e==="[object Arguments]"?"arguments":e==="[object Error]"?"error":ld(t)?"buffer":e==="[object Set]"?"set":e==="[object WeakSet]"?"weakset":e==="[object Map]"?"map":e==="[object WeakMap]"?"weakmap":e==="[object Symbol]"?"symbol":e==="[object Int8Array]"?"int8array":e==="[object Uint8Array]"?"uint8array":e==="[object Uint8ClampedArray]"?"uint8clampedarray":e==="[object Int16Array]"?"int16array":e==="[object Uint16Array]"?"uint16array":e==="[object Int32Array]"?"int32array":e==="[object Uint32Array]"?"uint32array":e==="[object Float32Array]"?"float32array":e==="[object Float64Array]"?"float64array":"object"},Ir={},ud={get exports(){return Ir},set exports(s){Ir=s}};(function(s){(function(){function t(e,n){if(typeof n!="function")return e;var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[n(r,e[r])||r]=e[r]);return i}s.exports?s.exports=t:window.rename=t})()})(ud);/*!
 * deep-rename-keys <https://github.com/jonschlinkert/deep-rename-keys>
 *
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */var wr=hd,fd=Ir,dd=function s(t,e){var n=wr(t);if(n!=="object"&&n!=="array")throw new Error("expected an object");var i=[];n==="object"&&(t=fd(t,e),i={});for(var r in t)if(t.hasOwnProperty(r)){var o=t[r];wr(o)==="object"||wr(o)==="array"?i[r]=s(o,e):i[r]=o}return i},Ui={},pd={get exports(){return Ui},set exports(s){Ui=s}};(function(s){var t=Object.prototype.hasOwnProperty,e="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(e=!1));function i(o,a,c){this.fn=o,this.context=a,this.once=c||!1}function r(){this._events=new n,this._eventsCount=0}r.prototype.eventNames=function(){var a=[],c,l;if(this._eventsCount===0)return a;for(l in c=this._events)t.call(c,l)&&a.push(e?l.slice(1):l);return Object.getOwnPropertySymbols?a.concat(Object.getOwnPropertySymbols(c)):a},r.prototype.listeners=function(a,c){var l=e?e+a:a,h=this._events[l];if(c)return!!h;if(!h)return[];if(h.fn)return[h.fn];for(var u=0,d=h.length,m=new Array(d);u<d;u++)m[u]=h[u].fn;return m},r.prototype.emit=function(a,c,l,h,u,d){var m=e?e+a:a;if(!this._events[m])return!1;var g=this._events[m],p=arguments.length,f,_;if(g.fn){switch(g.once&&this.removeListener(a,g.fn,void 0,!0),p){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,c),!0;case 3:return g.fn.call(g.context,c,l),!0;case 4:return g.fn.call(g.context,c,l,h),!0;case 5:return g.fn.call(g.context,c,l,h,u),!0;case 6:return g.fn.call(g.context,c,l,h,u,d),!0}for(_=1,f=new Array(p-1);_<p;_++)f[_-1]=arguments[_];g.fn.apply(g.context,f)}else{var S=g.length,M;for(_=0;_<S;_++)switch(g[_].once&&this.removeListener(a,g[_].fn,void 0,!0),p){case 1:g[_].fn.call(g[_].context);break;case 2:g[_].fn.call(g[_].context,c);break;case 3:g[_].fn.call(g[_].context,c,l);break;case 4:g[_].fn.call(g[_].context,c,l,h);break;default:if(!f)for(M=1,f=new Array(p-1);M<p;M++)f[M-1]=arguments[M];g[_].fn.apply(g[_].context,f)}}return!0},r.prototype.on=function(a,c,l){var h=new i(c,l||this),u=e?e+a:a;return this._events[u]?this._events[u].fn?this._events[u]=[this._events[u],h]:this._events[u].push(h):(this._events[u]=h,this._eventsCount++),this},r.prototype.once=function(a,c,l){var h=new i(c,l||this,!0),u=e?e+a:a;return this._events[u]?this._events[u].fn?this._events[u]=[this._events[u],h]:this._events[u].push(h):(this._events[u]=h,this._eventsCount++),this},r.prototype.removeListener=function(a,c,l,h){var u=e?e+a:a;if(!this._events[u])return this;if(!c)return--this._eventsCount===0?this._events=new n:delete this._events[u],this;var d=this._events[u];if(d.fn)d.fn===c&&(!h||d.once)&&(!l||d.context===l)&&(--this._eventsCount===0?this._events=new n:delete this._events[u]);else{for(var m=0,g=[],p=d.length;m<p;m++)(d[m].fn!==c||h&&!d[m].once||l&&d[m].context!==l)&&g.push(d[m]);g.length?this._events[u]=g.length===1?g[0]:g:--this._eventsCount===0?this._events=new n:delete this._events[u]}return this},r.prototype.removeAllListeners=function(a){var c;return a?(c=e?e+a:a,this._events[c]&&(--this._eventsCount===0?this._events=new n:delete this._events[c])):(this._events=new n,this._eventsCount=0),this},r.prototype.off=r.prototype.removeListener,r.prototype.addListener=r.prototype.on,r.prototype.setMaxListeners=function(){return this},r.prefixed=e,r.EventEmitter=r,s.exports=r})(pd);function Ft(s,t,e){return t in s?Object.defineProperty(s,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[t]=e,s}var md=Ui,ni=function(){},Et={data:"state-data",cdata:"state-cdata",tagBegin:"state-tag-begin",tagName:"state-tag-name",tagEnd:"state-tag-end",attributeNameStart:"state-attribute-name-start",attributeName:"state-attribute-name",attributeNameEnd:"state-attribute-name-end",attributeValueBegin:"state-attribute-value-begin",attributeValue:"state-attribute-value"},_t={lt:"action-lt",gt:"action-gt",space:"action-space",equal:"action-equal",quote:"action-quote",slash:"action-slash",char:"action-char",error:"action-error"},Ht={text:"text",openTag:"open-tag",closeTag:"close-tag",attributeName:"attribute-name",attributeValue:"attribute-value"},gd={" ":_t.space,"	":_t.space,"\n":_t.space,"\r":_t.space,"<":_t.lt,">":_t.gt,'"':_t.quote,"'":_t.quote,"=":_t.equal,"/":_t.slash},_d=function(t){return gd[t]||_t.char},xd=function(t){var e,n,i,r,o,a,c,l,h,u;t=Object.assign({debug:!1},t);var d=new md,m=Et.data,g="",p="",f="",_="",S="",M="",b=function(N,x){if(!(p[0]==="?"||p[0]==="!")){var A={type:N,value:x};t.debug&&console.log("emit:",A),d.emit("data",A)}};d.stateMachine=(u={},Ft(u,Et.data,(e={},Ft(e,_t.lt,function(){g.trim()&&b(Ht.text,g),p="",S=!1,m=Et.tagBegin}),Ft(e,_t.char,function(T){g+=T}),e)),Ft(u,Et.cdata,Ft({},_t.char,function(T){g+=T,g.substr(-3)==="]]>"&&(b(Ht.text,g.slice(0,-3)),g="",m=Et.data)})),Ft(u,Et.tagBegin,(n={},Ft(n,_t.space,ni),Ft(n,_t.char,function(T){p=T,m=Et.tagName}),Ft(n,_t.slash,function(){p="",S=!0}),n)),Ft(u,Et.tagName,(i={},Ft(i,_t.space,function(){S?m=Et.tagEnd:(m=Et.attributeNameStart,b(Ht.openTag,p))}),Ft(i,_t.gt,function(){b(S?Ht.closeTag:Ht.openTag,p),g="",m=Et.data}),Ft(i,_t.slash,function(){m=Et.tagEnd,b(Ht.openTag,p)}),Ft(i,_t.char,function(T){p+=T,p==="![CDATA["&&(m=Et.cdata,g="",p="")}),i)),Ft(u,Et.tagEnd,(r={},Ft(r,_t.gt,function(){b(Ht.closeTag,p),g="",m=Et.data}),Ft(r,_t.char,ni),r)),Ft(u,Et.attributeNameStart,(o={},Ft(o,_t.char,function(T){f=T,m=Et.attributeName}),Ft(o,_t.gt,function(){g="",m=Et.data}),Ft(o,_t.space,ni),Ft(o,_t.slash,function(){S=!0,m=Et.tagEnd}),o)),Ft(u,Et.attributeName,(a={},Ft(a,_t.space,function(){m=Et.attributeNameEnd}),Ft(a,_t.equal,function(){b(Ht.attributeName,f),m=Et.attributeValueBegin}),Ft(a,_t.gt,function(){_="",b(Ht.attributeName,f),b(Ht.attributeValue,_),g="",m=Et.data}),Ft(a,_t.slash,function(){S=!0,_="",b(Ht.attributeName,f),b(Ht.attributeValue,_),m=Et.tagEnd}),Ft(a,_t.char,function(T){f+=T}),a)),Ft(u,Et.attributeNameEnd,(c={},Ft(c,_t.space,ni),Ft(c,_t.equal,function(){b(Ht.attributeName,f),m=Et.attributeValueBegin}),Ft(c,_t.gt,function(){_="",b(Ht.attributeName,f),b(Ht.attributeValue,_),g="",m=Et.data}),Ft(c,_t.char,function(T){_="",b(Ht.attributeName,f),b(Ht.attributeValue,_),f=T,m=Et.attributeName}),c)),Ft(u,Et.attributeValueBegin,(l={},Ft(l,_t.space,ni),Ft(l,_t.quote,function(T){M=T,_="",m=Et.attributeValue}),Ft(l,_t.gt,function(){_="",b(Ht.attributeValue,_),g="",m=Et.data}),Ft(l,_t.char,function(T){M="",_=T,m=Et.attributeValue}),l)),Ft(u,Et.attributeValue,(h={},Ft(h,_t.space,function(T){M?_+=T:(b(Ht.attributeValue,_),m=Et.attributeNameStart)}),Ft(h,_t.quote,function(T){M===T?(b(Ht.attributeValue,_),m=Et.attributeNameStart):_+=T}),Ft(h,_t.gt,function(T){M?_+=T:(b(Ht.attributeValue,_),g="",m=Et.data)}),Ft(h,_t.slash,function(T){M?_+=T:(b(Ht.attributeValue,_),S=!0,m=Et.tagEnd)}),Ft(h,_t.char,function(T){_+=T}),h)),u);var v=function(N){t.debug&&console.log(m,N);var x=d.stateMachine[m],A=x[_d(N)]||x[_t.error]||x[_t.char];A(N)};return d.write=function(T){for(var N=T.length,x=0;x<N;x++)v(T[x])},d},yd={State:Et,Action:_t,Type:Ht,create:xd},vd=Ui,Ra=yd,ii=Ra.Type,Vr={element:"element",text:"text"},br=function(t){return Object.assign({name:"",type:Vr.element,value:"",parent:null,attributes:{},children:[]},t)},Ia=function(t){t=Object.assign({stream:!1,parentNodes:!0,doneEvent:"done",tagPrefix:"tag:",emitTopLevelOnly:!1,debug:!1},t);var e=void 0,n=void 0,i=void 0,r=void 0,o=new vd,a=function(l){switch(l.type){case ii.openTag:if(i===null)i=n,i.name=l.value;else{var h=br({name:l.value,parent:i});i.children.push(h),i=h}break;case ii.closeTag:var u=i.parent;if(t.parentNodes||(i.parent=null),i.name!==l.value)break;t.stream&&u===n&&(n.children=[],i.parent=null),(!t.emitTopLevelOnly||u===n)&&(o.emit(t.tagPrefix+i.name,i),o.emit("tag",i.name,i)),i===n&&(e.removeAllListeners("data"),o.emit(t.doneEvent,i),n=null),i=u;break;case ii.text:i&&i.children.push(br({type:Vr.text,value:l.value,parent:t.parentNodes?i:null}));break;case ii.attributeName:r=l.value,i.attributes[r]="";break;case ii.attributeValue:i.attributes[r]=l.value;break}};return o.reset=function(){e=Ra.create({debug:t.debug}),e.on("data",a),n=br(),i=null,r="",o.parse=e.write},o.reset(),o},Fd=function(t,e){e=Object.assign({},e,{stream:!1,tagPrefix:":"});var n=Ia(e),i=void 0;return n.on("done",function(r){i=r}),n.parse(t),i},Md={parseSync:Fd,create:Ia,NodeType:Vr},wd=function(t){var e=Md.parseSync("<root>".concat(t,"</root>"),{parentNodes:!1}),n=e.children&&e.children.length>0&&e.children.every(function(i){return i.name==="svg"});if(n)return e.children.length===1?e.children[0]:e.children;throw Error("nothing to parse")},bd=function(t){return sd(t,["parent"])},Sd=function(t){return dd(t,function(e){return Td(e)?e:Ed(e)})},Ed=function(t){return t.replace(/[-|:]([a-z])/gi,function(e,n){return n.toUpperCase()})},Td=function(t){return/^(data|aria)(-\w+)/.test(t)},Ad=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transformNode,i=n===void 0?function(c){return c}:n,r=e.camelcase,o=r===void 0?!1:r,a=function(l){var h;return h=bd(l),h=i(h),o&&(h=Sd(h)),h};return a(wd(t))};function Cd(){for(var s=arguments.length,t=new Array(s),e=0;e<s;e++)t[e]=arguments[e];return new Promise(function(n,i){try{var r=Ad.apply(void 0,t);n(r)}catch(o){i(o)}})}const ra={type:"change"},Sr={type:"start"},sa={type:"end"};class Ld extends yn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fn.ROTATE,MIDDLE:Fn.DOLLY,RIGHT:Fn.PAN},this.touches={ONE:Mn.ROTATE,TWO:Mn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",fe),this._domElementKeyEvents=E},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ra),n.update(),r=i.NONE},this.update=function(){const E=new U,D=new _n().setFromUnitVectors(t.up,new U(0,1,0)),lt=D.clone().invert(),ht=new U,ot=new _n,pt=2*Math.PI;return function(){const Lt=n.object.position;E.copy(Lt).sub(n.target),E.applyQuaternion(D),a.setFromVector3(E),n.autoRotate&&r===i.NONE&&A(N()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Dt=n.minAzimuthAngle,Bt=n.maxAzimuthAngle;return isFinite(Dt)&&isFinite(Bt)&&(Dt<-Math.PI?Dt+=pt:Dt>Math.PI&&(Dt-=pt),Bt<-Math.PI?Bt+=pt:Bt>Math.PI&&(Bt-=pt),Dt<=Bt?a.theta=Math.max(Dt,Math.min(Bt,a.theta)):a.theta=a.theta>(Dt+Bt)/2?Math.max(Dt,a.theta):Math.min(Bt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),E.setFromSpherical(a),E.applyQuaternion(lt),Lt.copy(n.target).add(E),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,u||ht.distanceToSquared(n.object.position)>o||8*(1-ot.dot(n.object.quaternion))>o?(n.dispatchEvent(ra),ht.copy(n.object.position),ot.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",B),n.domElement.removeEventListener("pointerdown",Qt),n.domElement.removeEventListener("pointercancel",oe),n.domElement.removeEventListener("wheel",Me),n.domElement.removeEventListener("pointermove",jt),n.domElement.removeEventListener("pointerup",Zt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",fe)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new ea,c=new ea;let l=1;const h=new U;let u=!1;const d=new At,m=new At,g=new At,p=new At,f=new At,_=new At,S=new At,M=new At,b=new At,v=[],T={};function N(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function A(E){c.theta-=E}function I(E){c.phi-=E}const Y=function(){const E=new U;return function(lt,ht){E.setFromMatrixColumn(ht,0),E.multiplyScalar(-lt),h.add(E)}}(),K=function(){const E=new U;return function(lt,ht){n.screenSpacePanning===!0?E.setFromMatrixColumn(ht,1):(E.setFromMatrixColumn(ht,0),E.crossVectors(n.object.up,E)),E.multiplyScalar(lt),h.add(E)}}(),P=function(){const E=new U;return function(lt,ht){const ot=n.domElement;if(n.object.isPerspectiveCamera){const pt=n.object.position;E.copy(pt).sub(n.target);let dt=E.length();dt*=Math.tan(n.object.fov/2*Math.PI/180),Y(2*lt*dt/ot.clientHeight,n.object.matrix),K(2*ht*dt/ot.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Y(lt*(n.object.right-n.object.left)/n.object.zoom/ot.clientWidth,n.object.matrix),K(ht*(n.object.top-n.object.bottom)/n.object.zoom/ot.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function L(E){n.object.isPerspectiveCamera?l/=E:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*E)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(E){n.object.isPerspectiveCamera?l*=E:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/E)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(E){d.set(E.clientX,E.clientY)}function j(E){S.set(E.clientX,E.clientY)}function X(E){p.set(E.clientX,E.clientY)}function nt(E){m.set(E.clientX,E.clientY),g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const D=n.domElement;A(2*Math.PI*g.x/D.clientHeight),I(2*Math.PI*g.y/D.clientHeight),d.copy(m),n.update()}function Q(E){M.set(E.clientX,E.clientY),b.subVectors(M,S),b.y>0?L(x()):b.y<0&&W(x()),S.copy(M),n.update()}function z(E){f.set(E.clientX,E.clientY),_.subVectors(f,p).multiplyScalar(n.panSpeed),P(_.x,_.y),p.copy(f),n.update()}function k(E){E.deltaY<0?W(x()):E.deltaY>0&&L(x()),n.update()}function J(E){let D=!1;switch(E.code){case n.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,n.keyPanSpeed),D=!0;break;case n.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,-n.keyPanSpeed),D=!0;break;case n.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(n.keyPanSpeed,0),D=!0;break;case n.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(-n.keyPanSpeed,0),D=!0;break}D&&(E.preventDefault(),n.update())}function et(){if(v.length===1)d.set(v[0].pageX,v[0].pageY);else{const E=.5*(v[0].pageX+v[1].pageX),D=.5*(v[0].pageY+v[1].pageY);d.set(E,D)}}function st(){if(v.length===1)p.set(v[0].pageX,v[0].pageY);else{const E=.5*(v[0].pageX+v[1].pageX),D=.5*(v[0].pageY+v[1].pageY);p.set(E,D)}}function H(){const E=v[0].pageX-v[1].pageX,D=v[0].pageY-v[1].pageY,lt=Math.sqrt(E*E+D*D);S.set(0,lt)}function Ct(){n.enableZoom&&H(),n.enablePan&&st()}function ft(){n.enableZoom&&H(),n.enableRotate&&et()}function xt(E){if(v.length==1)m.set(E.pageX,E.pageY);else{const lt=vt(E),ht=.5*(E.pageX+lt.x),ot=.5*(E.pageY+lt.y);m.set(ht,ot)}g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const D=n.domElement;A(2*Math.PI*g.x/D.clientHeight),I(2*Math.PI*g.y/D.clientHeight),d.copy(m)}function ut(E){if(v.length===1)f.set(E.pageX,E.pageY);else{const D=vt(E),lt=.5*(E.pageX+D.x),ht=.5*(E.pageY+D.y);f.set(lt,ht)}_.subVectors(f,p).multiplyScalar(n.panSpeed),P(_.x,_.y),p.copy(f)}function Ot(E){const D=vt(E),lt=E.pageX-D.x,ht=E.pageY-D.y,ot=Math.sqrt(lt*lt+ht*ht);M.set(0,ot),b.set(0,Math.pow(M.y/S.y,n.zoomSpeed)),L(b.y),S.copy(M)}function wt(E){n.enableZoom&&Ot(E),n.enablePan&&ut(E)}function yt(E){n.enableZoom&&Ot(E),n.enableRotate&&xt(E)}function Qt(E){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(E.pointerId),n.domElement.addEventListener("pointermove",jt),n.domElement.addEventListener("pointerup",Zt)),tt(E),E.pointerType==="touch"?w(E):Wt(E))}function jt(E){n.enabled!==!1&&(E.pointerType==="touch"?y(E):zt(E))}function Zt(E){it(E),v.length===0&&(n.domElement.releasePointerCapture(E.pointerId),n.domElement.removeEventListener("pointermove",jt),n.domElement.removeEventListener("pointerup",Zt)),n.dispatchEvent(sa),r=i.NONE}function oe(E){it(E)}function Wt(E){let D;switch(E.button){case 0:D=n.mouseButtons.LEFT;break;case 1:D=n.mouseButtons.MIDDLE;break;case 2:D=n.mouseButtons.RIGHT;break;default:D=-1}switch(D){case Fn.DOLLY:if(n.enableZoom===!1)return;j(E),r=i.DOLLY;break;case Fn.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enablePan===!1)return;X(E),r=i.PAN}else{if(n.enableRotate===!1)return;Z(E),r=i.ROTATE}break;case Fn.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enableRotate===!1)return;Z(E),r=i.ROTATE}else{if(n.enablePan===!1)return;X(E),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Sr)}function zt(E){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;nt(E);break;case i.DOLLY:if(n.enableZoom===!1)return;Q(E);break;case i.PAN:if(n.enablePan===!1)return;z(E);break}}function Me(E){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(E.preventDefault(),n.dispatchEvent(Sr),k(E),n.dispatchEvent(sa))}function fe(E){n.enabled===!1||n.enablePan===!1||J(E)}function w(E){switch(at(E),v.length){case 1:switch(n.touches.ONE){case Mn.ROTATE:if(n.enableRotate===!1)return;et(),r=i.TOUCH_ROTATE;break;case Mn.PAN:if(n.enablePan===!1)return;st(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Mn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ct(),r=i.TOUCH_DOLLY_PAN;break;case Mn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ft(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Sr)}function y(E){switch(at(E),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;xt(E),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ut(E),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;wt(E),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;yt(E),n.update();break;default:r=i.NONE}}function B(E){n.enabled!==!1&&E.preventDefault()}function tt(E){v.push(E)}function it(E){delete T[E.pointerId];for(let D=0;D<v.length;D++)if(v[D].pointerId==E.pointerId){v.splice(D,1);return}}function at(E){let D=T[E.pointerId];D===void 0&&(D=new At,T[E.pointerId]=D),D.set(E.pageX,E.pageY)}function vt(E){const D=E.pointerId===v[0].pointerId?v[1]:v[0];return T[D.pointerId]}n.domElement.addEventListener("contextmenu",B),n.domElement.addEventListener("pointerdown",Qt),n.domElement.addEventListener("pointercancel",oe),n.domElement.addEventListener("wheel",Me,{passive:!1}),this.update()}}const Dd=(s,t)=>(s=Math.ceil(s),t=Math.floor(t),Math.floor(Math.random()*(t-s)+s)+1),Pd=(s,t,e,n)=>{let i=s*t;return i=i&4294967295,i=i+2127912214+(i<<12)&4294967295,i=(i^3345072700^i>>>19)&4294967295,i=i+374761393+(i<<5)&4294967295,i=(i+3550635116^i<<9)&4294967295,i=i+4251993797+(i<<3)&4294967295,i=(i^3042594569^i>>>16)&4294967295,i=(i&268435455)/268435456,i=i*(n-e)+e+1,i},aa=['<svg id="1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 64 64" fill="#000"><rect x="0" y="0" width="64" height="64" fill="#000"></rect><rect x="17" y="26" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="39" y="17" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="51" y="39" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="58" y="28" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="28" y="58" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="46" y="63" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="49" y="22" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="39" y="22" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="42" y="40" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="20" y="58" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="58" y="30" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="44" y="7" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="52" y="35" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="55" y="8" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="8" y="63" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="51" y="56" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="16" y="37" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="10" y="13" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="45" y="19" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="46" y="30" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="48" y="22" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="33" y="26" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="38" y="32" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="49" y="4" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="11" y="15" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="0" y="41" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="27" y="62" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="8" y="31" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="25" y="42" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="58" y="37" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="63" y="27" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="42" y="4" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="20" y="13" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="41" y="43" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="37" y="55" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="17" y="14" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="44" y="36" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="47" y="28" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="35" y="37" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="18" y="5" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="9" y="21" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="62" y="18" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="32" y="60" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="39" y="36" width="1" height="1" fill="#FFE790" opacity="1"></rect><rect x="42" y="49" width="1" height="1" fill="#FFE790" opacity="1"></rect><rect x="20" y="61" width="1" height="1" fill="#FFE790" opacity="1"></rect><rect x="58" y="47" width="1" height="1" fill="#FFE790" opacity="1"></rect><rect x="44" y="44" width="1" height="1" fill="#FFE790" opacity="1"></rect></svg>','<svg id="2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 64 64" fill="#000"><rect x="0" y="0" width="64" height="64" fill="#000"></rect><rect x="39" y="26" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="51" y="39" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="44" y="44" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="11" y="44" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="59" y="28" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="46" y="59" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="60" y="37" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="53" y="33" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="47" y="30" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="29" y="55" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="24" y="26" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="55" y="32" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="54" y="22" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="43" y="3" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="10" y="15" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="28" y="4" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="5" y="4" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="56" y="51" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="34" y="23" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="42" y="54" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="9" y="33" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="52" y="6" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="33" y="33" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="49" y="25" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="22" y="39" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="13" y="6" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="40" y="17" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="0" y="11" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="45" y="53" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="44" y="45" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="0" y="14" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="46" y="4" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="35" y="0" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="57" y="60" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="47" y="7" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="6" y="52" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="43" y="4" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="63" y="16" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="27" y="60" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="54" y="0" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="35" y="38" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="4" y="36" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="25" y="20" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="23" y="46" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="55" y="50" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="7" y="29" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="18" y="51" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="40" y="7" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="50" y="47" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="0" y="39" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="30" y="30" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="21" y="36" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="36" y="49" width="1" height="1" fill="#7DD0FF" opacity="1"></rect><rect x="15" y="36" width="1" height="1" fill="#7DD0FF" opacity="1"></rect><rect x="0" y="0" width="1" height="1" fill="#7DD0FF" opacity="1"></rect></svg>','<svg id="3" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 64 64" fill="#000"><rect x="0" y="0" width="64" height="64" fill="#000"></rect><rect x="51" y="26" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="44" y="51" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="11" y="28" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="36" y="11" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="63" y="50" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="44" y="20" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="40" y="30" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="42" y="18" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="6" y="46" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="3" y="16" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="3" y="48" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="59" y="34" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="16" y="6" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="60" y="17" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="47" y="40" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="36" y="58" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="60" y="38" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="57" y="29" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="40" y="30" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="50" y="46" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="18" y="52" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="27" y="37" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="41" y="13" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="26" y="41" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="38" y="51" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="42" y="15" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="10" y="31" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="50" y="49" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="1" y="13" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="15" y="28" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="49" y="21" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="38" y="2" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="46" y="24" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="6" y="48" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="29" y="2" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="9" y="38" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="63" y="55" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="35" y="14" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="27" y="31" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="60" y="61" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="42" y="34" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="5" y="6" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="6" y="36" width="1" height="1" fill="#FFE790" opacity="1"></rect><rect x="3" y="52" width="1" height="1" fill="#FFE790" opacity="1"></rect></svg>','<svg id="4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 64 64" fill="#000"><rect x="0" y="0" width="64" height="64" fill="#000"></rect><rect x="44" y="26" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="11" y="44" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="21" y="28" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="44" y="21" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="34" y="46" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="8" y="26" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="12" y="50" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="34" y="32" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="52" y="15" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="55" y="38" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="25" y="54" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="39" y="38" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="54" y="25" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="27" y="11" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="36" y="5" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="63" y="36" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="38" y="9" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="17" y="25" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="59" y="43" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="5" y="10" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="2" y="15" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="53" y="6" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="57" y="10" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="10" y="19" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="47" y="19" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="20" y="34" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="8" y="39" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="12" y="7" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="2" y="17" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="32" y="28" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="52" y="7" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="2" y="44" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="48" y="14" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="42" y="6" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="2" y="19" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="36" y="2" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="7" y="30" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="56" y="56" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="42" y="14" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="58" y="51" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="7" y="47" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="7" y="0" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="16" y="29" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="61" y="59" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="15" y="27" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="10" y="17" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="13" y="24" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="5" y="7" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="40" y="49" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="6" y="42" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="30" y="26" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="48" y="19" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="58" y="17" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="56" y="33" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="58" y="61" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="58" y="53" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="21" y="50" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="63" y="23" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="36" y="5" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="58" y="31" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="61" y="27" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="35" y="31" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="43" y="47" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="55" y="57" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="40" y="3" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="58" y="31" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect></svg>','<svg id="5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 64 64" fill="#000"><rect x="0" y="0" width="64" height="64" fill="#000"></rect><rect x="11" y="26" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="44" y="11" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="27" y="51" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="3" y="9" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="27" y="28" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="61" y="27" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="26" y="38" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="57" y="19" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="59" y="32" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="19" y="62" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="0" y="4" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="2" y="57" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="45" y="20" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="24" y="63" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="3" y="62" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="6" y="51" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="4" y="13" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="42" y="19" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="15" y="48" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="53" y="42" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="28" y="14" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="33" y="12" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="11" y="31" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="5" y="17" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="12" y="58" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="21" y="8" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="44" y="13" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="34" y="29" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="8" y="0" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="12" y="35" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="34" y="25" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="52" y="50" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="55" y="35" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="25" y="5" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="39" y="44" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="54" y="16" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="27" y="42" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="36" y="37" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="63" y="38" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="38" y="14" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="17" y="40" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="59" y="0" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="5" y="52" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="2" y="60" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="53" y="55" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="57" y="57" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="10" y="45" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="47" y="51" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="20" y="28" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="8" y="7" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="12" y="43" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="2" y="44" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="32" y="20" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="52" y="39" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="2" y="55" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="48" y="57" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="42" y="2" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="2" y="12" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="36" y="9" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="7" y="11" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="56" y="52" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="42" y="24" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="58" y="27" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="7" y="38" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="7" y="16" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="16" y="21" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="61" y="55" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="15" y="2" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="45" y="36" width="1" height="1" fill="#FFE790" opacity="1"></rect></svg>','<svg id="19" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 64 64" fill="#000"><rect x="0" y="0" width="64" height="64" fill="#000"></rect><rect x="24" y="26" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="29" y="24" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="29" y="43" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="36" y="28" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="57" y="36" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="42" y="8" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="57" y="61" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="18" y="18" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="3" y="2" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="63" y="14" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="63" y="38" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="5" y="22" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="24" y="4" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="4" y="61" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="54" y="27" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="53" y="55" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="7" y="25" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="1" y="17" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="14" y="12" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="4" y="34" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="26" y="21" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="34" y="21" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="23" y="58" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="19" y="29" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="45" y="22" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="11" y="38" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="4" y="40" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="58" y="57" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="60" y="5" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="8" y="2" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="5" y="59" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="60" y="9" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="51" y="52" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="58" y="60" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="5" y="14" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="10" y="49" width="1" height="1" fill="#7DD0FF" opacity="1"></rect><rect x="11" y="36" width="1" height="1" fill="#FFE790" opacity="1"></rect></svg>','<svg id="27" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 64 64" fill="#000"><rect x="0" y="0" width="64" height="64" fill="#000"></rect><rect x="26" y="26" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="16" y="26" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="2" y="45" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="26" y="47" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="28" y="5" width="2" height="2" fill="#FFFFFF" opacity="1"></rect><rect x="1" y="28" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="15" y="1" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="49" y="4" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="38" y="42" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="46" y="42" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="6" y="28" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="29" y="17" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="9" y="60" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="63" y="18" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="35" y="53" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="27" y="51" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="60" y="47" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="42" y="49" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="5" y="57" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="23" y="50" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="45" y="28" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="15" y="26" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="52" y="18" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="20" y="36" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="50" y="29" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="36" y="55" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="52" y="17" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="22" y="26" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="31" y="11" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="25" y="56" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="4" y="21" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="48" y="2" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="59" y="55" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="37" y="10" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="59" y="29" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="63" y="57" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="21" y="7" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="30" y="60" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="40" y="26" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="3" y="14" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="9" y="49" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="40" y="57" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="5" y="12" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="20" y="20" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="42" y="12" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="48" y="46" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="33" y="4" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="15" y="27" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="43" y="13" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="45" y="31" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="20" y="6" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="21" y="24" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="3" y="36" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="22" y="23" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="44" y="46" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="61" y="23" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="25" y="51" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="44" y="61" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="61" y="56" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="40" y="23" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="20" y="18" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="62" y="43" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="52" y="46" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="8" y="36" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="14" y="55" width="1" height="1" fill="#FFFFFF" opacity="1"></rect><rect x="49" y="4" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="40" y="25" width="1" height="1" fill="#FFFFFF" opacity="0.8"></rect><rect x="47" y="47" width="1" height="1" fill="#FFFFFF" opacity="0.4"></rect><rect x="0" y="9" width="1" height="1" fill="#FFFFFF" opacity="0.2"></rect><rect x="15" y="9" width="1" height="1" fill="#FF8D8D" opacity="1"></rect></svg>'];let Ni=[],Rd=8;const Id=new Promise(s=>{for(let t=0;t<Rd;t++)Ni.push(aa[Dd(0,aa.length-1)]);s()});Id.then(Nd);async function Nd(){const s=Math.ceil(Math.cbrt(Ni.length));let t=s*64,e=s*64,n=s*64;async function i(K){return await Cd(K)}const r=[];for(let K=0;K<Ni.length;K++){const P=await i(Ni[K]);r.push(P)}const o=new Bf;let a={width:window.innerWidth,height:window.innerHeight},c=32,l=32,h=32;const u=r.length;u>1&&(c=t/2*-1,l=e/2,h=n/2*-1);let d=c,m=l,g=h,p=0,f=0,_=0;const S=new ai;for(let K=0;K<r.length;K++){const P=r[K].children;for(let L=1;L<P.length;L++){let W=P[L].attributes.width;const Z=new qn(W,W,W),j=new zr({color:P[L].attributes.fill});j.opacity=P[L].attributes.opacity,j.transparent=!0;const X=new We(Z,j);X.position.set(d-P[L].attributes.x,m-P[L].attributes.y,Pd(r[K].attributes.id,L,g-32,g+32)),S.add(X)}p<s-1?(d+=64,p++):(d=c,p=0,f++,f>0&&f<s?m-=64:f>=s&&(m=l,f=0,_++,_>0&&_<s?g+=64:_>=s&&(g=h,_=0)))}const M=new U,v=new Xn().setFromObject(S).getCenter(M);u==2?S.position.set(v.x*-1,v.y-64,v.z*-1):S.position.set(v.x*-1,v.y,v.z*-1),o.add(S);const T=new Ee(10,a.width/a.height,10,5e3);T.position.set(0,0,600*s),o.add(T);const N=new Vf(16777215,1);N.position.set(0,100,100),o.add(N);const x=document.querySelector(".webgl"),A=new La({canvas:x});A.setSize(a.width,a.height),A.setPixelRatio(1.5),A.render(o,T),window.addEventListener("resize",()=>{a.width=window.innerWidth,a.height=window.innerHeight,T.aspect=a.width/a.height,T.updateProjectionMatrix(),A.setSize(a.width,a.height)});const I=new Ld(T,x);I.enableDamping=!0,I.enablePan=!1,I.enableZoom=!0,I.autoRotate=!0,I.autoRotateSpeed=.5;const Y=()=>{I.update(),A.render(o,T),window.requestAnimationFrame(Y)};Y()}
