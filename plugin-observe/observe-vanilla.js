class watch{
    constructor(value,func){
        this.watching=value;
        this.value=value.map((item)=>{return eval(item)})
        this.func=func;
    }
    get(){
        this.value = this.watching.map((item)=>{return eval(item)})
    }
    set (){
        var temp = this.watching.map((item)=>{return eval(item)})
        if(temp.join("")!==this.value.join("")){      
            this.get();
            this.func();
        }
    }
}

v=()=>{
    watchlist.forEach((item)=>{
        item.set();
    });
}

let watchlist = [];
