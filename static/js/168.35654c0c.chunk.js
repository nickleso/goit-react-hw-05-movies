"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{426:function(t,n,e){e.d(n,{_S:function(){return s},bs:function(){return l},cJ:function(){return y},kR:function(){return d},yW:function(){return p}});var r=e(861),a=e(757),c=e.n(a),u=e(44);u.ZP.defaults.baseURL="https://api.themoviedb.org/3";var i="3c2d3d1a4a9318a7ef02a0fdedccb03f";function s(t){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function t(n){var e,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/trending/movie/day?api_key=".concat(i,"&page=").concat(n),t.next=3,u.ZP.get(e);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(n){var e,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/movie/".concat(n,"?api_key=").concat(i),t.next=3,u.ZP.get(e);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(n){var e,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/search/movie?api_key=".concat(i,"&query=").concat(n),t.next=3,u.ZP.get(e);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/movie/".concat(n,"/credits?api_key=").concat(i),t.next=3,u.ZP.get(e);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(n){var e,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/movie/".concat(n,"/reviews?api_key=").concat(i),t.next=3,u.ZP.get(e);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},79:function(t,n,e){e.r(n);var r=e(861),a=e(885),c=e(757),u=e.n(c),i=e(791),s=e(689),o=e(426),p=e(184);n.default=function(){var t=(0,s.UO)().id,n=(0,i.useState)(null),e=(0,a.Z)(n,2),c=e[0],f=e[1];return(0,i.useEffect)((function(){function n(){return(n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.cJ)(t);case 3:e=n.sent,f(e.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t,f]),c?(0,p.jsxs)("div",{children:[c.length<1&&(0,p.jsx)("p",{children:"We don't have any reviews for this movie."}),(0,p.jsx)("ul",{style:{display:"flex",gap:6,flexWrap:"wrap",listStyle:"none"},children:c.length>0&&c.map((function(t){var n=t.id,e=t.author,r=t.content;return(0,p.jsxs)("li",{children:[(0,p.jsx)("h3",{children:e||"no info"}),(0,p.jsx)("p",{children:r||"no info"})]},n)}))})]}):null}}}]);
//# sourceMappingURL=168.35654c0c.chunk.js.map