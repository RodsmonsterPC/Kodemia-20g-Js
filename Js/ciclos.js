


// for (let i = 0; i <= 3; i++){

//     console.log(`La cuenta va en ${i}`)
// }


// for (let i = 0; i <= 10; i++){

//     console.log(`5 x ${1} = ${5 * i}`)
// }

//! Practica 1

// let mensaje = prompt("Escriba una oración")
 
// let contadorVocales = 0

// let mensajeVocales = mensaje.toLowerCase().replace("","");

// for (let i = 0 ; i < mensaje.length; i++ ){

//     if (mensajeVocales[i] === "a" ||
//         mensajeVocales[i] === "e" ||
//         mensajeVocales[i] === "i" ||
//         mensajeVocales[i] === "o" ||
//         mensajeVocales[i] === "u"
//         ) {
//             console.log(mensajeVocales[i])
//         }
    
// }

//! Practica 2

// let mensaje = prompt("Escriba una oración")
 
// let mensajeVocales = mensaje.toLowerCase();

// for (let i = 0 ; i < mensaje.length; i++ ){

//     if (mensajeVocales[i] !== "a" &&
//         mensajeVocales[i] !== "e" &&
//         mensajeVocales[i] !== "i" &&
//         mensajeVocales[i] !== "o" &&
//         mensajeVocales[i] !== "u" &&
//         mensajeVocales[i] !== "") {
//         console.log(mensajeVocales[i])
//         }
    
// }

//! Practica 3

let valor = parseInt(prompt("Digite un número del 1 al 10"))

if (valor > 10 ){
    console.log("Valores del 1 al 10 porfavor")
}

for (let i = 0; i <= 10; i++){

    console.log(`${valor} x ${i} = ${valor * i}`)
}
