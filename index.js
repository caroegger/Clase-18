

// 1. Hacer una lista de cinco parrafos <p>
// 2. Al primero, tercero y quinto darles la clase "verde" y que se pongan verdes desde CSS
// 3. Al primero y segundo darles el id "borde-rojo" y que tengan un borde rojo en CSS
// 4. Seleccionar desde JS y mostrar en consola todos los elementos con la etiqueta p (usar getElementsByTagName)
// 5. Selccionar desde JS y mostrar en consola todos los elementos con la clase "verde"
// 6. Seleccionar y mostrar en consola el primer elemento con el ID "borde-rojo"


const todosLosParrafos = document.getElementsByTagName("p")
console.log(todosLosParrafos)

const todosLosVerdes = document.getElementsByClassName ("verde")
console.log(todosLosVerdes)

const primerBordeRojo = document.querySelector("#borde-rojo")
console.log(primerBordeRojo)

// 1. Hacer 5 parrafos en HTML y agregarles a cada uno, una de estas clases:
// verde, color de texto verde --> el color de texto se agrega en CSS
// rojo, color de texto idem
// amarillo, idem
// azul, idem
// rosa, idem
// 2. Desde JS, 
// quitarle a verde la clase verde --> se va a ver negro
// agregarle a rojo la clase rosa --> se va a ver rosa
// dar toggle al elemento que tiene la clase rosa  --> deberia verse negro
// chequear si amarillo tiene la clase rojo ---> deberia dar false

const quitarVerde = document.querySelector(".verde")
quitarVerde.classList.remove("verde")
console.log(quitarVerde)


const agregoRosa = document.querySelector(".rojo")
agregoRosa.classList.add("rosa")
console.log(agregoRosa)

const toggleRosa = document.querySelector(".rosa")
toggleRosa.classList.toggle("rosa")

const chequeoAmarillo = document.querySelector(".amarillo")
console.log(chequeoAmarillo.classList.contains ("rojo"))
