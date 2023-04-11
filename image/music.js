function signin(){
    debugger;
    var regMember = document.getElementById("mail").value;

    if(regMember == ""){
        alert("Please enter a valid email address");
    }
    else{
        window.location.replace("../flix/web/in/signin.html");
    }
}