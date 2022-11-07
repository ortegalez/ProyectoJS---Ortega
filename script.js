// VARIABLES
let productos;
let total = 0;
let verMenu = true;
let opMenu = 'si';

// CONSTRUCTOR PARA AGREGAR ELEMENTOS
class Producto {
    constructor (id, articulo, tipo, talles, color, precio, monto) {
        this.id = id;
        this.articulo = articulo;
        this.tipo = tipo;
        this.talles = talles;
        this.color = color;
        this.precio = precio;
        this.monto = monto;
    }
} 

// OBJETOS DE PRODUCTOS
const producto01 = new Producto("001","Remera","Clásica","S, M, L, XL","Blanco, Negro, Rojo, Azul",1500, "");
const producto02 = new Producto("002","Remera","Slim","S, M, L, XL","Blanco, Negro, Rojo, Azul",1600, "");
const producto03 = new Producto("003","Remera","Girl","S, M, L, XL","Blanco, Negro, Rojo, Azul",1400, "");
const producto04 = new Producto("004","Buzo","con capucha","S, M , L, XL","Blanco, Negro, Rojo, Azul",2500, "");
const producto05 = new Producto("005","Buzo","sin capucha","S, M, L, XL","Blanco, Negro, Rojo, Azul",2000, "");

const BBDD = [producto01, producto02, producto03, producto04, producto05]

// FUNCIONES
function mostrarMenuRemeras(){
    const remeras = BBDD.filter((menuRemeras) => menuRemeras.articulo.includes('Remera'))
    console.log("Lista de Remeras:")
    for(let obj of remeras){
        console.log(obj.articulo +" "+ obj.tipo + "\nPrecio: $" + obj.precio) // Usando for - of
    }
}

function mostrarMenuBuzos(){
    const buzos = BBDD.filter((menuBuzos) => menuBuzos.articulo.includes('Buzo'))
    // console.log(buzos)
    console.log("Lista de Buzos:")
    buzos.forEach((el)=>{console.log(el.articulo + " " + el.tipo + "\nPrecio: $" + el.precio)}) // Usando forEach
}

function mostrarMenuTodos(){
    for(let obj of BBDD){
        console.log(obj.articulo +" "+ obj.tipo + "\nPrecio: " + obj.precio)
    }
}

function AgregarCarrito() {
    let agregarPdo = 'si'
    const carrito = [];
    
    while (agregarPdo == 'si'){
        let agregar = prompt("Seleccione el producto que desea agregar: \n1. Remera CLasica \n2. Remera Slim \n3. Remera Girl \n4. Buzos con capucha \n5. Buzos sin capucha") 
        if (agregar == 1){
            let clasica = BBDD.find(producto => producto.tipo == "Clásica")
            montoCarrito(clasica)
            carrito.push(clasica)
        } else if (agregar == 2) {
            let slim = BBDD.find(producto => producto.tipo == "Slim")
            montoCarrito(slim)
            carrito.push(slim)
        } else if (agregar == 3) {
            let girl = BBDD.find(producto => producto.tipo == "Girl")
            montoCarrito(girl)
            carrito.push(girl)    
        } else if (agregar == 4) {
            let conCapucha = BBDD.find(producto => producto.tipo == "con capucha")
            montoCarrito(conCapucha)
            carrito.push(conCapucha)
        } else if (agregar == 5) {
            let sinCapucha = BBDD.find(producto => producto.tipo == "sin capucha")
            montoCarrito(sinCapucha)
            carrito.push(sinCapucha)    
        } 
        else {
            console.log("Seleccion no válida")
        }
        agregarPdo = prompt("¿Desea agregar otro articulo al carrito? \n'Si' o 'No'")
    }
    console.log("Usuario: " + nombreUsuario + "\nAgregados al carrito:")
    const totalCarrito = carrito.reduce((acumulador, carrito) => acumulador + carrito.monto, 0)
    carrito.forEach((el)=>{console.log(`${el.articulo} ${el.tipo}\nPrecio: \$${el.precio}`)
    })
    console.log("Total de compra: $" + totalCarrito)
}

function formularioIngreso() {
    let usuario = prompt("Bienvenido a Maco Moda \nComplete el formulario de registro \nIngrese su nombre:")
    if(usuario != "") {
        alert(`Gracias por completar el registro ${usuario}`);
    } else {
        alert('No ingresó un dato');
    }
    return usuario
}

function montoCarrito(articulo) {
    let cantidad = prompt("Ingrese cantidad de articulos:")
    articulo.monto = cantidad*articulo.precio;
}

// MENU:
nombreUsuario = formularioIngreso();

while (verMenu == true) {
    let op = prompt("Menú principal: \n1. Ver Remeras \n2. Ver Buzos \n3. Ver Todos \n4. Agregar al carrito \n5. Salir")
    if (op == 1){
        mostrarMenuRemeras();
    } else if (op == 2) {
        mostrarMenuBuzos();
    } else if (op == 3) {
        mostrarMenuTodos()
    } else if (op == 4) {
        AgregarCarrito()
    } else if (op == 5) {
        verMenu = false;
        continue
    } else {
        console.log("Seleccione un opcion valida")
    }
    
    opMenu = prompt("¿Quiere ver el menú nuevamente? \nIngrese 'si' o 'no'")
    if(opMenu == 'si'){
        verMenu = true;
    } else if (opMenu == 'no'){
        verMenu = false;
    } else {
        alert("No ingresó una opcion válida")
    }
}
alert("Gracias por visitarnos")
