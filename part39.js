// Super()
class Parent{
    fun1(){
        console.log("I'm Function one")
    }

    fun2(){
        console.log("I'm Function Two")
    }
}
class Child extends Parent{
    fun3(){
        super.fun1()
        super.fun2()
    }
}
let obj =  new Child()
obj.fun3()