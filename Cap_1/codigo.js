/* Aritmetica y operadores: 
/  + Suma.
/  - Resta.
/  * Multiplicacion.
/  / Division.
/  % Residuo de una division.
/  Los operaciones sin parentesis se ejecutan de acuerdo al orden de operacion. 
*/
let noParen = 100 + 4*11 
let paren= (100+4)*11
console.log(noParen)
console.log(paren)
/* Numeros Especiales. 
/ Infinity, -Infinity  Representa Infinidades.
/ NaN "No es un numero"
*/

/* Strings 
/ las strings son representaciones de texto y son escritos con las comillas '', "", `` 
 en las comillas invertidas (``)se pude usar los caracteres de /n. 

*/
let Salto_Linea= `Esta es la primer linea \nY esta es la segunda.`
console.log(Salto_Linea)

console.log("Con"+"cat"+"e"+"nar")
//imprime Concatenar. 

//el uso de la comilla invertida y ${} permite insertar y computar datos que se pongan dentro de los llaves y el simbolo de pesos. 
console.log(`la mitad de 100 es ${100/2}`)

console.log(typeof 4.5) //number. 
console.log(typeof "x") //string.

//los valores Booleanos solo pueden dar un True o False como valor. estos no se limitan solo a expreciones de numeros si no tambien de strings.
console.log(3>2) //True.
console.log(3<2) //False.
console.log("Aardvark"<"Zoroaster")//True.

/* Operadores de comparacion. 
/ como ya vimos los dos primeros que es menor y mayor que tambien existen los sieguientes: 
/   >= mayor o igual que. 
/   <= menor o igual que. 
/   ==igual a. 
/   != diferente a.
*/