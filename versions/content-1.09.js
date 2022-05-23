createAtom=((e,t)=>{customElements.define(e,class extends HTMLElement{connectedCallback(){this.innerHTML=t}})}),contents.map(async e=>{switch(e.type){case"page":{let t=await fetch(e.src),n=await t.text();e.data=n,e.render=(async()=>{let t=document.querySelectorAll(e.name),a=removeTemplateTag(n);t.forEach((t,n)=>{let r=document.querySelectorAll(e.name)[n];renderTest(a,r)})});const a=e.name;interpolationTest(e.data,a)}break;case"atom":createAtom(e.name,e.data()),e.render=(()=>{document.querySelectorAll(e.name).forEach(t=>t.innerHTML=e.data())});break;case"composition":{let t=await fetch(e.src),n=await t.text();e.data=n,e.render=(async()=>{let t=document.querySelector(e.name).shadowRoot.firstElementChild,a=removeTemplateTag(n);renderTest(a,t,"composition")});const a=e.name;interpolationTest(e.data,a,"composition")}}}),composition=((e,t)=>{let n=document.createElement("div");n.innerHTML=t,customElements.define(e,class extends HTMLElement{constructor(){super();let e=n.firstElementChild.content;this.attachShadow({mode:"open"}).appendChild(e.cloneNode(!0))}})}),createContentv2=((e,t)=>{customElements.define(e,class extends HTMLElement{connectedCallback(){this.innerHTML=t}})}),interpolationTest=((str,component,condition)=>{const first="{{",last="}}";let starter=str.search(first),endPoint=str.search(last),isStarter=starter>-1,isEndPoint=endPoint>-1,isPolated=(e,t)=>1==e&&1==t;if(0==isPolated(isStarter,isEndPoint))switch(condition){case"composition":composition(component,str);break;default:createContentv2(component,str)}else{let interp=str.slice(starter+first.length,endPoint),output=()=>eval(interp),clean=str.slice(0,starter)+output()+str.slice(endPoint+last.length);interpolationTest(clean,component,condition)}}),removeTemplateTag=(e=>{return e.replace("<template>","").replace("</template>","")}),renderTest=((str,element,condition)=>{const first="{{",last="}}";let starter=str.search(first),endPoint=str.search(last),isStarter=starter>-1,isEndPoint=endPoint>-1,isPolated=(e,t)=>1==e&&1==t;if(0==isPolated(isStarter,isEndPoint))element.innerHTML=str;else{let interp=str.slice(starter+first.length,endPoint),output=()=>eval(interp),clean=str.slice(0,starter)+output()+str.slice(endPoint+last.length);renderTest(clean,element,condition)}}),setVal=((arg,variable,value)=>{if(null==value)return eval(`${arg}.value.${variable}`);if("string"==typeof value){const condition=`${arg}.value.${variable}="`+value+'"';eval(condition)}else if("number"==typeof value){const condition=`${arg}.value.${variable}=${value}`;eval(condition)}else if("object"==typeof value){const e=`${arg}.value.${variable}=${value}`}eval(`${arg}.render()`),set()}),gVal=((arg,variable,value)=>{if("string"==typeof variable){if(null==value)return eval(`${variable}`);if("number"==typeof value||"object"==typeof value){const condition=`${variable}=${value}`;eval(condition)}else if("string"==typeof value){const condition=`${variable}="`+value+'"';eval(condition)}}eval(`${arg}.render()`),set()}),val=(()=>{contents.map(e=>e.render())});let set=()=>{contents.map(e=>{"atom"==e.type&&e.render()})};