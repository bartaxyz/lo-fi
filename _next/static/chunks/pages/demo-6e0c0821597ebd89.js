(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{8663:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo",function(){return t(2635)}])},2635:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return G}});var r=t(5893),i=t(7294),o=t(3923),s=t(5147),a=t(6665),l=t(4336),c=t(8626),u=t(5769),f=[{name:"Good Things Take Time",artist:"Ond\u0159ej B\xe1rta",file:"/music/sound/OndrejBarta-GoodThingsTakeTime.mp3",cover:"/music/covers/OndrejBarta-GoodThingsTakeTime.png"}];function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],s=!0,a=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);s=!0);}catch(l){a=!0,i=l}finally{try{s||null==t.return||t.return()}finally{if(a)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return d(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=function(e){var n=e.musicPlayer,t=(0,c.L)("/models/vinyl.gltf"),o=m((0,u.m)([f[0].cover]),1)[0],a=(0,u.m)("/models/vinyl-normal.png"),d=(0,u.m)("/models/vinyl-inverted-normal.png"),h=((0,s.Ky)(),(0,l.M4)("Vinyl",{reflectivity:100,metalness:1.4,roughness:.5})),y=(0,l.M4)("Cover",{reflectivity:100,metalness:1});return console.log("BOOOBOOOBOOO",{musicPlayer:n}),(0,s.xQ)((function(e,r){if(t&&n.isPlaying){var i=Math.PI/2;t.scene.rotation.y+=i*r}})),(0,i.useEffect)((function(){t&&o&&y&&h&&(console.log(t.scene.children),t.scene.children[1].material.map=o,t.scene.children[1].material.roughnessMap=d,t.scene.children[1].material.metalnessMap=a,t.scene.children[1].material.roughness=h.roughness,t.scene.children[1].material.reflectivity=h.reflectivity,t.scene.children[1].material.metalness=h.metalness,t.scene.children[0].material.map=o,t.scene.children[0].material.reflectivity=y.reflectivity,t.scene.children[0].material.metalness=y.metalness)}),[t,o,y,h]),(0,r.jsx)(i.Suspense,{fallback:null,children:(0,r.jsx)("primitive",{object:t.scene})})},y=function(){var e=(0,c.L)("/models/record-player.gltf");return(0,s.xQ)((function(n,t){if(e)Math.PI})),(0,i.useEffect)((function(){}),[e]),(0,r.jsx)(i.Suspense,{fallback:null,children:(0,r.jsx)("primitive",{object:e.scene})})},v=function(){var e=(0,c.L)("/models/environment.gltf");return(0,r.jsx)(i.Suspense,{fallback:null,children:(0,r.jsx)("primitive",{object:e.scene})})};function p(){var e=(0,s.Ky)((function(e){return e.controls})),n=(0,l.M4)("Camera",{azimuth:{value:Math.PI/2,min:0,max:Math.PI},polar:{value:.8,min:0,max:Math.PI/2},fov:{value:50,min:0,max:100}}),t=n.azimuth,r=n.polar,i=n.fov;return(0,s.xQ)((function(){null===e||void 0===e||e.setAzimuthalAngle(t),null===e||void 0===e||e.setPolarAngle(r),e.object.fov=i})),null}var g=function(e){var n=e.musicPlayer,t=(0,l.M4)("Light #1 Controls",{color:"#ffffff",position:[10,10,10],intensity:1}),o=(0,l.M4)("Light #2 Controls",{color:"#ffffff",position:[-5,8,6],intensity:1}),s=(0,i.useRef)();return console.log(s.current),(0,i.useEffect)((function(){}),[s.current]),(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(a.z,{makeDefault:!0,ref:s,enabled:!0,zoom0:1e3}),(0,r.jsx)(p,{}),(0,r.jsx)("ambientLight",{}),(0,r.jsx)("pointLight",{color:t.color,position:t.position,intensity:t.intensity}),(0,r.jsx)("pointLight",{color:o.color,position:o.position,intensity:o.intensity}),(0,r.jsx)(v,{}),(0,r.jsx)(h,{musicPlayer:n}),(0,r.jsx)(y,{})]})},x=t(5121);function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){j(e,n,t[n])}))}return e}var P=function(e){var n=(0,i.useRef)();return(0,s.xQ)((function(e,t){if(n.current){var r=.15;n.current.rotation.x+=t*r,n.current.rotation.y+=t*r,n.current.rotation.z+=t*r}})),(0,r.jsx)(i.Fragment,{children:(0,r.jsxs)("mesh",b({},e,{ref:n,children:[(0,r.jsx)("icosahedronBufferGeometry",{args:[1,5],attach:"geometry"}),(0,r.jsx)(x.Y,{color:"red",attach:"material",distort:.6,speed:1,wireframe:!0})]}))})},O=t(2212);function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){w(e,n,t[n])}))}return e}var S=function(e){var n=(0,i.useRef)();return(0,r.jsx)(i.Fragment,{children:(0,r.jsxs)("mesh",E({},e,{ref:n,position:new O.Vector3(0,0,-28),children:[(0,r.jsx)("boxBufferGeometry",{args:[50,50,50,5,5,5],attach:"geometry"}),(0,r.jsx)(x.Y,{color:"black",attach:"material",distort:.25,speed:.25,reflectivity:.5,sheen:200,roughness:1})]}))})},C=function(){return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)("ambientLight",{}),(0,r.jsx)("pointLight",{intensity:1,position:[4,4,4],color:"blue"}),(0,r.jsx)(P,{}),(0,r.jsx)(S,{})]})},k=t(1540),L=t.n(k),M=(0,i.createContext)({setCurrentSong:function(){},setAudioContext:function(){},setIsPlaying:function(){},play:function(){},pause:function(){}}),I=function(){var e=(0,i.useContext)(M);if(void 0===e)throw new Error("useMusicPlayer must be used within a MusicPlayerProvider");return e},A=function(){var e=I(),n=e.currentSong,t=(e.audioContext,e.setAudioContext),o=e.setIsPlaying,s=(0,i.useState)(),a=s[0],l=s[1];return(0,i.useEffect)((function(){if(a){t(a);var e=function(){return o(!0)},n=function(){return o(!1)};return a.addEventListener("play",e),a.addEventListener("ended",n),a.addEventListener("pause",n),function(){a.removeEventListener("play",e),a.removeEventListener("ended",n),a.removeEventListener("pause",n)}}}),[a]),n?(0,r.jsx)(L(),{ref:function(e){e&&e.audioEl&&e.audioEl.current&&l(e.audioEl.current)},src:n.file,autoPlay:!0,controls:!0,style:{display:"none"}}):null},T=function(e){var n=e.children,t=(0,i.useState)(),o=t[0],s=t[1],a=(0,i.useState)(),l=a[0],c=a[1],u=(0,i.useState)(!1),f=u[0],d=u[1];return(0,r.jsx)(M.Provider,{value:{currentSong:o,setCurrentSong:s,audioContext:l,setAudioContext:c,isPlaying:f,setIsPlaying:d,play:function(){l&&l.play(),d(!0)},pause:function(){l&&l.pause(),d(!1)}},children:(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(A,{}),n]})})},_=t(9521),z=t(7854),B=function(){var e=(0,_.S)(),n=(e.active,e.progress);e.errors,e.item,e.loaded,e.total;return(0,r.jsx)(z.V,{center:!0,children:(0,r.jsxs)(o.Button,{rounded:!0,disabled:!0,icon:(0,r.jsx)(o.Loading,{color:"white",size:"sm",type:"spinner"}),children:[n.toFixed(0)," % loaded"]})})},F=function(){var e=(0,i.useState)(!1),n=e[0],t=e[1],s=I();(0,i.useEffect)((function(){s.setCurrentSong(f[0])}),[]);var a;return(0,r.jsx)(i.Fragment,{children:(0,r.jsxs)(N,{children:[n?(0,r.jsx)(Q,{children:(0,r.jsx)(o.Button,{rounded:!0,onClick:function(){s.isPlaying?s.pause():s.play()},children:s.isPlaying?"Stop":"Play"})}):(0,r.jsx)(R,{children:(0,r.jsx)(o.Button,{css:{zIndex:1,pointerEvents:"all"},color:"primary",rounded:!0,onClick:function(){t(!0)},children:"Play"})}),(0,r.jsx)($,{shadows:!0,gl:{antialias:!0},dpr:Math.max(null!==(a=window.devicePixelRatio)&&void 0!==a?a:1,2),children:(0,r.jsx)(i.Suspense,{fallback:(0,r.jsx)(B,{}),children:n?(0,r.jsx)(g,{musicPlayer:s}):(0,r.jsx)(C,{})})})]})})};function G(){return(0,r.jsx)(T,{children:(0,r.jsx)(F,{})})}var N=(0,o.styled)("div",{padding:"$8",height:"100%"}),R=(0,o.styled)("div",{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:1,pointerEvents:"none"}),Q=(0,o.styled)("div",{position:"absolute",bottom:"0",left:"0",right:"0",zIndex:1,pointerEvents:"none"}),$=(0,o.styled)(s.Xz,{position:"absolute",height:"100%",top:0,left:0,background:"$accents1",borderRadius:"$base"})}},function(e){e.O(0,[737,121,113,774,888,179],(function(){return n=8663,e(e.s=n);var n}));var n=e.O();_N_E=n}]);