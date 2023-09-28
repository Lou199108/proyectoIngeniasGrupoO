/*let nombre = (prompt ("Ingrese su nombre"))

while (!nombre || !/^[a-zA-Z]+$/.test(nombre)) {
  nombre = prompt("Ingrese su nombre ");
}

alert ("Bienvenido/a " + nombre + " a nuestra página 'Vegan Style'")
*/


//Seccion "contactos". Formulario

//Mensaje de error si el pass no cumple con ciertos requisitos
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

inputApellido.addEventListener("keyup", () => {
  let mensaje1;
  if(inputApellido.value.length < 3 ){
      mensaje1 = "El nombre tiene que tener al menos 3 caracteres"
      document.getElementById("mensajeApellido").innerText = mensaje1;
  }else{
      document.getElementById("mensajeApellido").innerText = " "
  }
})


}