//map Array
let mymap = new Map()

mymap.set("key1","Bangladesh")
mymap.set("key2","Pakistan")
mymap.set("key3","Srilanka")
mymap.set("key4","China")
mymap.set("key5","Maldip")
mymap.set("key6","India")

console.log(mymap.values())
console.log(mymap.keys())

for(let x of mymap.values()){
    console.log(x)
}
for(let y of mymap.keys()){
    console.log(y)
}
