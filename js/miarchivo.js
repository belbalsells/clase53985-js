console.log("CARRITO DE COMPRAS")

let opcionMenuPrincipal;
let total = obtenerTotalLocalStorage();
document.getElementById("total").innerText = total
let productosSeleccionados = obtenerLocalStorage();

function obtenerProducto(id) {
    console.log(id)
    const productos = [
        { id: 1, nombre: "Rogel", precio: 1800 },
        { id: 2, nombre: "Torta cheesecake", precio: 2500 },
        { id: 3, nombre: "Torta key lime pie", precio: 2100 },
        { id: 4, nombre: "Torta mousse", precio: 2300 }
    ];

    return productos.find(producto => producto.id === id);
}

function agregarProducto(producto) {
    switch (producto) {
        case 1:
            return 1800;
            break;
        case 2:
            return 2500;
            break;
        case 3:
            return 2100;
            break;
        case 4:
            return 2300;
            break;
    }
}

function agregarProductoCarrito(producto) {
    productosSeleccionados.push(obtenerProducto(producto))
    console.log("Cantidad  de productos " + productosSeleccionados.length)
    console.log(obtenerProducto(producto))
    total += agregarProducto(producto)
    document.getElementById("total").innerText = total
    guardarLocalStorage();
}

function finalizarCompra() {
    total = 0
    productosSeleccionados = []
    document.getElementById("total").innerText = total
    guardarLocalStorage()
}

function guardarLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(productosSeleccionados));
    localStorage.setItem("total", total.toString());
}

function obtenerLocalStorage() {
    return JSON.parse(localStorage.getItem("carrito")) || []
}
function obtenerTotalLocalStorage() {
    return localStorage.getItem("total") || 0
}