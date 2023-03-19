// valiidate signIn page

function validationSignup(){
    var letters = /^[a-zA-Z\s-, ]+$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var usernameformat = /^(?=.{8,20}$)(?![_.])(?!.*[_.])[a-zA-Z0-9._]+(?<![_.])$/;
    var error = document.querySelector(".error");
    var mobemail = document.querySelector("#mobEmail");
    var fullname = document.querySelector("#fullName");
    var username = document.querySelector("#username");
    var password = document.querySelector("#password");
    var re_password = document.querySelector('#re-password');
    alert("hii");
    
    if(mobemail.value.trim()=="" )
    {
        error.innerHTML ="Enter Email First"
        error.style.color= "red";
        mobemail.style.border= "1px solid red";
        mobemail.focus();
        return;
    }
    
    else if(!(mobemail.value.match(mailformat)))
    {
        error.innerHTML ="Enter Vallid Email"
        error.style.color= "red";
        mobemail.style.border= "1px solid red";
        mobemail.focus();
        return;
    }
    else
    {
        error.innerHTML =""
        error.style.color= "green";
        mobemail.style.border= "1px solid green";
    }
    

    if(fullname.value.trim()=="")
    {
        error.innerHTML ="plese Enter Name"
        error.style.color= "red";
        fullname.style.border= "1px solid red";
        fullname.focus();
        return;
    }
    else if(!(fullname.value.match(letters)))
    {
        error.innerHTML ="Enter Vallid name"
        error.style.color= "red";
        fullname.style.border= "1px solid red";
        fullname.focus();
        return;
    }
    else if(fullname.value.length < 4 )
    {
        error.innerHTML ="Name Must Be More Than 4 Characters"
        error.style.color= "red";
        fullname.style.border= "1px solid red";
        fullname.focus();
        return;
    }
    else
    {
        error.innerHTML =""
        error.style.color= "green";
        fullname.style.border= "1px solid green";
    }

    
    if(username.value.trim()=="")
    {
        error.innerHTML ="plese Enter userName"
        error.style.color= "red";
        username.style.border= "1px solid red";
        username.focus();
        return;
    }
    else if(!(username.value.match(usernameformat)))
    {
        error.innerHTML ="Enter Vallid username don't use(. _)"
        error.style.color= "red";
        username.style.border= "1px solid red";
        username.focus();
        return;
    }
    // else if(username.value.length < 10 )
    // {
    //     error.innerHTML ="Name Must Be More Than 8 Characters"
    //     error.style.color= "red";
    //     username.style.border= "1px solid red";
    //     username.focus();
    //     return;
    // }
    else
    {
        error.innerHTML =""
        error.style.color= "green";
        username.style.border= "1px solid green";
    }



}
