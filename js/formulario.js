// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAnQrtddub3m-Iogt1gI9aXUOImIBfZPEI",
    authDomain: "uyaproyecto-2dbe9.firebaseapp.com",
    databaseURL: "https://uyaproyecto-2dbe9.firebaseio.com",
    projectId: "uyaproyecto-2dbe9",
    storageBucket: "uyaproyecto-2dbe9.appspot.com",
    messagingSenderId: "754046813172"
  };
  firebase.initializeApp(config);
 //Referencia a la base de datos
  var messageRef = firebase.database().ref('usuarios');

  //Listen for form submit
  document.getElementById('registrar').addEventListener('submit', submitForm);

  //SubmitForm
  function submitForm(e) {
      e.preventDefault();
      document.querySelector(".alert_correcto_r").style.display = 'none';
      //Coger valores
      var nombre = document.getElementById('nombre').value;
      var apellidos = document.getElementById('apellidos').value;
      var email = document.getElementById('txtEmail').value;
      var contraseña = document.getElementById('txtPassword').value;
      var contraseña_r = document.getElementById('contraseña_r').value;  
      var todoCorrecto = true;
      var aux1 = email.indexOf('@'); //Posicion del primer @
      var aux2 = email.indexOf('.', aux1)-aux1; //Distancia del primer punto encontrado despues del @
      var auxtam = email.length - email.indexOf('.', aux1); //Distancia desde el final hasta el primer punto

    if (aux1 < 2 ||  aux2 <= 2 || auxtam <= 2){ 
      document.querySelector(".alert_correo_r").style.display = 'block';
      todoCorrecto=false;
    }

    if (contraseña.length < 6 ){
      document.querySelector(".alert_contraseña_r").style.display = 'block';
      todoCorrecto=false;
    }

    if (contraseña != contraseña_r){
      document.querySelector(".alert_contraseña_rep").style.display = 'block';
      todoCorrecto=false;
    }

    if(todoCorrecto == true){
        //Guardamos el mensaje
        guardarMensaje(nombre, apellidos, email, contraseña);
        //clear form
        document.getElementById('registrar').reset();
        document.querySelector(".alert_correo_r").style.display = 'none';
        document.querySelector(".alert_contraseña_r").style.display = 'none';
        document.querySelector(".alert_contraseña_rep").style.display = 'none';
        document.querySelector(".alert_correcto_r").style.display = 'block';
    }
     
      //clear form
      document.getElementById('registrar').reset();    
    }


  function guardarMensaje(nombre, apellidos, email, contraseña){
      var nuevoComentarioREF = messageRef.push();
      nuevoComentarioREF.set({
          nombre: nombre,
          apellidos: apellidos,
          email: email,
          contraseña: contraseña
      });      
  }


