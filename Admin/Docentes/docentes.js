var form = document.getElementById('form-env');

    form.addEventListener('submit', function(e){
      e.preventDefault();
      var Expediente = document.getElementById('Expediente').value;
      var Nombre = document.getElementById('Nombre').value;
      var Apellido = document.getElementById('Apellido').value;
      var correo = document.getElementById('correo').value;
      var Materias = document.getElementById('Materias').value;
      var Horario = document.getElementById('Horario').value;
      var pass = document.getElementById('pass').value;


      var data = {
        data: {
          Expediente: Expediente,
          Nombre: Nombre,
          Apellido: Apellido,
          correo: correo,
          Materias: Materias,
          Horario:Horario,
          pass:pass
        }
      };


        fetch('http://localhost:1337/api/admins', {
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
    const { Expediente, Nombre, Apellido, correo, Materias, Horario, pass} = admin.attributes;

    const row = document.createElement("tr");
    const ExpedienteCell = document.createElement("td");
    const NombreCell = document.createElement("td");
    const ApellidoCell = document.createElement("td");
    const correoCell = document.createElement("td");
    const MateriasCell = document.createElement("td");
    const HorarioCell = document.createElement("td");
    const passCell = document.createElement("td");

    ExpedienteCell.textContent = Expediente;
    NombreCell.textContent = Nombre;
    ApellidoCell.textContent = Apellido;
    correoCell.textContent = correo;
    MateriasCell.textContent = Materias;
    HorarioCell.textContent = Horario;
    passCell.textContent = pass;

    row.appendChild(ExpedienteCell);
    row.appendChild(NombreCell);
    row.appendChild(ApellidoCell);
    row.appendChild(correoCell);
    row.appendChild(MateriasCell);
    row.appendChild(HorarioCell);
    row.appendChild(passCell);

    tableBody.appendChild(row);

    console.log(data);
  });


}