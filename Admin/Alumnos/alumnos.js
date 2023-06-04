

var form = document.getElementById('form-env');

    form.addEventListener('submit', function(e){
      e.preventDefault();
      var Expediente = document.getElementById('Expediente').value;
      var Nombre = document.getElementById('Nombre').value;
      var Apellido = document.getElementById('Apellido').value;
      var correo = document.getElementById('correo').value;
      // var semestre = document.getElementById('semestre').value;
      var semestre = document.getElementById('semestre').options[document.getElementById('semestre').selectedIndex].text;
      // var Estatus = document.getElementById('Estatus').value;
      var pass = document.getElementById('pass').value;
      var Estatus = document.getElementById('Estatus').options[document.getElementById('Estatus').selectedIndex].text;


      var data = {
        data: {
          Expediente: Expediente,
          Nombre: Nombre,
          Apellido: Apellido,
          correo: correo,
          semestre: semestre,
          Estatus:Estatus,
          pass:pass
        }
      };


        fetch('http://localhost:1337/api/alumnos', {
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

//Tabla de alumnos:
const tableBody = document.querySelector("#alumnosTable tbody");

document.addEventListener('DOMContentLoaded', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  consumirDatos();
});

async function consumirDatos() {
  const url = "http://localhost:1337/api/alumnos";
  const resultado = await fetch(url);
  const datos = await resultado.json();

  const { data } = datos;

  tableBody.innerHTML = ""; // Limpiar contenido previo de la tabla

  data.forEach(alumno => {
    const { Expediente, Nombre, Apellido, correo, semestre, Estatus, pass} = alumno.attributes;

    const row = document.createElement("tr");
    const ExpedienteCell = document.createElement("td");
    const NombreCell = document.createElement("td");
    const ApellidoCell = document.createElement("td");
    const correoCell = document.createElement("td");
    const semestreCell = document.createElement("td");
    const EstatusCell = document.createElement("td");
    const passCell = document.createElement("td");

    ExpedienteCell.textContent = Expediente;
    NombreCell.textContent = Nombre;
    ApellidoCell.textContent = Apellido;
    correoCell.textContent = correo;
    semestreCell.textContent = semestre;
    EstatusCell.textContent = Estatus;
    passCell.textContent = pass;

    row.appendChild(ExpedienteCell);
    row.appendChild(NombreCell);
    row.appendChild(ApellidoCell);
    row.appendChild(correoCell);
    row.appendChild(semestreCell);
    row.appendChild(EstatusCell);
    row.appendChild(passCell);

    tableBody.appendChild(row);

    console.log(data);
  });


}