let x = 10;
let y = 20;

// x= x+x+1;
// y = y - y -x;
//----B-------------
// x= (x -y)+4;
// y= 4 + (y+5);
//---------C----
// x = x * 2 -4;
// y = 4 - y * 2
//-------D------
x = (20- x) / y ;
y = x +2 / y;
console.log(`Valor de x: ${x}`)
console.log(`Valor de y: ${y}`);
