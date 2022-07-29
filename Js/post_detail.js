// De alguna forma insertar id en url -> Done 
// De alguna forma leer el id del post del url  -> Done
//! Cargar la data del post al cargar la pagina 


// ? functionToGetData(url){
    // codigo 
// } 


let queryURL = window.location.search
let postId = queryURL.substring(8)
// let params = new URLSearchParams(window.location.search)
// let postId = params.get('postId')

let url = `https://koodemia-prueba1-default-rtdb.firebaseio.com/Post/${postId}.json`

//! Hacer el request con el metdoo get del post selccionado y isertarla en mi template 



console.log(url)

const getQuery = (url) =>{
let queryRequest = new XMLHttpRequest()
let postId = ""
queryRequest.onload = (data) =>{

postId = JSON.parse(data.target.responseText);

}
queryRequest.open('GET', url, false)
queryRequest.send();

return postId
}

let postRender2 = getQuery(url)

console.log(postRender2)


let cardHolder = document.querySelector('.card_holder')

document.addEventListener("DOMContentLoaded", (e)=> {
    cardHolder.innerHTML = `
    <div class="card mb-3 mt-5 w-75">
    <img src="https://picsum.photos/1000" class="card-img-top mt-2" alt="img"  height="300"  width="500"  />
    <div class="card-body">
    <h5 class="card-title">${postRender2.title}</h5>
    <p class="card-text">
    ${postRender2.body}
    </p>
    <p class="card-text">
        <small class="text-muted">${postRender2.date}</small>
    </p>
    </div>
    </div> 
    `
})