var felinos= ["Leon","Tigre"];
var reptiles=["Vivora","Lagarto"];
//CONCAT UNA 2 ARREGLO
var zoo= felinos.concat(reptiles);
console.log(zoo)

//SLICE PARTE O DIVIDE EL ARREGLO A PARTIR DE CIERTA POSICION
var nombres= ["Marco","Juan","Maria","Elena"]
var chicas= nombres.splice(2)
console.log(chicas)
//matriz

var personas_mtrx=[["Macarena","MM", 25],["Sofia","NN",32],["Hector","JJ",29]];
console.log(personas_mtrx[1][0]);
var datos_personas=''
for(var i =0; i<personas_mtrx.length; i++){
  datos_personas= datos_personas +"Nombre:"+personas_mtrx[i][0]+".Edad:"+personas_mtrx[i][2]+"Apellido:"+personas_mtrx[i][1]
}
console.log(datos_personas)