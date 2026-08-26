function IniciarSesion() {
    let usuario = document.getElementById("user").value;
    let contrasena = document.getElementById("contrasena").value;
    if (usuario === "admin" && contrasena == "1234") {
        document.getElementById("mensaje").textContent = "Inicio de sesión correcto"
    } else if (usuario == "alumno" && contrasena == "4321") {
        document.getElementById("mensaje").textContent = "Inicio de sesión correcto"
    } else if (usuario == "" && contrasena == "") {
        document.getElementById("mensaje").textContent = "Llene todas las casillas por fabor"
    } else if (usuario != "" && contrasena == "") {
        document.getElementById("mensaje").textContent = "Llene el espacio de contraseña"
    } else if (usuario == "" && contrasena != "") {
        document.getElementById("mensaje").textContent = "Llene el espacio de usuario"
    } else {
        document.getElementById("mensaje").textContent = "Usuario y/o contraseña incorrecto"
    }
}
function reg() {
    let usu = document.getElementById("usuario").value;
    let cont = document.getElementById("cont").value;
    if (usu != "" && cont != "") {
        document.getElementById("text").textContent = "Datos guardados"
    } else if (usu == "" && cont == "") {
        document.getElementById("text").textContent = "Llene todas las casillas por fabor"
    } else if (usu != "" && cont == "") {
        document.getElementById("text").textContent = "Llene el espacio de contraseña"
    } else if (usu == "" && cont != "") {
        document.getElementById("text").textContent = "Llene el espacio de usuario"
    }
}