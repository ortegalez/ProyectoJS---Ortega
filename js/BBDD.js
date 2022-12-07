//********************* ARRAYS CON OBJETOS DE PRODUCTOS ***********************/ 

class Producto {
    constructor(categoria, id, articulo, color, img, talles, precio, cantidad) {
        this.categoria = categoria;
        this.id = id;
        this.articulo = articulo.toUpperCase();
        this.color = color.toUpperCase();
        this.img = img;
        this.talles = talles.toUpperCase();
        this.precio = precio
        this.cantidad = cantidad
    }
}


const producto01 = new Producto('Remeras', 1, 'remera', 'blanca', '../images/productos/remera-blanca.jpg', 'S - M - L - XL', 1500, 1);
const producto02 = new Producto('Remeras', 2, 'remera', 'negra', '../images/productos/remera-negra.jpg', 'S - M - L - XL', 1500, 1);
const producto03 = new Producto('Remeras', 3, 'remera', 'azul', '../images/productos/remera-azul.jpg', 'S - M - L - XL', 1500, 1);
const producto04 = new Producto('Remeras', 4, 'remera', 'rosa', '../images/productos/remera-rosa.jpg', 'S - M - L - XL', 1500, 1);
const producto05 = new Producto('Remeras', 5, 'remera', 'verde oscuro', '../images/productos/remera-verde.jpg', 'S - M - L - XL', 1500, 1);
const producto06 = new Producto('Remeras', 6, 'remera','verde claro', '../images/productos/remera-verdeclaro.jpg', 'S - M - L - XL', 2000, 1 )
const producto07 = new Producto('Buzos', 7, 'buzo', 'negro', '../images/productos/buzo-negro.jpg', 'S - M - L - XL', 2000, 1);
const producto08 = new Producto('Buzos', 8, 'buzo', 'verde', '../images/productos/buzo-verde.jpg', 'S - M - L - XL', 2000, 1);
const producto09 = new Producto('Buzos', 9, 'buzo', 'gris', '../images/productos/buzo-gris.jpg', 'S - M - L - XL', 2000, 1);
const producto10 = new Producto('Buzos', 10, 'buzo', 'rosa', '../images/productos/buzo-rosa.jpg', 'S - M - L - XL', 2000, 1);
const producto11 = new Producto('Packs', 11, 'pack', 'x 2', '../images/productos/packx2.jpg', 'S - M - L - XL', 2500, 1);
const producto12 = new Producto('Packs', 12, 'pack', 'x 3', '../images/productos/packx3.jpg', 'S - M - L - XL', 3500, 1);
const producto13 = new Producto('Packs', 13, 'pack', 'x 4', '../images/productos/packx4.jpg', 'S - M - L - XL', 4500, 1);
const producto14 = new Producto('Packs', 14, 'pack', 'x 5', '../images/productos/packx5.jpg', 'S - M - L - XL', 5500, 1);





const productos = [
producto01, 
producto02, 
producto03,
producto04,
producto05,
producto06,
producto07,
producto08,
producto09,
producto10,
producto11,
producto12,
producto13,
producto14
]

console.log(productos)

// const productos = [
//     { 
//     id:1,
//     articulo: "remera",
//     color: "Blanco",
//     img: "../images/productos/remera-blanca.jpg",
//     talles: "S, M, L, XL",
//     precio: 1500,
//     cantidad: 1
//     },
//     { 
//     id:2,
//     articulo: "remera",
//     color: "Negro",
//     img: "../images/productos/remera-negra.jpg",
//     talles: "S, M, L, XL",
//     precio: 1500,
//     cantidad: 1
//     },
//     { 
//     id:3,
//     articulo: "remera",
//     color: "Azul",
//     img: "../images/productos/remera-azul.jpg",
//     talles: "S, M, L, XL",
//     precio: 1500,
//     cantidad: 1
//     },
//     { 
//     id:4,
//     articulo: "remera",
//     color: "Rosa",
//     img: "../images/productos/remera-rosa.jpg",
//     talles: "S, M, L, XL",
//     precio: 1500,
//     cantidad: 1
//     },
//     { 
//     id:5,
//     articulo: "remera",
//     color: "Verde",
//     img: "../images/productos/remera-verde.jpg",
//     talles: "S, M, L, XL",
//     precio: 1500,
//     cantidad: 1
//     },
//     { 
//     id:6,
//     articulo: "buzo",
//     color: "Negro",
//     img: "../images/productos/buzo-negro.jpg",
//     talles: "S, M, L, XL",
//     precio: 2000,
//     cantidad: 1
//     },
//     { 
//     id:7,
//     articulo: "buzo",
//     color: "Verde",
//     img: "../images/productos/buzo-verde.jpg",
//     talles: "S, M, L, XL",
//     precio: 2000,
//     cantidad: 1
//     },
//     { 
//     id:8,
//     articulo: "buzo",
//     color: "Gris",
//     img: "../images/productos/buzo-gris.jpg",
//     talles: "S, M, L, XL",
//     precio: 2000,
//     cantidad: 1
//     },
//     { 
//     id:9,
//     articulo: "buzo",
//     color: "Rosa",
//     img: "../images/productos/buzo-rosa.jpg",
//     talles: "S, M, L, XL",
//     precio: 2000,
//     cantidad: 1
//     }
// ]

localStorage.setItem("listaProductos", JSON.stringify(productos))


