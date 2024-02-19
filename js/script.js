const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", this.window.scrollY > 80);
});

const home = document.querySelector("#a-home");
window.addEventListener("scroll", () => {
  home.classList.toggle("active", window.scrollY <= 100);
});

// Función para verificar qué sección está visible en la pantalla
function setActiveNavItem() {
  // Obtenemos todas las secciones
  const sections = document.querySelectorAll("section");
  // Iteramos sobre cada sección
  sections.forEach((e) => {
    // Verificamos si la sección está en la parte superior de la pantalla
    if (e.getBoundingClientRect().top <= window.innerHeight / 2) {
      // Si la sección está visible, obtenemos su ID
      const id = e.getAttribute("id");
      // Buscamos el elemento de navegación correspondiente y le agregamos la clase 'active'
      const navItem = document.querySelector(`a[href="#${id}"]`);
      // Removemos la clase 'active' de todos los elementos de navegación
      document.querySelectorAll(".navlist a").forEach((item) => {
        item.classList.remove("active");
      });
      if (navItem) {
        navItem.classList.add("active");
      }
    }
  });
}

// Llamamos a la función cuando se carga la página y cada vez que se desplaza
window.addEventListener("load", setActiveNavItem);
window.addEventListener("scroll", setActiveNavItem);
/* Open Menu */

let menu = document.getElementById("menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

/* Scroll */

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};


/* Button Scroll visibility*/

const scrollButton = document.querySelector("#scroll-button");
const homeSection = document.querySelector("#home");

function hideScrollButton() {
  // Verifica si la parte inferior de la sección "home" ha pasado más allá de la parte superior de la pantalla
  if (homeSection.getBoundingClientRect().bottom <= 0) {
    // Si la sección "home" ya no está visible, quitamos la clase "hidden" del botón
    scrollButton.classList.remove("hidden");
  } else {
    // Si la sección "home" está visible, agregamos la clase "hidden" al botón
    scrollButton.classList.add("hidden");
  }
}

// Llamamos a la función cuando se carga la página y cada vez que se desplaza
window.addEventListener("load", hideScrollButton);
window.addEventListener("scroll", hideScrollButton);


/* Script reveal */

const sr = ScrollReveal({
  origin: "top",
  distance: "85px",
  duration: 2500,
  reset: false,
});

sr.reveal(".home-text", { delay: 300 });
sr.reveal(".home-img", { delay: 400 });
sr.reveal(".container", { delay: 400 });

sr.reveal(".about-img", {});
sr.reveal(".about-text", { delay: 300 });

sr.reveal(".middle-text", {});
sr.reveal(".row-btn,.shop-content", { delay: 300 });

sr.reveal(".reviews,.contacto", { delay: 300 });
