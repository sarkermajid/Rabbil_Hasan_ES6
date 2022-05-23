class myclass{

    constructor(a,b){
        console.log(a+b)
    }
}
new myclass(20,30)

class myclass1{
    
    constructor(a,b){
        this.firstNumber = a
        this.SecondNumber =b
    }
    
    add(){
        let result = this.firstNumber+this.SecondNumber
        console.log(result)
    }
}
let obj = new myclass1(60,40)
obj.add()