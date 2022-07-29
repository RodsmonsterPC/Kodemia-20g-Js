

//Post
       
// const creatUser = (post) =>{

//     const httpRequest = new XMLHttpRequest()
    
//     httpRequest.onload = (e) =>{
    
//     console.log(e.target.responseText)
    
//     }
    
//     httpRequest.open("POST",`https://koodemia-prueba1-default-rtdb.firebaseio.com/Post.json`, false)
    
    
//     let userJson = JSON.stringify(post)
//     httpRequest.send(userJson)  
    
//     }

const getPost = (url) =>{

// ! Paso a paso para su uso 
    // ? Instanciamos nuestro objeto
    const nuevosPost = new XMLHttpRequest()

    let post = []
    
    // console.log(xRe)

    // ? Definir un callback en nuestro evento onload 
    nuevosPost.onload = (data) => {
        console.log(data)
        if (data.target.readyState === 4)   {
            if (
                data.target.status >= 200 ||
                data.target.status <= 399 
                ){
                // console.log(data.target.responseText)
                post = JSON.parse(data.target.responseText)
                // console.log(koders)
                
                console.log(post)
                
            }
            else if (data.target.status === 400)    {
                console.log('sucedio un error')
            }
        }
        
    } 


    //? Abrir y setear nuestra peticion 
    //? request.open(<Metodo htto>, <Direccion objetivo>)

    nuevosPost.open("GET", url, false)
    // console.log(nuevosPost)

    //? Enviar nuestra peticion 
    nuevosPost.send()

    return post
}

let postRender = getPost("https://koodemia-prueba1-default-rtdb.firebaseio.com/Post.json")
console.log(postRender)

// https://dummyjson.com/posts

// postRender = postRender.posts


  

let posHolder = document.querySelector(".post_holder")

const insertPost = (posts) => {

let template = ""


for (post in postRender){

    
    template += 
    
    `
    <div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${postRender[post].title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${postRender[post].date}</h6>
                  <p class="card-text">${postRender[post].body}</p>
                  <button type="button" class="btn btn-primary">Editar</button>
                </div>
              </div>
    
    `
}

posHolder.innerHTML = template
}

    // for(key in post){
 
    //     console.log(key)
    // }
//  let resultado = posts.reduce((acc, post) =>{

    
//     console.log(post)
//     acc +=  `

//     <div class="card" style="width: 18rem;">
//                 <div class="card-body">
//                 <h5 class="card-title">${post.title}</h5>
//                   <h6 class="card-subtitle mb-2 text-muted">${post.id}</h6>
//                   <p class="card-text">${post.body}</p>
                  
//                 </div>
//               </div>
    
//     `
//         return acc;
    
//  }, "")
//   posHolder.innerHTML = resultado
//  


document.addEventListener("DOMContentLoaded", ()=>{
     insertPost(postRender)
    
})




//     const filterUsers = (str) =>{
//         let minusculas = str.toLowerCase()
    
//         let usuriosFiltrados = users.filter((user) =>{
    
    
//             if (user.name.toLocaleLowerCase().match(minusculas) || 
//             user.username.toLocaleLowerCase().match(minusculas) ||
//             user.email.toLocaleLowerCase().match(minusculas)){
//                 console.log(user)
//                 return user
//             }
//             // let {name,username,email} = user
            
//         })
//         return usuriosFiltrados
//      }
    

//     let postCreados = "";
//          resultado.forEach(({firstName, lastName, id})=>{

//            postCreados += `
//            <div class="list-group">
//     <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
//     <div class="d-flex w-100 justify-content-between user_match">
//       <h5 class="mb-1">Usuarios Filtrados</h5>
//       <small>${firstName}</small>
//     </div>
//     <p class="mb-1">${lastName}</p>
//     <small>${id}</small>
//   </a>
//   </div>`
//   return postCreados
//         })
        
//         tabla.innerHTML = postCreados






