const btn = document.getElementById('password');
const eye = document.getElementById('eye');


function eyeClick(){
    let inputTypePassword =  btn.type == "password";

    if(inputTypePassword){
        btn.setAttribute("type","text");
        eye.setAttribute("src","../../image/olhoopen.png");
    }else{
        btn.setAttribute("type","password");
        eye.setAttribute("src","../../image/olhoclose.png");
    }
}