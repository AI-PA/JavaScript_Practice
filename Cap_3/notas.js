//Funciones
// Una funcion es una vinculacion regular donde el valor de la vinculacion es la funcion. 
const cuadrado= function(x){
    return x*x
}
console.log(cuadrado(12))//144
//las funciones pueden tener uno,dos o mas parametros asi como no tenener ninguno. 
const hacerSonido=function(){
    console.log("Pling!")
}
hacerSonido()
const portencia= function(base,exponente){
    let resultado=1
    for (let cuenta=0;cuenta< exponente;cuenta++){
        resultado*=base
    }
    return resultado
}
console.log(portencia(2,10))//1024
/* 
/ var se considera de alacance global en vez de let, lo cual puede generar problemas en caso de que usemos 
/ ese nombre para declarar una variable que se use de forma global y no en funciones. 
/
/ las funciones pese a que tengan un nombre que ya halla sido delcarado de forma global con let si se requiere
/ usar para el nombre de una funcion puede usarse siempre que sea entre los "{}".
*/
const humus =function(factor){
    const ingrediente= function(cantidad,unidad,nombre){
        let cantidadIngrediente = cantidad*factor
        if(cantidadIngrediente>1){
            unidad+="s"
        }
        console.log(`${cantidadIngrediente}${unidad}${nombre}`)
    }
    ingrediente(1,"lata","garbanzos")
    ingrediente(0.25,"taza","tahini")
    ingrediente(0.25,"taza","jugo de limon")
    ingrediente(1,"clavo","ajo")
    ingrediente(2,"cucharada","aceite de olviva")
    ingrediente(0.5,"cucharadita","comino")
}
//Funcion flecha. 
const potencia =(base,exponente)=>{
    let resultado=1
    for (let cuenta=0;cuenta <exponente;cuenta++){
        resultado*=base
    }
    return resultado
}
console.log(potencia(2,10))
//Cuando una funcion de flecha no tiene parametros, su lista de parametros es solo un conujunto vacio de parentesis. 

const bocina=()=>{
    console.log("Toot")
}
// si una funcion tiene un parametro y nosostros le mandamos mas de los que tiene solo tomara los que necesite ejemrplo: 
function cuadrados(x){return x*x}
console.log(cuadrados(4,true,"erizo"))//solo se toma el 4 

function menos(a,b){
    if (b===undefined) return -a
    else return a-b
}
console.log(menos(10))//-10
console.log(menos(10,5))//5
//tambien se puede establecer un parametro como predeterminado. 
function tabla2(numero,exponente=2){
    return numero**exponente
}
console.log(tabla2(4))//16
console.log(tabla2(2,6))//64
function envolverValor(n){
    let local=n
    return ()=>local
}
let envoler1=envolverValor(1)
let envolver2=envolverValor(2)
console.log(envoler1())
console.log(envolver2())

function multiplicador(factor){
    return numero => numero*factor
}
let duplicar= multiplicador(2)
console.log(duplicar(5))//10
//Recursion 
function potenciaRecursion(base,exponente){
    if (exponente==0){
        return 1
    }else{
        return base*potencia(base,exponente-1)
    }
}
console.log(potenciaRecursion(2,3))//8 