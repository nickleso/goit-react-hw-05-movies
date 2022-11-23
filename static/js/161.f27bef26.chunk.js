"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[161],{426:function(n,e,r){r.d(e,{_S:function(){return i},bs:function(){return l},cJ:function(){return v},kR:function(){return h},yW:function(){return p}});var t=r(861),a=r(757),o=r.n(a),c=r(44);c.ZP.defaults.baseURL="https://api.themoviedb.org/3";var u="3c2d3d1a4a9318a7ef02a0fdedccb03f";function i(n){return s.apply(this,arguments)}function s(){return(s=(0,t.Z)(o().mark((function n(e){var r,t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/trending/movie/day?api_key=".concat(u,"&page=").concat(e),n.next=3,c.ZP.get(r);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(o().mark((function n(e){var r,t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/movie/".concat(e,"?api_key=").concat(u),n.next=3,c.ZP.get(r);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(o().mark((function n(e){var r,t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/search/movie?api_key=".concat(u,"&query=").concat(e),n.next=3,c.ZP.get(r);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(o().mark((function n(e){var r,t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/movie/".concat(e,"/credits?api_key=").concat(u),n.next=3,c.ZP.get(r);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return b.apply(this,arguments)}function b(){return(b=(0,t.Z)(o().mark((function n(e){var r,t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/movie/".concat(e,"/reviews?api_key=").concat(u),n.next=3,c.ZP.get(r);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},161:function(n,e,r){r.r(e),r.d(e,{default:function(){return _}});var t,a,o,c=r(861),u=r(885),i=r(757),s=r.n(i),p=r(791),f=r(731),l=r(689),d=r(426),h=r(168),x=r(444),v=x.ZP.button(t||(t=(0,h.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-around;\n  border: 1px solid blue;\n  border-color: #1a7ac8;\n  border-radius: 5px;\n  width: 100px;\n  height: 40px;\n  color: #1a7ac8;\n\n  &:hover {\n    color: #fff;\n    background-color: #058bf8;\n    cursor: pointer;\n  }\n"]))),b=x.ZP.input(a||(a=(0,h.Z)(["\n  border: 1px solid #1a7ac8;\n  border-color: #1a7ac8;\n  border-radius: 5px;\n  width: 200px;\n  height: 36px;\n\n  color: #1a7ac8;\n\n  &:hover {\n    background-color: #f1f4f7;\n  }\n"]))),m=x.ZP.form(o||(o=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 40px;\n"]))),y=r(856),g=r(184),Z=function(n){var e=n.onSubmit;return(0,g.jsxs)(m,{onSubmit:e,children:[(0,g.jsx)(b,{type:"text",name:"filmInput",autoComplete:"off",autoFocus:!0,placeholder:"Search films"}),(0,g.jsxs)(v,{type:"submit",children:[(0,g.jsx)(y.lHc,{size:20}),"Search"]})]})},w=r(368),k=function(n){var e=n.visibleMovies,r=(0,l.TH)();return(0,g.jsx)("ul",{children:e.map((function(n){var e=n.id,t=n.title,a=n.name;return(0,g.jsx)("li",{children:(0,g.jsx)(w.Fg,{to:"".concat(e),state:{from:r},children:t||a})},e)}))})},_=function(){var n,e=(0,p.useState)([]),r=(0,u.Z)(e,2),t=r[0],a=r[1],o=(0,f.lr)(),i=(0,u.Z)(o,2),h=i[0],x=i[1],v=null!==(n=h.get("name"))&&void 0!==n?n:"",b=(0,l.TH)();(0,p.useEffect)((function(){function n(){return(n=(0,c.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.bs)(v);case 3:if(!((e=n.sent).results.length<1)){n.next=6;break}return n.abrupt("return",alert("No Films on your query"));case 6:a(e.results),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}v&&function(){n.apply(this,arguments)}()}),[v]);var m=(0,p.useMemo)((function(){return t.filter((function(n){return n.title.toLowerCase().includes(v)}))}),[t,v]);return(0,g.jsxs)("main",{children:[(0,g.jsx)(Z,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget.elements.filmInput.value.toLowerCase();if(""===e.trim())return alert("Please, enter film name.");var r=""!==e?{name:e.trim()}:{};x(r)}}),m&&(0,g.jsx)(k,{visibleMovies:m,state:{from:b}})]})}},368:function(n,e,r){r.d(e,{Fg:function(){return f},hb:function(){return p},lx:function(){return s}});var t,a,o,c=r(168),u=r(444),i=r(731),s=u.ZP.div(t||(t=(0,c.Z)(["\n  padding: 16px;\n  display: flex;\n  gap: 10px;\n  box-shadow: 0px 4px 10px 4px #9e9e9e;\n"]))),p=(0,u.ZP)(i.rU)(a||(a=(0,c.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-around;\n  border: 1px solid blue;\n  border-color: #1a7ac8;\n  border-radius: 5px;\n  width: 100px;\n  height: 40px;\n  color: #1a7ac8;\n\n  &:hover {\n    color: #fff;\n    background-color: #058bf8;\n  }\n"]))),f=(0,u.ZP)(i.rU)(o||(o=(0,c.Z)(["\n  color: #1a7ac8;\n\n  &:hover {\n    color: #fff;\n    background-color: #058bf8;\n  }\n"])))}}]);
//# sourceMappingURL=161.f27bef26.chunk.js.map