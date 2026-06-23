
let AnioActual = 2026;
let Nombre = prompt("Ingrese su nombre");
let Apellido = prompt("Ingrese su apellido");
let AnioNacimiento = prompt("Ingrese su anio de nacimiento");

let Edad = AnioActual - parseInt(AnioNacimiento);

if (isNaN(Edad)){
    alert("No ingresaste la edad con numeros");
}else{

    let mensaje = "estos datos son correctos? \n";
    mensaje = mensaje + "Nombre: " + Nombre + "\n";
    mensaje = mensaje + "Apellido: " + Apellido + "\n";
    mensaje = mensaje + "Edad: " + Edad + "\n";
    
    let respuesta = confirm (mensaje);

    if (respuesta) {
        alert ("bienvenido");

    }else{
        alert ("Vuelve a intresar tus datos");
    }
}