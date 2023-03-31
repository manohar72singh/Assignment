// switch

function signup() {
    document.querySelector("#signup").style.display = "block";
    document.querySelector("#signin").style.display = "none";
    document.querySelector("#forgot-password").style.display = "none";
}

function signin() {
    document.querySelector("#signin").style.display = "block";
    document.querySelector("#forgot-password").style.display = "none";
    document.querySelector("#signup").style.display = "none";
}

function forgotPassword() {
    document.querySelector("#forgot-password").style.display = "block";
    document.querySelector("#signin").style.display = "none";
    document.querySelector("#signup").style.display = "none";
}

// function showPassword(){
//     const togglePassword = document.querySelector("#togglePassword");
//     const password = document.querySelector("#password");

//     togglePassword.addEventListener("click", function (){
//         const type = password.getAttribute("type")==="password" ? "text" : "password";
//         password.setAttribute("type", type);
//         this.classList.toggle("fa-eye");
//     });
// }

// const togglePassword = document.querySelector("#togglePassword");
// const password = document.querySelector("#password");

// togglePassword.addEventListener("click", function () {
//     const type = password.getAttribute("type") === "password" ? "text" : "password";
//     password.setAttribute("type", type);
//     this.classList.toggle("fa-eye");
// });