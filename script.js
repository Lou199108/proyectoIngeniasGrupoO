/*let nombre = (prompt ("Ingrese su nombre"))

while (!nombre || !/^[a-zA-Z]+$/.test(nombre)) {
  nombre = prompt("Ingrese su nombre ");
}

alert ("Bienvenido/a " + nombre + " a nuestra página 'Vegan Style'")
<<<<<<< HEAD
*/
//Seccion "contactos". Formulario

//Mensaje de error si el nombre/apellido no cumple con ciertos requisitos
window.onload = () => {
  let formulario = document.querySelector("form");
  let inputNombre = document.getElementById("nombre");
  let inputApellido = document.getElementById("apellido")
  //let inputEmail = document.getElementById("email")
  let inputSubmit = document.getElementById("submit")

inputNombre.addEventListener("keyup", () => {
  let mensaje;
  if(inputNombre.value.length < 3 ){
      mensaje = "El nombre tiene que tener al menos 3 caracteres"
      document.getElementById("mensajeNombre").innerText = mensaje;
  }else{
      document.getElementById("mensajeNombre").innerText = " "
  }
})

//Expresión regular que acepta solo letras del alfabeto, mayúsculas, minúsculas y espacios en blanco:
const inputNombre1 = document.querySelector("#nombre");

inputNombre1.addEventListener("keyup", function(event) {
  const texto = event.target.value;

  // Validamos que el texto solo contenga letras y espacios en blanco
  const esValido = texto.match(/^[a-zA-ZáéíóúñÑ ]+$/);

  if (!esValido) {
    // Si el texto no es válido, lo limpiamos
    event.target.value = "";
  }
});

inputApellido.addEventListener("keyup", () => {
  let mensaje1;
  if(inputApellido.value.length < 3 ){
      mensaje1 = "El apellido tiene que tener al menos 3 caracteres"
      document.getElementById("mensajeApellido").innerText = mensaje1;
  }else{
      document.getElementById("mensajeApellido").innerText = " "
  }
})

//Expresión regular que acepta solo letras del alfabeto, mayúsculas, minúsculas y espacios en blanco:
const inputApellido1 = document.querySelector("#apellido");

inputApellido1.addEventListener("keyup", function(event) {
  const texto = event.target.value;

  // Validamos que el texto solo contenga letras y espacios en blanco
  const esValido = texto.match(/^[a-zA-ZáéíóúñÑ ]+$/);

  if (!esValido) {
    // Si el texto no es válido, lo limpiamos
    event.target.value = "";
  }
});

}

//JSON de "Almacen":
let jsonDeProductos = `[
  {
    "producto": "Tofu",
    "precio": "2000",
    "cantidad": "100",
    "imagen": "https://i.blogs.es/855448/tofu/1366_2000.jpg"
  },
  {
    "producto": "Soja Texturizada",
    "precio": "1100",
    "cantidad": "150",
    "imagen": "https://elmercaditodeursula.com/wp-content/uploads/2020/11/soja-texturizada.jpg"
  },
  {
    "producto": "Seitán",
    "precio": "5000",
    "cantidad": "75",
    "imagen": "https://www.lavanguardia.com/files/og_thumbnail/uploads/2022/04/05/624c19d8b3c37.jpeg"
  },
  {
    "producto": "Falafel",
    "precio": "1000",
    "cantidad": "500",
    "imagen": "https://ourplantbasedworld.com/wp-content/uploads/2021/03/IMG_7324-1200x1200-1.jpg"
  },
  {
    "producto": "Leche vegetal de soja",
    "precio": "2500",
    "cantidad": "150",
    "imagen": "https://bebidavegetal.com/wp-content/uploads/bebida-de-soja.jpg"
  },
  {
    "producto": "Cúrcuma",
    "precio": "1400",
    "cantidad": "80",
    "imagen": "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/04/02/curcuma-fresca-rallada.jpeg"
  },
]`


let jsonConvertido = JSON.parse(jsonDeProductos)
console.log(jsonDeProductos);

//recorrer el array jsonConvertido
for (let i = 0; i < jsonConvertido.length; i++){
//crear un article
let article = document.createElement("article")
//crear h2
let h2 = document.createElement("h2")
h2.innerText = jsonConvertido[i].producto
//crear imagen
let img = document.createElement("img")
img.style.width = "50%"
img.src = jsonConvertido[i].imagen
//crear p
let p = document.createElement("p")
p.innerText = jsonConvertido[i].precio
//crear c
let c = document.createElement("c")
c.innerText = jsonConvertido[i].cantidad
//crear boton
let boton = document.createElement("button")
boton.innerText = "Agregar al carrito"
//terminar de armar el article
article.appendChild(h2)
article.appendChild(img)
article.appendChild(p)
article.appendChild(c)
article.appendChild(boton)
//mandar el article a la seccion
document.getElementById("productos").appendChild(article)
}


window.onload = () => {
let botones = document.querySelectorAll("button");
botones[0].addEventListener("click", () => {
localStorage.setItem("productoProducto", jsonConvertido[0].producto)
localStorage.setItem("productoPrecio", jsonConvertido[0].precio)
localStorage.setItem("productoCantidad", jsonConvertido[0].cantidad)
localStorage.setItem("productoImagen", jsonConvertido[0].imagen)

let article = document.createElement("article")
//crear h2
let h2 = document.createElement("h2")
//h2.innerText = jsonConvertido[0].titulo
h2.innerText = localStorage.getItem("productoProducto")
article.appendChild(h2)
document.getElementById("carrito").appendChild(article)
})


}