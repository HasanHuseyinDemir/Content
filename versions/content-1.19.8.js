content={async render(e,t,l){data=await content.dry.fetch(e),data=content.namer(data);let r=content.rkg();await test.script(data=(data=(data=`<div id=${l?l+"_":r+"_"}>${data}</div>`).replaceAll("$$",l||r)).replaceAll("__",l?l+"_":r+"_"),t,e,l||"defaultPage"),test.ren(data,t),set()},namer(e){let t=e,l="/>",r="<",a=t.split(l).length-1,i=0;for(;a>i;){let s=t.search(l)-1,c=0,n="";for(;s-c>=-1;){if(t.charAt(s-c)==r){let p=(n=n.split("").reverse().join("")).split(" ")[0],y=n.replace(p,""),d=`<${p}${y?" "+y:""}></${p}>`;t=t.slice(0,s-c)+d+t.slice(s+4,t.length),i++,s="",c=0,n=""}else n+=t.charAt(s-c);c++}}return t},rkg(){let e="";for(var t=0;t<=9;t++)e+=content.chars[Math.floor(24*Math.random())];return e},dry:{fetch:async e=>await (await fetch(e)).text(),replace:(e,t)=>e=(e=e.replaceAll("__",t+"_")).replaceAll("$$",t),fetchAndReplace:async(e,t)=>data=await content.dry.replace(data=await content.dry.fetch(e),t),polated:(e,t)=>!0==e&&!0==t},scrlist:[],chars:"abcdefghijklmnoprstuvyz_".split("")},load={async script(file,key){await eval(data=await content.dry.fetchAndReplace(file,key)),set()},scripts(e,t,l){e.map(e=>{load.script((t||"")+e,l)})},async style(e,t,l){data=`<style id=${t}>${data=await content.dry.fetchAndReplace(e,t)}</style>`,document.querySelector(l||"body").innerHTML+=data},styles(e,t,l){e.map(e=>{load.style((t||"")+e,l,render)})}},test={ren(e,t){e=(e=e.replaceAll("{{","<c data='")).replaceAll("}}","'> </c>"),document.querySelector(t).innerHTML=e,test.interp(e,t)},interp(str,item,index){let first="{%",last="%}",starter=str.search(first),endPoint=str.search(last),isStarter=starter>-1,isEndPoint=endPoint>-1,isPolated;if(!1==(0,content.dry.polated)(isStarter,isEndPoint)){let element=document.querySelector(item);element.innerHTML.length!=str&&(element.innerHTML=str)}else{let interp=str.slice(starter+first.length,endPoint),output=()=>eval(interp),clean=str.slice(0,starter)+output()+str.slice(endPoint+last.length);test.interp(clean,item,index)}},script(str,element,file,key){let valid=!1,arrays=[element,file,key];if(content.scrlist.map(e=>{e.toString()===arrays.toString()&&(valid=!0)}),!valid){content.scrlist.push(arrays);let first="<script>",last="</script>",starter=str.search(first),endPoint=str.search(last),isStarter=starter>-1,isEndPoint=endPoint>-1,isPolated;if(!0==(0,content.dry.polated)(isStarter,isEndPoint)&&str){let interp;eval(str.slice(starter+first.length,endPoint))}}}};let set=()=>{document.body.querySelectorAll("*").forEach(item=>{var data=item.getAttribute("data"),inv=item.getAttribute("invisible"),vis=item.getAttribute("visible");data&&item.innerHTML!=eval(data).toString()&&(item.innerHTML=eval(data).toString()),inv&&(eval(inv)?item.style.display="none":item.style.display=""),vis&&(eval(vis)?item.style.display="":item.style.display="none")})};
