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
        mensaje = "El nombre debe tener al menos 3 caracteres"
        document.getElementById("mensajeNombre").innerText = mensaje;
    }else{
        document.getElementById("mensajeNombre").innerText = " "
    }
  })
  
  inputApellido.addEventListener("keyup", () => {
    let mensaje;
    if(inputApellido.value.length < 3 ){
        mensaje = "El apellido debe tener al menos 3 caracteres"
        document.getElementById("mensajeApellido").innerText = mensaje;
    }else{
        document.getElementById("mensajeApellido").innerText = " "
    }
  })
  }
  
  
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
  
  
  
  /*window.onload = () => {
    let boton = document.querySelector("submit");
  
    localStorage.setItem("enviar")
    
    boton.onclick = (event) => {
        event.preventDefault()
        
        let inputNombre = document.getElementById("nombre").value;
  
        if(inputNombre == localStorage.getItem("enviar")){
            console.log("Su nombre fue ingresado");
            
            sessionStorage.setItem("nombre", inputNombre)
            console.log(sessionStorage)
        }else{
            console.log("No se pudo ingresar su nombre")
        }
    }
  }
  */