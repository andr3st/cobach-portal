document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.getElementById('username-input').value;
    var password = document.getElementById('password-input').value;

    async function extraerDatos(){
      const url = "http://localhost:1337/api/alumnos";
  
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
  
      const {data} = resultado;
  
      const datos = data.map(alumno => {
        const {pass , Expediente} = alumno.attributes;
        return {Expediente, pass}
      })
      
      answer = datos.filter(alumno => alumno.Expediente == username && alumno.pass == password);

      if(answer.length > 0){
        localStorage.setItem('alumno', answer[0].Expediente);
        window.location.href = '/Alumnos/Principal/principal.html';
      }else{
        alert('Credenciales inválidas. Por favor, verifica tu nombre de usuario y contraseña.');
      }
    }

    extraerDatos();

  });