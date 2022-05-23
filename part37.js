//Inheritance (relation)
class Parent{
    fun1(){
        console.log("I'm Function one")
    }

    fun2(){
        console.log("I'm Function Two")
    }
}
class Child extends Parent{

}
let obj =  new Child()
obj.fun1()
obj.fun2()