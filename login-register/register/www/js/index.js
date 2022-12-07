let users = {
    "Pau": {"email":"priusnori03@gmail.com","password":"1234"},
    "admin": {"email":"admin@gmail.com","password":"admin"}
}

let loginButton = document.getElementById("loginButton");
let registerButton = document.getElementById("registerButton");

loginButton.onclick = function() {
    let userName = document.getElementById("lo-username").value;
    let userPass = document.getElementById("lo-password").value;

    let correctName = false;
    let correctPass = false;

    if(userName in users){
        correctName = true;
        if(users[userName]["password"] == userPass){
            correctPass = true;
        }
    }
    if(userName == "" || userPass == ""){
        alert("Complete all the fields to login")
    }else if( correctName && correctPass){
        alert("login done")
    }else if (correctName && !correctPass){
        alert("Wrong User or Password")
    }else{
        alert("user not registered")
    }
}

registerButton.onclick = function() {
    let userName = document.getElementById("re-username").value;
    let userPass = document.getElementById("re-password").value;
    let userEmail = document.getElementById("re-email").value;

    let userExist = false;
    let emailExist = false;

    if(userName in users){
        userExist = true;
    }else{
        for(let i in users){
            if(users[i]["email"] === userEmail){
                emailExist = true;
                break
            }
        }
    }

    if(userName == "" || userPass == "" || userEmail == ""){
        alert("La resolución de tu pantalla es: " + screen.width + " x " + screen.height) 

        alert("Complete all the fields to register")
    }else if(userExist){
        alert("The username is already registered");
    }else if(emailExist){
        alert("The email is already registered");
    }else{
        users[userName] = {"email": userEmail, "password":userPass};
        alert("Registered user");
    }
}