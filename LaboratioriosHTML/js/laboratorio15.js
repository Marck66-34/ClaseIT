let usuario = prompt("ingrese su nombre: ")
let titulo1 = document.getElementById("titulo1");
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    titulo1.innerHTML=(`Hola ${usuario} Hoy es domingo y toca descansar`)
    break;
  case 1:
    day = "Monday";
      titulo1.innerHTML = `Hola ${usuario} Hoy es Lunes y toca ponerte al dia`;
    break;
  case 2:
     day = "Tuesday";
      titulo1.innerHTML = `Hola ${usuario} Hoy es Martes y toca Clase a las 19:00hs`;
    break;
  case 3:
    day = "Wednesday";
     titulo1.innerHTML = `Hola ${usuario} Hoy es Miercoles y toca practicar Pythob`;
    break;
  case 4:
    day = "Thursday";
    titulo1.innerHTML = `Hola ${usuario} Hoy es Jueves y toca Clase a las 19:00hs`;
    break;
  case 5:
    day = "Friday";
   titulo1.innerHTML = `Hola ${usuario} Hoy es Viernes y Cocinar Pizza`;
    break;
  case 6:
    day = "Saturday";
      titulo1.innerHTML = `Hola ${usuario} Hoy es Sabado y toca Mirar una pelicula`;
}
