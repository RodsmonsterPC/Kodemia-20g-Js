
// // ! Paso a paso para su uso 
//     // ? Instanciamos nuestro objeto

//     let productos = []
//     const xRe = new XMLHttpRequest()
//     // console.log(xRe)

//     // ? Definir un callback en nuestro evento onload 
//     xRe.onload = (data) => {
//         console.log(data)
//         if (data.target.readyState === 4)   {
//             if (
//                 data.target.status >= 200 ||
//                 data.target.status <= 399 
//                 ){
//                 // console.log(data.target.responseText)
//                 productos = JSON.parse(data.target.responseText)
//                 // console.log(koders)
                
//                 console.log(productos)
                
//             }
//             else if (data.target.status === 400)    {
//                 console.log('sucedio un error')
//             }
//         }
//     } 

//     //? Abrir y setear nuestra peticion 
//     //? request.open(<Metodo htto>, <Direccion objetivo>)

//     xRe.open("GET", "https://dummyjson.com/users", false)
//     // console.log(xRe)

//     //? Enviar nuestra peticion 
//     xRe.send()

//     const filterUsers = (str) =>{
//         let minusculas = str.toLowerCase()
    
//         let usuriosFiltrados = users.filter((user) =>{
    
    
//             if (user.firstName.toLocaleLowerCase().match(minusculas) || 
//             user.lastName.toLocaleLowerCase().match(minusculas) ||
//             user.id){
//                 console.log(user)
//                 return user
//             }
//             // let {name,username,email} = user
            
//         })
//         return usuriosFiltrados
//      }
    
//     let infoUsers = document.querySelector(".input_text")
// let buscarUsuario = document.querySelector(".find_user")
// let resultado = document.querySelector("#filtrado")

// // const filtrarVivo = () =>{

// //   resultado.innerHTML= "";
// //   let texto = infoUsers.value.toLowerCase();

// //   for (let koder of productos){
// //     let nombre = koder.firstName.toLowerCase();
// //     let usuario = koder.lastName.toLowerCase();
// //     let email = koder.id.toLowerCase();

// //     if(nombre.indexOf(texto) !== -1 || 
// //       usuario.indexOf(texto) !== -1 ||
// //       email.indexOf(texto) !== -1){

// //         resultado.innerHTML += `
        
// //         <li> Nombre: ${koder.firstName} Apellido: ${koder.LastName} id: ${koder.id}</li>
// //         `

// //     }
// //   }

// //   if(resultado.innerHTML === ""){

// //     resultado.innerHTML += `
        
// //         <li>Usuario inexistente</li>
// //         `

// //   }
// // }

// // infoUsers.addEventListener("keyup", filtrarVivo)
// // filtrarVivo();

//         //caso 1
//         infoUsers.addEventListener("input", (e)=>{  //borrar esta linea y el parentesis y corechete de abajo.
      

//             //caso 2
//         buscarUsuario.addEventListener("click",()=>{
        
//         let texto = infoUsers.value
//         let resultado = filterUsers(texto)
        
//         let tabla = document.querySelector(".users_filtrado")
        
//         let usersFinal = "";
//          resultado.forEach(({firstName, lastName, id})=>{

//            usersFinal += `
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
//   return usersFinal
//         })
        
//         tabla.innerHTML = usersFinal
//        });

       
//         }); 



        //crear un usuario

const creatUser = (user) =>{

const httpRequest = new XMLHttpRequest()

httpRequest.onload = (e) =>{

console.log(e.target.responseText)

}

httpRequest.open("POST", "https://koodemia-prueba1-default-rtdb.firebaseio.com/.json", false)


let userJson = JSON.stringify(user)
httpRequest.send(userJson)


}

const userCreate = {

firstName: "Rods",
lastName: "Perez"

}

        




