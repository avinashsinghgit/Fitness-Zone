// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8MGDcWlc7WzZojev_4F4Oo6WMG96-D9o",
    authDomain: "contact-page-bfaf3.firebaseapp.com",
    databaseURL: "https://contact-page-bfaf3-default-rtdb.firebaseio.com",
    projectId: "contact-page-bfaf3",
    storageBucket: "contact-page-bfaf3.appspot.com",
    messagingSenderId: "830920312664",
    appId: "1:830920312664:web:2a6995af0898d5e9f9c72d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



// Reference your Database
var contact_Form_Db = firebase.database().ref('Contact Form');

document.getElementById('contact').addEventListener("submit",submitForm)


function submitForm(e){
    e.preventDefault();
    
    var user_name = getElementVal('name');
    var user_phone_number = getElementVal('phone_number');
    var user_email = getElementVal('email');
    // var user_report = getElementVal('report');
    var user_message = getElementVal('message');

    // save_messages(user_name, user_phone_number, user_email, user_report, user_message);
    save_messages(user_name, user_phone_number, user_email, user_message);

    // Enable Alert
    document.querySelector(".alert").style.display="block";

    // Removing the alert message
    setTimeout(() =>{
        document.querySelector(".alert").style.display="none";
    },3000); // Here 3000 is time in milli seconds

    // Reset the form
    document.getElementById("contact").reset();
}


// const save_messages = (user_name, user_phone_number, user_email, user_report, user_message,) =>{
const save_messages = (user_name, user_phone_number, user_email, user_message,) =>{
    var new_contact_form = contact_Form_Db.push();

    new_contact_form.set({
        name : user_name,
        phone_number : user_phone_number,
        email : user_email,
        // report: user_report,
        message : user_message
    })
}
const getElementVal = (id) =>{
    return document.getElementById(id).value;
}



  