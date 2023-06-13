//Recuperamos el valor del LocalStorage
var exp = localStorage.getItem('alumno');
console.log(exp);

// Obtener referencia al elemento con clase "perfil" en el HTML
const perfilDiv = document.querySelector('.perfil');

async function consumirDatos() {
  const url = "http://localhost:1337/api/alumnos";
  const resultado = await fetch(url);
  const datos = await resultado.json();

  const { data } = datos;

  perfilDiv.innerHTML = ""; // Limpiar contenido previo del div

  data.forEach(alumno => {
    const { Expediente, Nombre, Apellido, correo, semestre, Estatus } = alumno.attributes;

    // Verificar si el nombre de usuario coincide con el almacenado
    if (Expediente === exp) {
      // Crear elementos de texto para mostrar los datos
      const expedienteText = document.createElement("p");
      expedienteText.textContent = `Expediente: ${Expediente}`;

      const nombreText = document.createElement("p");
      nombreText.textContent = `Nombre: ${Nombre}`;

      const apellidoText = document.createElement("p");
      apellidoText.textContent = `Apellido: ${Apellido}`;

      const correoText = document.createElement("p");
      correoText.textContent = `Correo: ${correo}`;

      const semestreText = document.createElement("p");
      semestreText.textContent = `Semestre: ${semestre}`;

      const estatusText = document.createElement("p");
      estatusText.textContent = `Estatus: ${Estatus}`;

      // Agregar los elementos de texto al div de perfil
      perfilDiv.appendChild(expedienteText);
      perfilDiv.appendChild(nombreText);
      perfilDiv.appendChild(apellidoText);
      perfilDiv.appendChild(correoText);
      perfilDiv.appendChild(semestreText);
      perfilDiv.appendChild(estatusText);
    }
  });
}

// Llamar a la función consumirDatos cuando se haya cargado el contenido del DOM
document.addEventListener('DOMContentLoaded', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente
  consumirDatos();
});
