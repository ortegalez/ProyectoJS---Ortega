//********************* OBJETOS DE PRODUCTOS ***********************/ 

const BBDD = [
    { 
    id:1,
    articulo: "Remera",
    color: "Blanco",
    img: "../images/productos/remera-blanca.jpg",
    talles: "S, M, L, XL",
    precio: 1500,
    cantidad: 1
    },
    { 
    id:2,
    articulo: "Remera",
    color: "Negro",
    img: "../images/productos/remera-negra.jpg",
    talles: "S, M, L, XL",
    precio: 1500,
    cantidad: 1
    },
    { 
    id:3,
    articulo: "Remera",
    color: "Azul",
    img: "../images/productos/remera-azul.jpg",
    talles: "S, M, L, XL",
    precio: 1500,
    cantidad: 1
    },
    { 
    id:4,
    articulo: "Remera",
    color: "Rosa",
    img: "../images/productos/remera-rosa.jpg",
    talles: "S, M, L, XL",
    precio: 1500,
    cantidad: 1
    },
    { 
    id:5,
    articulo: "Remera",
    color: "Verde",
    img: "../images/productos/remera-verde.jpg",
    talles: "S, M, L, XL",
    precio: 1500,
    cantidad: 1
    },
    { 
    id:6,
    articulo: "Buzo",
    color: "Negro",
    img: "../images/productos/buzo-negro.jpg",
    talles: "S, M, L, XL",
    precio: 2000,
    cantidad: 1
    },
    { 
    id:7,
    articulo: "Buzo",
    color: "Verde",
    img: "../images/productos/buzo-verde.jpg",
    talles: "S, M, L, XL",
    precio: 2000,
    cantidad: 1
    },
    { 
    id:8,
    articulo: "Buzo",
    color: "Gris",
    img: "../images/productos/buzo-gris.jpg",
    talles: "S, M, L, XL",
    precio: 2000,
    cantidad: 1
    },
    { 
    id:9,
    articulo: "Buzo",
    color: "Rosa",
    img: "../images/productos/buzo-rosa.jpg",
    talles: "S, M, L, XL",
    precio: 2000,
    cantidad: 1
    }
]

// ===============  Globales =================
const contenedorProductos = document.getElementById('contenedor-productos');

const contenedorCarrito = document.getElementById('contenedor-carrito');

const botonVaciarCarrito = document.getElementById('vaciar-carrito')

let carrito = []

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

const contadorCarrito = document.querySelector('.numero-carrito')

const precioTotal = document.getElementById("precio-total")

// ===============  Fin Globales =================



//  ===============  Alerts =============

const botonComprar = document.querySelector('.carrito-acciones-comprar')

botonComprar.addEventListener('click' , () => {
    Swal.fire('Gracias por tu compra')
    carrito.splice(0, carrito.length)
    actualizarCarrito()
})
//  =============== Fin Alerts =============


// =================== Funciones ===================

// Funcion para mostrar TODOS los productos
function mostrarProductos () {

    BBDD.forEach((producto)=>{
        let cardProducto = document.createElement('div')
        cardProducto.className = 'card-producto'
        cardProducto.innerHTML =
                `<img class="producto-imagen" src="${producto.img}" alt="${producto.articulo}">
                 <div class="producto-detalle">
                     <h5 class="producto-titulo">${producto.articulo} ${producto.color}</h5>
                     <small class="producto-talles"> ${producto.talles}</small>
                     <p class="producto-precio">$${producto.precio}</p>
                     <button id="agregar${producto.id}" class="producto-agregar">Agregar</button>
                 </div>`

        contenedorProductos.append(cardProducto)

        const btnAgregar = document.getElementById(`agregar${producto.id}`)
       
        btnAgregar.addEventListener('click', () => {
            agregarCarrito(producto.id)
        })
    }) 
  
}
mostrarProductos () 

// Funcion para agregar items al carrito de compra
function agregarCarrito (prodId)  {
   
    const item = BBDD.find((prod) => prod.id === prodId); 
    
    // Actualizar numero agregado del item en el carrito:
    if(carrito.some(producto => producto.id === prodId)) {
        const index = carrito.findIndex(producto => producto.id ===  prodId)
        carrito[index].cantidad++;      
    } else {
        carrito.push(item)
    }
    const enCarrito = JSON.stringify(carrito)
    console.log(enCarrito)
    actualizarCarrito() 
}


// Funcion para  crear el item del producto en el carrito de compras
function actualizarCarrito () {
    
    contenedorCarrito.innerHTML ="" // Borrar nodo para que no se acumulen los productos en el carrito
   
    carrito.forEach((producto)=>{
    let itemCarrito = document.createElement('div')
    itemCarrito.className = 'carrito-producto';
    itemCarrito.innerHTML = 
            `<img class="carrito-producto-imagen" src="${producto.img}" alt="${producto.articulo}">
            <div class="carrito-producto-titulo">
                <p>${producto.articulo}</p>
                <h5>${producto.color}</h5> 
            </div>
            <div class="carrito-producto-cantidad">
                <p>Cantidad</p>
                <h5 id="cantidad" >${producto.cantidad}</h5>
            </div>
            <div class="carrito-producto-precio">
                <p>Precio</p>
                <h5>$${producto.precio}</h5>
            </div>
            <div class="carrito-producto-subtotal">
                <p>Sub-total</p>
                <h5>$${producto.precio*producto.cantidad}</h5>
            </div>
            <button onclick ="eliminarDelCarrito(${producto.id})" class="carrito-producto-eliminar"><i class="bi bi-trash3-fill"></i></button>`
        
        contenedorCarrito.appendChild(itemCarrito)
       
        // Sumar monto total de los item agregados al carrito:
        precioTotal.innerText = "$" + carrito.reduce((acc, producto) => acc + (producto.precio*producto.cantidad), 0)
        actualizarNumeroCarrito ()
    })
    // Almaceno en el local Storage
    localStorage.setItem('carrito', JSON.stringify(carrito))

    if(carrito.length == 0) {
        contenedorCarrito.appendChild(mensajeCarritoVacio)
        precioTotal.innerText = 0,
        contadorCarrito.innerText = 0;
    }
}


// Funcion para Eliminar el item del producto en el carrito de compras
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((producto) => producto.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}

// Actualizar numero del carrito al agragar items:
function actualizarNumeroCarrito () {
    contadorCarrito.innerText = carrito.reduce((acc, producto) => acc + producto.cantidad, 0)
}

// Vaciar todo el contenido del carrito
botonVaciarCarrito.addEventListener('click', () => { 
    carrito.length = 0 // Vaciar todo el contenido del carrito
    precioTotal.innerText = 0,
    contadorCarrito.innerText = 0;
    actualizarCarrito()
})





// Mensaje de carrito vacio
let mensajeCarritoVacio = document.createElement('p')
mensajeCarritoVacio.className = 'carrito-vacio'
mensajeCarritoVacio.innerHTML = `<p>El carrito está vacio</p>` 