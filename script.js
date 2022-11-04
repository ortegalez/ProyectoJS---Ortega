// VARIABLES
let productos;
let total = 0;


// Funcion que no voy usar
// function mostrarProductos(productos){
//     i = 0;
//     console.log(productos[0].articulo +":")
//     for (i=0; i<productos.length; i++){
//         console.log(productos[i].tipo +'\nTalles: '+ productos[i].talles +'\nColores: '+ productos[i].color +'\nPrecio: $'+ productos[i].precio);
//     }
// }


// const buzos = producto.filter((menuBuzos) => menuBuzos.articulo.includes('Buzo'))
// console.log(buzos)


// funcion para buscar un producto y mostrarlo
// function buscarProducto(articulo)
// funcion para comprar y que sume los precios de los carritos

// https://www.educacionit.com/acceso-webinar?hash=069DA71AE00B62036F5142E6395BDC35&contacto_id=877805&calendario_id=62944

// ARRAYS DE ARTICULOS
// const remeras = [{id: 001, tipo: "clásico", talles: "S, M, L, XL", color: "Blanco, Negro, Rojo, Azul", precio: 1500},
//                  {id: 002, tipo: "Slim", talles: "S, M, L, XL", color: "Blanco, Negro, Rojo, Azul", precio: 1600},
//                  {id: 003, tipo: "Girl", talles: "S, M, L, XL", color: "Blanco, Negro, Rojo, Azul", precio: 1500},]

// const buzos = [{id: 001, tipo: "Con Capucha", talles: "S, M, L, XL", color: "Negro, Blanco, Bordo", precio: 4000},
//                 {id: 002, tipo: "Sin Capucha", talles: "S, M, L, XL", color: "Negro, Blanco, Rosa", precio: 3500}]



// CONSTRUCTOR PARA AGREGAR ELEMENTOS
class Producto {
    constructor (id, articulo, tipo, talles, color, precio) {
        this.id = id;
        this.articulo = articulo;
        this.tipo = tipo;
        this.talles = talles;
        this.color = color;
        this.precio = precio;
    }
} 

// OBJETOS DE PRODUCTOS
const producto01 = new Producto("001","Remera","Clásica","S, M, L, XL","Blanco, Negro, Rojo, Azul",1500);
const producto02 = new Producto("002","Remera","Slim","S, M, L, XL","Blanco, Negro, Rojo, Azul",1600);
const producto03 = new Producto("003","Remera","Girl","S, M, L, XL","Blanco, Negro, Rojo, Azul",1400);
const producto04 = new Producto("004","Buzo","con capucha","S, M , L, XL","Blanco, Negro, Rojo, Azul",2500);
const producto05 = new Producto("005","Buzo","sin capucha","S, M, L, XL","Blanco, Negro, Rojo, Azul",2000);

const BBDD = [producto01, producto02, producto03, producto04, producto05]

// FUNCIONES
function mostrarMenuRemeras(){
    const remeras = BBDD.filter((menuRemeras) => menuRemeras.articulo.includes('Remera'))
    // console.log(remeras)
    console.log("Lista de Remeras:")
    for(let obj of remeras){
        console.log(obj.articulo +" "+ obj.tipo + "\nPrecio: $" + obj.precio) // Usando for - of
    }
    // for (let i=0; i<=remeras.length; i++) {
    //     alert("Lista de Remeras:\n" + remeras[i].articulo + " " + remeras[i].tipo + "\nPrecio: $" + remeras[i].precio)
    // }
}

function mostrarMenuBuzos(){
    const buzos = BBDD.filter((menuBuzos) => menuBuzos.articulo.includes('Buzo'))
    // console.log(buzos)
    console.log("Lista de Buzos:")
    buzos.forEach((el)=>{console.log(el.articulo + " " + el.tipo + "\nPrecio: $" + el.precio)}) // Usando forEach
    
    // for (let i=0; i<=buzos.length; i++) {
    //     alert("Lista de Buzos:\n" + buzos[i].articulo + " " + buzos[i].tipo + "\nPrecio: $" + buzos[i].precio)
    // }
}

function mostrarMenuTodos(){
    // console.log(BBDD)
    for(let obj of BBDD){
        console.log(obj.articulo +" "+ obj.tipo + "\nPrecio: " + obj.precio)
    }
}

function Comprar(){
}

