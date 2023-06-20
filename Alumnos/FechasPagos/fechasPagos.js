//Tabla de pagos a alumnos:
const tableBodyA = document.querySelector("#pagoATable tbody");

document.addEventListener('DOMContentLoaded', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente
  consumirDatosA();
});

async function consumirDatosA() {
  const urlA = "http://localhost:1337/api/fechas-alumnos";
  const resultadoA = await fetch(urlA);
  const datosA = await resultadoA.json();

  const { data } = datosA;

  tableBodyA.innerHTML = ""; // Limpiar contenido previo de la tabla

  data.forEach(FechasAlumnos => {
    const { Expediente, Nombre, Apellido, Fecha} = FechasAlumnos.attributes;

    const row = document.createElement("tr");
    const ExpedienteCell = document.createElement("td");
    const NombreCell = document.createElement("td");
    const ApellidoCell = document.createElement("td");
    const FechaCell = document.createElement("td");

    ExpedienteCell.textContent = Expediente;
    NombreCell.textContent = Nombre;
    ApellidoCell.textContent = Apellido;
    FechaCell.textContent = Fecha;

    row.appendChild(ExpedienteCell);
    row.appendChild(NombreCell);
    row.appendChild(ApellidoCell);
    row.appendChild(FechaCell);

    tableBodyA.appendChild(row);

    console.log(data);
  });
}
