

//! Tarea funciones

//? Ejercicio 1

//Imprimir string al reves


// let mensaje = prompt("Escriba una oración")

// function textoReverso(str){

//     let resultado = ""

//     for (let i = mensaje.length - 1; i >= 0 ; i-- ){
//         resultado = resultado + mensaje.charAt(i);

//     }
//     return resultado;
// }
// let imprimir = textoReverso(mensaje)
// alert(`Su oracion fue ${mensaje} al reves seria: ${imprimir}`)

//? Ejercicio 2
//Suma de digitos, ignorando el 3
// let valor1 = parseInt(prompt("Ingrese un valor"))
// let valor2 = parseInt(prompt("Ingrese otro valor"))
// let valor3 = parseInt(prompt("Ingrese otro valor si gusta"))

// function operacionSuma(num1,num2,num3){
//     let sum = 0


//     if(valor1 == 0 || valor2 == 0){
//         console.log("Faltan datos")
//     }

//     else (sum= valor1 + valor2 + valor3)

//     return sum;
// }

// let imprimir = operacionSuma(valor1,valor2,valor3)
// alert(imprimir)

//? Ejercicio 3
// convertir de centrigrados a Fahrenheit
// let gradosCentrigrados = parseInt(prompt("Porfavor escriba su temperatura en grados centigrados"))

// function convetidorFahr(temp){

//     let gradosFah
//     if (gradosCentrigrados == ""){
//         alert("Faltan datos")
//         return;
//     }

//     else (gradosFah = gradosCentrigrados * 9/5 + 32)


//     return gradosFah;

// }
//     let imprimir = convetidorFahr(gradosCentrigrados)
//     alert(`La temperatura en grados Fahrenheit es ${imprimir} ºF`)


//? Ejercicio 4
//tablas de multplicar
// let valor = parseInt(prompt("Ingrese un valor del 1 al 10"))

// function multiplos(num){

//     let resultado = 0
//     if(valor < 1 || valor >10){
//         console.log("Valores de 1 al 10 porfavor")
//         return;
//     }


//     let x = 0

//     do{
//         console.log(`${valor} x ${x} = ${valor*x}`);
//         x++;

//     } while(x <= 10 )

//     return resultado;

// }

// multiplos(valor);

//? Ejercicio 5

//Suma de digitos en un ciclo

// let valor = parseInt(prompt("Digite un valor del 1 al 100"))

// function sumadorN(num){
    
//     let resultado = 0
//     if (valor < 1 || valor >100 ){
//         console.log("Un valor del 1 al 100 porfavor")
//     }
//     else{
//         valor = 3
//         let sum = 0
//         for(i=0 ; i <=valor; i++ ){
     
//         sum += i;
//     }
//     resultado = sum
//     }
//     return resultado;
// }

// let imprimir = sumadorN(valor)
// alert(`${imprimir}`)



//? Ejercicio en clase
//! Refactorizar funciones

// let mensaje = prompt("Escriba una oración")

// const  funciontextoReverso = str => {

//     let resultado = ""

//     for (let i = mensaje.length - 1; i >= 0 ; i-- ){
//         resultado = resultado + mensaje.charAt(i);

//     }
//     return resultado;
// }
// let imprimir = funciontextoReverso(mensaje)
// alert(`Su oracion fue ${mensaje} al reves seria: ${imprimir}`)

// let gradosCentrigrados = parseInt(prompt("Porfavor escriba su temperatura en grados centigrados"))

// const funcionConvetidorFahr =(temp) => {

//     let gradosFah
//     if (gradosCentrigrados == ""){
//         alert("Faltan datos")
//         return;
//     }

//     else (gradosFah = gradosCentrigrados * 9/5 + 32)


//     return gradosFah;

// }
//     let imprimir = funcionConvetidorFahr(gradosCentrigrados)
//     alert(`La temperatura en grados Fahrenheit es ${imprimir} ºF`)

//! Practica grupal arrow

// let mensaje = prompt("Escriba una oración")

// const funcionPalindromo = (mensaje) => {

//     let espacios = mensaje.replaceAll(" ",'')
//     let resultado = ""

    
//     for (let i = espacios.length - 1; i >= 0 ; i-- ){
//           resultado = resultado + espacios.charAt(i);
          
//     }
//     if (espacios === resultado){
//         console.log("Es un palindromo")
//     }
//     else{
//         console.log("No es un palindromo")
//     }
    

// }
// funcionPalindromo(mensaje);