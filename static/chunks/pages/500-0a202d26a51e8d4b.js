(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[573],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var u in r)n.call(r,u)&&r[u]&&e.push(u);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},662:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/500",function(){return r(4367)}])},4260:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(5893);function o(){return(0,n.jsx)("footer",{className:"mx-auto mb-4 max-w-2xl p-4 lg:mb-7 lg:p-0",children:(0,n.jsxs)("div",{className:"Inter-Medium space-x-9 text-right",children:[(0,n.jsx)("a",{href:"https://github.com/jdlanyon",className:"text-white transition",children:"GitHub"}),(0,n.jsx)("a",{href:"mailto:jlany9@hotmail.com",className:"text-white transition",children:"Email"})]})})}},3505:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5893),o=r(1163),a=r(1664),i=r(4184),u=r.n(i);function l(e){var t=e.href,r=e.text,i=(0,o.useRouter)().asPath===t;return(0,n.jsx)(a.default,{href:t,children:(0,n.jsx)("a",{className:u()(i?"Inter-Regular font-semibold text-white":"Inter-Medium text-[#ddd]","p-1 pr-4 sm:p-4"),children:(0,n.jsx)("span",{children:r})})})}function c(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("nav",{className:"Inter-Regular mx-auto my-0 flex w-full max-w-2xl justify-end py-8 text-gray-400",children:(0,n.jsxs)("div",{children:[(0,n.jsx)(l,{href:"/",text:"Home"}),(0,n.jsx)(l,{href:"/overview",text:"Overview"}),(0,n.jsx)(l,{href:"/projects",text:"Projects"}),(0,n.jsx)(l,{href:"/contact",text:"Contact"}),(0,n.jsx)("a",{target:"_blank",rel:"noreferrer noopener",className:"Inter-Medium p-1 pr-4 text-[#aaa] sm:p-4",href:"Resume.pdf",children:"Resume"})]})})})}},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},u=r(1003),l=r(880),c=r(9246);var s={};function f(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),a=i.default.useMemo((function(){var t=o(u.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?u.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,h=e.children,m=e.replace,v=e.shallow,x=e.scroll,y=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var g=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,b=o(c.useIntersection({rootMargin:"200px"}),2),j=b[0],w=b[1],I=i.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);i.default.useEffect((function(){var e=w&&r&&u.isLocalURL(d),t="undefined"!==typeof y?y:n&&n.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(n,d,p,{locale:t})}),[p,d,w,y,r,n]);var E={ref:I,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:l,scroll:i}))}(e,n,d,p,m,v,x,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof y?y:n&&n.locale,N=n&&n.isLocaleDomain&&u.getDomainLocale(p,M,n&&n.locales,n&&n.domainLocales);E.href=N||u.addBasePath(u.addLocale(p,M,n&&n.defaultLocale))}return i.default.cloneElement(t,E)};t.default=d},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!u,s=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],h=o(a.useState(t?t.current:null),2),m=h[0],v=h[1],x=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=l.get(n):(t=l.get(r),c.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:r}))}),[n,m,r,d]);return a.useEffect((function(){if(!u&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&v(t.current)}),[t]),[x,d]};var a=r(7294),i=r(4686),u="undefined"!==typeof IntersectionObserver;var l=new Map,c=[]},4367:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(5893),o=r(1664),a=r(2962),i=r(4260),u=r(3505);function l(){return(0,n.jsxs)("div",{children:[(0,n.jsx)(a.PB,{title:"Jack Latimer",description:"500"}),(0,n.jsx)(u.Z,{}),(0,n.jsxs)("div",{className:"max-w-2x1 mx-auto mt-12 flex flex-col justify-center text-center",children:[(0,n.jsx)("h1",{className:"Inter-Regular mb-4 text-6xl tracking-tight text-black md:text-5xl",children:"500 \u2013 Server-side error occurred"}),(0,n.jsx)(o.default,{href:"/",children:(0,n.jsx)("a",{className:"Inter-Medium mx-auto w-64 p-1 text-center text-black underline sm:p-4",children:"Return Home"})})]}),(0,n.jsx)("div",{className:"pt-[40rem]",children:(0,n.jsx)(i.Z,{})})]})}},1664:function(e,t,r){e.exports=r(1551)}},function(e){e.O(0,[774,888,179],(function(){return t=662,e(e.s=t);var t}));var t=e.O();_N_E=t}]);