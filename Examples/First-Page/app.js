//
let x = 0;


let pages={
    src:"pages.html",
    type:"page",
    name:"content-pages",
};

let header={
    src:"./pages/header.html",
    type:"page",
    name:"header-page",
}

let properties={
    src:"./pages/properties.html",
    type:"page",
    name:"properties-page"
}

let aboutPage={
    src:"./pages/aboutPage.html",
    type:"page",
    name:"about-page"
}

let navigationPage={
    src:"./pages/navigation.html",
    type:"page",
    name:"navigation-page"
}

//ATOMS
let navigationAtom={
    type:"atom",
    name:"nav-atom",
    navigation:"properties",
    data:()=>{
        switch(navigationAtom.navigation){
            case "properties":return "<properties-page></properties-page>";break;
            case "about":return "<about-page></about-page>"
        }
    }
};

////ATOMS
////The set property only affects all atoms.
let incrementAtom={
    type:"atom",
    name:"increment-atom",
    data:()=>{
        return `<button onclick="set(x++)">${x}++</button>` 
    }
}

let decrementAtom={
    type:"atom",
    name:"decrement-atom",
    data:()=>{
        return `<button onclick="set(x--)">${x}--</button>`
    }
}

////ATOMS
//Val
let incrementAtomUpdatesAllPages={
    type:"atom",
    name:"val-increment-atom",
    data:()=>{
        return `<button onclick="val(x++)">${x}++</button>`
    }
}
let decrementAtomUpdatesAllPages={
    type:"atom",
    name:"val-decrement-atom",
    data:()=>{
        return `<button onclick="val(x--)">${x}--</button>`
    }
}

//ATOMS
//gVal is just updates specific pages
let increments_g_val={
    type:"atom",
    name:"gval-increment-atom",
    data:()=>{
        return `<button onclick='gVal("header",x++)'>${x}++</button>`
    }
}

let decrements_g_val={
    type:"atom",
    name:"gval-decrement-atom",
    data:()=>{
        return `<button onclick='gVal("header",x--)'>${x}--</button>`
    }
}

//contents array is important!
let contents=[
    pages,
    header,
    properties,
    aboutPage,
    navigationPage,
    //ATOMS
    navigationAtom,
    incrementAtom,
    decrementAtom,
    incrementAtomUpdatesAllPages,
    decrementAtomUpdatesAllPages,
    increments_g_val,
    decrements_g_val
];