

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


//! Ejercicio1 del Viernes

//  * Ejercicio 1.
//  * Realizar una funcion que tome como parametro un objeto
//  * y devuelva un array de arrays con la siguiente estructura
//  * [ [key, value], [key, value] ]
//  * makePairs( { a: 1, b: 2 } )
//  * => [ ['a', 1], ['b', 2]]

// const obj = {
//     a: 1,
//     b: 2,
// }

// console.log(Object.entries(obj))

// const exe = {
//      a: 1,
//      b: 2,
// }

// const arrayMaker = (obj) => {

//     let pares = Object.keys(obj);

//     let resultado = pares.map((key) => {

//        return [key, obj[key]];

//     }); 
//     return resultado;
// }

// console.log(arrayMaker(exe))


//! Ejercicio 2

// * Dado un objeto de salarios
// * Crear una funcion que retorne una lista
// * con los salarios ordenados de menor a mayor
// * orderSalary( salarios)
// * -> [4000, 5000, 7000]
// hint -> Usar metodo de objetos y luego un metodo de array para ordenar



// const salarios = {

//     a : 4000,
//     b : 5000,
//     c : 7000,
// }

// const datos = (obj) => {

//     let resultado = Object.values(obj); 

//     resultado.sort();
    
//     return resultado;

// }

// console.log(datos(salarios))

//! Tarea fin de semana 

// * Dado un array de objetos koders
// * Imprimir en consola, todos los nombres de cada koder
// *
// * Ferdinand Bracho tiene 30 años y es de la generación 2 y su primer modulo es python
// * Jose Hernandez tiene 20 años y es de la generación0 20' y su primer modulo es nodeJs
// * ....


/**
* Del mismo array de koders
* Obtener la suma de todas las edades
*
*/

// let koders = [
//     {
//       name: "Ferdinand",
//       apellido: "Bracho",
//       edad: 30,
//       generacion: 2,
//       modulos: ["js", " python", " git/github"],
//     },
//     {
//       name: "jose",
//       apellido: "Hernandez",
//       edad: 20,
//       generacion: 13,
//       modulos: ["NodeJs"],
//     },
//     {
//       name: "Dora",
//       apellido: "Mesa",
//       edad: 27,
//       generacion: 16,
//       modulos: [" HTML / CSS"],
//     },
//   ];

//   koders.forEach((obj, index, array) =>{

//     console.log(`${obj.name} ${obj.apellido} tiene ${obj.edad} y es de la generacion ${obj.generacion} y su primer modulo es ${obj.modulos}`);


//   });

//   let totaledad = 0
//   koders.forEach((obj, index, array) => {
    
//      totaledad += obj.edad;

//     return totaledad;
//   })

// console.log(totaledad)

// let totaledad = koders.reduce((acc,cv) =>{

//     acc += cv.edad;

//     return acc;

// }, 0)

// console.log(totaledad)

// * Del objeto library (dado mas adelante)
// * 1. Obtener el numero de libros que se estan leyendo
// * 2. Obtener una lista de todos los autores
// * 3. Obtener una lista de todos los Libros

// let library = [
//     {
//       author: "Bill Gates",
//       title: "The Road Ahead",
//       readingStatus: true,
//     },
//     {
//       author: "Steve Jobs",
//       title: "Walter Isaacson",
//       readingStatus: true,
//     },
//     {
//       author: "Suzanne Collins",
//       title: "Mockingjay: The Final Book of The Hunger Games",
//       readingStatus: false,
//     },
//   ];


//   let totallibros = library.reduce((total,libros) => {

//     return libros.readingStatus ? (total += 1) : total;

//   }, 0);

//   console.log(`El número de libros es : ${totallibros}`)

//   let totalAutores = library.forEach((autor) => {

//     console.log(` El autor es : ${autor.author}`)
//   })


//   let totalLibros = library.forEach((libro) => {

//     console.log(`El libro es: ${libro.title}`)
//   })



