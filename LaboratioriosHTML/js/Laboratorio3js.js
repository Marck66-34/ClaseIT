let btn= document.getElementById("blue")

btn.addEventListener("click",respuestaClick);
function respuestaClick(){
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Es Azul",
        showConfirmButton: false,
        timer: 1500,
      });
}
var red=document.getElementById("red"),
titulo1 = document.getElementById("titulo1"),
img= document.getElementById("img")
contador=0;

 function respuestaClick2() {
  if(contador==0){
    titulo1.classList.add("titulored");
    titulos.innerHTML = `Es color red`;
    img.innerHTML=`<img src="../img/charizard-pokemon-charizard.gif">`
    contador=1;
  }
  else{titulo1.classList.remove('titulored');
    titulos.innerHTML="";
    img.innerHTML="";
  
        contador=0;    
}
 }
  red.addEventListener("click", respuestaClick2, true);
//-----------------greeen--------------------------//
  var green= document.getElementById("green");
function respuestaClick3(){
  if(contador==0){
  titulo1.classList.add("titulogreen");
  titulos.innerHTML = 'Es green';
  img.innerHTML=`<img src="../img/AdolescentZealousAmurstarfish-max-1mb.gif">`
  contador= 1;
}
else{
  titulo1.classList.remove('titulogreen');
  titulos.innerHTML="";
  img.innerHTML=""
  contador=0;
}
}
  green.addEventListener("click", respuestaClick3, true);