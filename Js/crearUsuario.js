
let createBoton = document.querySelector('.btn_create_post')
let inputTitlePost = document.querySelector('.post_title_input')
let inputBodyPost = document.querySelector('.post_body_input')
let inputDatePost = document.querySelector('.post_date_input')
// Todo Create ajax function to create the post in firebase/post
createBoton.addEventListener('click', (e) => {
    e.preventDefault()
    const title = {
        title:inputTitlePost.value,
        body:inputBodyPost.value,
        date:inputDatePost.value
    }
    console.log(title)
    newPost(title)
    //! Todo
    // ! Funcion para hacer un POST en mi BD de mi nuevo post
    // ! construir mi post a enviar
})
const newPost = (newComment) => {
    const post = new XMLHttpRequest()
    post.onload = (data) => {
        console.log(data.target.responseText);
    }
    post.open('POST', 'https://koodemia-prueba1-default-rtdb.firebaseio.com/Post.json', false)
    post.send(JSON.stringify(newComment));
}



//Post
       
// const creatUser = (post) =>{

//     const httpRequest = new XMLHttpRequest()
    
//     httpRequest.onload = (e) =>{
    
//     console.log(e.target.responseText)
    
//     }
    
//     httpRequest.open("POST",`https://koodemia-prueba1-default-rtdb.firebaseio.com/Post.json`, false)
    
    
//     let userJson = JSON.stringify(info)
//     httpRequest.send(userJson)  
    
//     }



