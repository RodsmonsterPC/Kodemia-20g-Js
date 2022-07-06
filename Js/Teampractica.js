
//! Ejercicio 1
// let valor = parseInt(prompt("Digite un número del 10 al 100"))

// if (valor  >= 10 && valor <=100 ){
   
// for (let i = 0; i <= valor; i++){
    
//     if (i % 2 == 0){

//         console.log(i)
//     }
    
// }
// }
// else
//     console.log("Valores del 10 al 100 porfavor")


//! Ejercicio 2
    let texto = prompt('Ingresa una frase o palabra');
    let minusculas= texto.toLowerCase().replace(" ","");
    let mayusculas= texto.replace(/[aeiouAEIOU]/gi, '').replace(" ", '');
    let vocales = ""
    let consonantes = ""

    for(let i=0; i < texto.length; i++ ){
            if(minusculas[i] === 'a' || 
            minusculas[i] === 'e' || 
            minusculas[i] === 'i' || 
            minusculas[i] === 'o' || 
            minusculas[i] === 'u') {
            
                vocales += minusculas[i]

            }
    }
    
    for(let i=0; i < mayusculas.length; i++ ){
            consonantes += mayusculas[i]
            
            
    }
    
    console.log(vocales)

    console.log(consonantes)
    
    //! Ejercicio 3

  
