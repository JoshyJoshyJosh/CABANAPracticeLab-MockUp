function emailVal(){
    
    let emailConf = document.getElementById("email");
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
        if(!emailConf.value.match(mailformat)){
            document.getElementById("mail").innerHTML = "Mail is wrong" 
        }
}

function passwordVal(){
    let password = document.getElementById('pass');
    let confirm_password = document.getElementById('conf');

    if(password.value == confirm_password){
        document.getElementById("pww").innerHTML = "Password matches"
    }
    else{
        document.getElementById("pww").innerHTML = "Password does not match"
    }
}