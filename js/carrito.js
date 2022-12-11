// ===============  Globales =================


const productosEnCarrito = JSON.parse(localStorage.getItem('productos-en-carrito'))

const contenedorCarrito = document.getElementById('contenedor-carrito');

const botonVaciarCarrito = document.getElementById('vaciar-carrito')

const precioTotal = document.getElementById("precio-total")

const botonComprar = document.querySelector('.carrito-acciones-comprar')

const contadorCarrito = document.querySelector('.numero-carrito')

let botonSumar
let botonRestar

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

        productosEnCarrito.forEach((producto)=> {
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
                        <button id="boton-restar${producto.id}">-</button>
                        <h5 id="cantidad">${producto.cantidad}</h5>
                        <button id="boton-sumar${producto.id}">+</button>
                    </div>
                </div>
                <button onclick ="eliminarDelCarrito(${producto.id})" class="carrito-producto-eliminar"><i class="bi bi-trash3-fill"></i></button>`
            contenedorCarrito.appendChild(itemCarrito)

            botonSumar = document.getElementById(`boton-sumar${producto.id}`)
            botonRestar = document.getElementById(`boton-restar${producto.id}`)


            botonSumar.addEventListener('click', () => {
                sumarProductoCarrito(producto.id)
            })

            botonRestar.addEventListener('click', () => {
                restarProductoCarrito(producto.id)
            })


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

// Función para sumar cantidad a un producto agregado
function sumarProductoCarrito (prodId) {
    const itemAgregado = productosEnCarrito.find((prod) => prod.id === prodId); 
    if(productosEnCarrito.some(producto => producto.id === prodId)) {
        const index = productosEnCarrito.findIndex(producto => producto.id ===  prodId)
        productosEnCarrito[index].cantidad++;   
    }
    actualizarCarrito()
    localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito))
}


// Función para restar cantidad a un producto agregado
function restarProductoCarrito(prodId) {

    const itemArestar = productosEnCarrito.find((prod) => prod.id === prodId); 
    console.log(itemArestar)
    
    if(itemArestar.cantidad > 1) {
        const index = productosEnCarrito.findIndex(producto => producto.id ===  prodId)
        productosEnCarrito[index].cantidad--;
    } else {
        eliminarDelCarrito(itemArestar.id)
        if(productosEnCarrito.length == 0){
            precioTotal.innerText = 0
        }
    }
    actualizarCarrito()
    localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito))
}


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

