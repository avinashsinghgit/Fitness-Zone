
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyApNLhaVt4R5oIrwQ0OWGtZyr-DnEL8Ff8",
    authDomain: "login-demo-c3ee8.firebaseapp.com",
    projectId: "login-demo-c3ee8",
    storageBucket: "login-demo-c3ee8.appspot.com",
    messagingSenderId: "931255961130",
    appId: "1:931255961130:web:b035a105b50139c1622553",
    measurementId: "G-V39FR9R71B"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Allows user to sign-In usig email-Id and passoword
  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      // alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })

  // // Forget password
  // function Forget_Password(){
  //   auth.Forget_Password();
  // }



  // const firebaseConfig = {
  //   apiKey: "AIzaSyApNLhaVt4R5oIrwQ0OWGtZyr-DnEL8Ff8",
  //   authDomain: "login-demo-c3ee8.firebaseapp.com",
  //   projectId: "login-demo-c3ee8",
  //   storageBucket: "login-demo-c3ee8.appspot.com",
  //   messagingSenderId: "931255961130",
  //   appId: "1:931255961130:web:b035a105b50139c1622553",
  //   measurementId: "G-V39FR9R71B"
  // };