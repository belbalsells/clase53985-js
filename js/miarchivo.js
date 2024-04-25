console.log("CARRITO DE COMPRAS")

let opcionMenuPrincipal;
let total = 0;
let productosSeleccionados = [];

opcionMenuPrincipal = mostrarMenuInicial();

while (opcionMenuPrincipal != 0) {
    switch (opcionMenuPrincipal) {
        case 1:
            // mostrar un menu al usuario con los productos disponibles
            let producto = mostrarListaDeProductos();
            while (producto != 0) {
                if (producto == 5) {
                    const productoEliminado = productosSeleccionados.pop()
                    console.log("Cantidad  de prodctos " + productosSeleccionados.length)
                    if (productoEliminado != undefined) {
                        total -= agregarProducto(productoEliminado.id)

                    }
                } else {
                    console.log("producto")
                    productosSeleccionados.push(obtenerProducto(producto))
                    console.log("Cantidad  de prodctos " + productosSeleccionados.length)
                    console.log(obtenerProducto(producto))
                    total += agregarProducto(producto)

                    console.log(total)
                }
                producto = mostrarListaDeProductos();
            }
            if (producto == 0) {
                opcionMenuPrincipal = 2
            }
            break;
        case 2:
            // Mostrar menu de pago
            const cuotas = mostrarMenuDePago(total);
            alert("El valor de cada cuota es de: $" + (total / cuotas))
            opcionMenuPrincipal = 0
            break;
        default:
            if (isNaN(opcionMenuPrincipal)) {
                alert("La opción ingresada no es válida");
            }
            alert("Por favor elija una opción válida del menú.")
            opcionMenuPrincipal = mostrarMenuInicial();
            break;
    }

}
// Mostrar saludo de despedida
alert("Muchas gracias por su visita!")



function mostrarMenuInicial() {
    const opcion = parseInt(prompt("Elegir una opción: \n" +
        "1 - Agregar producto \n" +
        "0 - Salir \n"
    ));

    return opcion;
}

function mostrarListaDeProductos() {
    const opcion = parseInt(prompt("Elegir el producto que desea agregar: \n" +
        "1 - Docena de alfajores $1000 \n" +
        "2 - Torta mousse $2300 \n" +
        "3 - Torta cheesecake $2500 \n" +
        "4 - Docena de cookies $800 \n" +
        "5 - Eliminar último producto agregado \n" +
        "0 - Pagar"
    ));

    return opcion;
}


function obtenerProducto(id) {
    const productos = [
        { id: 1, nombre: "Docena de alfajores", precio: 1000 },
        { id: 2, nombre: "Torta mousse", precio: 2300 },
        { id: 3, nombre: "Torta cheesecake", precio: 2500 },
        { id: 4, nombre: "Docena de cookies", precio: 800 }
    ];

    return productos.find(producto => producto.id === id);
}

function mostrarMenuDePago(total) {
    const cuotas = parseInt(prompt("El total es de: $" + total +
        "\nIngrese cantidad de cuotas: "))

    return cuotas;

}

function agregarProducto(producto) {
    switch (producto) {
        case 1:
            return 1000;
            break;
        case 2:
            return 2300;
            break;
        case 3:
            return 2500;
            break;
        case 4:
            return 800;
            break;

        default:
            if (isNaN(producto)) {
                alert("La opción ingresada no es válida");
            }
            alert("Por favor elija una opción válida del menú.")
            return 0
            break;
    }

}