let __=0;var props={},slot="";contents.map(async e=>{switch(e.type){case"page":{let t=await (await fetch(e.src)).text();scriptTest(t),renTest(t,e),e.render=()=>{document.querySelectorAll(e.name).forEach((t,r)=>{let n=document.querySelectorAll(e.name)[r];0==n.innerHTML.length&&(n.innerHTML=e.data)})}}break;case"atom":e.render=()=>{document.querySelectorAll(e.name).forEach((t,r)=>{let n=document.querySelectorAll(e.name)[r];0==n.innerHTML.length&&(n.innerHTML=e.data())})}}++__==contents.length&&(set(),val(),set())}),renTest=(str,item)=>{var start,end;let first="{{",last="}}",starter=str.search(first),endPoint=str.search(last),isStarter,isEndPoint,isPolated;if(!1==(start=starter>-1,end=endPoint>-1,!0==start&&!0==end)){if("page"==item.type){item.data=str;let indexe;document.querySelectorAll(item.name).forEach((i,index)=>{(proplist=i.getAttributeNames()).map(items=>{eval(`props.${items}=${i.getAttribute(items)}`)}),slot=document.querySelectorAll(item.name)[index].innerHTML,interpTest(item.data,item,index),props={}})}}else{let interp=str.slice(starter+first.length,endPoint),output=()=>`<c data='${interp}'></c>`;renTest(str.slice(0,starter)+output()+str.slice(endPoint+last.length),item)}},interpTest=(str,item,index)=>{var start,end;let first="{%",last="%}",starter=str.search(first),endPoint=str.search(last),isStarter,isEndPoint,isPolated;if(!1==(start=starter>-1,end=endPoint>-1,!0==start&&!0==end)){if("page"==item.type&&str){let element=document.querySelectorAll(item.name)[index];element.innerHTML.length!=str&&(element.innerHTML=str),props={},slot=""}}else{let interp=str.slice(starter+first.length,endPoint),output=()=>eval(interp),clean;interpTest(str.slice(0,starter)+output()+str.slice(endPoint+last.length),item,index)}},scriptTest=(str,item)=>{var start,end;let first="<script>",last="</script>",starter=str.search(first),endPoint=str.search(last),isStarter,isEndPoint,isPolated;if(!0==(start=starter>-1,end=endPoint>-1,!0==start&&!0==end)&&str){let interp;eval(str.slice(starter+first.length,endPoint))}},ctrl=()=>{document.body.querySelectorAll("*").forEach(item=>{var data=item.getAttribute("data"),set=item.getAttribute("set"),array=item.getAttribute("array"),type=item.getAttribute("type"),query=item.getAttribute("if"),valid=item.getAttribute("true"),invalid=item.getAttribute("false"),inv=item.getAttribute("invisible"),vis=item.getAttribute("visible"),value=item.getAttribute("setValue"),content="";if(data&&item.innerHTML!=eval(data).toString()&&(item.innerHTML=eval(data).toString()),array&&type&&(eval(array).forEach(e=>{content+=`<${type}>${e}</${type}>`}),item.innerHTML!=content.toString()&&(item.innerHTML=content.toString())),query&&(!0==eval(query)?valid&&item.innerHTML!=eval(valid).toString()&&(item.innerHTML=eval(valid).toString()):invalid&&item.innerHTML!=eval(invalid).toString()&&(item.innerHTML=eval(invalid).toString())),set&&array){var filt=(content=eval(array).map((items,index)=>eval(data)).join("")).toString();item.innerHTML.toString()!=filt&&(item.innerHTML=filt)}inv&&(eval(inv)?item.style.display="none":item.style.display=""),vis&&(eval(vis)?item.style.display="":item.style.display="none"),value&&item.innerHTML.toString()!=eval(value)&&(item.value=eval(value))})};let set=()=>{contents.map(e=>{"atom"==e.type&&e.render()}),ctrl()};val=()=>{contents.map(e=>{e.render()}),set()};