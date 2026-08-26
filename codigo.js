function IniciarSesion(){
let usuario = document.getElementById("user").value;
let contrasena = document.getElementById("contrasena").value;
if (usuario === "admin" && contrasena == "1234"){
    document.getElementById("mensaje").textContent = "Inicio de sesión correcto"

} else{
    document.getElementById("mensaje").textContent = "Usuario y/o contraseña incorrecto"
}
}