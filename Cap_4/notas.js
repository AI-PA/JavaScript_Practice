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
