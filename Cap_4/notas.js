// Estructura de Datos: Objetos y Arrays. 
//Conjunto de datos. 
// Arrays almacenan una secuencia de valores entre corchetes y su forma de acceder a estos es usando corchetes. 
let listaDeNumeros = [2,3,5,7,11]
console.log(listaDeNumeros[2])//5
console.log(listaDeNumeros[0])//2
console.log(listaDeNumeros[2-1])//3

// los arrays comienzan en el 0 y la forma en la que se puede saber su longitud es a traves de la propiedad length. 
let ouch = "Ouch"
console.log(typeof ouch.toUpperCase) //function 
console.log(ouch.toUpperCase) // OUCH toUpperCase regresa el string pero en mayusculas. 

let secuencia = [1,2,3]
secuencia.push(4)
secuencia.push(5) //agregamos el 4 y 5 al array. 
console.log(secuencia)//[1,2,3,4,5]
console.log(secuencia.pop())//5 y eliminamos el ultimo elemento del array en caso de tener numero se eliminara el que este en esa posicion. 
console.log(secuencia)//[1,2,3,4]

//Objetos. 
let dia1={
    ardilla: false, 
    eventos: ["trabajo","toque un arbol","pizza","salir a correr"]
}
console.log(dia1.ardilla)//false
console.log(dia1.lobo)//Undefined
dia1.lobo=false
console.log(dia1.lobo)//false. 
// dada propiedad tiene un nombre seguido de dos puntos y un valor. 
// Cuando un objeto está escrito en varias líneas, indentar como en el ejemplo ayuda con la legibilidad.
// Se puede eliminar la propiedad de un objeto con el operador delate. 
// el operador in checa si exite tal propiedad o valor dependiento si se usa en objetos o en arrays. 
console.log(onject.keys({x:0,y:0,z:0})) //["x","y","z"]
let objetoA = {a:1,b:2}
Object.assign (objetoA,{b:3,c:4})
console.log(objetoA)
// Con Object.keys le das un objeto y regresa un array con los nombres de las propiedades del objeto. 
// Con Object.assign copia todas las propiedades de un objeto a otro. 
console.log(Object.keys({x:0,y:0,z:2})) // ["x","y","z"]
// los objetos pueden tener la misma identidad o las mismas propiedades y no se condideran iguales. 
let objeto1 = {valor: 10};
let objeto2 = objeto1;
let objeto3 = {valor: 10};

console.log(objeto1 == objeto2);// → true
console.log(objeto1 == objeto3);// → false

objeto1.valor = 15;
console.log(objeto2.valor);// → 15
console.log(objeto3.valor);// → 10
// arrayología avanzada.

console.log([1,2,3,2,1].indexOf(2)) // 1 
console.log([1,2,3,2,1].lastIndexOf(2)) // 3
// indexOf busca el dato si se encuentra en la cadena y en que posicion se encuentra primero y eso es lo que imprime
// en caso de no encontrarlo te dara el resultado de -1 
// lastIndexOF hace lo mismo sol que este partiendo del final. 

console.log([0,1,2,3,4].slice(2,4)) // 2,4
console.log([0,1,2,3,4].slice(2)) // 1,3,4
// .slice regresa un array con todos los datos que se encuentren entre los numeros escogidos siendo el 2 inclusivo y el 4 exclusivo. 
// cuando solo se tiene un numero regresa todo a partir de ese numero. 

function remover(array,indice){
    return array.slice(0,indice)
        .concat(array.slice(indice +1))
}
console.log(remover(["a","b","c","d","e"],2)) // a , b , d, e 
// Stings y sus propiedades. 

console.log("panaderia".slice(0,3)) //pan 
console.log("panaderia".indexOf("a")) // 1 

console.log(String(6).padStart(3,"0")) // 006 , 
//padStart agrega el numero de veces que se indique en el primer parametro y en el segundo se da aquello que se repetira. 
//.split separa un string y .join lo une. 

function maximo(...numeros){
    let resultado =-Infinity
    for(let numero of numeros){
        if(numero>resultado) resultado= numero
    }
    return resultado
}
console.log(maximo(4,1,9,-2))//9 
// una funcion o array se le permite poner ... para indicar que hay muchos parametros a tratar y deben ser tomados en cuenta. 
let numeross = [5,1,7]
console.log(max(...numeross)) // 7 

function puntoAleatorioEnCirculo(radio){
    let angulo= Math.random()*2*Math.PI
    return {x: radio *Math.cos(angulo), 
            y: radio *Math.sin(angulo)}
}
console.log(puntoAleatorioEnCirculo(2))
// .reduce es usado para 
var total = [0, 1, 2, 3].reduce(function(a, b){ return a + b; });
// total == 6
//arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])
a.toLoweCasse 
a.toUpperCase