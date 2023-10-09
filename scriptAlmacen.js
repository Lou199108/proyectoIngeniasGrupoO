//Almacen
//JSON de "Almacen":
let jsonDeProductos = `[
  {
    "producto": "Tofu",
    "precio": "$2000",
    "cantidad": "100 unidades",
    "imagen": "https://i.blogs.es/855448/tofu/1366_2000.jpg"
  },
  {
    "producto": "Soja Texturizada",
    "precio": "$1100",
    "cantidad": "150 unidades",
    "imagen": "https://elmercaditodeursula.com/wp-content/uploads/2020/11/soja-texturizada.jpg"
  },
  {
    "producto": "Seitán",
    "precio": "$5000",
    "cantidad": "75 unidades",
    "imagen": "https://www.lavanguardia.com/files/og_thumbnail/uploads/2022/04/05/624c19d8b3c37.jpeg"
  },
  {
    "producto": "Cúrcuma",
    "precio": "$1400",
    "cantidad": "80 unidades",
    "imagen": "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/04/02/curcuma-fresca-rallada.jpeg"
  },
  {
    "producto": "Falafel",
    "precio": "$1000",
    "cantidad": "500 unidades",
    "imagen": "https://ourplantbasedworld.com/wp-content/uploads/2021/03/IMG_7324-1200x1200-1.jpg"
  },
  {
    "producto": "Leche vegetal de soja",
    "precio": "$2500",
    "cantidad": "150 unidades",
    "imagen": "https://bebidavegetal.com/wp-content/uploads/bebida-de-soja.jpg"
  }
]`


let jsonConvertido = JSON.parse(jsonDeProductos)
//console.log(jsonDeProductos);

//recorrer el array jsonConvertido
for (let i = 0; i < jsonConvertido.length; i++){
  //crear un article
  let article = document.createElement("article")
  //crear h2
  let h3 = document.createElement("h3")
  h3.innerText = jsonConvertido[i].producto
  //crear imagen
  let img = document.createElement("img")
  img.style.width = "50%"
  img.src = jsonConvertido[i].imagen
  //crear p
  let p = document.createElement("p")
  p.innerText = jsonConvertido[i].precio
  //crear c
  let c = document.createElement("p")
  c.innerText = jsonConvertido[i].cantidad
  //crear boton
  let boton = document.createElement("button")
  boton.innerText = "Agregar al carrito"
  //terminar de armar el article
  article.appendChild(h3)
  article.appendChild(img)
  article.appendChild(p)
  article.appendChild(c)
  article.appendChild(boton)
  //mandar el article a la seccion
  document.getElementById("productos").appendChild(article)
}


window.onload = () => {
let botones = document.querySelectorAll("button");
for (let i = 0; i < botones.length; i++){
  botones[i].addEventListener("click", () => {
  localStorage.setItem("productoProducto", jsonConvertido[i].producto)
  localStorage.setItem("productoPrecio", jsonConvertido[i].precio)
  localStorage.setItem("productoCantidad", jsonConvertido[i].cantidad)
  localStorage.setItem("productoImagen", jsonConvertido[i].imagen)

  let article2 = document.createElement("article2")
  //crear h2
  let h3 = document.createElement("h3")
  h3.innerText = localStorage.getItem("productoProducto")

  //crear p
  let p = document.createElement("p")
  p.innerText = localStorage.getItem("productoPrecio")

  //crear c
  let c = document.createElement("p")
  c.innerText = localStorage.getItem("productoCantidad")

  article2.appendChild(h3)
  article2.appendChild(p)
  article2.appendChild(c)

  document.getElementById("carrito").appendChild(article2)
  })
}
}