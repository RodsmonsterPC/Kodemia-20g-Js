
//! ArrayReverse

// let datos = ["reves", "al", "estoy", "hola"]

// let reverseArray = datos.reverse();

// console.log(reverseArray);

//! shift

// let datos = ["HTML", "Javascript" , "Python", "Java"]

// //¿Cual no es un lenguaje?

// let first  = datos.shift();

// console.log(first)
// console.log(datos)

//! find

// let numeros = [1, 3, 4, 7, 9]


// function isEven(element){
//     return element % 2 == 0;
// }

// let resultado = numeros.find(isEven);
// console.log(resultado)

//! Ejercicio de la semana

//? Obtener numeros pares de una array
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// if (numeros == ""){
//     console.log("Se necesita un array")
// }

// const numerosPares = (num) => {

//     if (num % 2 === 0){
//         return true;

//     }
//     else
//     return false;

// }

// let resultado = numeros.filter(numerosPares)

// console.log(resultado)

//? Obtener los utlimos 2 carcateres de un array




















//! Ejercicio en equipo 

/**
* Escribir una función
* Reciba como parametro un array de ciudades
* Retornar las ciudades capitalizadas
* capitalize(['méxicO','RIo', 'Los AngelEs', 'esTAMBUL])
* -> ['México','Rio', 'Los Angeles','Estambul']
* Usar el metodo de array ForEach
*/

// let arrayCities = ['méxicO','RIo', 'Los AngelEs', 'esTAMBUL'];
// let newCities = [];
// const capitalize = (arrayCities) => {
//     arrayCities.forEach(element => {
//         newCities.push(element[0].toUpperCase() + element.slice(1).toLowerCase());
//     });
// }
// capitalize(arrayCities);
// console.log(newCities);


//! Ejercicio 2 en equipo

/**
* Escribir una función
* Reciba como parámetro Un array de ciudades
* Retornar las ciudades capitalizadas
* capitalize(['méxicO','RIo', 'Los AngelEs'])
* -> ['México','Rio', 'Los Angeles']
* Usar el método de array Map
*/


// let arrayCities = ['méxicO','RIo', 'Los AngelEs', 'esTAMBUL'];
// let newCities = [];
// const capitalize = (arrayCities) => {
//     newCities = arrayCities.map(element => {
//         return(element[0].toUpperCase() + element.slice(1).toLowerCase());
//     });
// }
// capitalize(arrayCities);
// console.log(newCities);


//! Tarea 3

//?Escribir al reves un array
// * Función que reciba una palabra
// * Retorna la palabra invertida
// * La reversa del string lo haremos usando métodos de array
// *  hint :  a un string no podemos aplicarle métodos array pero hay métodos de string que nos devuelve un array
// *
// * reverseStr('hola mundo')
// * -> 'odnum aloh'

// let mensaje = reverse("Hola mundo")

// function reverse(str){
//     return str.split("").reverse().join("");
// }

// let array = mensaje.split(",")
//  console.log(array)


//? Ejercicio 2

// * Dado el siguiente arreglo de ciudades
// *   ['méXicO', 'PErÚ', 'eSpAña', 'inGlaterrA']
// * Generar una función que capitalize cada elemento del array
// * => Se puede resolver con .forEach() o .map()

// let arrayCities = ['méXicO', 'PErÚ', 'eSpAña', 'inGlaterrA'];
// let newCities = [];
// const capitalize = (arrayCities) => {
//     newCities = arrayCities.map(element => {
//         return(element[0].toUpperCase() + element.slice(1).toLowerCase());
//     });
// }
// capitalize(arrayCities);
// console.log(newCities);



//?Ejercicio 3

// * Dado un arreglo con nombres de personas,
// * Función que devuelva un arreglo con los nombres de las personas que empiezan con vocales y además capitalizados
// *
// * onlyNamesVowels( ['jorge','ana','ivan','sergio','oscar' ] )
// * -> ['Ana','Ivan','Oscar']
// *
// * => Se puede resolver con .forEach() o .filter()
// */

// let nombres = ['jorge','ana','ivan','sergio','oscar' ]

// let vocales = nombres.filter((str) => {
//         if (str[0] === 'a' || 
//             str[0] === 'e' || 
//             str[0] === 'i' || 
//             str[0] === 'o' || 
//             str[0] === 'u'){

//                 return str;
//             }
// }).map((str)=> {

//     return(str[0].toUpperCase() + str.slice(1).toLowerCase());
// })

// console.log(vocales);

// function vocales(str){
//     if (str[0] === 'a' || 
//         str[0] === 'e' || 
//         str[0] === 'i' || 
//         str[0] === 'o' || 
//         str[0] === 'u'){
        
             
//             return true
//     }
//     else return false

// }
// function mayusculas(text){
//     text[0].toUpperCase() + text.slice(1).toLowerCase()
// }



//  let resultado = nombres.filter(vocales)
// resultado.forEach(mayusculas)

// console.log(resultado);


//!Ejercicio Reduce

// Función que reciba un array de nombre y esta debe devolver un string con las iniciales de los nombre
 
// getInitial(['Ferdinand','Jose','Maria','Dora']) -> FJMD

// const koders = ['Ferdinand','Jose','Maria','Dora']

// const iniciales = (arr) => {

//     let inicialesArray = arr.reduce((acc,cv) => {
//         acc += cv[0].toUpperCase();
//         return acc;
//     }, "" )

//     return inicialesArray;


// }


//  result = koders.reduce((acc, cv) => {
//    acc += cv[0];
//    return acc;
//   }, '');
 

// let result = iniciales(koders)
// console.log(result)


//! Ejercicio 2

// Dado una arreglo compuesto por arreglos,
// * crea una función que calcule la suma de los arreglos
// *
// * additionMultiArr(  [ [1,2,3] , [1,3,2] , [3,2,1] ] )
// * -> 18

// const valores = [[1,2,3] , [1,3,2] , [3,2,1]]

// const sum = (numero) => {
    
//     let total = 0
//     numero.forEach(value => {
        
//         if (value instanceof Array){
//         let resultado = value.reduce((acctotal, cv ) => {
//                 acctotal += cv;
//                 return acctotal;
//             }, 0)
                
//             total += resultado
//         }
        
//     }); return total
         
// }

// let result = sum(valores)
// console.log(result)

//! Ejercicio 3

// función con .reduce()
// * Dado un array de numeros, obtener la suma de solo los elementos positivos
// * addAllPositives( [ 1, -4, 12, 0, -3, 29, -150] )
// * -> 42


// const valores = [ 1, -4, 12, 0, -3, 29, -150]

// const sum = (arr)  => {

//     let arratotal = arr.reduce((acc,cv) =>{

//         if ( cv > 0 ){

//             acc += cv;
//         }
//         return acc;
//     }, 0)

//     return arratotal;
// }

// console.log(sum(valores))

// const sumPositivos = (arrReduce) => {
//     let totalpositivos = 0
//     let reduceResult = arrReduce.reduce((acc, cv) => {
//         if (cv > 0) {
//             totalpositivos += cv
//         }
//         return totalpositivos
//     }, 0)
//     return reduceResult
// }
// console.log(sumPositivos([1, -4, 12, 0, -3, 29, -150]));