
// Cálculo de IMC
// let bienvenido = prompt('Bienvenido a Atlas Nutrición \n\n¿Quiere conocer su Indice de Masa Corporal? \nIngrese "Y" para SI \nIngrese "N" para salir')

// while ((bienvenido == "y" || bienvenido =="si" || bienvenido =="Y" ) && bienvenido!="") {    
    
//     peso = Number(prompt("Ingrese su peso en Kg"));
//     estatura = Number(prompt("Ingrese su estatura en metros"));
    
//     if ((peso!="") && (peso>0) && (estatura!="") && (estatura>0)) {
        
//         function imc(peso,estatura) {

//             let resultado = peso/(estatura*estatura);
//             // return "El resultado es " + resultado;

//             if (resultado<=16.5) {
//                 return "Su IMC es: " + resultado + " - Desnutrición";
//             } else if (resultado<=18.5) {
//                 return "Su IMC es: " + resultado + " - Peso inferior";
//             } else if (resultado<=24.9) {
//                 return "Su IMC es: " + resultado + " - Peso normal";
//             } else if (resultado<=29.9) {
//                 return "Su IMC es: " + resultado + " - Sobrepeso";
//             } else if (resultado<=34.9) {
//                 return "Su IMC es: " + resultado + " - Obesidad Moderada";
//             } else if (resultado<=49) {
//                 return "Su IMC es: " + resultado + " - Obesidad severa";
//             } else {
//                 return "Su IMC es: " + resultado + " - Valor fuera de rango";
//             }
//         }
//     }
//     let calculo = imc(peso,estatura);
//     alert(calculo);
//     bienvenido = prompt("Quiere volver a calcular su Indice de Masa Corporal? \nIngrese Si")
// }
// alert("Gracias por visitarnos");


let bienvenido = prompt('Bienvenido a Atlas Nutrición \n\n¿Quiere conocer su Indice de Masa Corporal? \nIngrese "Y" para SI');

while (bienvenido == "y" || bienvenido =="Y") {    
    let peso = Number(prompt("Ingrese su peso en Kg"));
    let estatura = Number(prompt("Ingrese su estatura en metros"));
    if (peso>0 && estatura>0) {     
        alert(imc(peso,estatura));
    } else{
        alert("valores ingresados incorrectos");
    }
    bienvenido = prompt('Quiere volver a calcular su Indice de Masa Corporal? \nIngrese "Y"');
}
 
alert("Gracias por visitarnos");

function imc(peso,estatura) {
    let resultado = peso/(estatura*estatura);
    // return "El resultado es " + resultado;
    if (resultado<=16.5) {
        return "Su IMC es: " + resultado + " - Desnutrición";
    } else if (resultado<=18.5) {
        return "Su IMC es: " + resultado + " - Peso inferior";
    } else if (resultado<=24.9) {
        return "Su IMC es: " + resultado + " - Peso normal";
    } else if (resultado<=29.9) {
        return "Su IMC es: " + resultado + " - Sobrepeso";
    } else if (resultado<=34.9) {
        return "Su IMC es: " + resultado + " - Obesidad Moderada";
    } else{
        return "Su IMC es: " + resultado + " - Obesidad severa";
    } 
}