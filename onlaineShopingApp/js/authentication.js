const database = new Array;

// if email exits
function emailExits(email)
{
    return database.some(function(db){
        return db.email === email;
    });
}

function login(email,password)
{
    return database.some(function(db){
        return db.email === email && db.password === password;
    });
}

//validation signIn page
function validationSignin(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var usernameformat = /^(?=.{8,20}$)(?![_.])(?!.*[_.])[a-zA-Z0-9._]+(?<![_.])$/;
    var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var error = document.querySelector(".error");
    var username = document.querySelector("#username");
    var password = document.querySelector("#password");
    
    if(username.value.trim()=="" )
    {
        error.innerHTML ="Enter username or email First"
        username.style.border= "1px solid red";
        username.focus();
        return;
    }
    else if(!(username.value.match(mailformat) || username.value.match(usernameformat)))
    {
        error.innerHTML ="Enter Vallid Email or username"
        username.style.border= "1px solid red";
        username.focus();
        return;
    }
    else
    {
        error.innerHTML =""
        username.style.border = "1px solid green";
    }
    if(password.value.trim()=="")
    {
        error.innerHTML = "enter password first";
        password.style.border = "1px solid red";
        password.focus();
        return;
    }
    else if(!(password.value.match(passw)))
    {
        error.innerHTML = "enter vallid password (Abcde@123)"
        password.style.border = "1px solid red";
        password.focus();
        return;
    }
    else{
        error.innerHTML = ""
        password.style.border = "1px solid green";
    }
    
    var email = username.value;
    var password = password.value;
    console.log(login(email, password));
    if(login(email, password))
    {
        alert("Login Successful");
        window.localStorage.setItem("email",email);
        location.assign("home.html");
    }
    else{
        alert("please signup");
        return;
    }
    username.value="";
    password.value="";
}

// valiidate signup page
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

    if(emailExits(mobemail))
    {
        error.innerHTML = "Email already used";
        mobemail.style.border= "1px solid red";
        mobemail.focus();
        return;
    }

    else if(mobemail.value.trim()=="" )
    {
        error.innerHTML ="Enter Email First"
        mobemail.style.border= "1px solid red";
        mobemail.focus();
        return;
    }
    
    else if(!(mobemail.value.match(mailformat)))
    {
        error.innerHTML ="Enter Vallid Email"
        mobemail.style.border= "1px solid red";
        mobemail.focus();
        return;
    }
    else
    {
        error.innerHTML =""
        mobemail.style.border= "1px solid green";
    }

    if(fullname.value.trim()=="")
    {
        error.innerHTML ="Enter Name first"
        fullname.style.border= "1px solid red";
        fullname.focus();
        return;
    }
    else if(!(fullname.value.match(letters)))
    {
        error.innerHTML ="Enter Vallid name"
        fullname.style.border= "1px solid red";
        fullname.focus();
        return;
    }
    else if(fullname.value.length < 4 )
    {
        error.innerHTML ="Name Must Be More Than 4 Characters"
        fullname.style.border= "1px solid red";
        fullname.focus();
        return;
    }
    else
    {
        error.innerHTML =""
        fullname.style.border= "1px solid green";
    }
   
    if(username.value.trim()=="")
    {
        error.innerHTML =" Enter userName first";
        username.style.border= "1px solid red";
        username.focus();
        return;
    }
    else if(!(username.value.match(usernameformat)))
    {
        error.innerHTML ="Enter Vallid username don't use special characters";
        username.style.border= "1px solid red";
        username.focus();
        return;
    }
    else
    {
        error.innerHTML =""
        username.style.border= "1px solid green";
    }

    if(password.value.trim()=="")
    {
        error.innerHTML ="Enter password first";
        password.style.border = "1px solid red";
        password.focus();
        return;
    }
    else if(!(password.value.match(passw)))
    {
        error.innerHTML = "enter vallid password (Abcde@123)";
        password.style.border = "1px solid red";
        password.focus();
        return;
    }
    else
    {
        error.innerHTML= "";
        password.style.border = "1px solid green";
    }

    if(re_password.value.trim()=="")
    {
        error.innerHTML =" Enter re-password first";
        re_password.style.border = "1px solid red";
        re_password.focus();
        return;
    }
    else if(!(password.value === re_password.value))
    {
        error.innerHTML = "re-Password Must same as password";
        re_password.style.border = "1px solid red";
        re_password.focus();
        return;
    }
    else
    {
        error.innerHTML= "";
        re_password.style.border = "1px solid green";
    }
    
    // set value to database :
    
    const obj = {
        email: mobemail.value,
        name :fullname.value,
        username : username.value,
        password : password.value
    }
    database.push(obj);
     
    // set input value is empaty
    mobemail.value="";
    username.value = "";
    fullname.value = "";
    password.value ="";
    re_password.value ="";
    console.log(database);
    alert("signin succesfull");
}
//valiidate forgot password
function validationForgotPassword(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var usernameformat = /^(?=.{8,20}$)(?![_.])(?!.*[_.])[a-zA-Z0-9._]+(?<![_.])$/;
    var username = document.querySelector("#username");
    var error = document.querySelector(".error");

    if(username.value.trim()=="" )
    {
        error.innerHTML ="Enter username or email First"
        username.style.border= "1px solid red";
        username.focus();
        return;
    }
    else if(!(username.value.match(mailformat) || username.value.match(usernameformat)))
    {
        error.innerHTML ="Enter Vallid Email or username"
        username.style.border= "1px solid red";
        username.focus();
        return;
    }
    else
    {
        error.innerHTML =""
        username.style.border = "1px solid green";
    }
}

function logout(){
    alert("logout Successful");
    window.localStorage.removeItem("email");
    location.assign("signin.html");
}

