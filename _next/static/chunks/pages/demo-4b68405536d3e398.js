(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{8663:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo",function(){return t(4889)}])},4889:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return T}});var r=t(5893),o=t(7294),i=t(3923),s=t(4232),a=t(6665),l=t(9040),c=t(4336),u=t(8626),f=t(5769),m=[{name:"Good Things Take Time",artist:"Ond\u0159ej B\xe1rta",file:"/music/sound/OndrejBarta-GoodThingsTakeTime.mp3",cover:"/music/covers/OndrejBarta-GoodThingsTakeTime.png"}],d=t(4234);function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function p(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],s=!0,a=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);s=!0);}catch(l){a=!0,o=l}finally{try{s||null==t.return||t.return()}finally{if(a)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return h(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=function(){var e=(0,u.L)("/models/vinyl.gltf"),n=p((0,f.m)([m[0].cover]),1)[0],t=(0,f.m)("/models/vinyl-texture.png"),i=(0,f.m)("/models/vinyl-normal.png"),a=(0,f.m)("/models/vinyl-inverted-normal.png"),l=(0,d.cy)(),h=(0,s.Ky)(),y=(0,c.M4)("Vinyl",{reflectivity:100,metalness:1.4,roughness:.5}),g=(0,c.M4)("Cover",{reflectivity:100,metalness:1});return console.log({musicPlayer:l}),(0,s.xQ)((function(n,t){var r=Math.PI/2;e.scene.rotation.y+=r*t})),(0,o.useEffect)((function(){e&&n&&g&&y&&(t.anisotropy=h.gl.capabilities.getMaxAnisotropy(),console.log(e.scene.children),e.scene.children[1].material.map=n,e.scene.children[1].material.roughnessMap=a,e.scene.children[1].material.metalnessMap=i,e.scene.children[1].material.roughness=y.roughness,e.scene.children[1].material.reflectivity=y.reflectivity,e.scene.children[1].material.metalness=y.metalness,e.scene.children[0].material.map=n,e.scene.children[0].material.reflectivity=g.reflectivity,e.scene.children[0].material.metalness=g.metalness)}),[e,n,g,y]),(0,r.jsx)(o.Suspense,{fallback:null,children:(0,r.jsx)("primitive",{object:e.scene})})},g=function(){var e=(0,u.L)("/models/record-player.gltf"),n=(0,f.m)("/models/record-player-wooden-desk-texture.png");return(0,s.xQ)((function(n,t){if(e)Math.PI})),(0,o.useEffect)((function(){e&&(e.scene.children[0].material.map=n)}),[e]),(0,r.jsx)(o.Suspense,{fallback:null,children:(0,r.jsx)("primitive",{object:e.scene})})},j=function(){var e=(0,u.L)("/models/environment.gltf");return(0,r.jsx)(o.Suspense,{fallback:null,children:(0,r.jsx)("primitive",{object:e.scene})})},v=function(){var e=(0,c.M4)("Light #1 Controls",{color:"#ffffff",position:[10,10,10],intensity:1}),n=(0,c.M4)("Light #2 Controls",{color:"#ffffff",position:[-5,8,6],intensity:1}),t=(0,c.M4)("Camera",{position:[7,9,-6],rotation:[-2,0,2],zoom:2e3}),i=(0,o.useRef)();return console.log(i.current),(0,o.useEffect)((function(){}),[i.current]),(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)(a.z,{ref:i,enableDamping:!1,enablePan:!1,enableRotate:!1,enableZoom:!1,enabled:!1}),(0,r.jsx)(l.i,{makeDefault:!0,position:t.position,rotation:t.rotation,zoom:t.zoom}),(0,r.jsx)("ambientLight",{}),(0,r.jsx)("pointLight",{color:e.color,position:e.position,intensity:e.intensity}),(0,r.jsx)("pointLight",{color:n.color,position:n.position,intensity:n.intensity}),(0,r.jsx)(j,{}),(0,r.jsx)(y,{}),(0,r.jsx)(g,{})]})},b=t(5121);function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){x(e,n,t[n])}))}return e}var O=function(e){var n=(0,o.useRef)();return(0,s.xQ)((function(e,t){if(n.current){var r=.15;n.current.rotation.x+=t*r,n.current.rotation.y+=t*r,n.current.rotation.z+=t*r}})),(0,r.jsx)(o.Fragment,{children:(0,r.jsxs)("mesh",w({},e,{ref:n,children:[(0,r.jsx)("icosahedronBufferGeometry",{args:[1,5],attach:"geometry"}),(0,r.jsx)(b.Y,{color:"red",attach:"material",distort:.6,speed:1,wireframe:!0})]}))})},k=t(2212);function P(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){P(e,n,t[n])}))}return e}var E=function(e){var n=(0,o.useRef)();return(0,r.jsx)(o.Fragment,{children:(0,r.jsxs)("mesh",S({},e,{ref:n,position:new k.Vector3(0,0,-28),children:[(0,r.jsx)("boxBufferGeometry",{args:[50,50,50,5,5,5],attach:"geometry"}),(0,r.jsx)(b.Y,{color:"black",attach:"material",distort:.25,speed:.25,reflectivity:.5,sheen:200,roughness:1})]}))})},M=function(){return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)("ambientLight",{}),(0,r.jsx)("pointLight",{intensity:1,position:[4,4,4],color:"blue"}),(0,r.jsx)(O,{}),(0,r.jsx)(E,{})]})};function T(){var e=(0,o.useState)(!1),n=e[0],t=e[1],s=(0,o.useState)(!1),a=s[0],l=s[1],c=(0,o.useState)(0),u=c[0],f=c[1],h=(0,d.cy)();(0,o.useEffect)((function(){h.setCurrentSong(m[0])}),[]);var p;return(0,o.useEffect)((function(){if(n){var e=setTimeout((function(){f(Math.min(100,u+10*Math.random())),u>=100&&(clearInterval(e),t(!1),l(!0))}),25);return function(){return clearTimeout(e)}}}),[n,u]),(0,r.jsx)(o.Fragment,{children:(0,r.jsxs)(L,{children:[!a&&(0,r.jsx)(_,{children:(0,r.jsx)(i.Button,{css:{zIndex:1,pointerEvents:"all"},color:"primary",rounded:!0,onClick:function(){t(!0)},disabled:n,icon:n?(0,r.jsx)(i.Loading,{color:"white",size:"sm",type:"spinner"}):null,children:n?(0,r.jsxs)(o.Fragment,{children:[Math.floor(u),"% Loaded",(0,r.jsx)(i.Progress,{color:"primary"})]}):"Play"})}),(0,r.jsx)(z,{shadows:!0,gl:{antialias:!1},dpr:Math.max(null!==(p=window.devicePixelRatio)&&void 0!==p?p:1,2),children:(0,r.jsx)(o.Suspense,{fallback:null,children:a?(0,r.jsx)(v,{}):(0,r.jsx)(M,{})})})]})})}var L=(0,i.styled)("div",{padding:"$8",height:"100%"}),_=(0,i.styled)("div",{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:1,pointerEvents:"none"}),z=(0,i.styled)(s.Xz,{position:"absolute",height:"100%",top:0,left:0,background:"$accents1",borderRadius:"$base"})}},function(e){e.O(0,[737,121,115,774,888,179],(function(){return n=8663,e(e.s=n);var n}));var n=e.O();_N_E=n}]);