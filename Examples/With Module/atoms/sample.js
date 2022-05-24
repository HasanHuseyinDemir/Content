let page={
name:"atom-atom",
type:"atom",
data:()=>{
    return `
        <div align="center">
        <h1>Hello World!</h1>
        <h2>x=${x}</h2>
        <button onclick="set(x++),console.log(x)">${x}</button>
        </div>
        `;
}
}

let page2={
    name:"example-page",
    type:"page",
    //We need to give the path from root folder
    src:"./atoms/page.html",
}

contents.push(page,page2);
export default "";