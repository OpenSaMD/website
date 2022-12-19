/* Qwik Service Worker */
const appBundles=[["q-11b09fe3.js",[16],["a5mSleG0cuQ"]],["q-135d9921.js",[5,12,16,37],["fBMYiVf9fuU","LRxDkFa1EfU"]],["q-18215551.js",[5,12,16,37],["a1JZ0Q0Q2Oc","gJoMUICXoUQ"]],["q-1d4e3858.js",[]],["q-20b3ca6d.js",[16]],["q-309afda7.js",[16],["BluJujxReuI","d95mSi8t8U8"]],["q-31f38337.js",[5,12,16,37],["9HNT04zd0Dk","WVvggdkUPdk"]],["q-3293ac85.js",[5,16],["oU1eoiI0AW0"]],["q-3f4b11bd.js",[16],["d5FKcRWYJ8s"]],["q-41505a25.js",[5,12,16,37],["7wCAiJVliNE"]],["q-4578f655.js",[5,12,16,37],["0XKYzaR059E","MYUZ0j1uLsw","nG7I7RYG3JQ","RzhhZa265Yg"]],["q-4fb26b36.js",[5,16],["AKetNByE5TM"]],["q-5528877d.js",[16]],["q-567b8391.js",[16]],["q-62eedb05.js",[5,16],["WmYC5H00wtI"]],["q-690c593a.js",[16]],["q-6d484d6b.js",[]],["q-6ec1df59.js",[5,16],["8gdLBszqbaM","EpaZ5qQ4Lg4","kzjavhDI3L0","u0YVoxt2aTY","yiXwCC0m3jY"]],["q-6f804d5d.js",[5,12,16,37],["Og0xL34Zbvc"]],["q-81b50b18.js",[16],["Gd6c6uAzGKo"]],["q-95937321.js",[5,12,16,37],["nXOUbUnjTAo"]],["q-973ba239.js",[5,12,16,37],["4w4c951ufB4","uYOSy7w7Zqw"]],["q-9d71b604.js",[16],["15p0cKUxgIE"]],["q-a56b6ee7.js",[4,5,16],["0dwFtB4M0as"]],["q-ae957e50.js",[5,12,16,37],["AxgWjrHdlAI","Uji08ORjXbE"]],["q-affb228b.js",[16],["AFOemhGi21U"]],["q-b8d43ed3.js",[5,12,16,37],["7yLj4bxdI6c","s7JLZz7MCCQ"]],["q-b9f6a5c6.js",[5,12,16,37],["aGi0RpYNBO0","cA0sVHIkr5g","FwcO310HVAI","hEAI0ahViXM","LQM67VNl14k","OIBatobA0hE","wLg5o3ZkpC0"]],["q-bf08d34c.js",[5,12,16,37],["nRyVBtbGKc8"]],["q-cccf9ce8.js",[5,12,16,37],["qdcTZflYyoQ"]],["q-cdc5dfc7.js",[5,16],["2Eo7WCpaqI8","TxCFOy819ag"]],["q-e10fc55f.js",[16],["QoiYCQVXNUQ","V2cIdsOO22Y"]],["q-e95d3226.js",[16],["9bL4nnZ0oB8"]],["q-ed2ed829.js",[5,12,16,37],["FXvIDBSffO8"]],["q-f2e777b4.js",[16],["5f6sbkJ2fBk","OnjGlk9VifY","Wj0RtxIwRL0"]],["q-f4571d1f.js",[16],["T0AypnadAK0"]],["q-f5caad29.js",[16]],["q-f620b86c.js",[5,12,16],["HrqAK9a0Xr0","PioeegRlDss"]],["q-f70c00a3.js",[16]],["q-f9f0e6c0.js",[4,16],["iVw374IU4UQ","mHCKGza3XBU"]],["q-fda6a298.js",[16],["ZWF9iD5WeLg"]]];
const libraryBundleIds=[13];
const linkBundles=[[/^\/$/,[38,19,12,8,25,31,32,37]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
