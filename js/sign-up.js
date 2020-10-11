function passlength(){
    var pass1 = document.getElementById('pass1');
    var erroralert = "password should be more then 6 characters."
        
    if (pass1.value.length <= 6 ){
       alert(erroralert);
   }   
}
function validateUsername(){
    var username= document.getElementById('username');

    if(username.value =="")
    {
        document.getElementById('usernamefield').innerHTML="Please write the username";
    }
    else if(username.value.length<4){
        document.getElementById('usernamefield').innerHTML="username must be more then 4 character";
    }
    else if (/[^a-zA-Z0-9_]/.test(username.value))
    {
        document.getElementById('usernamefield').innerHTML="you are only allower to use  the letter and number only";
    }
}
function valildatemail(){
    
        var email= document.getElementById('email')

        if(email.value =="")
        {
            document.getElementById('Email').innerHTML="please give email address";
        }
        else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
        {
            document.getElementById('Email').innerHTML="valid";
        }
        else{
            document.getElementById('Email').innerHTML="please give valid email address";
        }
    }
   function validatePass(){
        var pass1 = document.getElementById("pass1");
        var pass2 = document.getElementById("pass2");
        var passworderroralert ="the password did not match";
       
     if (pass1.value != pass2.value){
            alert(passworderroralert);
        }
       
    }
    function mailSubscribe(){
        if(document.getElementById('one').checked){
            document.getElementById('two').style.display="inline";
            document.getElementById('three').setAttribute('required',true);
        }
        else{
            document.getElementById('three').removeAttribute('required');
            document.getElementById('two').style.display='none';

        }
    }
