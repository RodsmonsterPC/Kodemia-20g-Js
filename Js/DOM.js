
// * Practica
// * 1. Agregar en nuestro index.html
// *  1.1. Un elemento lista <ul></ul> o <ol></ol>
// *  1.2 Agregar varios list items dentro de nuestra lista <li></li> con la clase "item"
// * 2. Usando Javascript realizamos lo siguiente
// *  2.1. A nuestro elemento list debemos agregarle la clase 'lista' y el id 'lista'
// *  2.2. A todos los elementos de la lista debemos retirarle la clase "item"
// *  2.3. A todos los elementos de la lista debemos agregar la clase  'list__item'

// let list = document.querySelector("ul")
// let listas = document.querySelectorAll("li")

// list.setAttribute("class", "lista")
// list.setAttribute("id", "lista")


// listas.forEach((li) =>{
//     li.removeAttribute("class")
//     li.setAttribute("class", "list__item")
// })

// console.log(list)
// console.log(listas)


//! Ejercicio 1 - Repicar este markup (HTML) usando JS
 
// <ul id="menu" class="menu">
//        <li class="item__menu">Home</li>
//        <li class="item__menu">Products</li>
//        <li class="item__menu">About Us</li>
//    </ul>


// let list = document.createElement('ul')

// list.setAttribute("class", "menu")
// list.setAttribute("id", "menu")

// let body = document.querySelector('body')

// body.appendChild(list)


// for (let i =0 ; i <= 2 ; i++){
//     let item = document.createElement("li")
//     if (i === 0){
//         item.textContent ="Home"       
//         item.setAttribute("class", "item__menu")
//         list.appendChild(item)
        
//     }
//     else if (i === 1 ){
//         item.textContent = "Products"
//         item.setAttribute("class", "item__menu")
//         list.appendChild(item)
//     }
//     else {
//         item.textContent = "About us"
//         item.setAttribute("class", "item__menu")
//         list.appendChild(item)
//     }
    

// }

//! Tarea 1 DOM

// Dado un arreglo de koders
// 1. Generar una lista con la clase "koders"
// 2. Agregar a cada koder en esa lista
// 3. A todos los koders agregarles la clase "item koder"

let koders =  [
    {
        name: 'Ferdinand',
        lastName: 'Bracho',
        age: 30,
        generation: 2,
        modulos: ['js','python', 'git'],
    },
    {
        name: 'Alfredo',
        lastName: 'Pi',
        age: 20,
        generation: 10,
        modulos: ['Node', 'Cloud'],
    },
    {
        name: 'Ale',
        lastName: 'Pa',
        age: 30,
        generation: 1,
        modulos: ['React'],
    }
 ]

let body = document.querySelector("body")

 let list = document.createElement("ul")

 list.setAttribute("class", "koders")

// let listas = document.createElement("li")

 

 
body.appendChild(list)


// list.appendChild(listas)

 koders.forEach(obj => {

    let resultado = document.createElement("li")
    resultado.setAttribute("class", "item koder")
    resultado.textContent = (`${obj.name} ${obj.lastName} tiene ${obj.age} es de la generación ${obj.generation} sus modulos son: ${obj.modulos}`)
    list.appendChild(resultado)
 })


 
//  koders.forEach((obj) => {

//     list.appendChild(obj)
//     obj.setAttribute("class", "item koder")
//  })




