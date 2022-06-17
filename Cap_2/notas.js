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
console.log(" ")
// el cliclo For es una forma de abreviar el ciclo while cuando este se requiere variables para hacer un recorrido de una serie de numeros. 
for (let numero=0; numero<=12;numero=numero+2){
    console.log(numero)
}
//la organizacion del ciclo for es: primero es inicializar la variable , la segundo es la expresion que checa y actualiza el estado del ciclo. 
resultado=1
for (let contador; contador<10;contador+=1){
    resultado=resultado*2
}
console.log(resultado)
// break salta fuera del ciclo o lo finaliza para seguir ejecutando el resto del codigo. 
for (let actual=20;;actual=actual+1){
    if(actual%7==0){
        console.log(actual)
        break
    }
}
// Switch 
//clima=prompt("¿Como esta el clima?. ")
let clima="soleado"
switch(clima){
    case "lluvioso":
        console.log("Recuerda salir con un paraguas.")
        break
    case"soleado":
        console.log("Vistete con poca ropa")
        break
    case"nublado":
        console.log("Ve afuera")
        break
    default:
        console.log("Tipo de clima desconocido")
        break
}
// estandar de declaracion de variables suele ser : pequeñaTortugaVerde. 
