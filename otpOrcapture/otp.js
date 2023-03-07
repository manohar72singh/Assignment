function generateOpt(){
    const otpLength = 4;
    let otp = "";
    for(let i=0; i<otpLength; i++) {
        otp += Math.floor(Math.random()*9);
    }
    return otp;
}

function setField(){
    var otpNo = generateOpt();
    var ulTag = document.querySelector('.otp');
    var liTag = document.createElement('li');
    var inputTag = document.createElement('input');
    liTag.appendChild(inputTag);
    inputTag.setAttribute('disabled',true);
    inputTag.setAttribute('value', otpNo);
    ulTag.appendChild(liTag);
}
