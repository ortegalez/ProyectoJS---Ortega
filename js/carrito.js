// ===============  Globales =================
const productosEnCarrito = JSON.parse(localStorage.getItem('productos-en-carrito'))

const contenedorCarrito = document.getElementById('contenedor-carrito');

const botonVaciarCarrito = document.getElementById('vaciar-carrito')

const precioTotal = document.getElementById("precio-total")

const botonComprar = document.querySelector('.carrito-acciones-comprar')

const contadorCarrito = document.querySelector('.numero-carrito')

// ===============  Fin Globales =================
console.log(contenedorCarrito)

//  ===============  Alerts =============



botonComprar.addEventListener('click' , () => {
    Swal.fire('Gracias por tu compra')
    productosEnCarrito.splice(0, productosEnCarrito.length)
    actualizarCarrito()
})

//  ================== Fin Alerts ==================




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
        })
    } else {
        mensajeCarritoVacio()
    } 

    precioTotal.innerText = "$" + productosEnCarrito.reduce((acc, producto) => acc + (producto.precio*producto.cantidad), 0)
    console.log(productosEnCarrito)


    if(productosEnCarrito==0) {
        mensajeCarritoVacio()
    }
    actualizarNumeroCarrito ()

}

actualizarCarrito ()


// Sumar monto total de los item agregados al carrito:
function SumarNumeroCarrito () {
    precioTotal.innerText = "$" + carrito.reduce((acc, producto) => acc + (producto.precio*producto.cantidad), 0)
    actualizarNumeroCarrito ()
    localStorage.setItem('carrito', JSON.stringify(carrito))
}


// Funcion para Eliminar el item del producto en el carrito de compras
function eliminarDelCarrito(prodId) {
    const item =  productosEnCarrito.find((producto) => producto.id === prodId)
    const indice =  productosEnCarrito.indexOf(item)
    productosEnCarrito.splice(indice, 1)
    ActualizarCarrito ()
}


function mensajeCarritoVacio() {
    let mensajeCarritoVacio = document.createElement('p')
    mensajeCarritoVacio.className = 'carrito-vacio'
    mensajeCarritoVacio.innerHTML = `<p>El carrito está vacio</p>`
    contenedorCarrito.appendChild(mensajeCarritoVacio)
}

function actualizarNumeroCarrito () {
    contadorCarrito.innerText = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
}

botonVaciarCarrito.addEventListener('click', () => { 
    productosEnCarrito.length = 0 // Vaciar todo el contenido del carrito
    precioTotal.innerText = 0,
    // contadorCarrito.innerText = 0;
    actualizarCarrito()
 
})


/*

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})


//  ===============  Alerts =============

// const botonComprar = document.querySelector('.carrito-acciones-comprar')

// botonComprar.addEventListener('click' , () => {
//     Swal.fire('Gracias por tu compra')
//     carrito.splice(0, carrito.length)
//     actualizarCarrito()
// })

//  ================== Fin Alerts ==================


// =================== Funciones ===================

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
    // console.log(enCarrito)
    actualizarCarrito() 
}

// Funcion para filtrar elementos del aside bar
botonesCategorias.forEach(boton => {
    
    // Asigna clase "Active para cambiar el display del aside"
    boton.addEventListener('click', (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove('active'));
        e.currentTarget.classList.add('active');

        // Filtra el array y muestra el tipo de articulo que quiero
        if (e.currentTarget.id != "todos") {
            // EN EL MINITU 1:20 MUESTRA COMO CAMBIAR LOS TITULOS
            const productosBoton = BBDD.filter(producto => producto.articulo === e.currentTarget.id)
            mostrarProductos(productosBoton)
        } else {
            mostrarProductos(BBDD)
        }
    }
    )}
)


// Funcion para  crear el item del producto en el carrito de compras

function actualizarCarrito () {
    
    if (contenedorCarrito) {
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
           
            SumarNumeroCarrito ()
     
        })
    
        if(carrito.length == 0) {
            contenedorCarrito.appendChild(mensajeCarritoVacio)
            precioTotal.innerText = 0,
            contadorCarrito.innerText = 0;
        }

    }
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


*/ 

// Funcion para crear el item del producto en el carrito de compras
// function actualizarCarrito () {
    
//     contenedorCarrito.innerHTML ="" // Borrar nodo para que no se acumulen los productos en el carrito

//     carrito.forEach((producto)=>{
//     let itemCarrito = document.createElement('div')
//     itemCarrito.className = 'carrito-producto';
//     itemCarrito.innerHTML = 
//             `<img class="carrito-producto-imagen" src="${producto.img}" alt="${producto.articulo}">
//             <div class="carrito-producto-titulo">
//                 <p>${producto.articulo}</p>
//                 <h5>${producto.color}</h5> 
//             </div>
//             <div class="carrito-producto-cantidad">
//                 <p>Cantidad</p>
//                 <h5 id="cantidad">${producto.cantidad}</h5>
//             </div>
//             <div class="carrito-producto-precio">
//                 <p>Precio</p>
//                 <h5>$${producto.precio}</h5>
//             </div>
//             <div class="carrito-producto-subtotal">
//                 <p>Sub-total</p>
//                 <h5>$${producto.precio*producto.cantidad}</h5>
//             </div>
//             <div>
//                 <p>Cantidad</p>
//                 <div class="carrito-producto-botones">
//                     <button>-</button>
//                     <h5 id="cantidad">${producto.cantidad}</h5>
//                     <button>+</button>
//                 </div>
//             </div>
//             <button onclick ="eliminarDelCarrito(${producto.id})" class="carrito-producto-eliminar"><i class="bi bi-trash3-fill"></i></button>`

//         contenedorCarrito.appendChild(itemCarrito)
//     })

//     if(carrito.length == 0) {
//         contenedorCarrito.appendChild(mensajeCarritoVacio)
//         precioTotal.innerText = 0,
//         contadorCarrito.innerText = 0;
//     }

// }



// Funcion para Eliminar el item del producto en el carrito de compras


// Vaciar todo el contenido del carrito



    // botonVaciarCarrito.addEventListener('click', () => { 
    //     carrito.length = 0 // Vaciar todo el contenido del carrito
    //     precioTotal.innerText = 0,
    //     contadorCarrito.innerText = 0;
    //     actualizarCarrito()
    // })
    

