(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{5955:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(9008),a=n(5893),o=function(e){var t=e.owner;return(0,a.jsxs)("footer",{children:[(0,a.jsx)("hr",{}),(0,a.jsx)("div",{className:"flex p-5 w-full justify-center",children:(0,a.jsxs)("span",{children:["\xa9\ufe0f 2021 ",t,"."]})})]})},i=n(1664),l=(n(7294),function(e){var t=e.title;return(0,a.jsx)(i.default,{href:"/",children:(0,a.jsx)("a",{className:"text-xl text-black",style:{fontFamily:"'Kaisei Decol', self"},children:t})})}),s=function(e){var t=e.title;return(0,a.jsx)("header",{className:"flex w-full bg-white border-b items-center justify-between flex-wrap pt-4 pb-4 pl-5 pr-5 m-auto top-0 shadow-sm",children:(0,a.jsx)(l,{title:t})})},c={siteMetadata:{title:"\u5553\u8499\u306e\u5742",author:"depth401"}},u=function(e){var t=e.children,n=e.title,i=void 0===n?"This is the default title":n;return(0,a.jsxs)("div",{className:"flex flex-col h-screen",children:[(0,a.jsxs)(r.default,{children:[(0,a.jsxs)("title",{children:[i," | ",c.siteMetadata.title]}),(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,a.jsx)(s,{title:c.siteMetadata.title}),(0,a.jsx)("main",{className:"flex-1 overflow-y-auto p-5",children:(0,a.jsx)("div",{className:"max-w-6xl mx-auto",children:t})}),(0,a.jsx)(o,{owner:"depth401"})]})}},2167:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var a,o=(a=n(7294))&&a.__esModule?a:{default:a},i=n(1063),l=n(4651),s=n(7426);var c={};function u(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=l.useRouter(),f=o.default.useMemo((function(){var t=i.resolveHref(a,e.href,!0),n=r(t,2),o=n[0],l=n[1];return{href:o,as:e.as?i.resolveHref(a,e.as):l||o}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,x=e.shallow,j=e.scroll,m=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var b=(t=o.default.Children.only(p))&&"object"===typeof t&&t.ref,w=s.useIntersection({rootMargin:"200px"}),y=r(w,2),_=y[0],g=y[1],E=o.default.useCallback((function(e){_(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,_]);o.default.useEffect((function(){var e=g&&n&&i.isLocalURL(d),t="undefined"!==typeof m?m:a&&a.locale,r=c[d+"%"+h+(t?"%"+t:"")];e&&!r&&u(a,d,h,{locale:t})}),[h,d,g,m,n,a]);var M={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,l,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),t[a?"replace":"push"](n,r,{shallow:o,locale:s,scroll:l}))}(e,a,d,h,v,x,j,m)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,d,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof m?m:a&&a.locale,N=a&&a.isLocaleDomain&&i.getDomainLocale(h,L,a&&a.locales,a&&a.domainLocales);M.href=N||i.addBasePath(i.addLocale(h,L,a&&a.defaultLocale))}return o.default.cloneElement(t,M)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,s=a.useRef(),c=a.useState(!1),u=r(c,2),f=u[0],d=u[1],h=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),l.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return a.useEffect((function(){if(!i&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),[h,f]};var a=n(7294),o=n(3447),i="undefined"!==typeof IntersectionObserver;var l=new Map},5655:function(e,t,n){"use strict";n.r(t);var r=n(1664),a=(n(7294),n(5955)),o=n(5893);t.default=function(){return(0,o.jsxs)(a.Z,{title:"About",children:[(0,o.jsx)("h1",{children:"About"}),(0,o.jsx)("p",{children:"This is the about page"}),(0,o.jsx)("p",{children:(0,o.jsx)(r.default,{href:"/",children:(0,o.jsx)("a",{children:"Go home"})})})]})}},4613:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(5655)}])},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=4613,e(e.s=t);var t}));var t=e.O();_N_E=t}]);