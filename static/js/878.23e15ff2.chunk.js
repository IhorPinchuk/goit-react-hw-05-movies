"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[878],{22:function(n,t,r){r.r(t),r.d(t,{default:function(){return s}});var e=r(439),c=r(689),a=r(791),u=r(390),o=r(184),i=function(n){var t=n.image,r=n.name;return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{width:100,src:t,alt:r}),(0,o.jsx)("p",{children:r})]})},s=function(){var n=(0,c.UO)().movieId,t=(0,a.useState)([]),r=(0,e.Z)(t,2),s=r[0],f=r[1];return(0,a.useEffect)((function(){(0,u.y)(n).then((function(n){return f(n)})).catch((function(n){console.log(n)}))}),[n]),(0,o.jsx)("ul",{children:s.map((function(n){var t=n.id,r=n.name,e=n.profile_path,c="https://image.tmdb.org/t/p/w300_and_h450_bestv2/".concat(e);return(0,o.jsx)(i,{name:r,image:c},t)}))})}},390:function(n,t,r){r.d(t,{Bt:function(){return l},Y5:function(){return p},_k:function(){return s},bI:function(){return f},y:function(){return h}});var e=r(861),c=r(757),a=r.n(c),u=r(243),o="https://api.themoviedb.org/3/",i="6a0c01f57c7aac7238ef2830c0821332",s=function(){var n=(0,e.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(o,"/trending/movie/day?api_key=").concat(i),n.next=3,u.Z.get(t).then((function(n){return n.data.results})).catch((function(n){return console.log(n)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(t),n.next=3,u.Z.get(r).then((function(n){return n.data.results})).catch((function(n){return console.log(n)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(o,"/movie/").concat(t,"?api_key=").concat(i),n.next=3,u.Z.get(r).then((function(n){return n.data})).catch((function(n){return console.log(n)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i),n.next=3,u.Z.get(r).then((function(n){return n.data.cast})).catch((function(n){return console.log(n)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i),n.next=3,u.Z.get(r).then((function(n){return n.data.results})).catch((function(n){return console.log(n)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=878.23e15ff2.chunk.js.map