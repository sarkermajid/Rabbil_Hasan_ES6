//Set Array
let myset = new Set()

myset.add("Bangladesh")
myset.add("Pakistan")
myset.add("Nepal")
myset.add("China")
myset.add("Bangladesh")
myset.add("India")
myset.add("Bangladesh")
myset.add("Canada")

myset.delete("India")
console.log(myset)
console.log(myset.size)
console.log(myset.values())

if(myset.has("Bangladesh")){
    console.log("True")
}
else{
    console.log("False")
}

if(myset.has("America")){
    console.log("True")
}else{
    console.log("false")
}
myset.clear()
console.log(myset)