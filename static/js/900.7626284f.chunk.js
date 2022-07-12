"use strict";(self.webpackChunkbaskin_client2=self.webpackChunkbaskin_client2||[]).push([[900],{843:function(r,n,e){e.d(n,{Z:function(){return t}});var a=e(878);function t(r){var n=r.children;return(0,a.jsx)("div",{className:"",children:n})}},329:function(r,n,e){e.d(n,{Z:function(){return l}});e(167);var a=e(0),t=e(878);function l(r){var n=r.svg,e=r.text,l=r.to;return(0,t.jsx)("header",{className:"my-6",children:(0,t.jsxs)(a.rU,{to:l,className:"flex align-baseline w-fit",children:[(0,t.jsx)("svg",{className:"w-9 h-9 mr-5 drop-shadow-xl dark:fill-white",children:n}),(0,t.jsx)("h2",{className:"font-bold text-2xl",children:e})]})})}},673:function(r,n,e){e.d(n,{Z:function(){return m},k:function(){return f}});var a=e(189),t=e(808),l=(e(167),e(383)),u=e(878),s=["onChange","name","value"];function i(r){var n=r.onChange,e=r.name,l=r.value,i=(0,t.Z)(r,s);return(0,u.jsx)("input",(0,a.Z)({className:"border \r dark:bg-gray-800\r border-gray-300 \r dark:border-gray-600\r text-base \r rounded-lg \r outline-1\r focus:outline-blue-600\r dark:focus:outline-blue-200\r block \r w-full \r p-2",type:"number",onChange:n,value:l,name:e},i))}function o(r){var n=r.htmlFor,e=r.children;return(0,u.jsx)("label",{htmlFor:n,className:" text-base font-medium block text-gray-800 dark:text-gray-100",children:e})}function c(r){var n=r.children;return(0,u.jsx)("div",{className:"mb-4 max-w-sm",children:n})}function d(r){var n=r.gameSetting,e=r.dispatch;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(c,{children:[(0,u.jsx)(o,{htmlFor:"num-player",children:"\ud50c\ub808\uc774\uc5b4 \uc218"}),(0,u.jsx)(i,{name:"num-player",value:n.numPlayer,onChange:function(r){return e({type:l.oM.SET_NUM_PLAYER,payload:r.target.value})}})]}),(0,u.jsxs)(c,{children:[(0,u.jsx)(o,{htmlFor:"max-call",children:"\ud55c \ubc88\uc5d0 \ubd80\ub974\ub294 \ucd5c\ub300 \uc218"}),(0,u.jsx)(i,{name:"max-call",value:n.maxCall,onChange:function(r){return e({type:l.oM.SET_MAX_CALL,payload:r.target.value})}})]}),(0,u.jsxs)(c,{children:[(0,u.jsx)(o,{htmlFor:"num-end",children:"\ub9c8\uc9c0\ub9c9 \uc22b\uc790"}),(0,u.jsx)(i,{name:"num-end",value:n.numEnd,onChange:function(r){return e({type:l.oM.SET_NUM_END,payload:r.target.value})}})]})]})}function m(r){var n=r.gameSetting,e=r.dispatch;return(0,u.jsx)("div",{className:"flex flex-col mt-4 mb-4",children:(0,u.jsx)(d,{gameSetting:n,dispatch:e})})}function f(r){var n=r.gameSetting,e=r.dispatch;return(0,u.jsxs)("div",{className:"flex flex-col mt-4 mb-4",children:[(0,u.jsx)(d,{gameSetting:n,dispatch:e}),(0,u.jsxs)(c,{children:[(0,u.jsx)(o,{htmlFor:"my-turn",children:"\ub098\uc758 \uc21c\uc11c"}),(0,u.jsx)(i,{name:"my-turn",value:n.myOrder,onChange:function(r){return e({type:l.oM.SET_MY_ORDER,payload:r.target.value})}})]})]})}},900:function(r,n,e){e.r(n),e.d(n,{default:function(){return C}});var a=e(809),t=e(673);function l(r){return r.reduce((function(r,n){return r>n?n:r}),1/0)}function u(r){if(r.length<=1)return r;var n=r.slice(1);return n.push(r[0]),n}function s(r){var n=r.reduce((function(r,n){return r+n}),0);return r.map((function(r){return r/n}))}function i(r,n){return n.reduce((function(n,e,a){return n.map((function(n,t){return n+e[t]*r[a]}))}),new Array(n[0].length).fill(0))}function o(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.absTol,a=void 0===e?1e-4:e,t=l(r),u=r.map((function(r){return Math.abs(r-t)<a?1:0})),i=s(u);return i}function c(r,n,e,a){var t=a-e,l=Math.max(t,0),u=Math.max(t-n,0);return r.slice(u,l)}function d(r,n,e){try{var a=[],t=function(r){var n=Array(r).fill(0);return n[0]=1,n}(r);a.push(t);for(var l=e-1;l>=0;l--){var u=c(a,n,l,e),s=i(o(u.map((function(r){return r[0]}))),u.map((function(r){return function(r){if(r.length<=1)return r;var n=r.slice(0,-1);return n.unshift(r[r.length-1]),n}(r)})));a.push(s)}return a.reverse()}catch(d){return[[]]}}var m=e(329),f=e(529),x=e(383),h=e(208),v=e(843),p=e(126),g=e(252),y=e(893),b=e(878),j={plugins:{legend:{display:!1}}};function N(r){var n,e=r.loseProbAtZero,a=(n=e).reduce((function(r,e,a){return e<n[r]?a:r}),0),t=function(r){return r.reduce((function(n,e,a){return e>r[n]?a:n}),0)}(e),l={labels:Array.from(Array(e.length).keys()).map((function(r){return"".concat(r+1,"\ubc88")})),datasets:[{id:1,label:"\ud50c\ub808\uc774\uc5b4 \uc2b9\ub960",data:e.map((function(r){return 1-r})),backgroundColor:"#FF4500"}]};return(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{className:"text-2xl",children:"\uc21c\uc11c\ubcc4 \uc2b9\ub960 \ubd84\uc11d"}),(0,b.jsx)("p",{children:"".concat(a+1,"\ubc88\uc9f8\ub85c \ud558\ub294 \uac8c \uc81c\uc77c \uc720\ub9ac\ud569\ub2c8\ub2e4. ").concat(t+1,"\ubc88\uc9f8\ub85c \ud558\ub294 \uac8c \uc81c\uc77c \ubd88\ub9ac\ud569\ub2c8\ub2e4.")}),(0,b.jsx)(y.$Q,{data:l,options:j})]})}function E(r,n){return{labels:Array.from(Array(r.length).keys()),datasets:[{id:0,label:"\ud50c\ub808\uc774\uc5b4 \uc2b9\ub960",data:r.map((function(r){return 1-r[0]})),backgroundColor:"#FF4500",borderColor:n?"#FF4500":"#C9C7C7"}]}}var _={plugins:{legend:{display:!1}}};function M(r){var n=r.loseProbMat,e=r.darkMode;return(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{className:" text-2xl",children:"\uc22b\uc790\ubcc4 \uc2b9\ub960 \ubd84\uc11d"}),(0,b.jsx)("p",{children:"\uc138\ub85c\ucd95(\ub192\uc774)\ub294 \uac01 \uc22b\uc790\uc5d0\uc11c \ub05d\ub0c8\uc744 \ub54c \uc2b9\ub960\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4."}),(0,b.jsx)("p",{children:"\uc790\uc2e0 \ud134\uc5d0\uc11c \ub9d0\ud560 \uc218 \uc788\ub294 \uc22b\uc790 \uc911 \uac00\uc7a5 \uc2b9\ub960\uc774 \ub192\uc740 \uc22b\uc790\uae4c\uc9c0 \ub9d0\ud558\uba74 \ub429\ub2c8\ub2e4."}),(0,b.jsx)(y.x1,{datasetIdKey:"1",data:E(n,e),options:_})]})}function Z(r){var n=r.loseProbMat,e=r.darkMode;return(0,b.jsxs)("div",{className:"flex flex-row flex-wrap",children:[(0,b.jsx)("article",{className:"max-w-2xl w-full px-4 mb-8 flex-shrink flex-grow",children:(0,b.jsx)(M,{loseProbMat:n,darkMode:e})}),(0,b.jsx)("article",{className:"max-w-2xl w-full px-4 flex-shrink flex-grow",children:(0,b.jsx)(N,{loseProbAtZero:u(n[0])})})]})}g.kL.register.apply(g.kL,(0,p.Z)(g.zX));var k=e(167);function C(){var r=(0,x.ZP)(),n=(0,a.Z)(r,2),e=n[0],l=n[1],u=(0,k.useDeferredValue)((0,x.xg)(e)),s=(0,k.useMemo)((function(){return d(u.numPlayer,u.maxCall,u.numEnd)}),[u]),i=(0,h.ZP)(),o=(0,a.Z)(i,1)[0];return(0,b.jsxs)("section",{children:[(0,b.jsx)(m.Z,{svg:(0,b.jsx)(f.RI,{}),text:"\uc2b9\ub960 \uacc4\uc0b0\uae30",to:"/calculator"}),(0,b.jsx)(v.Z,{children:(0,b.jsx)("p",{children:"\uac8c\uc784 \uc124\uc815\uc5d0 \ub530\ub978 \uc774\ub860\uc801 \uc2b9\ub960\uc744 \uacc4\uc0b0\ud574\uc90d\ub2c8\ub2e4."})}),(0,b.jsx)(t.Z,{gameSetting:e,dispatch:l}),(0,b.jsx)(Z,{loseProbMat:s,darkMode:o})]})}},383:function(r,n,e){e.d(n,{ZP:function(){return o},oM:function(){return a},xg:function(){return u}});var a,t=e(189),l=e(167);function u(r){var n,e,a,t;return{numPlayer:null!==(n=Number.parseInt(r.numPlayer))&&void 0!==n?n:0,maxCall:null!==(e=Number.parseInt(r.maxCall))&&void 0!==e?e:0,numEnd:null!==(a=Number.parseInt(r.numEnd))&&void 0!==a?a:0,myOrder:null!==(t=Number.parseInt(r.myOrder)-1)&&void 0!==t?t:0}}function s(r,n){var e,l=null!==(e=Number.parseInt(n.payload))&&void 0!==e?e:0;switch(n.type){case a.SET_MAX_CALL:if(l>1e3)return r;var u=Number.parseInt(r.numEnd);return!Number.isNaN(u)&&l>u?(0,t.Z)((0,t.Z)({},r),{},{maxCall:u.toString()}):(0,t.Z)((0,t.Z)({},r),{},{maxCall:n.payload});case a.SET_MY_ORDER:var s=Number.parseInt(r.numPlayer);return!Number.isNaN(s)&&l>s?(0,t.Z)((0,t.Z)({},r),{},{myOrder:s.toString()}):(0,t.Z)((0,t.Z)({},r),{},{myOrder:n.payload});case a.SET_NUM_END:return l>1e3?r:(0,t.Z)((0,t.Z)({},r),{},{numEnd:n.payload});case a.SET_NUM_PLAYER:return l>500?r:(0,t.Z)((0,t.Z)({},r),{},{numPlayer:n.payload});default:return r}}!function(r){r.SET_NUM_PLAYER="SET_NUM_PLAYER",r.SET_MAX_CALL="SET_MAX_CALL",r.SET_NUM_END="SET_NUM_END",r.SET_MY_ORDER="SET_MY_ORDER"}(a||(a={}));var i={numEnd:"31",numPlayer:"3",maxCall:"3",myOrder:"1"};function o(){return(0,l.useReducer)(s,i)}}}]);
//# sourceMappingURL=900.7626284f.chunk.js.map