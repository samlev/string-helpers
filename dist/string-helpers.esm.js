var r=function(r){return r.charAt(0).toLowerCase()+r.slice(1)},e=function(r){return r.charAt(0).toUpperCase()+r.slice(1)},n=function(r){return r.replace(/((?<=^|[^a-z])[a-z][A-Z]{2,}|(?<=^|[^A-Z])[A-Z][a-z]{2,}|(?<=^|[^a-zA-Z])[a-z]+|(?<=^|[^a-zA-Z])[A-Z]+)/g,function(r){return e(r.toLowerCase())})},t=function(r){return r.split(/[^a-z0-9]/gi).map(n).join("")},a=function(r){return r.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")},i={camel:function(e){return r(t(e))},headline:function(r){return t(r).replaceAll(/(?<=^|[a-z])([A-Z0-9])/g," $1").replaceAll(/(?<=^|[0-9])([A-Za-z])/g," $1").trim()},lcfirst:r,normalize:n,random:function(r){return void 0===r&&(r=16),Array.from(crypto.getRandomValues(new Uint8Array(Math.max(1,r))),function(r){return r.toString(36)}).join("")},regexp:{sanitize:a,path:function(r,e,n){void 0===e&&(e="^"),void 0===n&&(n="$");var t=e,i=n,o=null!=r?r:"";return o.startsWith("*.")&&(t=e+"[a-zA-Z0-9-_]+",o=o.slice(1)),o.endsWith(".*")&&(i="[a-zA-Z0-9-_.]+"+n,o=o.slice(0,-1)),o=o.split(".*.").map(a).join(".[a-zA-Z0-9-_]+."),new RegExp(""+t+o+i)}},snake:function(r){return t(r).replaceAll(/(?<=[a-z])([A-Z0-9])/g,"_$1").replaceAll(/(?<=[0-9])([A-Za-z])/g,"_$1").toLowerCase()},squish:function(r){return r.replaceAll(/\s+/g," ").trim()},studly:t,ucfirst:e};export{i as default};
//# sourceMappingURL=string-helpers.esm.js.map
