

// first_name: "Rods";

// const player = {
//     score: 88888,
//     level: 7,
//     lives: 2,
//     vitalEnergy: 1,
//     isAlive: true,
//    };
    
//    console.log(player);
    
    
//    // ! 1 Jugador recibe un golpe crítico que le resta 25 puntos de energía vital "vital Energy"
//    // Realizar código para llevar a cabo las operaciones
                               
//    player.vitalEnergy = player.vitalEnergy - 25
//                                 //si es verdadero              //si es falso
//    player.vitalEnergy <= 0 ? console.log("As muerto") : console.log("Sigues con vida")
   
//    // ! 2 Si la energía vital del jugador es menor a 0 pasado "isAlive" = false
//    // Realizar código para llevar a cabo las operaciones

//                                         //si es verdadero              //si es falso
//    player.vitalEnergy <= 0 ? console.log(player.isAlive = false) : console.log(player.isAlive = true) 

    
//    // ! 3 Revisamos nuestro jugador
//    // Realizar código para llevar a cabo las operaciones
    
//     console.log(player)
    
//    // ! 4  Si No está vivo pero tienen más vidas entonces -> Puntaje = 0, Vida -1, nivel = 0, energia vital = 100
//    // Realizar código para llevar a cabo las operaciones

//  player.vitalEnergy <= 0 ? player.lives = player.lives - 1: console.log("Sigues vivo")
 
//  player.lives = 0 ? console.log("Game Over") :console.log(`Te quedan ${player.lives}`)


//! Ejercicio 2

// Un log donde veamos la suma total de notas
// Opcional - Un log donde veamos el promedio de las notas a dos decimales
// Hint, use toFixed() method

// const grades = {
//     first_test: 7.5,
//     second_test: 10,
//     third_test: 6,
//    };

//    let total = 0
//    let promedio = 0
//    for (sum in grades){
    
//     total = total + grades[sum];
//     promedio ++
// }
// console.log(total)


// console.log(`El valor total es: ${total}`)
// console.log(`El promedio es: ${(total/promedio).toFixed(2)}`)

//! Tarea 1

// Crea el objeto koder (con al menos 6 propiedades, al menos 1 debe ser otro objeto con 2 o 3 propiedades propias)
// Luego imprimir en consola alguna oración que haga uso de algunas de esas propiedades, accedemos a ellas, incluida la del objeto anidado
// Luego en otro console log, imprime todas las llaves dentro del objeto
// Luego en otra console log, imprime todas los valores dentro del objeto
// En otro console log imprime cuántos elementos tiene el objeto -> hint: utilizamos un contador

// const koder = {

//     nombre: "Rodolfo",
//     apellido: "Pérez",
//     edad: 23,
//     generacion: 20,
//     altura: 1.98,
//     modulos: ["css", " html", " javascript"],

// };

// console.log(`El nombre es ${koder.nombre} ${koder.apellido} tiene ${koder.edad} años, forma parte de la generacion ${koder.generacion} tiene una altura de ${koder.altura} y a cursado ${koder.modulos}`)
    
// console.log(koder)

// let total = ""
// let iteraccion = 0
// for (element in koder){
//     console.log(element)
//     console.log(koder[element])
//     iteraccion ++
// }


// console.log(total)
// console.log(`El objeto tiene ${iteraccion} elementos`)

//! Tarea 2

// 1. Agregar el lenguaje 'Go' a la lista de lenguajes
// 2. Agregar fastApi en frameworks
// 3. Cambiar el nivel a 4
// 4. Eliminar la propiedad avatar
// 5. Agregar una nueva propiedad de edad y poner el valor de 30
// 6. Imprimir en consola todos los lenguajes  y frameworks dominados
// 7. Clonar el objeto en uno nuevo
// 8. Imprimir en consola el nuevo objeto

 
// let koder = {
//    languages: ["JavaScript", "Python", "SQL"],
//    frameworks: ["django", "node", "flask"],
//    isMentor: true,
//    level: 3,
//    avatar: "https://picsum.photos/200/300"
// }

// let nuevoLenguaje = "Go"
// let nuevoFramework = "fastApi"
// koder.languages.push(nuevoLenguaje)
// koder.frameworks.push(nuevoFramework)

// koder.level = 4

// delete koder.avatar

// koder.edad = 30

// console.log(koder.languages)
// console.log(koder.frameworks)


// const nuevokoder= Object.assign(koder)
// console.log(nuevokoder)