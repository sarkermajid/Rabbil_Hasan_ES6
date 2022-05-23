let mymap = new Map()

mymap.set("key1","Bangladesh")
mymap.set("key2","Pakistan")
mymap.set("key3","Srilanka")
mymap.set("key4","China")
mymap.set("key5","Maldip")
mymap.set("key6","India")

mymap.delete("key6")
mymap.delete("key5")
for(let x of mymap.values()){
    console.log(x)
}

console.log(mymap.get("key1")) // kno nidristo value pawar jonno.

// has method.

if(mymap.has("key1")){
    console.log("Yes")
}else{
    console.log("No")
}

if(mymap.has("key10")){
    console.log("Yes")
}else{
    console.log("No")
}
mymap.clear()
for(let x of mymap.values()){
    console.log(x)             // kno ans asbe nah. loop chalanor agay e sob clear hoye gese.
}