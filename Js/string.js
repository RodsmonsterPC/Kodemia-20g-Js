

//! Lenght

// let oracion = "Hallo mein name ist Rodolfo"

// let len = oracion.length

// console.log(len);

//! replace

// const exe = "cat"

// let rep = exe.replace("c","b")

// console.log(rep)

//! IndexOF

// const mess = "Wake up, do it"

// let ind = mess.indexOf("ak")

// console.log("Index" + ind)

//! Lastindex

// const ejem = "Paracetamol"

// let lastind = ejem.lastIndexOf("l")

// console.log(lastind);

//! StartWidth

// const plan = "Java is fun, ha joking"

// let startWidth= plan.startsWith("Java")

// console.log(startWidth);

// startWidth = plan.startsWith("fun")

// console.log(startWidth)


//! Practica String

let mensaje = prompt("Escriba una oración")

let largo = mensaje.length

let vocales = ["a","e","i","o","u"]

let contadorVocales = 0;

for (let i of mensaje.toLowerCase()){
    if (vocales.includes(i)){
        contadorVocales++;
    }
}

let imprimir = mensaje.substring(0, mensaje.length)

console.log(`Tu oración es de ${largo} caracteres, se tiene ${contadorVocales} vocales, ${imprimir}`)






