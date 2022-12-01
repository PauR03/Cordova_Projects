let users = {
    1 : {"user" : "Pau","pass" : "1234"},
    2 : {"user" : "admin","pass" : "admin"}
}

let sendButton = document.getElementById("send");

sendButton.onclick = function() {
    let userName = document.getElementById("username");
    let userPass = document.getElementById("password");

    let wrongText = document.getElementById("wrongText");

    let correctName = false;
    let correctPass = false;

    for(let i = 1; i < Object.keys(users).length; i++){
        if(userName.value == users[i]["user"]){
            correctName = true;
            if(userPass.value == users[i]["pass"]){
                correctPass = true;
                break;
            }
        }
    }

    if( correctName && correctPass){
        alert("login done")
    }else if (correctName && !correctPass){
        userName.style.border = "1px solid red";
        userPass.style.border = "1px solid red";

        if(wrongText == null){
            let newElement = document.createElement("p");
            let text = document.createTextNode("Wrong User or Password !");
            newElement.appendChild(text);
            newElement.setAttribute("id","wrongText")

            var div = document.getElementsByTagName("div")[0];
            div.appendChild(newElement);
        }

    }else{
        alert("user not registered")
    }
}