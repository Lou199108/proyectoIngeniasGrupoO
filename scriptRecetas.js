//window.onload = () => {
    //    let input = document.querySelector("input")
    //    let boton = document.querySelector("button")
    
    //    boton.addEventListener("click", (event) => {
    //       event.preventDefault();
    //        let valorInput = input.value;
    //        fetch ("https://api.example.com/search?query=" + valorInput)
    //            .then((response) => {return response.json () })
    //            .then((data) => {
    //                console.log(data); 
    //                let article = document.createElement("article")
    //                let p = document.createElement("p")
    //                let img = document.createElement("img")
    //                p.innerText = data.name
    //                img.scr = data.sprites.front_default
    //
    //                article.appendChild(p)
    //                article.appendChild(img)
    //
    //                document.getElementById("resultados").appendChild(article)
    //
    //                //document.getElementById("nombreEncontrado").innerText = data.name
    //                //document.getElementById("imagenEncontrado").src = data.sprites.front_default
    //            })
    //        .catch((error) => {console.log (error);})
    //    })
    //}
    
    window.onload = () => {
        const buscador = document.querySelector("#buscador");
        const resultados = document.querySelector("#resultados");
    
        buscador.addEventListener("keyup", (e) => {
            // Obtenemos la consulta del usuario.
            const consulta = e.target.value;
    
            // Realizamos la solicitud a la API.
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "https://api.example.com/search?query=" + consulta);
            xhr.onload = () => {
            // Procesamos la respuesta de la API.
            const respuesta = JSON.parse(xhr.responseText);
    
            // Actualizamos los resultados.
            resultados.innerHTML = "";
            for (const resultado of respuesta) {
                resultados.innerHTML += `
                <li>
                 <a href="${resultado.url}">${resultado.titulo}</a>
                </li>
                `;
            }
        };
      xhr.send();
        })
    }