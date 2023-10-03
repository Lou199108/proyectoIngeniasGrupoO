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

