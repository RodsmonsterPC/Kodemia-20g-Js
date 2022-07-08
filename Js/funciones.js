
//! practica 1
// function funcionstring(){
//     let valor = parseInt(prompt("Ingrese un valor del 1 al 100"))

// if (valor <= 1 && valor >=100 ){
//     console.log("Un valor del 1 al 100 porfavor")
// }
// else{

//     let sum = 0
//     for(i=0 ; i <=valor; i++ ){

//     sum += i;
// }
// alert(sum)
// }
// }

// funcionstring();

//! practica 2

// function funcionOperacion(valor1,valor2) {
    
//     let resultado = valor1 === valor2 ?
//         "Los 2 son iguales" : valor1 > valor2 ?
//             "El primero valor es mayor" :
//             "El segundo valor es mayor"

//     return console.log(resultado);
// }

// funcionOperacion(4,5);


//? Ejercicio en equipo

//! Ejercicio 1
//? función que recibe un número y que devuelve la suma de sus multiplos
// let valor1 = parseInt(prompt("Escribe 3, 5 ó 7 para saber sus multiplos"))

// function multiplosEjercicio(num){
    
//     let sum = 0
    
//     if(num == 3 || num == 5 || num == 7){
//         for(i=1 ; num*i<=100 ; i++) {
//             console.log(`${num} X ${i} = ${num*i}`);
//             sum = sum + num*i
//         }
//     }
//     else{
//         window.alert("Número Inválido")
//     }
//     return sum;
// }


// let resultado = multiplosEjercicio(valor1);
// console.log(`la suma de los multiplos de ${valor1} es ${resultado}`)

//! Ejercicio 2

// let valor = parseInt(prompt("Ingrese un valor del 1 al 100"))

// function sumaValores(dato){

    

//     if (dato <= 1 && dato >=100 ){
//     console.log("Un valor del 1 al 100 porfavor")
//     }
//     else{

//     let operacion = 0
//     for(i=0 ; i <=dato; i++ ){
 
//        operacion += i;
//     }
//     return operacion;
// }

// }


// let resultado = sumaValores(valor);
// console.log(`Su valor fue: ${valor} la suma es = ${resultado}`)

// //! Ejercicio 3

// let mensaje = prompt("Ingrese una oración")

// function vocalesEspacios(oracion){

//     let vocala = ["a"]
//     let vocale = ["e"]
//     let resultado = 0
//     let contadorVocala = 0;
//     let contadorVocale = 0;
    
//     for (let i of oracion.toLowerCase()){
//         if (vocala.includes(i)){
//             contadorVocala++;
//         }
//     }
//     for (let i of oracion.toLowerCase()){
//         if (vocale.includes(i)){
//             contadorVocale++;
//         }
//     }
//     let contadorVacios = (oracion.split(" ").length-1);
    
//     //! quedo con duda
//     // for (let i of mensaje.matchAll()){
//     //     if (espacios.includes(i)){
//     //         contadorVacios++;
           
//     //     }
//     // }
     
    
//     resultado = ( `Se tiene A = ${contadorVocala} E= ${contadorVocale} y espacios vacios= ${contadorVacios} `)

//     return resultado;
// }


// let resultado = vocalesEspacios(mensaje);
// console.log(`Su mensaje fue: ${mensaje} ${resultado}`)
