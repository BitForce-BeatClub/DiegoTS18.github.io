var check=document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="../../assets/es/index.html";
        document.getElementsByClassName('es').style = "color: #00a1ff";
        document.getElementsByClassName('en').style= "color: #333";
    }
    else{
        location.href="../../index.html"
        document.getElementsByClassName('en').style = "color: #00a1ff";
        document.getElementsByClassName('es').style= "color: #333";
        
    }
}