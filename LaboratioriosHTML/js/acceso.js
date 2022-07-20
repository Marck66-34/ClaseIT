let edad = parseInt(prompt("Ingrese su edad: "))
if(edad >= 18){
    let nombre = prompt("Ingrese su nombre:")
    if(nombre =="Pedro"){
        alert("Bienvenido")
    }
    else{
        alert("acceso denegado")
    }
}
else{
    alert("no puedes entrar mañaco");
}