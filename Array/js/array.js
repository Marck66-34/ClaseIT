var empleados=["marcerla","Emilio","Ana"]
var datos= new Array(150,"clase js",-9);
document.getElementById("empledos").innerHTML=empleados[2];
document.getElementById("datos").innerHTML=datos
alert(empleados.length);

//objetos
var persona ={nombre:'susana',apellido:'nn',edad:40}
//alert(persona.nombre);
//arreglo de objetos
var empleadosDetalles=[{nombre:'pedro',antiguedad:5},{nombre:'erika', antiguedad:10}]
//PUSH (AGREGA ELEMENTO AL FINAL)
empleados.push("Julio")
alert(empleados)
//POP (ELIMINA EL FINAL)
empleados.pop()
alert(empleados);
//UNSHIFT(Agrega elemento al principio)
empleados.unshift("sofia");
alert(empleados);
//SHIFT(quita el primer elemento)
empleados.shift()
alert(empleados)
//SPLICE (REMOVER DESDE EL ELEMENTO IND 2 EN ADELANTE, EL SEG ARG INDICA CUANO ELEMENTO QUITO)
empleados.splice(2, 1, "LUCAS")
alert(empleados)