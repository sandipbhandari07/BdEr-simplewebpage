function validateUsername(){
    var username= document.getElementById('username');
    if(username.value ==""){
        document.getElementById('usernamefield').innerHTML="Please write the username";
    }
    else if(username.value.length<4){
        document.getElementById('usernamefield').innerHTML="username must be more then 4 character";
    }
    else if (/[^a-zA-Z0-9_]/.test(username.value)){
        document.getElementById('usernamefield').innerHTML="you are only allow to use the letter and number only";
    }
}
/*
function validatesubject(){
    var subject= document.getElementById('subject');
    if(subject.value ==""){
        document.getElementById('subjectfield').innerHTML="You can write hello!";

    }
    else(subject.value.length<10){
        document.getElementById('subjectfield').innerHTML="We are expecting 10 words.";
    }


}*/