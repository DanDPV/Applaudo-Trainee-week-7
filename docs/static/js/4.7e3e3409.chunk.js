(this["webpackJsonptime-machine"]=this["webpackJsonptime-machine"]||[]).push([[4],{37:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,c=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){i=!0,c=u}finally{try{r||null==a.return||a.return()}finally{if(i)throw c}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return i}))},38:function(e,t,n){"use strict";var r=n(0);t.a=function(e){var t=Object(r.useRef)(),n=Object(r.useRef)([]);return Object(r.useEffect)((function(){t.current=e,n.current.unshift(e)}),[e]),[t.current,function(e){return n.current[e]},n.current.length,function(){n.current=[]}]}},39:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return c}))},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r,i=n(37),c=n(2),o=n(0),a=(n(40),function(e){var t=e.position,n=e.bgColor,r=e.checked,i=e.isTraveling,o=e.handleClick;return Object(c.jsx)("button",{type:"button",className:"square",style:{backgroundColor:n,opacity:r?"100%":"50%",cursor:i?"not-allowed":"pointer",boxShadow:r?"0 0 4px rgba(0, 0, 0, 0.16), 0 6px 8px rgba(0, 0, 0, 0.26)":"none",border:r?"groove":"none",borderColor:r?"black":"none",borderWidth:r?"thin":"0"},onClick:function(){return o(t)},children:" "})}),u=(n(41),function(e){var t=e.squares,n=e.isTraveling,r=e.handleClick,u=Object(o.useState)(["#f466c8","#f54242","#5fc9f9","#d3adc6","#788f43","#d1c000","#07d1c7","#df5e51","#c9a43d","#3f01c0","#29b502","#e42e5f","#a7762b","#cdb852","#7d3f99","#7d3f09"]),s=Object(i.a)(u,1)[0];return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"board-grid",children:t&&t.map((function(e,t){return Object(c.jsx)(a,{position:t,bgColor:s[t],checked:e,handleClick:r,isTraveling:n},s[t])}))})})}),s=(n(42),function(e){var t=e.currentPosition,n=e.timeLength,r=e.getPreviousValue,a=e.handleResume,u=Object(o.useState)(!0),s=Object(i.a)(u,2),l=s[0],b=s[1],f=Object(o.useState)(!0),d=Object(i.a)(f,2),O=d[0],j=d[1];return Object(o.useEffect)((function(){b(0===n||t===(n>1?n-1:n)),j(0===t)}),[t,n]),Object(c.jsxs)("div",{className:"menu-container",children:[Object(c.jsx)("button",{type:"button",className:"menu-option",disabled:l,onClick:function(){return r(1)},children:"Previous"}),Object(c.jsx)("button",{type:"button",className:"menu-option",disabled:O,onClick:function(){return r(-1)},children:"Next"}),Object(c.jsx)("button",{type:"button",className:"menu-option",disabled:O,onClick:function(){return a()},children:"Resume"})]})}),l=n(38),b=n(39);!function(e){e.SET_NEXT_OPTION="SET_NEXT_OPTION",e.MOVE_IN_TIME="MOVE_IN_TIME"}(r||(r={}));var f=r,d=Array(16).fill(!1),O={currentPosition:0,isTraveling:!1,squares:d,historySquares:d},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,n=t.payload,r=n.currentPosition,i=n.isTraveling,c=n.squares;switch(t.type){case f.SET_NEXT_OPTION:return Object(b.a)(Object(b.a)({},e),{},{squares:c,historySquares:c});case f.MOVE_IN_TIME:return Object(b.a)(Object(b.a)({},e),{},{currentPosition:r,isTraveling:i,squares:c});default:return e}};n(43),t.default=function(){var e=Array(16).fill(!1),t=Object(o.useReducer)(j,O),n=Object(i.a)(t,2),r=n[0],a=n[1],b=r.currentPosition,d=r.isTraveling,h=r.squares,p=r.historySquares,v=Object(l.a)(p),y=Object(i.a)(v,3),m=y[1],g=y[2];return Object(c.jsxs)("div",{className:"page-content",children:[Object(c.jsx)("h1",{children:"Time machine"}),Object(c.jsx)("div",{className:"time-machine-messages",children:Object(c.jsx)("h5",{children:d?"You are now traveling in time":"You are currently in present"})}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"board",children:Object(c.jsx)(u,{squares:h,handleClick:function(t){if(!d){var n=e;n&&(n[t]=!0,a({type:f.SET_NEXT_OPTION,payload:{squares:n}}))}},isTraveling:d})}),Object(c.jsx)("div",{className:"info",children:Object(c.jsx)(s,{getPreviousValue:function(t){if(void 0!==b){var n,r=b+t,i=!1;i=0!==r,a({type:f.MOVE_IN_TIME,payload:{currentPosition:r,isTraveling:i,squares:null!==(n=m(r))&&void 0!==n?n:e}})}},handleResume:function(){var t;a({type:f.MOVE_IN_TIME,payload:{currentPosition:0,isTraveling:!1,squares:null!==(t=m(0))&&void 0!==t?t:e}})},currentPosition:b,timeLength:g})})]})]})}}}]);
//# sourceMappingURL=4.7e3e3409.chunk.js.map