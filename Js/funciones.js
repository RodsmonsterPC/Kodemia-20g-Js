
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

function funcionOperacion(valor1,valor2) {
    
    let resultado = valor1 === valor2 ?
        "Los 2 son iguales" : valor1 > valor2 ?
            "El primero valor es mayor" :
            "El segundo valor es mayor"

    return console.log(resultado);
}

funcionOperacion(4,5);



