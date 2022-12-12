/* Qwik Service Worker */
const appBundles=[["q-03b4389c.js",[24,35],["oU1eoiI0AW0"]],["q-04abce2d.js",[5,24,35],["HrqAK9a0Xr0","PioeegRlDss"]],["q-07c1940d.js",[35],["15p0cKUxgIE"]],["q-09724b78.js",[24,35],["8gdLBszqbaM","EpaZ5qQ4Lg4","kzjavhDI3L0","u0YVoxt2aTY","yiXwCC0m3jY"]],["q-09ef2b19.js",[35],["JxaiZdhjaFc"]],["q-0b6e546b.js",[35]],["q-106229aa.js",[1,5,24,35],["9HNT04zd0Dk","WVvggdkUPdk"]],["q-1b24718c.js",[35],["AFOemhGi21U"]],["q-1b6b857c.js",[24,35],["WmYC5H00wtI"]],["q-1ba1d900.js",[1,5,24,35],["4w4c951ufB4","uYOSy7w7Zqw"]],["q-1d4e3858.js",[]],["q-201c58e5.js",[35]],["q-230852a6.js",[1,5,24,35],["7wCAiJVliNE"]],["q-29423762.js",[1,5,24,35],["nRyVBtbGKc8"]],["q-356bc1a3.js",[35]],["q-35e4d3ba.js",[1,5,24,35],["nXOUbUnjTAo"]],["q-3688e34d.js",[1,5,24,35],["0XKYzaR059E","MYUZ0j1uLsw","nG7I7RYG3JQ","RzhhZa265Yg"]],["q-477466b2.js",[24,35],["AKetNByE5TM"]],["q-4c372d0a.js",[35],["uLAKe1WJQD0"]],["q-4d3d0053.js",[35]],["q-543baabc.js",[35],["Gd6c6uAzGKo"]],["q-54b92871.js",[35]],["q-590f53d5.js",[35],["T0AypnadAK0"]],["q-684f656e.js",[35],["a5mSleG0cuQ"]],["q-734ba983.js",[35],["BluJujxReuI","d95mSi8t8U8"]],["q-74ed9f97.js",[1,5,24,35],["fBMYiVf9fuU","LRxDkFa1EfU"]],["q-75b8b4fc.js",[1,5,24,35],["a1JZ0Q0Q2Oc","gJoMUICXoUQ"]],["q-87894292.js",[21,35],["iVw374IU4UQ","mHCKGza3XBU"]],["q-8b4c703b.js",[35],["5f6sbkJ2fBk","OnjGlk9VifY","Wj0RtxIwRL0"]],["q-8d037163.js",[1,5,24,35],["aGi0RpYNBO0","cA0sVHIkr5g","FwcO310HVAI","hEAI0ahViXM","LQM67VNl14k","OIBatobA0hE","wLg5o3ZkpC0"]],["q-962db4d7.js",[24,35],["2Eo7WCpaqI8","TxCFOy819ag"]],["q-9903a7f2.js",[1,5,24,35],["qdcTZflYyoQ"]],["q-a02b4942.js",[1,5,24,35],["AxgWjrHdlAI","Uji08ORjXbE"]],["q-aa8e6508.js",[1,5,24,35],["FXvIDBSffO8"]],["q-ad7afd43.js",[35],["V2cIdsOO22Y"]],["q-b03c6f1f.js",[]],["q-b45418d8.js",[1,5,24,35],["7yLj4bxdI6c","s7JLZz7MCCQ"]],["q-b57bdbda.js",[35],["9bL4nnZ0oB8"]],["q-c843ab12.js",[35]],["q-d4c272bc.js",[1,5,24,35],["Og0xL34Zbvc"]],["q-daa4f7c5.js",[21,24,35],["0dwFtB4M0as"]],["q-e1af9f9b.js",[35],["ZWF9iD5WeLg"]]];
const libraryBundleIds=[38];
const linkBundles=[[/^\/$/,[11,20,5,1,4,7,18,34,37]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
