import{P as xe,_ as g,R as f,a as p,J as d,x as I,V as S,f as h,$ as ve,g as Ce,h as we}from"./q-ebeb8dcd.js";import{BUILDER_MODEL as ee,BUILDER_PUBLIC_API_KEY as te,CUSTOM_COMPONENTS as Ie}from"./q-8f8a66f2.js";import{i as Se}from"./q-9a520539.js";const W="qwik";function y(){return typeof window<"u"&&typeof document<"u"}const N={};function _e(e,t){let n=N[e];if(n||(n=N[e]=[]),n.push(t),y()){const o={type:"builder.register",data:{type:e,info:t}};try{parent.postMessage(o,"*"),parent!==window&&window.postMessage(o,"*")}catch(i){console.debug("Could not postmessage",i)}}}const Vn=()=>{_e("insertMenu",{name:"_default",default:!0,items:[{name:"Box"},{name:"Text"},{name:"Image"},{name:"Columns"},{name:"Core:Section"},{name:"Core:Button"},{name:"Embed"},{name:"Custom Code"}]})};let q=!1;const Fn=(e={})=>{var t,n;q||(q=!0,y()&&((t=window.parent)==null||t.postMessage({type:"builder.sdkInfo",data:{target:W,supportsPatchUpdates:!1,supportsAddBlockScoping:!0,supportsCustomBreakpoints:!0}},"*"),(n=window.parent)==null||n.postMessage({type:"builder.updateContent",data:{options:e}},"*"),window.addEventListener("message",({data:o})=>{var i,a;if(!!(o!=null&&o.type))switch(o.type){case"builder.evaluate":{const r=o.data.text,s=o.data.arguments||[],c=o.data.id,u=new Function(r);let l,b=null;try{l=u.apply(null,s)}catch(m){b=m}b?(i=window.parent)==null||i.postMessage({type:"builder.evaluateError",data:{id:c,error:b.message}},"*"):l&&typeof l.then=="function"?l.then(m=>{var x;(x=window.parent)==null||x.postMessage({type:"builder.evaluateResult",data:{id:c,result:m}},"*")}).catch(console.error):(a=window.parent)==null||a.postMessage({type:"builder.evaluateResult",data:{result:l,id:c}},"*");break}}})))},Ln=xe("Builder");function Re(){return y()&&window.self!==window.top}function C(){return Re()&&window.location.search.indexOf("builder.frameEditing=")!==-1}const T=e=>JSON.parse(JSON.stringify(e)),ne={small:{min:320,default:321,max:640},medium:{min:641,default:642,max:991},large:{min:990,default:991,max:1200}},K=(e,t=ne)=>`@media (max-width: ${t[e].max}px)`,ke=({small:e,medium:t})=>{const n=T(ne);if(!e||!t)return n;const o=Math.floor(e/2);n.small={max:e,min:o,default:o+1};const i=n.small.max+1;n.medium={max:t,min:i,default:i+1};const a=n.medium.max+1;return n.large={max:2e3,min:a,default:a+1},n};function E({code:e,context:t,state:n,event:o,isExpression:i=!0}){if(e===""){console.warn("Skipping evaluation of empty code block.");return}const a={isEditing:C(),isBrowser:y(),isServer:!y()},s=i&&!(e.includes(";")||e.includes(" return ")||e.trim().startsWith("return "))?`return (${e});`:e;try{return new Function("builder","Builder","state","context","event",s)(a,a,n,t,o)}catch(c){console.warn(`Builder custom code error: 
 While Evaluating: 
 `,s,`
`,c)}}const Te=(e,t,n)=>{if(Object(e)!==e)return e;const o=Array.isArray(t)?t:t.toString().match(/[^.[\]]+/g);return o.slice(0,-1).reduce((i,a,r)=>Object(i[a])===i[a]?i[a]:i[a]=Math.abs(Number(o[r+1]))>>0===+o[r+1]?[]:{},e)[o[o.length-1]]=n,e};const Ee=({block:e,context:t,state:n})=>{if(!e.bindings)return e;const o=T(e),i={...o,properties:{...o.properties},actions:{...o.actions}};for(const a in e.bindings){const r=e.bindings[a],s=E({code:r,state:n,context:t});Te(i,a,s)}return i};function j({block:e,context:t,shouldEvaluateBindings:n,state:o}){const i=e;return n?Ee({block:i,state:o,context:t}):i}const Ae=e=>e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),$e=e=>Object.entries(e).map(([n,o])=>{if(typeof o=="string")return`${Ae(n)}: ${o};`}).join(`
`),$=({mediaQuery:e,className:t,styles:n})=>{const o=`.${t} {
    ${$e(n)}
  }`;return e?`${e} {
      ${o}
    }`:o},Pe=function(t,n){return"style"},Oe=e=>{const t={};return t.tag=Pe(),d(S,{children:d(t.tag,{children:I(e,"styles")})},"Fb_0")},Ve=Oe,H=function(t,n){return j({block:t.block,state:t.context.state,context:t.context.context,shouldEvaluateBindings:!0})},z=function(t,n){var x;const o=H(t).responsiveStyles,i=t.context.content,a=ke(((x=i==null?void 0:i.meta)==null?void 0:x.breakpoints)||{}),r=o==null?void 0:o.large,s=o==null?void 0:o.medium,c=o==null?void 0:o.small,u=H(t).id,l=r?$({className:u,styles:r}):"",b=s?$({className:u,styles:s,mediaQuery:K("medium",a)}):"",m=c?$({className:u,styles:c,mediaQuery:K("small",a)}):"";return[l,b,m].join(" ")},Fe=e=>d(S,{children:z(e)?d(Ve,{styles:z(e)},"Fb_1"):null,[h]:{children:!1}},"Fb_2"),oe=Fe;function Le(e){return e.charAt(0).toUpperCase()+e.slice(1)}const Be=e=>`on${Le(e)}$`;function Ue(e,t){return f(()=>p(()=>import("./q-74517ac9.js"),["build/q-74517ac9.js","build/q-ebeb8dcd.js","build/q-8f8a66f2.js","build/q-9a520539.js"]),"s_7wCAiJVliNE",[t,e])}function We(e){var o;const t={},n=(o=e.block.actions)!=null?o:{};for(const i in n){if(!n.hasOwnProperty(i))continue;const a=n[i];t[Be(i)]=Ue(a,e)}return t}function je(e){var t;return{...(t=e.component)==null?void 0:t.options,...e.options,builderBlock:e}}function De(e){var t;return{...e.properties,"builder-id":e.id,class:[e.id,"builder-block",e.class,(t=e.properties)==null?void 0:t.class].filter(Boolean).join(" ")}}function Me(e){return e.tagName||"div"}const Ne=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],P=e=>typeof e=="string"&&Ne.includes(e.toLowerCase()),qe=e=>d(S,{children:e.componentRef?d(e.componentRef,{...e.componentOptions,children:[(e.blockChildren||[]).map(function(t){return d(Xe,{block:t,get context(){return e.context},[h]:{context:I(e,"context")}},"render-block-"+t.id)}),(e.blockChildren||[]).map(function(t){return d(oe,{block:t,get context(){return e.context},[h]:{context:I(e,"context")}},"block-style-"+t.id)})]}):null,[h]:{children:!1}},"Fb_3"),Ke=qe;f(()=>p(()=>import("./q-4acb660b.js"),["build/q-4acb660b.js","build/q-ebeb8dcd.js","build/q-8f8a66f2.js","build/q-9a520539.js"]),"s_nXOUbUnjTAo");const He=g(f(()=>p(()=>import("./q-2a961f1c.js"),["build/q-2a961f1c.js","build/q-ebeb8dcd.js","build/q-8f8a66f2.js","build/q-9a520539.js"]),"s_nRyVBtbGKc8")),ze=He,D=function(t,n){var a;const o=(a=j({block:t.block,state:t.context.state,context:t.context.context,shouldEvaluateBindings:!1}).component)==null?void 0:a.name;if(!o)return null;const i=t.context.registeredComponents[o];if(i)return i;console.warn(`
          Could not find a registered component named "${o}". 
          If you registered it, is the file that registered it imported by the file that needs to render it?`)},R=function(t,n){return Me(_(t))},_=function(t,n){return w(t)?t.block:j({block:t.block,state:t.context.state,context:t.context.context,shouldEvaluateBindings:!0})},V=function(t,n){return We({block:_(t),state:t.context.state,context:t.context.context})},F=function(t,n){return{...De(_(t))}},ie=function(t,n){var o;return!((o=D(t))!=null&&o.noWrap)},J=function(t,n){var o;return{blockChildren:ae(t),componentRef:(o=D(t))==null?void 0:o.component,componentOptions:{...je(_(t)),...ie(t)?{}:{attributes:{...F(t),...V(t)}}},context:L(t)}},ae=function(t,n){var o;return(o=_(t).children)!=null?o:[]},Y=function(t,n){var i;return!((i=D(t))!=null&&i.component)&&!w(t)?ae(t):[]},w=function(t,n){const{repeat:o,...i}=t.block;if(!(o!=null&&o.collection))return;const a=E({code:o.collection,state:t.context.state,context:t.context.context});if(!Array.isArray(a))return;const r=o.collection.split(".").pop(),s=o.itemName||(r?r+"Item":"item");return a.map((u,l)=>({context:{...t.context,state:{...t.context.state,$index:l,$item:u,[s]:u,[`$${s}Index`]:l}},block:i}))},Je=function(t,n){return{}},L=function(t,n){return{apiKey:t.context.apiKey,state:t.context.state,content:t.context.content,context:t.context.context,registeredComponents:t.context.registeredComponents,inheritedStyles:Je()}},Ye=function(t,n){return Ke},re=e=>{const t={};return t.tag=R(e),t.renderComponentTag=Ye(),d(S,{children:ie(e)?d(S,{children:[P(R(e))?d(t.tag,{...F(e),...V(e)}):null,!P(R(e))&&w(e)?(w(e)||[]).map(function(n,o){return d(ze,{get repeatContext(){return n.context},get block(){return n.block},[h]:{repeatContext:I(n,"context"),block:I(n,"block")}},o)}):null,!P(R(e))&&!w(e)?d(t.tag,{...F(e),...V(e),children:[d(t.renderComponentTag,{...J(e)}),(Y(e)||[]).map(function(n){return d(re,{block:n,context:L(e)},"render-block-"+n.id)}),(Y(e)||[]).map(function(n){return d(oe,{block:n,context:L(e)},"block-style-"+n.id)})]}):null],[h]:{children:!1}},"Fb_6"):d(t.renderComponentTag,{...J(e)}),[h]:{children:!1}},"Fb_7")},Xe=re,Bn=function(t,n,o){var i;return"builder-blocks"+((i=t.blocks)!=null&&i.length?"":" no-blocks")},Un=function(t,n,o){var i,a;C()&&!((i=t.blocks)!=null&&i.length)&&((a=window.parent)==null||a.postMessage({type:"builder.clickEmptyBlocks",data:{parentElementId:t.parent,dataPath:t.path}},"*"))},Wn=function(t,n,o){var i,a;C()&&!((i=t.blocks)!=null&&i.length)&&((a=window.parent)==null||a.postMessage({type:"builder.hoverEmptyBlocks",data:{parentElementId:t.parent,dataPath:t.path}},"*"))},Ge=g(f(()=>p(()=>import("./q-19ea1388.js"),["build/q-19ea1388.js","build/q-ebeb8dcd.js","build/q-8f8a66f2.js","build/q-9a520539.js"]),"s_MYUZ0j1uLsw")),jn=Ge,Dn=`.div-RenderBlocks { 
display: flex;
flex-direction: column;
align-items: stretch; }`,Qe=function(t,n){return typeof t.space=="number"?t.space||0:20},se=function(t,n){return t.columns||[]},Ze=function(t,n,o){var a;const i=se(t);return((a=i[o])==null?void 0:a.width)||100/i.length},Mn=function(t,n,o){const i=se(t),r=Qe(t)*(i.length-1)/i.length;return`calc(${Ze(t,n,o)}% - ${r}px)`},B=function(t,n,o){return(t.stackColumnsAt||"tablet")==="tablet"?o:"inherit"},Nn=function(t,n){const o=t.stackColumnsAt==="never"?"inherit":t.reverseColumnsWhenStacked?"column-reverse":"column";return{"--flex-dir":o,"--flex-dir-tablet":B(t,n,o)}},qn=function(t,n){const o="100%",i="0";return{"--column-width":o,"--column-margin-left":i,"--column-width-tablet":B(t,n,o),"--column-margin-left-tablet":B(t,n,i)}},et=g(f(()=>p(()=>import("./q-88270c6f.js"),["build/q-88270c6f.js","build/q-ebeb8dcd.js","build/q-8f8a66f2.js","build/q-9a520539.js"]),"s_7yLj4bxdI6c")),tt=et,Kn=`.div-Columns { 
display: flex;
align-items: stretch;
line-height: normal; }@media (max-width: 991px) { .div-Columns { 
flex-direction: var(--flex-dir-tablet); } }@media (max-width: 639px) { .div-Columns { 
flex-direction: var(--flex-dir); } }.div-Columns-2 { 
display: flex;
flex-direction: column;
align-items: stretch; }@media (max-width: 991px) { .div-Columns-2 { 
width: var(--column-width-tablet) !important;
margin-left: var(--column-margin-left-tablet) !important; } }@media (max-width: 639px) { .div-Columns-2 { 
width: var(--column-width) !important;
margin-left: var(--column-margin-left) !important; } }`;function X(e){return e.replace(/http(s)?:/,"")}function nt(e="",t,n){const o=new RegExp("([?&])"+t+"=.*?(&|$)","i"),i=e.indexOf("?")!==-1?"&":"?";return e.match(o)?e.replace(o,"$1"+t+"="+encodeURIComponent(n)+"$2"):e+i+t+"="+encodeURIComponent(n)}function ot(e,t){if(!e||!(e!=null&&e.match(/cdn\.shopify\.com/))||!t)return e;if(t==="master")return X(e);const n=e.match(/(_\d+x(\d+)?)?(\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?)/i);if(n){const o=e.split(n[0]),i=n[3],a=t.match("x")?t:`${t}x`;return X(`${o[0]}_${a}${i}`)}return null}function O(e){if(!e)return e;const t=[100,200,400,800,1200,1600,2e3];if(e.match(/builder\.io/)){let n=e;const o=Number(e.split("?width=")[1]);return isNaN(o)||(n=`${n} ${o}w`),t.filter(i=>i!==o).map(i=>`${nt(e,"width",i)} ${i}w`).concat([n]).join(", ")}return e.match(/cdn\.shopify\.com/)?t.map(n=>[ot(e,`${n}x${n}`),n]).filter(([n])=>!!n).map(([n,o])=>`${n} ${o}w`).concat([e]).join(", "):e}const G=function(t,n){var a;const i=t.image||t.src;if(!i||!(i.match(/builder\.io/)||i.match(/cdn\.shopify\.com/)))return t.srcset;if(t.srcset&&((a=t.image)==null?void 0:a.includes("builder.io/api/v1/image"))){if(!t.srcset.includes(t.image.split("?")[0]))return console.debug("Removed given srcset"),O(i)}else if(t.image&&!t.srcset)return O(i);return O(i)},Hn=function(t,n){var o;return((o=G(t))==null?void 0:o.match(/builder\.io/))&&!t.noWebp?G(t).replace(/\?/g,"?format=webp&"):""},zn=function(t,n){const o={position:"absolute",height:"100%",width:"100%",left:"0px",top:"0px"};return t.aspectRatio?o:void 0},it=g(f(()=>p(()=>import("./q-2401f36b.js"),["build/q-2401f36b.js","build/q-ebeb8dcd.js","build/q-8f8a66f2.js","build/q-9a520539.js"]),"s_LRxDkFa1EfU")),at=it,Jn=`.img-Image { 
opacity: 1;
transition: opacity 0.2s ease-in-out; }.div-Image { 
width: 100%;
pointer-events: none;
font-size: 0; }.div-Image-2 { 
display: flex;
flex-direction: column;
align-items: stretch;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%; }`,rt=g(f(()=>p(()=>import("./q-6c576519.js"),["build/q-6c576519.js","build/q-ebeb8dcd.js"]),"s_15p0cKUxgIE")),st=rt,ct=function(t,n){return{...t.autoPlay===!0?{autoPlay:!0}:{},...t.muted===!0?{muted:!0}:{},...t.controls===!0?{controls:!0}:{},...t.loop===!0?{loop:!0}:{},...t.playsInline===!0?{playsInline:!0}:{}}},Yn=function(t,n){return{...t.attributes,...ct(t)}},lt=g(f(()=>p(()=>import("./q-777c58cc.js"),["build/q-777c58cc.js","build/q-ebeb8dcd.js","build/q-8f8a66f2.js","build/q-9a520539.js"]),"s_qdcTZflYyoQ")),ut=lt,dt=g(f(()=>p(()=>import("./q-d82d6ca0.js"),["build/q-d82d6ca0.js","build/q-ebeb8dcd.js","build/q-8f8a66f2.js","build/q-9a520539.js"]),"s_gJoMUICXoUQ")),mt=dt,Xn=`.button-Button { 
all: unset; }`,ft={name:"Core:Button",builtIn:!0,image:"https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2F81a15681c3e74df09677dfc57a615b13",defaultStyles:{appearance:"none",paddingTop:"15px",paddingBottom:"15px",paddingLeft:"25px",paddingRight:"25px",backgroundColor:"#000000",color:"white",borderRadius:"4px",textAlign:"center",cursor:"pointer"},inputs:[{name:"text",type:"text",defaultValue:"Click me!",bubble:!0},{name:"link",type:"url",bubble:!0},{name:"openLinkInNewTab",type:"boolean",defaultValue:!1,friendlyName:"Open link in new tab"}],static:!0,noWrap:!0},A=e=>{const t=e.toString().trim();return`return (${!t.startsWith("function")&&!t.startsWith("(")?"function ":""}${t}).apply(this, arguments)`},pt={name:"Columns",builtIn:!0,inputs:[{name:"columns",type:"array",broadcast:!0,subFields:[{name:"blocks",type:"array",hideFromUI:!0,defaultValue:[{"@type":"@builder.io/sdk:Element",responsiveStyles:{large:{display:"flex",flexDirection:"column",alignItems:"stretch",flexShrink:"0",position:"relative",marginTop:"30px",textAlign:"center",lineHeight:"normal",height:"auto",minHeight:"20px",minWidth:"20px",overflow:"hidden"}},component:{name:"Image",options:{image:"https://builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",backgroundPosition:"center",backgroundSize:"cover",aspectRatio:.7004048582995948}}},{"@type":"@builder.io/sdk:Element",responsiveStyles:{large:{display:"flex",flexDirection:"column",alignItems:"stretch",flexShrink:"0",position:"relative",marginTop:"30px",textAlign:"center",lineHeight:"normal",height:"auto"}},component:{name:"Text",options:{text:"<p>Enter some text...</p>"}}}]},{name:"width",type:"number",hideFromUI:!0,helperText:"Width %, e.g. set to 50 to fill half of the space"},{name:"link",type:"url",helperText:"Optionally set a url that clicking this column will link to"}],defaultValue:[{blocks:[{"@type":"@builder.io/sdk:Element",responsiveStyles:{large:{display:"flex",flexDirection:"column",alignItems:"stretch",flexShrink:"0",position:"relative",marginTop:"30px",textAlign:"center",lineHeight:"normal",height:"auto",minHeight:"20px",minWidth:"20px",overflow:"hidden"}},component:{name:"Image",options:{image:"https://builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",backgroundPosition:"center",backgroundSize:"cover",aspectRatio:.7004048582995948}}},{"@type":"@builder.io/sdk:Element",responsiveStyles:{large:{display:"flex",flexDirection:"column",alignItems:"stretch",flexShrink:"0",position:"relative",marginTop:"30px",textAlign:"center",lineHeight:"normal",height:"auto"}},component:{name:"Text",options:{text:"<p>Enter some text...</p>"}}}]},{blocks:[{"@type":"@builder.io/sdk:Element",responsiveStyles:{large:{display:"flex",flexDirection:"column",alignItems:"stretch",flexShrink:"0",position:"relative",marginTop:"30px",textAlign:"center",lineHeight:"normal",height:"auto",minHeight:"20px",minWidth:"20px",overflow:"hidden"}},component:{name:"Image",options:{image:"https://builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",backgroundPosition:"center",backgroundSize:"cover",aspectRatio:.7004048582995948}}},{"@type":"@builder.io/sdk:Element",responsiveStyles:{large:{display:"flex",flexDirection:"column",alignItems:"stretch",flexShrink:"0",position:"relative",marginTop:"30px",textAlign:"center",lineHeight:"normal",height:"auto"}},component:{name:"Text",options:{text:"<p>Enter some text...</p>"}}}]}],onChange:A(e=>{function t(){n.forEach(o=>{o.delete("width")})}const n=e.get("columns");Array.isArray(n)&&!!n.find(i=>i.get("width"))&&(!!n.find(a=>!a.get("width"))||n.reduce((s,c)=>s+c.get("width"),0)!==100)&&t()})},{name:"space",type:"number",defaultValue:20,helperText:"Size of gap between columns",advanced:!0},{name:"stackColumnsAt",type:"string",defaultValue:"tablet",helperText:"Convert horizontal columns to vertical at what device size",enum:["tablet","mobile","never"],advanced:!0},{name:"reverseColumnsWhenStacked",type:"boolean",defaultValue:!1,helperText:"When stacking columns for mobile devices, reverse the ordering",advanced:!0}]},gt={name:"Fragment",static:!0,hidden:!0,builtIn:!0,canHaveChildren:!0,noWrap:!0},ht=g(f(()=>p(()=>import("./q-4c01b1c7.js"),["build/q-4c01b1c7.js","build/q-ebeb8dcd.js"]),"s_T0AypnadAK0")),bt=ht,yt={name:"Image",static:!0,builtIn:!0,image:"https://firebasestorage.googleapis.com/v0/b/builder-3b0a2.appspot.com/o/images%2Fbaseline-insert_photo-24px.svg?alt=media&token=4e5d0ef4-f5e8-4e57-b3a9-38d63a9b9dc4",defaultStyles:{position:"relative",minHeight:"20px",minWidth:"20px",overflow:"hidden"},canHaveChildren:!0,inputs:[{name:"image",type:"file",bubble:!0,allowedFileTypes:["jpeg","jpg","png","svg"],required:!0,defaultValue:"https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",onChange:A(e=>{e.delete("srcset"),e.delete("noWebp");function n(r,s=6e4){return new Promise((c,u)=>{const l=document.createElement("img");let b=!1;l.onload=()=>{b=!0,c(l)},l.addEventListener("error",m=>{console.warn("Image load failed",m.error),u(m.error)}),l.src=r,setTimeout(()=>{b||u(new Error("Image load timed out"))},s)})}function o(r){return Math.round(r*1e3)/1e3}const i=e.get("image"),a=e.get("aspectRatio");if(fetch(i).then(r=>r.blob()).then(r=>{r.type.includes("svg")&&e.set("noWebp",!0)}),i&&(!a||a===.7041))return n(i).then(r=>{const s=e.get("aspectRatio");e.get("image")===i&&(!s||s===.7041)&&r.width&&r.height&&(e.set("aspectRatio",o(r.height/r.width)),e.set("height",r.height),e.set("width",r.width))})})},{name:"backgroundSize",type:"text",defaultValue:"cover",enum:[{label:"contain",value:"contain",helperText:"The image should never get cropped"},{label:"cover",value:"cover",helperText:"The image should fill it's box, cropping when needed"}]},{name:"backgroundPosition",type:"text",defaultValue:"center",enum:["center","top","left","right","bottom","top left","top right","bottom left","bottom right"]},{name:"altText",type:"string",helperText:"Text to display when the user has images off"},{name:"height",type:"number",hideFromUI:!0},{name:"width",type:"number",hideFromUI:!0},{name:"sizes",type:"string",hideFromUI:!0},{name:"srcset",type:"string",hideFromUI:!0},{name:"lazy",type:"boolean",defaultValue:!0,hideFromUI:!0},{name:"fitContent",type:"boolean",helperText:"When child blocks are provided, fit to them instead of using the image's aspect ratio",defaultValue:!0},{name:"aspectRatio",type:"number",helperText:"This is the ratio of height/width, e.g. set to 1.5 for a 300px wide and 200px tall photo. Set to 0 to not force the image to maintain it's aspect ratio",advanced:!0,defaultValue:.7041}]},xt={name:"Core:Section",static:!0,builtIn:!0,image:"https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2F682efef23ace49afac61748dd305c70a",inputs:[{name:"maxWidth",type:"number",defaultValue:1200},{name:"lazyLoad",type:"boolean",defaultValue:!1,advanced:!0,description:"Only render this section when in view"}],defaultStyles:{paddingLeft:"20px",paddingRight:"20px",paddingTop:"50px",paddingBottom:"50px",marginTop:"0px",width:"100vw",marginLeft:"calc(50% - 50vw)"},canHaveChildren:!0,defaultChildren:[{"@type":"@builder.io/sdk:Element",responsiveStyles:{large:{textAlign:"center"}},component:{name:"Text",options:{text:"<p><b>I am a section! My content keeps from getting too wide, so that it's easy to read even on big screens.</b></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>"}}}]},vt=g(f(()=>p(()=>import("./q-87308aa7.js"),["build/q-87308aa7.js","build/q-ebeb8dcd.js"]),"s_ZWF9iD5WeLg")),Ct=vt,wt={name:"Symbol",noWrap:!0,static:!0,builtIn:!0,inputs:[{name:"symbol",type:"uiSymbol"},{name:"dataOnly",helperText:"Make this a data symbol that doesn't display any UI",type:"boolean",defaultValue:!1,advanced:!0,hideFromUI:!0},{name:"inheritState",helperText:"Inherit the parent component state and data",type:"boolean",defaultValue:!1,advanced:!0},{name:"renderToLiquid",helperText:"Render this symbols contents to liquid. Turn off to fetch with javascript and use custom targeting",type:"boolean",defaultValue:!1,advanced:!0,hideFromUI:!0},{name:"useChildren",hideFromUI:!0,type:"boolean"}]},It={name:"Text",static:!0,builtIn:!0,image:"https://firebasestorage.googleapis.com/v0/b/builder-3b0a2.appspot.com/o/images%2Fbaseline-text_fields-24px%20(1).svg?alt=media&token=12177b73-0ee3-42ca-98c6-0dd003de1929",inputs:[{name:"text",type:"html",required:!0,autoFocus:!0,bubble:!0,defaultValue:"Enter some text..."}],defaultStyles:{lineHeight:"normal",height:"auto",textAlign:"center"}},St={name:"Video",canHaveChildren:!0,builtIn:!0,defaultStyles:{minHeight:"20px",minWidth:"20px"},image:"https://firebasestorage.googleapis.com/v0/b/builder-3b0a2.appspot.com/o/images%2Fbaseline-videocam-24px%20(1).svg?alt=media&token=49a84e4a-b20e-4977-a650-047f986874bb",inputs:[{name:"video",type:"file",allowedFileTypes:["mp4"],bubble:!0,defaultValue:"https://firebasestorage.googleapis.com/v0/b/builder-3b0a2.appspot.com/o/assets%2FKQlEmWDxA0coC3PK6UvkrjwkIGI2%2F28cb070609f546cdbe5efa20e931aa4b?alt=media&token=912e9551-7a7c-4dfb-86b6-3da1537d1a7f",required:!0},{name:"posterImage",type:"file",allowedFileTypes:["jpeg","png"],helperText:"Image to show before the video plays"},{name:"autoPlay",type:"boolean",defaultValue:!0},{name:"controls",type:"boolean",defaultValue:!1},{name:"muted",type:"boolean",defaultValue:!0},{name:"loop",type:"boolean",defaultValue:!0},{name:"playsInline",type:"boolean",defaultValue:!0},{name:"fit",type:"text",defaultValue:"cover",enum:["contain","cover","fill","auto"]},{name:"fitContent",type:"boolean",helperText:"When child blocks are provided, fit to them instead of using the aspect ratio",defaultValue:!0,advanced:!0},{name:"position",type:"text",defaultValue:"center",enum:["center","top","left","right","bottom","top left","top right","bottom left","bottom right"]},{name:"height",type:"number",advanced:!0},{name:"width",type:"number",advanced:!0},{name:"aspectRatio",type:"number",advanced:!0,defaultValue:.7004048582995948},{name:"lazyLoad",type:"boolean",helperText:'Load this video "lazily" - as in only when a user scrolls near the video. Recommended for optmized performance and bandwidth consumption',defaultValue:!0,advanced:!0}]},_t={name:"Embed",static:!0,builtIn:!0,inputs:[{name:"url",type:"url",required:!0,defaultValue:"",helperText:"e.g. enter a youtube url, google map, etc",onChange:A(e=>{const t=e.get("url");if(t)return e.set("content","Loading..."),fetch(`https://iframe.ly/api/iframely?url=${t}&api_key=ae0e60e78201a3f2b0de4b`).then(o=>o.json()).then(o=>{e.get("url")===t&&(o.html?e.set("content",o.html):e.set("content","Invalid url, please try another"))}).catch(o=>{e.set("content","There was an error embedding this URL, please try again or another URL")});e.delete("content")})},{name:"content",type:"html",defaultValue:'<div style="padding: 20px; text-align: center">(Choose an embed URL)<div>',hideFromUI:!0}]},Rt=["text/javascript","application/javascript","application/ecmascript"],kt=e=>Rt.includes(e.type),Gn=function(t,n,o){if(!o||!o.getElementsByTagName)return;const i=o.getElementsByTagName("script");for(let a=0;a<i.length;a++){const r=i[a];if(r.src&&!n.scriptsInserted.includes(r.src)){n.scriptsInserted.push(r.src);const s=document.createElement("script");s.async=!0,s.src=r.src,document.head.appendChild(s)}else if(kt(r)&&!n.scriptsRun.includes(r.innerText))try{n.scriptsRun.push(r.innerText),new Function(r.innerText)()}catch(s){console.warn("`Embed`: Error running script:",s)}}},Tt=g(f(()=>p(()=>import("./q-cb7f61d7.js"),["build/q-cb7f61d7.js","build/q-ebeb8dcd.js","build/q-8f8a66f2.js","build/q-9a520539.js"]),"s_Uji08ORjXbE")),Et=Tt,At=g(f(()=>p(()=>import("./q-1e8ebe78.js"),["build/q-1e8ebe78.js","build/q-ebeb8dcd.js","build/q-8f8a66f2.js","build/q-9a520539.js"]),"s_FXvIDBSffO8")),$t=At,Pt={name:"Raw:Img",hideFromInsertMenu:!0,builtIn:!0,image:"https://firebasestorage.googleapis.com/v0/b/builder-3b0a2.appspot.com/o/images%2Fbaseline-insert_photo-24px.svg?alt=media&token=4e5d0ef4-f5e8-4e57-b3a9-38d63a9b9dc4",inputs:[{name:"image",bubble:!0,type:"file",allowedFileTypes:["jpeg","jpg","png","svg"],required:!0}],noWrap:!0,static:!0},Qn=function(t,n,o){if(o&&o.getElementsByTagName&&typeof window<"u"){const i=o.getElementsByTagName("script");for(let a=0;a<i.length;a++){const r=i[a];if(r.src){if(n.scriptsInserted.includes(r.src))continue;n.scriptsInserted.push(r.src);const s=document.createElement("script");s.async=!0,s.src=r.src,document.head.appendChild(s)}else if(!r.type||["text/javascript","application/javascript","application/ecmascript"].includes(r.type)){if(n.scriptsRun.includes(r.innerText))continue;try{n.scriptsRun.push(r.innerText),new Function(r.innerText)()}catch(s){console.warn("`CustomCode`: Error running script:",s)}}}}},Ot=g(f(()=>p(()=>import("./q-5c740ce1.js"),["build/q-5c740ce1.js","build/q-ebeb8dcd.js","build/q-8f8a66f2.js","build/q-9a520539.js"]),"s_uYOSy7w7Zqw")),Vt=Ot,Ft={name:"Custom Code",static:!0,builtIn:!0,requiredPermissions:["editCode"],inputs:[{name:"code",type:"html",required:!0,defaultValue:"<p>Hello there, I am custom HTML code!</p>",code:!0},{name:"replaceNodes",type:"boolean",helperText:"Preserve server rendered dom nodes",advanced:!0},{name:"scriptsClientOnly",type:"boolean",defaultValue:!1,helperText:"Only print and run scripts on the client. Important when scripts influence DOM that could be replaced when client loads",advanced:!0}]},Lt=()=>[{component:tt,...pt},{component:at,...yt},{component:$t,...Pt},{component:st,...It},{component:ut,...St},{component:kn,...wt},{component:mt,...ft},{component:Ct,...xt},{component:bt,...gt},{component:Et,..._t},{component:Vt,...Ft}];function U(e,t=null,n="."){return Object.keys(e).reduce((o,i)=>{const a=e[i],r=[t,i].filter(Boolean).join(n);return[typeof a=="object",a!==null,!(Array.isArray(a)&&a.length===0)].every(Boolean)?{...o,...U(a,r,n)}:{...o,[r]:a}},{})}const Q="builder.",Bt="options.",Ut=e=>{const t={};return e.forEach((n,o)=>{t[o]=n}),t},ce=e=>{if(!e)return{};const t=le(e),n={};return Object.keys(t).forEach(o=>{if(o.startsWith(Q)){const i=o.replace(Q,"").replace(Bt,"");n[i]=t[o]}}),n},Wt=()=>{if(!y())return{};const e=new URLSearchParams(window.location.search);return ce(e)},le=e=>e instanceof URLSearchParams?Ut(e):e;function jt(){return typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:null}async function ue(){const e=jt().fetch;if(typeof e>"u"&&typeof global<"u")throw new Error("`fetch()` not found, ensure you have it as part of your polyfills.");return e.default||e}const Dt=e=>{const t=e.split(".");return t.length>2?t.slice(1).join("."):e},de=async({name:e,canTrack:t})=>{var n;try{return t?(n=document.cookie.split("; ").find(o=>o.startsWith(`${e}=`)))==null?void 0:n.split("=")[1]:void 0}catch(o){console.debug("[COOKIE] GET error: ",o)}},Mt=e=>e.map(([t,n])=>n?`${t}=${n}`:t).join("; "),Nt=[["secure",""],["SameSite","None"]],qt=({name:e,value:t,expires:n})=>{const i=(y()?location.protocol==="https:":!0)?Nt:[[]],a=n?[["expires",n.toUTCString()]]:[[]],r=[[e,t],...a,["path","/"],["domain",Dt(window.location.hostname)],...i];return Mt(r)},me=async({name:e,value:t,expires:n,canTrack:o})=>{try{if(!o)return;const i=qt({name:e,value:t,expires:n});document.cookie=i}catch(i){console.warn("[COOKIE] SET error: ",i)}},Kt="builderio.variations",fe=e=>`${Kt}.${e}`,Ht=({contentId:e,canTrack:t})=>de({name:fe(e),canTrack:t}),zt=({contentId:e,canTrack:t,value:n})=>me({name:fe(e),value:n,canTrack:t}),k=e=>e!=null,Jt=e=>k(e.id)&&k(e.variations)&&Object.keys(e.variations).length>0,Yt=({id:e,variations:t})=>{var i;let n=0;const o=Math.random();for(const a in t){const r=(i=t[a])==null?void 0:i.testRatio;if(n+=r,o<n)return a}return e},Z=({item:e,testGroupId:t})=>{const n=e.variations[t];return t===e.id||!n?{testVariationId:e.id,testVariationName:"Default"}:{data:n.data,testVariationId:n.id,testVariationName:n.name||(n.id===e.id?"Default":"")}},Xt=async({item:e,canTrack:t})=>{const n=await Ht({canTrack:t,contentId:e.id}),o=n?Z({item:e,testGroupId:n}):void 0;if(o)return o;{const i=Yt({variations:e.variations,id:e.id});return zt({contentId:e.id,value:i,canTrack:t}).catch(a=>{console.error("could not store A/B test variation: ",a)}),Z({item:e,testGroupId:i})}},Gt=async({item:e,canTrack:t})=>{if(!Jt(e))return;const n=await Xt({item:e,canTrack:t});Object.assign(e,n)};async function Qt(e){return(await en({...e,limit:1})).results[0]||null}const Zt=e=>{const{limit:t=30,userAttributes:n,query:o,noTraverse:i=!1,model:a,apiKey:r,includeRefs:s=!0,locale:c}=e;if(!r)throw new Error("Missing API key");const u=new URL(`https://cdn.builder.io/api/v2/content/${a}?apiKey=${r}&limit=${t}&noTraverse=${i}&includeRefs=${s}${c?`&locale=${c}`:""}`),l={...Wt(),...le(e.options||{})},b=U(l);for(const m in b)u.searchParams.set(m,String(b[m]));if(n&&u.searchParams.set("userAttributes",JSON.stringify(n)),o){const m=U({query:o});for(const x in m)u.searchParams.set(x,JSON.stringify(m[x]))}return u};async function en(e){const t=Zt(e),o=await(await ue())(t.href).then(a=>a.json()),i=e.canTrack!==!1;if(i&&Array.isArray(o.results))for(const a of o.results)await Gt({item:a,canTrack:i});return o}function Zn(){return!y()||C()?!1:Boolean(location.search.indexOf("builder.preview=")!==-1)}const tn=[],eo=({component:e,...t})=>({type:"builder.registerComponent",data:on(t)}),nn=e=>typeof e=="function"?A(e):T(e),on=({inputs:e,...t})=>({...T(t),inputs:e==null?void 0:e.map(n=>Object.entries(n).reduce((o,[i,a])=>({...o,[i]:nn(a)}),{}))});function an(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}function pe(){return an().replace(/-/g,"")}const ge="builderSessionId",rn=async({canTrack:e})=>{if(!e)return;const t=await de({name:ge,canTrack:e});if(k(t))return t;{const n=sn();cn({id:n,canTrack:e})}},sn=()=>pe(),cn=({id:e,canTrack:t})=>me({name:ge,value:e,canTrack:t}),he=()=>y()&&typeof localStorage<"u"?localStorage:void 0,ln=({key:e,canTrack:t})=>{var n;try{return t?(n=he())==null?void 0:n.getItem(e):void 0}catch(o){console.debug("[LocalStorage] GET error: ",o)}},un=({key:e,canTrack:t,value:n})=>{var o;try{t&&((o=he())==null||o.setItem(e,n))}catch(i){console.debug("[LocalStorage] SET error: ",i)}},be="builderVisitorId",dn=({canTrack:e})=>{if(!e)return;const t=ln({key:be,canTrack:e});if(k(t))return t;{const n=mn();fn({id:n,canTrack:e})}},mn=()=>pe(),fn=({id:e,canTrack:t})=>un({key:be,value:e,canTrack:t}),pn=async({canTrack:e})=>{if(!e)return{visitorId:void 0,sessionId:void 0};const t=await rn({canTrack:e}),n=dn({canTrack:e});return{sessionId:t,visitorId:n}},gn=async({type:e,canTrack:t,apiKey:n,metadata:o,...i})=>({type:e,data:{...i,metadata:JSON.stringify(o),...await pn({canTrack:t}),ownerId:n}});async function hn(e){if(!e.apiKey){console.error("[Builder.io]: Missing API key for track call. Please provide your API key.");return}if(!!e.canTrack&&!C()&&!!(y()||W==="reactNative"))return fetch("https://builder.io/api/v1/track",{method:"POST",body:JSON.stringify({events:[await gn(e)]}),headers:{"content-type":"application/json"},mode:"cors"}).catch(t=>{console.error("Failed to track: ",t)})}const bn=function(t,n,o){var c,u;const i=o.family+(o.kind&&!o.kind.includes("#")?", "+o.kind:""),a=i.split(",")[0],r=(u=o.fileUrl)!=null?u:(c=o==null?void 0:o.files)==null?void 0:c.regular;let s="";if(r&&i&&a&&(s+=`
  @font-face {
    font-family: "${i}";
    src: local("${a}"), url('${r}') format('woff2');
    font-display: fallback;
    font-weight: 400;
  }
          `.trim()),o.files)for(const l in o.files){if(!(String(Number(l))===l))continue;const m=o.files[l];m&&m!==r&&(s+=`
  @font-face {
    font-family: "${i}";
    src: url('${m}') format('woff2');
    font-display: fallback;
    font-weight: ${l};
  }
            `.trim())}return s},yn=function(t,n,{customFonts:o}){var i;return((i=o==null?void 0:o.map(a=>bn(t,n,a)))==null?void 0:i.join(" "))||""},to=function(t,n){return`
${t.cssCode||""}
${yn(t,n,{customFonts:t.customFonts})}`},xn=g(f(()=>p(()=>import("./q-e9aa4a7e.js"),["build/q-e9aa4a7e.js","build/q-ebeb8dcd.js","build/q-8f8a66f2.js","build/q-9a520539.js"]),"s_Og0xL34Zbvc")),no=xn,v=function(t,n,o){var a,r;return!t.content&&!n.overrideContent?void 0:{...t.content,...n.overrideContent,data:{...(a=t.content)==null?void 0:a.data,...t.data,...(r=n.overrideContent)==null?void 0:r.data}}},vn=function(t,n,o){return t.canTrack||!0},M=function(t,n,o){var i,a;return{...(a=(i=t.content)==null?void 0:i.data)==null?void 0:a.state,...t.data,...t.locale?{locale:t.locale}:{},...n.overrideState}},ye=function(t,n,o){return t.context||{}},oo=function(t,n,o){return[...Lt(),...tn,...t.customComponents||[]].reduce((r,s)=>({...r,[s.name]:s}),{})},io=function(t,n,o,i){const{data:a}=i;if(a)switch(a.type){case"builder.contentUpdate":{const r=a.data,s=r.key||r.alias||r.entry||r.modelName,c=r.data;s===t.model&&(n.overrideContent=c,n.forceReRenderCount=n.forceReRenderCount+1);break}}},ao=function(t,n,o){var a,r;const i=(r=(a=v(t,n))==null?void 0:a.data)==null?void 0:r.jsCode;i&&E({code:i,context:ye(t),state:M(t,n)})},Cn=function(t,n,o){return{}},ro=function(t,n,o,i){var a,r;if(v(t,n)){const s=(a=v(t,n))==null?void 0:a.testVariationId,c=(r=v(t,n))==null?void 0:r.id;hn({type:"click",canTrack:vn(t),contentId:c,apiKey:t.apiKey,variationId:s!==c?s:void 0})}},wn=function(t,n,o,i){return i.replace(/{{([^}]+)}}/g,(a,r)=>E({code:r,context:ye(t),state:M(t,n)}))},In=function(t,n,o,{url:i,key:a}){ue().then(r=>r(i)).then(r=>r.json()).then(r=>{const s={...n.overrideState,[a]:r};n.overrideState=s}).catch(r=>{console.log("error fetching dynamic data",i,r)})},so=function(t,n,o){var a,r,s;const i=(s=(r=(a=v(t,n))==null?void 0:a.data)==null?void 0:r.httpRequests)!=null?s:{};Object.entries(i).forEach(([c,u])=>{if(u&&(!Cn()[c]||C())){const l=wn(t,n,o,u);In(t,n,o,{url:l,key:c})}})},co=function(t,n,o){C()&&window.dispatchEvent(new CustomEvent("builder:component:stateChange",{detail:{state:M(t,n),ref:{name:t.model}}}))},lo=function(t,n,o){var i,a,r,s,c;return Boolean((((a=(i=v(t,n))==null?void 0:i.data)==null?void 0:a.cssCode)||((c=(s=(r=v(t,n))==null?void 0:r.data)==null?void 0:s.customFonts)==null?void 0:c.length))&&W!=="reactNative")},Sn=g(f(()=>p(()=>import("./q-5ae3c70e.js"),["build/q-5ae3c70e.js","build/q-ebeb8dcd.js","build/q-8f8a66f2.js","build/q-9a520539.js"]),"s_hEAI0ahViXM")),_n=Sn,uo=function(t,n,o){var i;return((i=t.symbol)==null?void 0:i.content)||n.fetchedContent},Rn=g(f(()=>p(()=>import("./q-d817d1fb.js"),["build/q-d817d1fb.js","build/q-ebeb8dcd.js","build/q-8f8a66f2.js","build/q-9a520539.js"]),"s_WVvggdkUPdk")),kn=Rn,Tn=()=>{const[e]=ve();return Qt({model:ee,apiKey:te,options:ce(e.query),userAttributes:{urlPath:e.pathname||"/"}})},En=()=>{const e=Se(),t=Ce(f(()=>p(()=>Promise.resolve().then(()=>An),void 0),"s_HrqAK9a0Xr0",[e]));return d(we,{value:t,onPending:()=>d("div",{children:"Loading..."}),onResolved:n=>d(_n,{model:ee,content:n,apiKey:te,customComponents:Ie,[h]:{model:h,apiKey:h,customComponents:h}},"hl_0"),[h]:{value:h,onPending:h,onResolved:h}},"hl_1")},An=Object.freeze(Object.defineProperty({__proto__:null,s_HrqAK9a0Xr0:Tn,s_PioeegRlDss:En},Symbol.toStringTag,{value:"Module"}));export{ye as A,Ln as B,oo as C,lo as D,no as E,y as F,io as G,co as H,so as I,ao as J,Vn as K,Fn as L,eo as M,vn as N,Zn as O,Qt as P,_n as Q,Ke as R,Dn as S,uo as T,An as U,hn as _,Xe as a,oe as b,Bn as c,Un as d,E as e,Kn as f,Nn as g,Mn as h,Qe as i,qn as j,jn as k,zn as l,Jn as m,Yn as n,Wn as o,Xn as p,Gn as q,C as r,G as s,Qn as t,to as u,Ve as v,Hn as w,ro as x,v as y,M as z};
