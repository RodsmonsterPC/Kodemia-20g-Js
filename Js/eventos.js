

var x = document.getElementById("myDIV");
        
// Start the animation with JavaScript
function myFunction() {
  x.style.WebkitAnimation = "mymove 4s 2"; // Code for Chrome, Safari and Opera
  x.style.animation = "mymove 4s 2";     // Standard syntax
}

// Code for Chrome, Safari and Opera
x.addEventListener("webkitAnimationStart", myStartFunction);
x.addEventListener("webkitAnimationIteration", myRepeatFunction);
x.addEventListener("webkitAnimationEnd", myEndFunction);

// Standard syntax
x.addEventListener("animationstart", myStartFunction);
x.addEventListener("animationiteration", myRepeatFunction);
x.addEventListener("animationend", myEndFunction);

function myStartFunction() {
  this.innerHTML = "Me empizo a mover, mira como me muevo";
  this.style.backgroundColor = "pink";
}

function myRepeatFunction() {
  this.innerHTML = "Por que una, si se pueden 2 hay voy de nuevo";
  this.style.backgroundColor = "lightblue";
}

function myEndFunction() {
  this.innerHTML = "Uff me canse ya mejor paro, eh terminado.";
  this.style.backgroundColor = "lightgray";
}