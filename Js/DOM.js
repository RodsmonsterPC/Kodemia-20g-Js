
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

// let koders =  [
//     {
//         name: 'Ferdinand',
//         lastName: 'Bracho',
//         age: 30,
//         generation: 2,
//         modulos: ['js','python', 'git'],
//     },
//     {
//         name: 'Alfredo',
//         lastName: 'Pi',
//         age: 20,
//         generation: 10,
//         modulos: ['Node', 'Cloud'],
//     },
//     {
//         name: 'Ale',
//         lastName: 'Pa',
//         age: 30,
//         generation: 1,
//         modulos: ['React'],
//     }
//  ]

// let body = document.querySelector("body")

//  let list = document.createElement("ul")

//  list.setAttribute("class", "koders")

// let listas = document.createElement("li")

// body.appendChild(list)

// list.appendChild(listas)
//  koders.forEach(obj => {

//     let resultado = document.createElement("li")
//     resultado.setAttribute("class", "item koder")
//     resultado.textContent = (`${obj.name} ${obj.lastName} tiene ${obj.age} es de la generación ${obj.generation} sus modulos son: ${obj.modulos}`)
//     list.appendChild(resultado)
//  })


 
//  koders.forEach((obj) => {

//     list.appendChild(obj)
//     obj.setAttribute("class", "item koder")
//  })


//! Ejercicio Grupal Innerhtml

// Funcion que reciba como parametro un array de post y que pinte esos post
// Refencia -> https://getbootstrap.com/docs/5.2/components/list-group/#custom-content

{/* <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
  </a>
</div> */}

// let posts = [
//     {
//       userId: 1,
//       id: 1,
//       title:
//         "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//       body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//     },
//     {
//       userId: 1,
//       id: 2,
//       title: "qui est esse",
//       body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//     },
//     {
//       userId: 1,
//       id: 3,
//       title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//       body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
//     },
//     {
//       userId: 1,
//       id: 4,
//       title: "eum et est occaecati",
//       body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
//     },
//     {
//       userId: 1,
//       id: 5,
//       title: "nesciunt quas odio",
//       body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
//     },
//     {
//       userId: 1,
//       id: 6,
//       title: "dolorem eum magni eos aperiam quia",
//       body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
//     },
//     {
//       userId: 1,
//       id: 7,
//       title: "magnam facilis autem",
//       body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
//     },
//     {
//       userId: 1,
//       id: 8,
//       title: "dolorem dolore est ipsam",
//       body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
//     },
//     {
//       userId: 1,
//       id: 9,
//       title: "nesciunt iure omnis dolorem tempora et accusantium",
//       body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
//     },
//     {
//       userId: 1,
//       id: 10,
//       title: "optio molestias id quia eum",
//       body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
//     },
//     {
//       userId: 2,
//       id: 11,
//       title: "et ea vero quia laudantium autem",
//       body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
//     },
//     {
//       userId: 2,
//       id: 12,
//       title: "in quibusdam tempore odit est dolorem",
//       body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
//     },
//     {
//       userId: 2,
//       id: 13,
//       title: "dolorum ut in voluptas mollitia et saepe quo animi",
//       body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
//     },
//     {
//       userId: 2,
//       id: 14,
//       title: "voluptatem eligendi optio",
//       body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
//     },
//     {
//       userId: 2,
//       id: 15,
//       title: "eveniet quod temporibus",
//       body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
//     },
//     {
//       userId: 2,
//       id: 16,
//       title:
//         "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
//       body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta",
//     }
//    ];

// let post = document.getElementById("post")
// console.log(post)

// let resultado = posts.reduce((acc,cv, index) => {

//     acc += `
//     <div class="list-group">
//     <a href="#" class="list-group-item list-group-item-action ${index === 0 ? "active" : ""}" aria-current="true">
//     <div class="d-flex w-100 justify-content-between">
//       <h5 class="mb-1">${cv.title}</h5>
//       <small>${cv.id}</small>
//      </div>
//     <p class="mb-1">${cv.body}</p>
//     <small>${cv.userId}</small>
//    </a>
//    </div>
 
//     `
//     return acc;
// }, "")

// post.innerHTML= resultado


//! Ejercicios con InnerHTML

{/* <ul id="menu" class="menu">
    <li class="item__menu">Home</li>
     <li class="item__menu">Products</li>
     <li class="item__menu">About Us</li>
</ul> */}

//? Ejercicio uno

// let elemento = document.getElementById("lista")

// let resultado = ` <ul id="menu" class="menu">
// <li class="item__menu">Home</li>
//  <li class="item__menu">Products</li>
//  <li class="item__menu">About Us</li>
// </ul> `

// elemento.innerHTML = resultado

//? Ejercicio dos

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

// let body = document.querySelector("body")

//  let list = document.createElement("ul")

//  list.setAttribute("class", "koders")

// let listas = document.createElement("li")

// body.appendChild(list)

// list.appendChild(listas)
//  koders.forEach(obj => {

//     let resultado = document.createElement("li")
//     resultado.setAttribute("class", "item koder")
//     resultado.textContent = (`${obj.name} ${obj.lastName} tiene ${obj.age} es de la generación ${obj.generation} sus modulos son: ${obj.modulos}`)
//     list.appendChild(resultado)
//  })


 
//  koders.forEach((obj) => {

//     list.appendChild(obj)
//     obj.setAttribute("class", "item koder")
//  })

// let elemento = document.getElementById("lista")

// let Ejercicio = koders.reduce((acc,cv) =>{

//    acc += `
  
//        <ul class="koders">
//         <li class="item_koder">
//         ${cv.name}
//         ${cv.lastName}
//         tiene ${cv.age} años
//         es de la generación ${cv.generation}
//         cursando los modulos ${cv.modulos} 
//         </li>

//  </ul> 
  

//   `
//   return acc

// }, "")

// elemento.innerHTML = Ejercicio