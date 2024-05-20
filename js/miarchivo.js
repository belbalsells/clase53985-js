console.log("CARRITO DE COMPRAS");

let opcionMenuPrincipal;
let total = obtenerTotalLocalStorage();
document.getElementById("total").innerText = total.toString();
let productosSeleccionados = obtenerLocalStorage();
let productos = [];
cargarProductos();

function obtenerProducto(id) {
  return productos.find((producto) => producto.id === id);
}

function calcularTotal() {
  let resultado = 0
  productosSeleccionados.forEach(producto => {
    resultado += producto.precio
  });
  return resultado
}


function agregarProductoCarrito(producto) {
  productosSeleccionados.push(obtenerProducto(producto));
  console.log("Cantidad  de productos " + productosSeleccionados.length);
  console.log(obtenerProducto(producto));
  total = calcularTotal();
  document.getElementById("total").innerText = total;
  guardarLocalStorage();
}

function finalizarCompra() {
  if (total === 0) {
    Swal.fire({
      title: "Oops!",
      text: "El carrito de compras se encuentra vacio",
      icon: "info",
    });
  } else {
    total = 0;
    productosSeleccionados = [];
    document.getElementById("total").innerText = total;
    guardarLocalStorage();
    Swal.fire({
      title: "Gracias por tu compra!",
      text: "Te enviaremos los detalles a tu mail!",
      icon: "success",
    });
  }
}

function guardarLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(productosSeleccionados));
  localStorage.setItem("total", total.toString());
}

function obtenerLocalStorage() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}
function obtenerTotalLocalStorage() {
  return Number(localStorage.getItem("total")) || 0;
}

function cargarProductos() {
  fetch("../productos.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      productos = data;
      renderizarProductos(productos);
    });
}

function renderizarProductos(productos) {
  const contenedor = document.getElementById("lista-productos");
  let productosHtml = "";

  productos.forEach((producto) => {
    const productoHtml = `<div class="card col-xl-3 col-md-6 col-sm-12 noBorder">
        <img src="${producto.imagenUrl}" class="card-img-top" alt="Rogel">
        <div class="card-body">
            <h2 class="card-title">${producto.nombre}</h2>
            <p class="card-text">${producto.descripcion}
            </p>
            <p class="precio"> $ ${producto.precio} </p>
            <button class="btn btnCarrito" onclick="agregarProductoCarrito(${producto.id})">Añadir al carrito</button>
        </div>
    </div>`;

    productosHtml += productoHtml;
  });

  contenedor.innerHTML = productosHtml;
}
