// hacer un script que dada una cantidad de intentos hay que adivinar el nº secreto

let clave= 1234;
let intentoMax=5;
let intentosHechos=0;
do{
    let aux = parseInt(prompt("ingrese un numero"));
    intentosHechos++;
}while(intentosHechos<intentoMax && aux != clave);
if(aux==clave){
    alert("Ha acertado!");
}
else{
    alert("incorrecto!")
};