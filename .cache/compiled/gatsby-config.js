!function(e,n,t,r,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u="function"==typeof i[r]&&i[r],f=u.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function d(n,t){if(!f[n]){if(!e[n]){var o="function"==typeof i[r]&&i[r];if(!t&&o)return o(n,!0);if(u)return u(n,!0);if(l&&"string"==typeof n)return l(n);var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}c.resolve=function(t){var r=e[n][1][t];return null!=r?r:t},c.cache={};var a=f[n]=new d.Module(n);e[n][0].call(a.exports,c,a,a.exports,this)}return f[n].exports;function c(e){var n=c.resolve(e);return!1===n?{}:d(n)}}d.isParcelRequire=!0,d.Module=function(e){this.id=e,this.bundle=d,this.exports={}},d.modules=e,d.cache=f,d.parent=u,d.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(d,"root",{get:function(){return i[r]}}),i[r]=d;for(var s=0;s<n.length;s++)d(n[s]);if(t){var a=d(t);"object"==typeof exports&&"undefined"!=typeof module?module.exports=a:"function"==typeof define&&define.amd&&define((function(){return a}))}}({jYWDk:[function(e,n,t){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(t);const r={siteMetadata:{title:"ollop",siteUrl:"https://www.yourdomain.tld"},graphqlTypegen:!0,plugins:["gatsby-plugin-sass"]};t.default=r},{"@parcel/transformer-js/src/esmodule-helpers.js":"iNk3N"}],iNk3N:[function(e,n,t){t.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},t.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.exportAll=function(e,n){return Object.keys(e).forEach((function(t){"default"===t||"__esModule"===t||n.hasOwnProperty(t)||Object.defineProperty(n,t,{enumerable:!0,get:function(){return e[t]}})})),n},t.export=function(e,n,t){Object.defineProperty(e,n,{enumerable:!0,get:t})}},{}]},["jYWDk"],"jYWDk","parcelRequire1a84");
//# sourceMappingURL=gatsby-config.js.map