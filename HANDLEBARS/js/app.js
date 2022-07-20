const Handlebars = require("handlebars");
const app = document.getElementById("datos")
//compilar la planilla
var template= Handlebars.compile("<h3>Bienvenido{{nombre}}</h3>");
//ejecutar planilla conpilada y ver el resultado
app.innerHTML = template({nombre:"JOSE"});
