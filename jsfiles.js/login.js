function validation(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;


    if (email==""){
        document.getElementById('emailid').innerHTML="**Please fill the email id";
        return false;
    }
    var pattern=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,5})(.[a-z]{2,4})?$/;
    if((email=="")||!(pattern.test(email))){
        document.getElementById('emailid').innerHTML="**Invalid email";
        return false;
    }



    if (password==""){
        document.getElementById('passwordid').innerHTML="**Please fill the password ";
        return false;
    }
    if ((password.length<5)||(password.length>15)){
        document.getElementById('passwordid').innerHTML="**please fill the  5 to 15 letters ";
        return false;
    }


    else{
        alert("Login Successful");
        return true;
    }
}