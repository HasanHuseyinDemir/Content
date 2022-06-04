let dataSet = {
    value:[],
    get:()=>{
        dataSet.value.forEach((value)=>{
            eval(`dataSet.${value}=window.${value}`)
        })
    },
    set:()=>{
        dataSet.value.forEach((value)=>{
            if(eval(`dataSet.${value}`)!==eval(`window.${value}`)){      
                dataSet.get();
                set();
                return
            }
        })
    }
}

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
            set();
        }
    }
}

w=()=>{
    watchlist.forEach((item)=>{
        item.set();
    });
    dataSet.set();
}

let watchlist = [];
