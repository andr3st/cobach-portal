var menuElement = document.getElementById('menuA');

const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close", "hoverable");
});
sidebarExpand.addEventListener("click", () => {
  sidebar.classList.remove("close", "hoverable");
});

sidebar.addEventListener("mouseenter", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
});
sidebar.addEventListener("mouseleave", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
});


submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});

sidebar.classList.add("close");


// if (window.innerWidth < 768) {
//   sidebar.classList.add("close");
// } else {
//   sidebar.classList.remove("close");
// }

const principalLink = document.getElementById('principal-link');
principalLink.addEventListener('click', () => {
  window.location.href = '/Alumnos/Principal/principal.html';
});

const alumnosLink = document.getElementById('alumnos-link');
alumnosLink.addEventListener('click', () => {
  window.location.href = '/Alumnos/Perfil/perfil.html';
});

const docentesLink = document.getElementById('docentes-link');
docentesLink.addEventListener('click', () => {
  window.location.href = '/Alumnos/Docentes/docentes.html';
});

const fechasPagosLink = document.getElementById('fechasPagos-link');
fechasPagosLink.addEventListener('click', () => {
  window.location.href = '/Alumnos/FechasPagos/fechasPagos.html';
});

const materiasLink = document.getElementById('materias-link');
materiasLink.addEventListener('click', () => {
  window.location.href = '/Alumnos/Materias/materias.html';
});


const directorioLink = document.getElementById('directorio-link');
directorioLink.addEventListener('click', () => {
  window.location.href = '/Alumnos/Directorio/directorio.html';
});


const salirLink = document.getElementById('salir-link');
salirLink.addEventListener('click', () => {
  window.location.href = '/logins/alumno.html';
});

//*OCULTAR NAVBAR Y MOVER CONTENIDO DE LA PANTALLA
var content = document.querySelector('.content');

sidebar.addEventListener('transitionend', function () {
  // Comprobar si el menú lateral está expandido:
  if (sidebar.classList.contains('close')) {
    // Si el menú lateral está contraído, mover el contenido principal a la izquierda:
    content.style.marginLeft = '80px';
  } else {
    // Si el menú lateral está expandido, mover el contenido principal hacia la derecha:
    content.style.marginLeft = '250px';
  }
});