function AgregarCarrito() {
    let agregarPdo = 'si'
    const carrito = [];
    const totalCarrito = []
    
    while (agregarPdo == 'si'){
        let agregar = prompt("Seleccione el producto que desea agregar: \n1. Remera CLasica \n2. Remera Slim \n3. Remera Girl \n4. Buzos con capucha \n5. Buzos sin capucha") 
        if (agregar == 1){
            let clasica = BBDD.find(producto => producto.tipo == "Clásica")
            carrito.push(clasica)
        } else if (agregar == 2) {
            let slim = BBDD.find(producto => producto.tipo == "Slim")
            carrito.push(slim)
        } else if (agregar == 3) {
            let girl = BBDD.find(producto => producto.tipo == "Girl")
            carrito.push(girl)    
        } else if (agregar == 4) {
            let conCapucha = BBDD.find(producto => producto.tipo == "con capucha")
            carrito.push(conCapucha)
        } else if (agregar == 5) {
            let sinCapucha = BBDD.find(producto => producto.tipo == "sin capucha")
            carrito.push(sinCapucha)    
        } 
        else {
            console.log("Seleccion no válida")
        }
        agregarPdo = prompt("¿Desea agregar otro articulo al carrito? \n'Si' o 'No'")
    }
    console.log("Usuario: " + nombreUsuario + "\nAgregados al carrito:")
    carrito.forEach((el)=>{console.log(`${el.articulo} ${el.tipo}\nPrecio: \$${el.precio}`)
    })
}


// INICIO

let nombreUsuario = prompt("Bienvenida a Maco Moda \nComplete el formulario de registro \nIngrese su nombre:")
alert(`Gracias por completar el registro ${nombreUsuario}`)


let verMenu = true;
let opMenu = 'si';

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


// console.log(Object.keys(remeras.tipos).length) Convierte el objeto en un array y me dice la cant. de atributos que tiene

// while (bienvenido.toLowerCase()) {     

    // let opcion = Number(prompt('Bienvenido a MACO MODA - Tienda Online \nElija una opcion del menú: \n1) Ver Productos \n2) Comprar'));
    // let nombreUsuario ="";

    // switch(opcion){
    //     case 1:
    //         console.log("Modelos de remeras disponibles:")
    //         for(const propiedad in remeras.tipos) {                
    //             console.log(remeras.tipos[propiedad])
    //         }
    //         console.log("Modelos de buzos disponibles:")
    //         for(const propiedad in buzos.tipos) {                
    //             console.log(buzos.tipos[propiedad])
    //         }
            
    //     }
    //     break;
    //     case 2:
    //         alert("Complete el formulario de registro:")
    //         nombreUsuario = prompt("Ingrese su nombre")
    //         alert("Gracias por completar el registro "+ nombreUsuario)
    //     break;
    //     default:
    //         alert("Seleccione una opcion válida");
    //     break;
    // }

// function remeras(tipoRemera,cantRemera) {
//     montoRemera = cantRemera*2000;
// }

// function buzos() {
//     return "Seleccione: \n\n1. Buzos con capucha \n2. Buzos sin capucha";
// }

// function packs() { 
//     return "Seleccione: \n\n1. Pack x 2 \n2. Pack x 3 \n3. Pack x 4 \n4. Pack x 5."
// }

// function compraRemera(tipoRemera, cantRemera) {
//     let buyRemeras = tipoRemera*cantRemera;
// }

// let tiposVinos = "tinto";

// tiposVinos = tiposVinos + " dulce";

// tiposVinos = tiposVinos + " amargo";

// console.log(tiposVinos);



// // for(let i=0;i<3;i++){

    

// // }

// let nombreProducto = "vino";
// let precioProducto = 900;
// let descuento10 = 200; // descuento del 10%
// let totalCompra = 0;

// totalCompra = precioProducto + totalCompra

// console.log("el usuario pago: " + totalCompra)

// function descuento(){

//     totalCompra = totalCompra - descuento10;
    

// }

// descuento();

// console.log(totalCompra)
// jose.zapata@bue.edu.ar

 
// alert("Gracias por visitarnos");




/*
Será que este código es suficiente para la entrega o debo agregarle más? estoy algo inseguro :"(:


let opcion2;
let n;
let valortotal1 = 0;
let valortotal2 = 0;
const valortotal = (a,b) => a + b
const descuento = (a,b) => a * b
const resta = (a,b) => a - b    

let opcion1 = Number(prompt("Bienvenido al carrito de compras \n 1-Ingresar al carrito \n 4-salir"))

while (opcion1 != 4){
    opcion1 = Number(prompt("1- Agregar productos/Consultar total \n 4- Salir"))
    if(opcion1 == 1){
        n = Number(prompt("elige los productos que quieres agregar: \n 1- Aretes de corazón: 18000 COP \n 2- Cadena en acero: 20000 COP \n 3- Total" ));
        if (n == 1){
            let cant1 = Number(prompt("¿Cuántos aretes quieres agregar"));
                valortotal1 = 10000*cant1;
        }
        else if (n == 2){
            let cant2 = Number(prompt("¿Cuántas cadenas quieres agregar"));
                valortotal2 = 20000*cant2;
        }
        else if (n == 3){
            let Total = valortotal(valortotal1, valortotal2);
            if (Total >= 200000){
                let Descuento = resta(Total,descuento(Total,0.05));
                alert("Valor total con descuento: "+ Descuento);
            } else if(Total < 200000){
                alert("Valor total: "+ Total);
            }
        }
    }  
   
}*/
