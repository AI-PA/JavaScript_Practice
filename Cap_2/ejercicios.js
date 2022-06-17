console.log("Ciclo de un triangulo")
let madera=""
for(let contador=0;contador<=6;contador++){
    madera+="#"
    console.log(madera)
}
console.log(" ")

console.log("FizzBuzz with Switch") 
// Switch evalua que la concicion sea verdadera no que tenga el valor de i y en caso se strings es que coincida. 
for(let i=1;i<=100;i++){
    switch(true){ 
        case (i%3== 0 && i%5 == 0):
            console.log("FrizBruzz")
            break
        case (i%3 == 0):
            console.log("Fizz")
            break
        case (i%5 == 0):
            console.log("Buzz")
            break
        default:
            console.log(i)
    }
}
console.log(" ")
console.log("FizzBuzz with if & else")
for(let i=1;i<=100;i++){
    if (i%3==0 && i%5==0){
        console.log("FizzBuzz")
    } else if(i%3==0){
        console.log("Fizz")
    } else if(i%5==0){
        console.log("Buzz")
    }else{
        console.log(i)
    }    
}
console.log("")
console.log("Tablero de ajedrez")

let ancho=8 , largo=ancho ,tablero=""
for (let i=0; i<largo;i++){
    for(let j=0;j<ancho;j++){
            if((i+j)%2==0){
                tablero+=" "
            } else{
                tablero+="#"
            }
        }
    tablero+=`\n`
}
console.log(tablero)