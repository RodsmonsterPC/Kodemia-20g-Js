

let clima = prompt("Como esta el clima en su ciudad por ejemplo: \na)Soleado \nb)Lluvioso \nc)Nevado \nd)Nublado")

let temperatura = parseInt(prompt("A que temperatura esta su zona"))

let temp = temperatura* 9/5 + 32

console.log(`En tu ciudad, el di esta ${clima} a tempratura ${temp} grados Fahrenheit`)