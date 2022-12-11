
// ===============  Globales =================

const BBDD = JSON.parse(localStorage.getItem('listaProductos'))

const contenedorProductos = document.getElementById('contenedor-productos');

const botonesCategorias = document.querySelectorAll('.boton-categorias')

const tituloPrincipal = document.querySelector('#titulo-principal')

const contadorCarrito = document.querySelector('.numero-carrito')

let carrito;
// Traer array del LS
const productosEnCarritoLS = JSON.parse(localStorage.getItem('productos-en-carrito'))

if(productosEnCarritoLS) {
    carrito = productosEnCarritoLS;
    actualizarNumeroCarrito()
} else {
    carrito = [];
}

// ===============  Fin Globales =================

// =================== Funciones ===================

// Funcion para mostrar TODOS los productos
function mostrarProductos (productosElegidos) {
    if(contenedorProductos){

        contenedorProductos.innerHTML =""
        
    productosElegidos.forEach((producto) => {
        const cardProducto = document.createElement('div')
        cardProducto.className = 'card-producto'
        cardProducto.innerHTML =
                `<img class="producto-imagen" src="${producto.img}" alt="${producto.articulo}">
                    <div class="producto-detalle">
                    <h5 class="producto-titulo">${producto.articulo} ${producto.color}</h5>
                    <small class="producto-talles"> Talles: ${producto.talles}</small>
                    <p class="producto-precio">Precio: $${producto.precio}</p>
                    <button id="agregar${producto.id}" class="producto-agregar">Agregar</button>
                    </div>`            
                    contenedorProductos.append(cardProducto)
                    
                    let btnAgregar = document.getElementById(`agregar${producto.id}`)
        
        btnAgregar.addEventListener('click', () => {
        agregarCarrito(producto.id)
        })
    })  
}
}
mostrarProductos (BBDD)


// Asigna clase "Active para cambiar el display del aside"
botonesCategorias.forEach(boton => {
    boton.addEventListener('click', (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove('active'));
        e.currentTarget.classList.add('active');
        // Filtra el array y muestra el tipo de articulo que quiero
        if (e.currentTarget.id != "todos") {
            const nombreCategoria =  BBDD.find(producto => producto.articulo === e.currentTarget.id)
            tituloPrincipal.innerText = nombreCategoria.categoria
            const productosBoton = BBDD.filter(producto => producto.articulo === e.currentTarget.id)
            mostrarProductos(productosBoton)
        } else {
            tituloPrincipal.innerText = "Todos los productos"
            mostrarProductos(BBDD)
        }
    }
    )}
)


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
    console.log(carrito)

    actualizarNumeroCarrito()
    localStorage.setItem('productos-en-carrito', JSON.stringify(carrito))
}

// Actualizar numero del carrito al agragar items:
function actualizarNumeroCarrito () {
    contadorCarrito.innerText = carrito.reduce((acc, producto) => acc + producto.cantidad, 0)
}


