function rango(inicio,final){
    let resultado= [] 
    for (let contador=inicio; contador<=final; contador++){
        resultado.push(contador)
    }
    return resultado
}
function sumatoriaRango(numbers){
    let sumatoria=0
    for(number in numbers){
        sumatoria+=numbers[number]
    }
    return sumatoria

}
console.log("Suma de un Rango")
let inicio = 1 , final= 100 
 console.log(sumatoriaRango(rango(inicio,final))) //5050

 console.log("Revirtiendo un array")
 
 function revertirArray(array){
    let output = []
    for (let i = array.length - 1 ;i >= 0; i--) {
        output.push(array[i])
   }
   return output
 }

 console.log(revertirArray(["A", "B", "C"]));
 
 function revertirArrayEnSuLugar(array){
    for(let x=0;x < Math.floor(array.length/2); x++) {
        let old = array[x]
        array[x]=array[array.lenght -1 -x]
        array[array.lenght -1 -x ]= old
    }
    return array
 }
 let arrayValue = [1, 2, 3, 4, 5];
 revertirArrayEnSuLugar(arrayValue);
console.log(arrayValue);

console.log("Lista")
function arrayALista(){

}