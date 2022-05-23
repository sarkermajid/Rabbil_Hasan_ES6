//Inheritance (Overriding)(child parent er function override korte parbe. paret parbe na.)
class Parent{
    fun1(){
        console.log("I'm Function one")
    }

    fun2(){
        console.log("I'm Function Two")
    }
}
class Child extends Parent{
    fun1(){
        console.log("I'm Function one I'm Function one I'm Function one I'm Function one")
    }

}
let obj =  new Child()
obj.fun1()