let contents=[];

//Pages
let homePage={
    src:"./pages/home.html",
    type:"static-page",
    name:"home-page",
}
contents.push(homePage);

let aboutPage={
    src:"./pages/about.html",
    type:"static-page",
    name:"about-page"
}
contents.push(aboutPage);

let errorPage={
    src:"./pages/404.html",
    type:"page",
    name:"error-page",
}
contents.push(errorPage)

let helloPage={
    src:"./pages/hello.html",
    type:"static-page",
    name:"hello-page"
}
contents.push(helloPage);

//////////////////////////////////////////////////

const $page = (e) =>{return "<"+e+">"+"</"+e+">"};

const routes = {
    "":$page("home-page"),
    "/":$page("home-page"),
    "/about":$page("about-page"),
    "/hello":$page("hello-page"),
    404:$page("error-page"),
};