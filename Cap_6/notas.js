//Orientacion a objetos.
/* 
    La idea central en la programación orientada a objetos es dividir a los
    programas en piezas más pequeñas y hacer que cada pieza sea responsable de gestionar su propio estado.

    la vinculación llamada this (“este”) en su cuerpo apunta automáticamente al objeto en la cual fue llamada.
   
    el método call (“llamar”) de una función, que toma el valor de this como primer argumento 
    y trata a los argumentos adicionales como parámetros normales.
*/
function hablar(linea) {
    console.log(`El conejo ${this.tipo} dice '${linea}'`)
}
let conejoBlanco = {tipo:"blanco",hablar}
conejoBlanco.hablar("Oh mis orejas y bigotes," +"que tarde se esta haciendo!.")

let conejoHambriento ={tipo:"hambriento",hablar}
hablar.call(conejoHambriento,"Burp!")

