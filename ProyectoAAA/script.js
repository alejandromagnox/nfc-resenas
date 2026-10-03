const negocios = {

    metropolis: {
        nombre: "Metrópolis del Rey",
        direccion: "Cnel. Moldes 23, Salta",

        google:
            "https://search.google.com/local/writereview?placeid=ChIJfwrZP7nDG5QRAySsmmWmL24"
    },

    ejemplo: {
        nombre: "Comercio de Ejemplo",
        direccion: "Salta, Argentina",

        google:
            "https://www.google.com/"
    }

};


// Obtener el comercio desde la URL
const parametros = new URLSearchParams(window.location.search);

const idNegocio = parametros.get("id") || "metropolis";


// Buscar los datos del comercio
const negocio = negocios[idNegocio];


// Mostrar los datos
if (negocio) {

    document.getElementById("nombreNegocio").textContent =
        negocio.nombre;

    document.getElementById("direccionNegocio").textContent =
        "📍 " + negocio.direccion;

   

    document.getElementById("botonDejarResena").href =
        negocio.google;

} else {

    document.getElementById("nombreNegocio").textContent =
        "Comercio no encontrado";

    document.getElementById("direccionNegocio").textContent =
        "No se encontró información del comercio.";

}
