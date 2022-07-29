// ---------------------------------------------- Sign UP _____-------------------------------------

function signup(){
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;

const profile = {
email: email,
password: password,
}

localStorage.setItem("user",JSON.stringify(profile)); 
}

// ------------------------------------------ Log In ---------------------------------------//

function login(){
var emailUser = document.getElementById("email").value;
var passwordUser = document.getElementById("pass").value;


var user= JSON.parse(localStorage.getItem("user"));

const {email,password}=user;


console.log(email);
console.log(password);




if(email === emailUser && password === passwordUser ){
    // alert("you are logged in");
    // console.log("You Are In")
    window.location.href="index.html";
   
}
else{
    // window.location.href="index.html";
    alert("error");
    // console.log("You Are Out");

}
}




