
//! Ejercicio 1
// let valor = parseInt(prompt("Escoge entre 3, 5 o 7"))

// switch (valor){

//     case 3:
//     let suma3 = 0
//     for (i=1; i<=100; i++ ){
//     if(i % 3 === 0){
//         suma3 += i;
//     }
// }
//       console.log(suma3)
            
//         break
//     case 5:
       
//         let suma5 = 0
//         for (i=1; i<=100; i++ ){
//         if(i % 5 == 0){
//             suma5 += i;
//         }
//     }
//     console.log(suma5)
//         break
//     case 7:
//         let suma7 = 0
//         for (i=1; i<=100; i++ ){
//         if(i % 7 == 0){
//             suma7 += i;
//         }
//     }
//     console.log(suma7)
//         break
//     default: 
//     console.log("Porfavor seleccione 3, 5 o 7")
// }

//! Ejercicio 2

// let valor = parseInt(prompt("Ingrese un valor del 1 al 100"))

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

//! Ejercicio 3

// let mensaje = prompt("Ingrese una oración")

// let vocala = ["a"]
// let vocale = ["e"]

// let contadorVocala = 0;
// let contadorVocale = 0;

// for (let i of mensaje.toLowerCase()){
//     if (vocala.includes(i)){
//         contadorVocala++;
//     }
// }
// for (let i of mensaje.toLowerCase()){
//     if (vocale.includes(i)){
//         contadorVocale++;
//     }
// }
// let contadorVacios = (mensaje.split(" ").length-1);

// //! quedo con duda
// // for (let i of mensaje.matchAll()){
// //     if (espacios.includes(i)){
// //         contadorVacios++;
       
// //     }
// // }
//  let imprimir = mensaje.substring(0, mensaje.length)

// alert( `Se tiene A = ${contadorVocala} E= ${contadorVocale} y espacios vacios= ${contadorVacios} oración: ${imprimir}`)


//! Ejemplo documentación

// var a = e = i = o = u = blancos = 0;
//         vectorLetras = consultarTexto();
        
//         function consultarTexto(){
//             var pideTexto = window.prompt("escribe un texto cualquiera");
//             var textoRoto = pideTexto.toLowerCase().split("");
//             return textoRoto;
//         }        
        
//         for(k=0;k < vectorLetras.length;k++){
            
//             switch(vectorLetras[k]){
//                 case "a":
//                 case "à":
//                 case "á":
//                     a++;
//                     break;
//                 case "e":
//                 case "é":
//                 case "è":
//                     e++;
//                     break;
//                 case "i":
//                 case "í":
//                 case "ì":
//                     i++;
//                     break;
//                 case "o":
//                 case "ó":
//                 case "ò":
//                     o++;
//                     break;
//                 case "u":
//                 case "ú":
//                 case "ù":
//                     u++;
//                     break;
//                 case " ":
//                     blancos++;
//             }
//         }
        
//         totalVocales = a+e+i+o+u;
        
//         document.write("Hay " +  a + " vocales 'a'<br>");
//         document.write("Hay " +  e + " vocales 'e'<br>");
//         document.write("Hay " +  i + " vocales 'i'<br>");
//         document.write("Hay " +  o + " vocales 'o'<br>");
//         document.write("Hay " +  u + " vocales 'u'<br>");
        
//         document.write("<br>");
//         document.write("Total de vocales: " + totalVocales);
//         document.write("<br>");
//         document.write("Total de espacios en blanco: " + blancos);
//         document.write("<br>");
//         document.write("Total de carácteres escritos: " + vectorLetras.length);
//         document.write("<br>");
//         document.write("Texto original: <b>" + vectorLetras.join("") + "</b>");