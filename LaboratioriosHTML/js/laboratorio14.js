let usuario = prompt("Cual es su rol: ")
let titulo1 = document.getElementById("titulo1")
if(usuario == "admin" || usuario == "recursos"){
    let clave =prompt("cual es su clave");
    if(parseInt(clave)== 1234){
        let nombre = prompt("Cual es su nombre: ");
        titulo1.innerHTML=`Hola ${nombre} bienvenido a nuestra aplicacion`
    }
    else{
        titulo1.innerHTML="Ha habido un error ingrese rol y contraseña correcta"
    }
}
else{
    titulo1.innerHTML="Error"
}