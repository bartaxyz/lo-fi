(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{8663:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo",function(){return n(407)}])},407:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var r=n(5893),i=n(7294),o=n(3923),a=n(5147),s=n(6665),c=n(4336);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e){var t=(0,i.useRef)(),n=(0,c.M4)({position:[0,-.06,0]}).position;return(0,r.jsxs)("mesh",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},e,{ref:t,rotation:[-Math.PI/2,0,0],position:n,receiveShadow:!0,children:[(0,r.jsx)("planeBufferGeometry",{attach:"geometry",args:[100,100]}),(0,r.jsx)("meshPhysicalMaterial",{attach:"material",color:"#111"})]}))},f=n(8626),d=n(5769),h=[{name:"Good Things Take Time",artist:"Ond\u0159ej B\xe1rta",file:"/music/sound/OndrejBarta-GoodThingsTakeTime.mp3",cover:"/music/covers/OndrejBarta-GoodThingsTakeTime.png"}],m=n(4234);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(c){s=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g=function(){var e=(0,f.L)("/models/vinyl.gltf"),t=y((0,d.m)([h[0].cover]),1)[0],n=(0,d.m)("/models/vinyl-texture.png"),o=(0,d.m)("/models/vinyl-normal.png"),s=(0,d.m)("/models/vinyl-inverted-normal.png"),l=(0,m.cy)(),u=(0,a.Ky)(),p=(0,c.M4)("Vinyl",{reflectivity:100,metalness:1.4,roughness:.5}),g=(0,c.M4)("Cover",{reflectivity:100,metalness:1.4});return console.log({musicPlayer:l}),(0,a.xQ)((function(t,n){var r=Math.PI/2;e.scene.rotation.y+=r*n})),(0,i.useEffect)((function(){e&&t&&g&&p&&(n.anisotropy=u.gl.capabilities.getMaxAnisotropy(),console.log(e.scene.children),e.scene.children[1].material.map=t,e.scene.children[1].material.roughnessMap=s,e.scene.children[1].material.metalnessMap=o,e.scene.children[1].material.roughness=p.roughness,e.scene.children[1].material.reflectivity=p.reflectivity,e.scene.children[1].material.metalness=p.metalness,e.scene.children[0].material.map=t,e.scene.children[0].material.reflectivity=g.reflectivity)}),[e,t,g,p]),(0,r.jsx)(i.Suspense,{fallback:null,children:(0,r.jsx)("primitive",{object:e.scene})})},j=function(){var e=(0,f.L)("/models/record-player.gltf");return(0,a.xQ)((function(t,n){if(e)Math.PI})),(0,i.useEffect)((function(){e&&(e.scene.position.set(0,0,0),e.scene.scale.set(.14,.14,.14))}),[e]),(0,r.jsx)(i.Suspense,{fallback:null,children:(0,r.jsx)("primitive",{object:e.scene})})},b=function(){return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(s.z,{}),(0,r.jsx)("ambientLight",{}),(0,r.jsx)("pointLight",{position:[10,10,10],castShadow:!0,shadowMapHeight:800,shadowMapWidth:800}),(0,r.jsx)("pointLight",{position:[10,10,5],castShadow:!0,shadowMapHeight:800,shadowMapWidth:800}),(0,r.jsx)(u,{}),(0,r.jsx)(g,{}),(0,r.jsx)(j,{})]})},v=n(5121);function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){x(e,t,n[t])}))}return e}var O=function(e){var t=(0,i.useRef)();return(0,a.xQ)((function(e,n){if(t.current){var r=.15;t.current.rotation.x+=n*r,t.current.rotation.y+=n*r,t.current.rotation.z+=n*r}})),(0,r.jsx)(i.Fragment,{children:(0,r.jsxs)("mesh",w({},e,{ref:t,children:[(0,r.jsx)("icosahedronBufferGeometry",{args:[1,5],attach:"geometry"}),(0,r.jsx)(v.Y,{color:"red",attach:"material",distort:.6,speed:1,wireframe:!0})]}))})},P=n(2212);function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){S(e,t,n[t])}))}return e}var k=function(e){var t=(0,i.useRef)();return(0,r.jsx)(i.Fragment,{children:(0,r.jsxs)("mesh",M({},e,{ref:t,position:new P.Vector3(0,0,-28),children:[(0,r.jsx)("boxBufferGeometry",{args:[50,50,50,5,5,5],attach:"geometry"}),(0,r.jsx)(v.Y,{color:"black",attach:"material",distort:.25,speed:.25,reflectivity:.5,sheen:200,roughness:1})]}))})},E=function(){return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)("ambientLight",{}),(0,r.jsx)("pointLight",{intensity:1,position:[4,4,4],color:"blue"}),(0,r.jsx)(O,{}),(0,r.jsx)(k,{})]})};function T(){var e=(0,i.useState)(!1),t=e[0],n=e[1],a=(0,i.useState)(!1),s=a[0],c=a[1],l=(0,i.useState)(0),u=l[0],f=l[1],d=(0,m.cy)();(0,i.useEffect)((function(){d.setCurrentSong(h[0])}),[]);var p;return(0,i.useEffect)((function(){if(t){var e=setTimeout((function(){f(Math.min(100,u+10*Math.random())),u>=100&&(clearInterval(e),n(!1),c(!0))}),25);return function(){return clearTimeout(e)}}}),[t,u]),(0,r.jsx)(i.Fragment,{children:(0,r.jsxs)(_,{children:[!s&&(0,r.jsx)(I,{children:(0,r.jsx)(o.Button,{css:{zIndex:1,pointerEvents:"all"},color:"primary",rounded:!0,onClick:function(){n(!0)},disabled:t,icon:t?(0,r.jsx)(o.Loading,{color:"white",size:"sm",type:"spinner"}):null,children:t?(0,r.jsxs)(i.Fragment,{children:[Math.floor(u),"% Loaded",(0,r.jsx)(o.Progress,{color:"primary"})]}):"Play"})}),(0,r.jsx)(L,{shadows:!0,gl:{antialias:!1},dpr:Math.max(null!==(p=window.devicePixelRatio)&&void 0!==p?p:1,2),children:(0,r.jsx)(i.Suspense,{fallback:(0,r.jsx)(E,{}),children:s?(0,r.jsx)(b,{}):(0,r.jsx)(E,{})})})]})})}var _=(0,o.styled)("div",{padding:"$8",height:"100%"}),I=(0,o.styled)("div",{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:1,pointerEvents:"none"}),L=(0,o.styled)(a.Xz,{position:"absolute",height:"100%",top:0,left:0,background:"$accents1",borderRadius:"$base"})}},function(e){e.O(0,[737,121,814,774,888,179],(function(){return t=8663,e(e.s=t);var t}));var t=e.O();_N_E=t}]);