!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e||self).stringHelpers=n()}(this,function(){var e=function(e){return e.charAt(0).toLowerCase()+e.slice(1)},n=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},t=function(e){return e.replace(/((?<=^|[^a-z])[a-z][A-Z]{2,}|(?<=^|[^A-Z])[A-Z][a-z]{2,}|(?<=^|[^a-zA-Z])[a-z]+|(?<=^|[^a-zA-Z])[A-Z]+)/g,function(e){return n(e.toLowerCase())})},r=function(e){return t(e).replaceAll(/([^a-z0-9_]+)/g,"_$1").toLowerCase().replaceAll(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")},i=function(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")};return{camel:function(n){return e(n.split(/[^a-z0-9]/gi).map(t).join(""))},headline:function(e){return r(e).split("_").map(n).join(" ")},lcfirst:e,random:function(e){return void 0===e&&(e=16),Array.from(crypto.getRandomValues(new Uint8Array(Math.max(1,e))),function(e){return e.toString(36)}).join("")},regexp:{sanitize:i,path:function(e,n,t){void 0===n&&(n="^"),void 0===t&&(t="$");var r=n,a=t,o=null!=e?e:"";return o.startsWith("*.")&&(r=n+"[a-zA-Z0-9-_]+",o=o.slice(1)),o.endsWith(".*")&&(a="[a-zA-Z0-9-_.]+"+t,o=o.slice(0,-1)),o=o.split(".*.").map(i).join(".[a-zA-Z0-9-_]+."),new RegExp(""+r+o+a)}},snake:r,squish:function(e){return e.replaceAll(/\s+/g," ").trim()},ucfirst:n}});
//# sourceMappingURL=string-helpers.umd.js.map