function ciclo(n,argumento,operacion,accion){
    if(argumento(n) == true){
        accion(n)
        n += operacion(n)
        return ciclo(n,argumento,operacion,accion)
    }else{
        return
    }

}
ciclo(3, n => n >0, n=>-1,console.log)
// 3
// 2
// 1

function cada(array,test){
    for( element of array){
        if(test(element)==false){
            return false
        }
    }
    return true
}

console.log(cada([1, 3, 5], n => n < 10));
// → true
console.log(cada([2, 4, 16], n => n < 10));
// → false
console.log(cada([], n => n < 10));
// → true