// Rest parameter
function calculation (...numbers){
    sum = 0
    for ( let i of numbers){
        sum = sum + i;
    }
    console.log(sum)
}
calculation(1,2,3,4)

function multiplecation (...Numbers){
    sum = 0
    for ( let i of Numbers){
        sum = sum + i
    }
    console.log(sum)
}
multiplecation(10,20,30)