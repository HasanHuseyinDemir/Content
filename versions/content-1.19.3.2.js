let __=0;var props={},slot="",___alphabet___="abcdefghijklmnoprstuvyz_".split(""),scrlist=[];_____rkg=()=>{let e="";for(var t=0;t<=9;t++)e+=___alphabet___[Math.floor(24*Math.random())];return e},contents.map(async e=>{switch(e.type){case"page":{let t=await (await fetch(e.src)).text();await scriptTest(t=cNamer(t=(t=(t=`<div id="${e.name}">${t}</div>`).replaceAll("__",e.name+"_")).replaceAll("$$",e.name)),e.name,e.src,"defaultPage"),renTest(t,e),e.render=()=>{document.querySelectorAll(e.name).forEach((t,l)=>{let a=document.querySelectorAll(e.name)[l];0==a.innerHTML.length&&(a.innerHTML=e.data)})}}break;case"atom":e.render=()=>{document.querySelectorAll(e.name).forEach((t,l)=>{let a=document.querySelectorAll(e.name)[l];0==a.innerHTML.length&&(a.innerHTML=e.data())})}}++__==contents.length&&(set(),val(),set())}),content=async(item,key)=>{let source,data=await (await fetch(item)).text();data=cNamer(data);let convert=item,latest,pageName=await (convert=convert.split("/"))[convert.length-1].replace(".html",""),pageKey=_____rkg();await eval(`window.${pageName}={type:"page",src:"${item}",name:"${pageName}",}`),await contents.push(eval(pageName)),data=`<div id=${pageName}>${data}</div>`,await scriptTest(data=key?(data=data.replaceAll("__",pageKey+"_")).replaceAll("$$",pageKey):(data=data.replaceAll("__",pageName+"_")).replaceAll("$$",pageName),pageName,item,"defaultPage"),renTest(data,eval(pageName)),eval(pageName).render=()=>{document.querySelectorAll(item.name).forEach((e,t)=>{let l=document.querySelectorAll(pageName)[t];0==l.innerHTML.length&&(l.innerHTML=item.data)})},val()},cRender=async(e,t,l)=>{let a=await (await fetch(e)).text();a=cNamer(a);let r=_____rkg();await scriptTest(a=(a=(a=`<div id=${l?l+"_":r+"_"}>${a}</div>`).replaceAll("$$",l||r)).replaceAll("__",l?l+"_":r+"_"),t,e,l||"defaultPage"),renTest(a,t),set()},cNamer=e=>{let t=e,l="/>",a="<",r=t.split(l).length-1,i=0;for(;r>i;){let n=t.search(l)-1,s=0,c="";for(;n-s>=-1;){if(t.charAt(n-s)==a){let p=(c=c.split("").reverse().join("")).split(" ")[0],o=c.replace(p,""),y=`<${p}${o?" "+o:""}></${p}>`;t=t.slice(0,n-s)+y+t.slice(n+4,t.length),i++,n="",s=0,c=""}else c+=t.charAt(n-s);s++}}return t},loadContents=(e,t,l)=>{e.map(e=>{content((t||"")+e,l)})},loadScript=async(file,key)=>{let data,script=await (await fetch(file)).text();await eval(script=(script=script.replaceAll("__",key+"_")).replaceAll("$$",key)),set()},loadScripts=(e,t,l)=>{e.map(e=>{loadScript((t||"")+e,l)})},loadCSS=async(e,t)=>{let l=await (await fetch(e)).text();l=`<style>${l=(l=l.replaceAll("__",t+"_")).replaceAll("$$",t)}</style>`,document.querySelector("#"+t).innerHTML+=l},renTest=(str,item)=>{if(str=(str=str.replaceAll("{{","<c data='")).replaceAll("}}","'> </c>"),"string"==typeof item)document.querySelector(item).innerHTML=str,interpTest(str,item);else{item.data=str;let indexe;document.querySelectorAll(item.name).forEach((i,index)=>{(proplist=i.getAttributeNames()).map(items=>{eval(`props.${items}=${i.getAttribute(items)}`)}),slot=document.querySelectorAll(item.name)[index].innerHTML,interpTest(item.data,item,index),props={}})}},interpTest=(str,item,index)=>{var start,end;let first="{%",last="%}",starter=str.search(first),endPoint=str.search(last),isStarter,isEndPoint,isPolated;if(!1==(start=starter>-1,end=endPoint>-1,!0==start&&!0==end)){if(("page"==item.type||"string"==typeof item)&&str&&"string"!=typeof item){let element=document.querySelectorAll(item.name)[index];element.innerHTML.length!=str&&(element.innerHTML=str),props={},slot=""}if("string"==typeof item){let element=document.querySelector(item);element.innerHTML.length!=str&&(element.innerHTML=str)}}else{let interp=str.slice(starter+first.length,endPoint),output=()=>eval(interp),clean;interpTest(str.slice(0,starter)+output()+str.slice(endPoint+last.length),item,index)}},scriptTest=(str,element,file,key)=>{let valid=!1,arrays=[element,file,key];if(scrlist.map(e=>{e.toString()===arrays.toString()&&(valid=!0)}),!valid){var start,end;scrlist.push(arrays);let first="<script>",last="</script>",starter=str.search(first),endPoint=str.search(last),isStarter,isEndPoint,isPolated;if(!0==(start=starter>-1,end=endPoint>-1,!0==start&&!0==end)&&str){let interp;eval(str.slice(starter+first.length,endPoint))}}},ctrl=()=>{document.body.querySelectorAll("*").forEach(item=>{var data=item.getAttribute("data"),inv=item.getAttribute("invisible"),vis=item.getAttribute("visible");data&&item.innerHTML!=eval(data).toString()&&(item.innerHTML=eval(data).toString()),inv&&(eval(inv)?item.style.display="none":item.style.display=""),vis&&(eval(vis)?item.style.display="":item.style.display="none")})};let set=()=>{contents.map(e=>{"atom"==e.type&&e.render()}),ctrl()};val=()=>{contents.map(e=>{e.render()}),set()};