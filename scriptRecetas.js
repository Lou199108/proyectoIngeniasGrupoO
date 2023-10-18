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
    
//    window.onload = () => {
//        const buscador = document.querySelector("#buscador");
//        const resultados = document.querySelector("#resultados");
    
//        buscador.addEventListener("keyup", (e) => {
            // Obtenemos la consulta del usuario.
//            const consulta = e.target.value;
    
            // Realizamos la solicitud a la API.
//            const xhr = new XMLHttpRequest();
//            xhr.open("GET", "https://api.example.com/search?query=" + consulta);
//            xhr.onload = () => {
//            // Procesamos la respuesta de la API.
//            const respuesta = JSON.parse(xhr.responseText);
//    
//            // Actualizamos los resultados.
//            resultados.innerHTML = "";
//           for (const resultado of respuesta) {
//                resultados.innerHTML += `
//                <li>
//                 <a href="${resultado.url}">${resultado.titulo}</a>
//               </li>
//                `;
//            }
//        };
//      xhr.send();
//        })
//    }

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

//window.onload = () => {
//    const buscador = document.querySelector("#buscador");
//    const resultados = document.querySelector("#resultados");

//    buscador.addEventListener("keyup", (e) => {
        // Obtenemos la consulta del usuario.
//        const consulta = e.target.value;

        // Realizamos la solicitud a la API.
//        const xhr = new XMLHttpRequest();
//        xhr.open("GET", "https://api.example.com/search?query=" + consulta);
//        xhr.onload = () => {
        // Procesamos la respuesta de la API.
//        const respuesta = JSON.parse(xhr.responseText);

        // Actualizamos los resultados.
//        resultados.innerHTML = "";
//        for (const resultado of respuesta) {
//            resultados.innerHTML += `
//            <li>
//             <a href="${resultado.url}">${resultado.titulo}</a>
//            </li>
//            `;
//        }
//    };
//  xhr.send();
//    })
//};

//CODIGO QUE HICIMOS CON VERO: 
/*window.onload = async () => {
    const boton = document.querySelector("#botonBuscar");
    const resultados = document.querySelector("#resultados");
    
    async function hacerFetch (url, options, consulta = "" ) {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
        } catch (error) {
        console.error(error);
        }
    }

    boton.addEventListener("click", (e) => {
        // Obtenemos la consulta del usuario.
        const consulta = e.target.value;
        e.preventDefault()

        const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegan&number=1';
        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '705d200039msh1fb2bed62558064p15afabjsna540ee43605a',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
        };
    
     hacerFetch(url, options, consulta)

    }
    )
}; */
 
//posible codigo que funciona de api (Lour)

/*window.onload = async () => {
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
	    if (this.readyState === this.DONE) {
		console.log(this.responseText);
	    }
    });

    xhr.open('GET', 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free');
    xhr.setRequestHeader('X-RapidAPI-Key', '3a07bd2b46msh997d6c5762e9781p1e9416jsn07f3f89f736e');
    xhr.setRequestHeader('X-RapidAPI-Host', 'edamam-food-and-grocery-database.p.rapidapi.com');

    xhr.send(data);
}*/

/*ÚLTIMO CÓDIGO: 
window.onload = async () => {
    const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '705d200039msh1fb2bed62558064p15afabjsna540ee43605a',
            'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}*/
window.onload = async () => {
    const input = document.querySelector("input");
    const boton = document.querySelector("button");

    async function hacerFetch (url, options, consulta = "" ) {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result)
            let article = document.createElement("article")
            let p = document.createElement("p")
            let p2 = document.createElement("p")
            let img = documen.createElement("img")
            
            if (result.count == 0){
                p.innerText = "No hay coincidencias con tu búsqueda, intenta otra vez"
                article.appendChild(p)
            }else{
            p.innerText = result.results[0].name
            p2.innerText = result.results[0].description
            img.src = result.results[0].thumbnail_url
            
            article.appendChild(p)
            article.appendChild(p2)
            article.appendChild(img)
            document.getElementById("resultados").appendChild(article)
            }
           
        } catch (error) {
        console.error(error);
        }
    }

    boton.addEventListener("click", (e) => {
        // Obtenemos la consulta del usuario.
        const consulta = e.target.value;
        e.preventDefault()
        
        let valorInput = input.value;
        
        
        const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=1&tags=under_30_minutes&q=' + valorInput;
        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3a07bd2b46msh997d6c5762e9781p1e9416jsn07f3f89f736e',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
        };

    hacerFetch(url, options, consulta) 
    })
};