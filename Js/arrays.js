
//! ArrayReverse

// let datos = ["reves", "al", "estoy", "hola"]

// let reverseArray = datos.reverse();

// console.log(reverseArray);

//! shift

let datos = ["HTML", "Javascript" , "Python", "Java"]

//¿Cual no es un lenguaje?

let first  = datos.shift();

console.log(first)
console.log(datos)

//! find

let numeros = [1, 3, 4, 7, 9]


function isEven(element){
    return element % 2 == 0;
}

let resultado = numeros.find(isEven);
console.log(resultado)