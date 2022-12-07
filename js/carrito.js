// ===============  Globales =================

const productosEnCarrito = JSON.parse(localStorage.getItem('productos-en-carrito'))

const contenedorCarrito = document.getElementById('contenedor-carrito');

const botonVaciarCarrito = document.getElementById('vaciar-carrito')

const precioTotal = document.getElementById("precio-total")

const botonComprar = document.querySelector('.carrito-acciones-comprar')

const contadorCarrito = document.querySelector('.numero-carrito')
// ===============  Fin Globales =================


//  ===============  Alerts =============

botonComprar.addEventListener('click' , () => {
    
    if (productosEnCarrito.length!=0) {
        Swal.fire('Gracias por tu compra')
        productosEnCarrito.splice(0, productosEnCarrito.length)
        actualizarCarrito() 
    } else {
        Swal.fire({
            title: '¡El carrito está vacio!',
            text: 'Primero debe agregar los productos al carrito',
            icon: 'error',
            confirmButtonText: 'Entendido'
          })
    }
    
})
//  ================== Fin Alerts ==================


// ==================== Funciones ====================
function actualizarCarrito() {

    if (productosEnCarrito) {
    
        contenedorCarrito.innerHTML=""

        productosEnCarrito.forEach((producto)=>{
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
                    <h5 id="cantidad">${producto.cantidad}</h5>
                </div>
                <div class="carrito-producto-precio">
                <p>Precio</p>
                <h5>$${producto.precio}</h5>
                </div>
                <div class="carrito-producto-subtotal">
                    <p>Sub-total</p>
                    <h5>$${producto.precio*producto.cantidad}</h5>
                </div>
                <div>
                    <p>Cantidad</p>
                    <div class="carrito-producto-botones">
                        <button>-</button>
                        <h5 id="cantidad">${producto.cantidad}</h5>
                        <button>+</button>
                    </div>
                </div>
                <button onclick ="eliminarDelCarrito(${producto.id})" class="carrito-producto-eliminar"><i class="bi bi-trash3-fill"></i></button>`
    
            contenedorCarrito.appendChild(itemCarrito)
            precioTotal.innerText = "$" + productosEnCarrito.reduce((acc, producto) => acc + (producto.precio*producto.cantidad), 0)
            actualizarContadorCarrito ()
            
            // Console.log de prueba para ver lo que hay en el carrito
            console.log(productosEnCarrito)
        })
    } else {
        mensajeCarritoVacio()
    } 

    if(productosEnCarrito==0) {
        mensajeCarritoVacio()
    }
    actualizarContadorCarrito ()
}
actualizarCarrito ()


// Sumar monto total de los item agregados al carrito:
function SumarNumeroCarrito () {
    precioTotal.innerText = "$" + carrito.reduce((acc, producto) => acc + (producto.precio*producto.cantidad), 0)
    actualizarContadorCarrito ()
}


// Función para Eliminar el item del producto en el carrito de compras
function eliminarDelCarrito(prodId) {
    const item =  productosEnCarrito.find((producto) => producto.id === prodId)
    const indice =  productosEnCarrito.indexOf(item)
    productosEnCarrito.splice(indice, 1)
    actualizarCarrito ()
    localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito))
}


// Función Mensaje carrito vacio
function mensajeCarritoVacio() {
    let mensajeCarritoVacio = document.createElement('p')
    mensajeCarritoVacio.className = 'carrito-vacio'
    mensajeCarritoVacio.innerHTML = `<p>El carrito está vacio</p>`
    contenedorCarrito.appendChild(mensajeCarritoVacio)
}


// Función Actualizar número del contador de productos en el carrito
function actualizarContadorCarrito () {
    contadorCarrito.innerText = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
}


// Función Vaciar todo el contenido del carrito
function vaciarCarrito() {
    productosEnCarrito.length = 0 // 
    precioTotal.innerText = 0,
    actualizarCarrito()
    localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito))
}

botonVaciarCarrito.addEventListener('click', () => { 
    vaciarCarrito()
})

