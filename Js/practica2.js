


let valor1 = parseInt(prompt("Porfavor de me un valor"))
let valor2 = parseInt(prompt("Porfavor de me otro valor"))
let valor3 = parseInt(prompt("Porfavor de me otro valor"))

    // if (valor1 == valor2 || valor1 == valor3 || valor2 == valor3){

    //     console.log("Deben ser números distintos")
    // }
 if (valor1 > valor2 && valor1 > valor3){
            console.log("El valor número 1 es mayor")
    }
else if (valor2 > valor1 && valor2 > valor3){
    
        console.log("El valor número 2 es mayor")
}
else if (valor3 > valor1 && valor3 > valor2){
            console.log("El valor número 3 es mayor")

}
else{

    console.log("Los 3 números son iguales");
}