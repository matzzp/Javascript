
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