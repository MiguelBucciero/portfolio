function enviarMensaje() {
    var nombre = document.getElementById("txtNombre").value;
    var correo = document.getElementById("txtCorreo").value;
    var mensaje = document.getElementById("txtCuadro").value;
    if(nombre != "" && correo != "" && mensaje != ""){
        alert("Gracias !" +nombre + ". Tu mensaje ha sido enviado.");
    }
    else{
        alert("Debes rellenar todos los campos");
    }
}