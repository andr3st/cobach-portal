//Apartado Nomina
var form = document.getElementById('form-env');

form.addEventListener('submit', function(e){
  e.preventDefault();
  var Expediente = document.getElementById('Expediente').value;
  var Nombre = document.getElementById('Nombre').value;
  var Apellido = document.getElementById('Apellido').value;
  var Importe = document.getElementById('Importe').value;
  var Fecha = document.getElementById('Fecha').value;

  var data = {
    data: {
      Expediente: Expediente,
      Nombre: Nombre,
      Apellido: Apellido,
      Importe: Importe,
      Fecha: Fecha
    }
  };

  fetch('http://localhost:1337/api/fechas-nominas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error: ' + response.status);
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

});

//Tabla de nomina:
const tableBody = document.querySelector("#nominaTable tbody");

document.addEventListener('DOMContentLoaded', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente
  consumirDatos();
});

async function consumirDatos() {
  const url = "http://localhost:1337/api/fechas-nominas";
  const resultado = await fetch(url);
  const datos = await resultado.json();

  const { data } = datos;

  tableBody.innerHTML = ""; // Limpiar contenido previo de la tabla

  data.forEach(FechasNomina => {
    const { Expediente, Nombre, Apellido, Importe, Fecha} = FechasNomina.attributes;

    const row = document.createElement("tr");
    const ExpedienteCell = document.createElement("td");
    const NombreCell = document.createElement("td");
    const ApellidoCell = document.createElement("td");
    const ImporteCell = document.createElement("td");
    const FechaCell = document.createElement("td");

    ExpedienteCell.textContent = Expediente;
    NombreCell.textContent = Nombre;
    ApellidoCell.textContent = Apellido;
    ImporteCell.textContent = Importe;
    FechaCell.textContent = Fecha;

    row.appendChild(ExpedienteCell);
    row.appendChild(NombreCell);
    row.appendChild(ApellidoCell);
    row.appendChild(ImporteCell);
    row.appendChild(FechaCell);

    tableBody.appendChild(row);

    console.log(data);
  });
}

//Apartado alumno
var formA = document.getElementById('form-envA');

formA.addEventListener('submit', function(e){
  e.preventDefault();
  var ExpedienteA = document.getElementById('ExpedienteA').value;
  var NombreA = document.getElementById('NombreA').value;
  var ApellidoA = document.getElementById('ApellidoA').value;
  var ImporteA = document.getElementById('ImporteA').value;
  var FechaA = document.getElementById('FechaA').value;

  var dataA = {
    data: {
      Expediente: ExpedienteA,
      Nombre: NombreA,
      Apellido: ApellidoA,
      Importe: ImporteA,
      Fecha: FechaA
    }
  };

  fetch('http://localhost:1337/api/fechas-alumnos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(dataA)
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error: ' + response.status);
    }
  })
  .then(dataA => {
    console.log(dataA);
  })
  .catch(error => {
    console.error(error);
  });

});

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
    const { Expediente, Nombre, Apellido, Importe, Fecha} = FechasAlumnos.attributes;

    const row = document.createElement("tr");
    const ExpedienteCell = document.createElement("td");
    const NombreCell = document.createElement("td");
    const ApellidoCell = document.createElement("td");
    const ImporteCell = document.createElement("td");
    const FechaCell = document.createElement("td");

    ExpedienteCell.textContent = Expediente;
    NombreCell.textContent = Nombre;
    ApellidoCell.textContent = Apellido;
    ImporteCell.textContent = Importe;
    FechaCell.textContent = Fecha;

    row.appendChild(ExpedienteCell);
    row.appendChild(NombreCell);
    row.appendChild(ApellidoCell);
    row.appendChild(ImporteCell);
    row.appendChild(FechaCell);

    tableBodyA.appendChild(row);

    console.log(data);
  });
}
