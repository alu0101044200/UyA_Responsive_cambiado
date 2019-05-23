(function() {
    //Inicializar Firebase
      const config = {
        apiKey: "AIzaSyAnQrtddub3m-Iogt1gI9aXUOImIBfZPEI",
        authDomain: "uyaproyecto-2dbe9.firebaseapp.com",
        databaseURL: "https://uyaproyecto-2dbe9.firebaseio.com",
        storageBucket: "uyaproyecto-2dbe9.appspot.com",
      };
  
      //firebase.initializeApp(config);
      if (!firebase.app.length) {
        firebase.initializeApp(config);
      }
      // Obtener elementos
      const txtEmail = document.getElementById('txtEmail');
      const txtPassword = document.getElementById('txtPassword');
      const txtEmail_i = document.getElementById('txtEmail_i');
      const txtPassword_i = document.getElementById('txtPassword_i');
      const btnLogin = document.getElementById('btnLogin');
      const btnSignUp = document.getElementById('btnSignUp');
      const btnLogout = document.getElementById('btnLogout');
    
      // Añadir Evento login
      btnLogin.addEventListener('click', e => {
        //Obtener email y pass
        const email_i = txtEmail_i.value;
        const pass_i = txtPassword_i.value;
        const auth = firebase.auth();
        // Sign in
        const promise = auth.signInWithEmailAndPassword(email_i, pass_i);
        promise.catch(e => console.log(e.message));   
      });
    
      // Añadir evento signup
      btnSignUp.addEventListener('click', e => {
        // Obtener email y pass
        // TODO: comprobar que el email sea real
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // Sign in
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
      });
    
      btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
      });
    
      // Añadir un listener en tiempo real
       firebase.auth().onAuthStateChanged( firebaseUser => {
        if(firebaseUser) {
          console.log(firebaseUser);
          btnLogout.classList.remove('hide');
          
        } else {
          console.log('no logueado');
          btnLogout.classList.add('hide');
        }    
      });
    } ());