document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.getElementById('username-input').value;
    var password = document.getElementById('password-input').value;

    async function extraerDatos(){
      const url = "http://localhost:1337/api/admins";
  
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
  
      const {data} = resultado;
  
      const datos = data.map(admin => {
        const {pass , Expediente} = admin.attributes;
        return {Expediente, pass}
      })
      
      answer = datos.filter(admin => admin.Expediente == username && admin.pass == password);

      if(answer.length > 0){
        window.location.href = '/Admin/Principal/index.html';
      }else{
        alert('Credenciales inválidas. Por favor, verifica tu nombre de usuario y contraseña.');
      }
    }

    extraerDatos();

  });