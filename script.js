/* =========================
   FUNCIÓN: abrirWhatsapp
   =========================
   Abre WhatsApp con un mensaje general
   cuando el usuario hace clic en un botón
*/
function abrirWhatsapp() {
  // Número de WhatsApp (formato internacional, sin + ni espacios)
  let telefono = "5492966840433";

  // Mensaje inicial que va a aparecer escrito
  let mensaje = "Hola! Quiero consultar por un servicio técnico.";

  // Construimos la URL de WhatsApp con el mensaje codificado
  let url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);

  // Abrimos WhatsApp en una nueva pestaña
  window.open(url, "_blank");
}


/* =========================
   FUNCIÓN: whatsappPresupuesto
   =========================
   Abre WhatsApp con un mensaje específico
   para solicitar presupuesto de PC
*/
function whatsappPresupuesto() {
  let telefono = "5492966840433";
  let mensaje = "Hola! Quiero solicitar un presupuesto para una PC con instalación.";

  let url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
  window.open(url, "_blank");
}


/* =========================
   FUNCIÓN: whatsappServicio
   =========================
   Recibe el nombre del servicio
   y lo incluye en el mensaje
*/
function whatsappServicio(servicio) {
  let telefono = "5492966840433";
  let mensaje = "Hola! Quiero consultar por el servicio de: " + servicio;

  let url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
  window.open(url, "_blank");
}


/* =========================
   ANIMACIONES AL SCROLLEAR
   =========================
   Hace que las cards aparezcan
   cuando entran en pantalla
*/

// Seleccionamos todas las cards
const cards = document.querySelectorAll(".card");

// Función que revisa si las cards están visibles
function mostrarCardsAlScroll() {
  cards.forEach(card => {
    // Posición de la card respecto a la pantalla
    const posicion = card.getBoundingClientRect().top;

    // Altura de la pantalla
    const alturaPantalla = window.innerHeight;

    // Si la card entra en pantalla
    if (posicion < alturaPantalla - 100) {
      card.classList.add("visible");
    }
  });
}

// Escuchamos el evento scroll
window.addEventListener("scroll", mostrarCardsAlScroll);

// Ejecutamos una vez al cargar la página
mostrarCardsAlScroll();
