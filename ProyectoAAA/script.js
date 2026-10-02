const negocios = {

    metropolis: {
        nombre: "Metrópolis del Rey",
        direccion: "Cnel. Moldes 23, Salta",

        google:
            "https://www.google.com/search?hl=es-AR&gl=ar&q=METR%C3%93POLIS+DEL+REY,+Cnel.+Moldes+23,+A4400+Salta&ludocid=2652833828401927219&lsig=AB86z5VBYilbvCbuuN85PK8F0EYT#lrd=0x941bc30052e2fa1f:0x24d0c24fc6095433,3"
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