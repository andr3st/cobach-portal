//Tabla de alumnos:
const tableBody = document.querySelector("#docentesTable tbody");

document.addEventListener('DOMContentLoaded', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  consumirDatos();
});

async function consumirDatos() {
  const url = "http://localhost:1337/api/admins";
  const resultado = await fetch(url);
  const datos = await resultado.json();

  const { data } = datos;

  tableBody.innerHTML = ""; // Limpiar contenido previo de la tabla

  data.forEach(admin => {
    const { Expediente, Nombre, Apellido, correo, Materias, Horario} = admin.attributes;

    const row = document.createElement("tr");
    const ExpedienteCell = document.createElement("td");
    const NombreCell = document.createElement("td");
    const ApellidoCell = document.createElement("td");
    const correoCell = document.createElement("td");
    const MateriasCell = document.createElement("td");
    const HorarioCell = document.createElement("td");

    ExpedienteCell.textContent = Expediente;
    NombreCell.textContent = Nombre;
    ApellidoCell.textContent = Apellido;
    correoCell.textContent = correo;
    MateriasCell.textContent = Materias;
    HorarioCell.textContent = Horario;

    row.appendChild(ExpedienteCell);
    row.appendChild(NombreCell);
    row.appendChild(ApellidoCell);
    row.appendChild(correoCell);
    row.appendChild(MateriasCell);
    row.appendChild(HorarioCell);

    tableBody.appendChild(row);

    console.log(data);
  });
}
