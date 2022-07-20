let numeroActual=0;
let suma=0;
do{
suma += parseInt(prompt("ingrese el numero actual"));
}while(confirm("desea seguir?"));
alert(`Total ingresado: ${suma}`)
