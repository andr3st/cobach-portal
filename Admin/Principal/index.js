//Apartado aviso
var form = document.getElementById('form-env');

form.addEventListener('submit', function(e){
  e.preventDefault();
  var Aviso = document.getElementById('Aviso').value;
  var Descripcion = document.getElementById('Descripcion').value;
  var Grupos = document.getElementById('Grupos').value;
  var Fecha = document.getElementById('Fecha').value;

  var data = {
    data: {
      Aviso: Aviso,
      Descripcion: Descripcion,
      Grupos: Grupos,
      Fecha: Fecha
    }
  };

  fetch('http://localhost:1337/api/avisos', {
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

//Apartado eventos
var formE = document.getElementById('form-envE');

formE.addEventListener('submit', function(e){
  e.preventDefault();
  var NombreE = document.getElementById('NombreE').value;
  var DescripcionE = document.getElementById('DescripcionE').value;
  var LugarE = document.getElementById('LugarE').value;
  var FechaE = document.getElementById('FechaE').value;

  var dataA = {
    data: {
      Nombre: NombreE,
      Descripcion: DescripcionE,
      Lugar: LugarE,
      Fecha: FechaE
    }
  };

  fetch('http://localhost:1337/api/eventos', {
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
