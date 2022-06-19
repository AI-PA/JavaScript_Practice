console.log("Minimo")
let minimo= (numero1,numero2)=>{
    if(numero1>numero2) return "de "+numero1 +" y "+numero2+" el numero menor es: "+numero2
    else return "de "+numero1 +" y "+numero2+" el numero menor es: "+numero1
}
console.log(minimo(2,4))//de 2 y 4 el numero menor es: 2
console.log(minimo(6,4))//de 6 y 4 el numero menor es: 4

console.log("")
console.log("Recursion")
let esPar =(numero1)=>{
    numero1=Math.abs(numero1)
    if(numero1==0){
        return true
    } else if(numero1==1){
        return false
    }else{
        return esPar(numero1-2)
    }
}
console.log(esPar(50))//true
console.log(esPar(75))//false
console.log(esPar(-1))//false , fix el error.

console.log("")
console.log("Conteo de Frijoles")
function contarFs(string){
    let contador=0
    for(const letter in string){
        if(string[letter]=="F"){
            contador+=1
        }
    }
    return contador
}
console.log(contarFs("FFC"))//2

function contarCaracteres(string,caracter){
    let contador=0
    for(const letter in string){
        if(string[letter]==caracter){
            contador+=1
        }
    }
    return contador
}
console.log(contarCaracteres("kakkerlak","k")) //4