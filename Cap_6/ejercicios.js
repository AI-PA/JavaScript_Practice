console.log("Vectores")
class vector{
    constructor(x,y){
        this.x = x
        this.y = y
    }
    mas(numero){
        return new vector( this.x + numero.x, this.y + numero.y)
    }
    menos(numero){
        return new vector(this.x - numero.x, this.y - numero.y)
    }
    get length(){
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}
console.log(new vector(1, 2).mas(new vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new vector(1, 2).menos(new vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new vector(3, 4).length);
// → 5

console.log()
console.log()
console.log("Conjuntos")
console.log()

class Conjunto{
    constructor(){
        this.members =[]
    }
    add(numeros){
        if(!this.has(numeros)){
            this.members.push(numeros)
        }   
    }
    delete(numero){
        this.members=this.members.filter(v => v!==numero)
    }
    has(numero){
        return this.members.includes(numero)
    }
    static from(collection){
        let group= new Conjunto
        for(let value of collection){
            group.add(value)
        }
        return group
    }
}
let conjunto = Conjunto.from([10, 20]);
console.log(conjunto.has(10));
// → true
console.log(conjunto.has(30));
// → false
conjunto.add(10);
conjunto.delete(10);
console.log(conjunto.has(10));
// → false