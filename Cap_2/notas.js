/* Variables let, var, const
/ let.      es la forma actual de declarar variables. 
/ var.      forma en que se decalraba una variable de JavaScript previo al 2015. 
/ const.    representa una constante que apunta al mismo valor el tiempo que viva.  
*/
let uno=1,dos=2
console.log(uno+dos)//3 
var nombre= "Ayda"
const saludo= "Hola "
console.log(saludo + nombre)//Hola Ayda.
console.log("")
/* Funciones
/ prompt , permite la entrada de dialogo al usuario.
/ console.log , salida de texto.
*/
console.log("Funciones")
//let contraseña= prompt("Introducir contraseña: ")
//console.log(contraseña)
console.log(Math.max(2,4)) //4
console.log(Math.min(2,4)+100)//102
console.log(" ")
//Existen la funciones como Number, String y Boolean para convertir los datos en sus respectivos tipos. 
/* Ejecucion Condicional. 
/ If se usa cuando queremos que se ejecute algun codigo si y solo si una cierta condicion se cumple. 
*/
let elNumero = 25
if (!Number.isNaN(elNumero)){
    console.log("Tu numero es la raiz cuadrada de:  "+elNumero*elNumero)
}
if (1+1 ==2) console.log("Es verdad")//Es verdad. 
// else es una funcion alternativa al if. 

elNumero="hola"
if (!Number.isNaN(elNumero)){
    console.log("Tu numero es la raiz cuadrada de:  "+elNumero*elNumero)
} else{
    console.log("Ey. Por qué no me diste un número")
}
// tambien se puede hacer una forma de switch para el if y else. 
let numero= 55
if(numero <10){
    console.log("Pequeño")
} else if (numero <100){
    console.log("Mediano")
} else{
    console.log("Grande")
}
console.log("")
/* Ciclos While, Do, For
/ While crea un ciclo que mientras la expresion sea True se seguira ejecutando. 
*/
numero=0 
while (numero<=12){
    console.log(numero)
    numero+=1
}

let resultado=1 , contador=0
while (contador <10){
    resultado=resultado*2
    contador+=1
}
console.log(resultado)