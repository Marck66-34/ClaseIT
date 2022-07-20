let total = parseInt(prompt("ingrese su cantidad: "))
let contador = 0;

document.write(`Inicio del ciclo: <br>`);

while(contador <= total) {
   document.write(`cantidad actual: ${contador}<br>`);
    contador += contador;
}
document.write("Ciclo terminado")