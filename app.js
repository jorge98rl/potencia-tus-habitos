let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function enviarCorreo() {
    var nombre = document.getElementById('nombre').value; // Nombre del usuario
    var mensaje = document.getElementById('mensaje').value; // El mensaje del formulario

    // Construimos el asunto con el nombre
    var asunto = "Consulta de " + nombre; 

    // Creamos el link mailto con los datos
    var mailtoLink = "mailto:potenciatushabitoss@gmail.com?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(mensaje);

    // Redirigimos al link mailto
    window.location.href = mailtoLink;
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then((reg) => console.log("Service Worker registrado", reg))
      .catch((err) => console.error("Error al registrar el Service Worker", err));
  }