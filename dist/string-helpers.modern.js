var a=a=>a.charAt(0).toLowerCase()+a.slice(1),e=a=>a.charAt(0).toUpperCase()+a.slice(1),l=a=>a.replace(/((?<=^|[^a-z])[a-z][A-Z]{2,}|(?<=^|[^A-Z])[A-Z][a-z]{2,}|(?<=^|[^a-zA-Z])[a-z]+|(?<=^|[^a-zA-Z])[A-Z]+)/g,a=>e(a.toLowerCase())),r=a=>a.split(/[^a-z0-9]/gi).map(l).join(""),t=a=>a.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&"),s={camel:e=>a(r(e)),headline:a=>r(a).replaceAll(/(?<=^|[a-z])([A-Z0-9])/g," $1").replaceAll(/(?<=^|[0-9])([A-Za-z])/g," $1").trim(),lcfirst:a,normalize:l,random:(a=16)=>Array.from(crypto.getRandomValues(new Uint8Array(Math.max(1,a))),a=>a.toString(36)).join("").substring(0,Math.max(1,a)),regexp:{sanitize:t,path:(a,e="^",l="$")=>{let r=e,s=l,i=null!=a?a:"";return i.startsWith("*.")&&(r=`${e}[a-zA-Z0-9-_]+`,i=i.slice(1)),i.endsWith(".*")&&(s=`[a-zA-Z0-9-_.]+${l}`,i=i.slice(0,-1)),i=i.split(".*.").map(t).join(".[a-zA-Z0-9-_]+."),new RegExp(`${r}${i}${s}`)}},snake:a=>r(a).replaceAll(/(?<=[a-z])([A-Z0-9])/g,"_$1").replaceAll(/(?<=[0-9])([A-Za-z])/g,"_$1").toLowerCase(),squish:a=>a.replaceAll(/\s+/g," ").trim(),studly:r,ucfirst:e};export{s as default};
//# sourceMappingURL=string-helpers.modern.js.map
