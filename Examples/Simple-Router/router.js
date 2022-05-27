const $router = document.querySelector("Router");

router = () => {
    let currentPath = window.location.hash.slice(1);
    if(routes[currentPath]){
        $router.innerHTML = routes[currentPath];
    }else{
        $router.innerHTML = routes[404];
        gVal("errorPage");
    }
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);



