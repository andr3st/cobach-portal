//Datos de avisos:
const tableBody = document.querySelector("#avisosTable tbody");

document.addEventListener('DOMContentLoaded', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente
  consumirDatos();
});

async function consumirDatos() {
  const url = "http://localhost:1337/api/avisos";
  const resultado = await fetch(url);
  const datos = await resultado.json();

  const { data } = datos;

  tableBody.innerHTML = ""; // Limpiar contenido previo de la tabla

  data.forEach(Avisos => {
    const { Aviso, Descripcion, Grupos, Fecha} = Avisos.attributes;

    const row = document.createElement("tr");
    const AvisoCell = document.createElement("td");
    const DescripcionCell = document.createElement("td");
    const GruposCell = document.createElement("td");
    const FechaCell = document.createElement("td");

    AvisoCell.textContent = Aviso;
    DescripcionCell.textContent = Descripcion;
    GruposCell.textContent = Grupos;
    FechaCell.textContent = Fecha;

    row.appendChild(AvisoCell);
    row.appendChild(DescripcionCell);
    row.appendChild(GruposCell);
    row.appendChild(FechaCell);

    tableBody.appendChild(row);

    console.log(data);
  });
}

//Tabla eventos:
const tableBodyA = document.querySelector("#eventosTable tbody");

document.addEventListener('DOMContentLoaded', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente
  consumirDatosE();
});

async function consumirDatosE() {
  const urlA = "http://localhost:1337/api/eventos";
  const resultadoA = await fetch(urlA);
  const datosA = await resultadoA.json();

  const { data } = datosA;

  tableBodyA.innerHTML = ""; // Limpiar contenido previo de la tabla

  data.forEach(Eventos => {
    const { Nombre, Descripcion, Lugar, Fecha} = Eventos.attributes;

    const row = document.createElement("tr");
    const NombreCell = document.createElement("td");
    const DescripcionCell = document.createElement("td");
    const LugarCell = document.createElement("td");
    const FechaCell = document.createElement("td");

    NombreCell.textContent = Nombre;
    DescripcionCell.textContent = Descripcion;
    LugarCell.textContent = Lugar;
    FechaCell.textContent = Fecha;

    row.appendChild(NombreCell);
    row.appendChild(DescripcionCell);
    row.appendChild(LugarCell);
    row.appendChild(FechaCell);

    tableBodyA.appendChild(row);

    console.log(data);
  });
}
