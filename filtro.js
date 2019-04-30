// Tarea:
// Si el usuario escribe "zapato", mostrar los zapatos
// Si el usuario escribe "bota", mostrar las botas
// Si el usuario escribe "negro", mostrar el zapato y la bota negros
// Si el usuario escribe "azul", mostrar el zapato y la bota azules

var productos = [
  {
    nombre: "Zapato negro",
    tipo: "zapato",
    color: "negro",
    img: "./taco-negro.jpg"
  },
  {
    nombre: "Zapato azul",
    tipo: "zapato",
    color: "azul",
    img: "./taco-azul.jpg"
  },
  {
    nombre: "Bota negra",
    tipo: "bota",
    color: "negro",
    img: "./bota-negra.jpg"
  },
  {
    nombre: "Bota azul",
    tipo: "bota",
    color: "azul",
    img: "./bota-azul.jpg"
  },
  {
    nombre: "Zapato rojo",
    tipo: "zapato",
    color: "rojo",
    img: "./zapato-rojo.jpg"
  }
];

var listado = document.getElementById("lista-de-productos");

for (let i = 0; i < productos.length; i++) {
  // Creamos un div, le añadimos el nombre y la imagen
  var div = document.createElement("div");
  div.classList.add("producto");
  var titulo = document.createElement("p");
  titulo.classList.add("titulo");
  titulo.textContent = productos[i].nombre;
  var imagen = document.createElement("img");
  imagen.setAttribute("src", productos[i].img);
  div.appendChild(titulo);
  div.appendChild(imagen); // Agregamos el div al listado
  listado.appendChild(div);
}

var botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (listado.firstChild) {
    listado.removeChild(listado.firstChild);
  }
};

// despues les toca a uds el resto 🙂

var buscador = document.querySelector("input");

function buscar(miProducto) {
  var productoBuscado = miProducto.value;

  if (productoBuscado !== "") {
    for (let i = 0; i < productos.length; i++) {
      if (productos[i].nombre.toLowerCase().includes(productoBuscado)) {
        var div = document.createElement("div");
        div.classList.add("producto");
        var titulo = document.createElement("p");
        titulo.classList.add("titulo");
        titulo.textContent = productos[i].nombre;
        var imagen = document.createElement("img");
        imagen.setAttribute("src", productos[i].img);
        div.appendChild(titulo);
        div.appendChild(imagen);
        listado.appendChild(div);
      }
    }
  }
}

botonDeFiltro.addEventListener("click", function() {
  buscar(buscador);
});
