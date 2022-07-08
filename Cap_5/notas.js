// Abstaracción. 
// cuando programamos debemos ir resolviendo los pasos precisos que se debe realizar en la computadora uno por uno. 
function repetir(n,accion){
    for (let i=0; i<n ; i++){
        accion(i)
    }
}

repetir(3,console.log)
// las funciones que operan en otras funciones, ya sea tomandolas como argumentos o retornandolas, se denomina funciones
// de orden superior. 

function mayorQue(n){
    return m => m > n
}
let mayorQue10= mayorQue(10)
console.log(mayorQue10(11))

// Conjunto de datos de codigo. 
/* {
    name: "Coptic",
    ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
    direction: "ltr",
    year: -200,
    living: false,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
  }
  ltr (left to right ) , rtl (right to left ), ttb (top to bottom)
*/
function filtar(array,prueba){
    let pasaron =[]
    for(elemento of array){
        if(prueba(elemento)){
            pasaron.push(elemento)
        }
    }
    return pasaron
}
// Las funciones de orden superior comienzan a brillar cuando necesitas 
//componer operaciones. Como ejemplo, vamos a escribir código que encuentre 
//el año de origen promedio para los codigos vivos y muertos en el conjunto de datos.