

// var x = document.getElementById("myDIV");

// // Start the animation with JavaScript
// function myFunction() {
//   x.style.WebkitAnimation = "mymove 4s 2"; // Code for Chrome, Safari and Opera
//   x.style.animation = "mymove 4s 2";     // Standard syntax
// }

// // Code for Chrome, Safari and Opera
// x.addEventListener("webkitAnimationStart", myStartFunction);
// x.addEventListener("webkitAnimationIteration", myRepeatFunction);
// x.addEventListener("webkitAnimationEnd", myEndFunction);

// // Standard syntax
// x.addEventListener("animationstart", myStartFunction);
// x.addEventListener("animationiteration", myRepeatFunction);
// x.addEventListener("animationend", myEndFunction);

// function myStartFunction() {
//   this.innerHTML = "Me empizo a mover, mira como me muevo";
//   this.style.backgroundColor = "pink";
// }

// function myRepeatFunction() {
//   this.innerHTML = "Por que una, si se pueden 2 hay voy de nuevo";
//   this.style.backgroundColor = "lightblue";
// }

// function myEndFunction() {
//   this.innerHTML = "Uff me canse ya mejor paro, eh terminado.";
//   this.style.backgroundColor = "lightgray";
// }



// document.addEventListener("DOMContentLoaded", () => {

//   console.log("Se a cargado un elemento")
// })

// let formulario = document.getElementById("formulario")

// let enviarformluario = (evento) => {

//   const  {name,email,password} = evento.target;
  
//   evento.preventDefault();
//   console.log(name.value,
//     email.value,
//     password.value);

// }
// formulario.addEventListener("submit", enviarformluario);


//! Ejercicio de eventos botones

//! 1 Menejo de envento en el boton "show Card"
// Pasos
// 1. Seleccionar el holder de la card
// 2. seleccionar quien detona el evento
// 3. agregar un listener al detonador
// 4. insertar html al holder
// 5. Opcional insertar elemento en el card para eliminarla

// let eventoMeme = document.getElementById("eventoBoton");
// let card = document.querySelector(".card_holder")

// eventoMeme.addEventListener("click", () => {

//   card.innerHTML = `<div class="card" style="width: 18rem;">
//   <img src="https://brandominus.com/wp-content/uploads/2015/07/1000709_213824535434843_716374899_n.jpg" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">La realidad de la programación</h5>
//     <p class="card-text">Ni como evitarlas</p>
//     <a href="#" id="closecard" class="btn btn-primary">Regresar</a>
//   </div>
// </div>`;


// const closecard = document.querySelector("#closecard")

//  closecard.addEventListener("click", ()=>{

//   card.innerHTML="";
// })

// })

//! Ejercicio 2

// 1. Seleccionar el holder de la card
// 2. seleccionar quien detona el evento
// 3. agregar un listener al detonador
// 4. insertar html al holder cuando se detono el evento
// 5. Opcional insertar evento en boton "limpiar campo" para limpiar el input

// let text = document.querySelector(".text_div")

// let input = document.querySelector(".input_text")

// input.addEventListener("input", (e)=>{

//   let texto = e.target.value

//   text.innerHTML = `El texto ingresado es: ${texto}`;
// });

// let borrar = document.querySelector(".btn_clear")

// borrar.addEventListener("click", ()=>{

//   text.innerHTML="";
//   input.value = "";
// })

//! Ejercicio 3

// 1. Seleccionar el holder de la card
// 2. seleccionar quien detona el evento
// 3. agregar un listener al detonador
// 4. insertar html al holder cuando se detono el evento
// 5. De alguna forma limpiar el holder despues de algunos segundos. hint -> setTimeout

let eventoMouse = document.querySelector(".mouse_target")
let card = document.querySelector(".img-div")
let timer = "";

eventoMouse.addEventListener("mouseenter", ()=>{

 card.innerHTML= `<div class="card" style="width: 18rem;">
  <img src="https://statics.memondo.com/p/s1/crs/2021/12/CR_1216327_3c143e0bd5494830875dce078aebc446_memes_dolorosamente_familiares_sobre_programacion_thumb_fb.jpg?cb=723227" class="card-img-top" alt="...">
 </div>`;
})







