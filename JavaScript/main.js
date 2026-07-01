
/*
const AnioActual = 2026;
let Nombre = prompt("Ingrese su nombre");
let Apellido = prompt("Ingrese su apellido");
let AnioNacimiento = prompt("Ingrese su anio de nacimiento");

let Edad = AnioActual - parseInt(AnioNacimiento);
    console.log(Edad)
if (isNaN(Edad)){
    alert("No ingresaste la edad con numeros");
}else{

    let Mensaje = "estos datos son correctos? \n";
    Mensaje = Mensaje + "Nombre: " + Nombre + "\n";
    Mensaje = Mensaje + "Apellido: " + Apellido + "\n";
    Mensaje = Mensaje + "Edad: " + Edad + "\n";
    
    let Respuesta = confirm (Mensaje);

    if (Respuesta) {
        alert ("bienvenido");

    }else{
        alert ("Vuelve a intresar tus datos");
    }
}

*/

const Numero = parseInt(prompt("Ingrese un número del 1 al 10"));

console.log(Numero);

if (isNaN(Numero)) {
    alert ("Ingrese el valor en daros numericos")
} else if ((Numero <= 10) && (Numero >= 0)){
    alert ("Numero ingresado correctamente")
} else {
    alert ("El numer ingresado no es entre 1 y 10")
}

for (let i = Numero; i <= 10; i++ ) 
    
    console.log (i)
    

