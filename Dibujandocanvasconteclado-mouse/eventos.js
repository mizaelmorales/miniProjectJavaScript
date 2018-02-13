//json
var teclas = 
{
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};
document.addEventListener("mousedown",presionarMouse);  
document.addEventListener("mouseup",soltarMouse);       
document.addEventListener("mousemove", dibujarTeclado);
var cuadrito= document.getElementById('area_de_dibujo')
var papel = cuadrito.getContext("2d");
dibujarLinea("red",149,149,151,151,papel);
var estado = 0;




function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal,lienzo) 
{
	lienzo.beginPath();
	lienzo.strokeStyle =color;
	lienzo.lineWidth = 3;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();	
}
	var x = 150;
	var y = 150;
	var colorcito = "blue";
	var movimiento = 10;

function presionarMouse(evento){
  estado = 1;         //click presionado  
  x = evento.layerX;
  y = evento.layerY;
}

// Funcion para mouseup
function soltarMouse(evento){
  estado = 0;         // click suelto
  x = evento.layerX;
  y = evento.layerY;
}
function dibujarTeclado(evento)
{
	console.log(evento);
if (estado == 1) {   // solo se dibujara si esta el click del mouse presionado
	dibujarLinea(colorcito, x, y, evento.layerX, evento.layerY, papel);
		x = evento.layerX;
		y = evento.layerY;

}



	if(evento.keyCode == teclas.UP)
	{
		console.log("Vamo' pa arriba");
	}	
	if(evento.keyCode == teclas.DOWN)
	{
		console.log("Vamo' pa bajo");
	}	
	if(evento.keyCode == teclas.LEFT)
	{
		console.log("Vamo' pa derecha");
	}	
	if(evento.keyCode == teclas.RIGHT)
	{
		console.log("Vamo' pa izquierda");
	}	

	switch(evento.keyCode)
	{
		case teclas.UP:
		dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
		y = y - movimiento;
		break;
		case teclas.DOWN:
		dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
		y = y + movimiento;
		break;
		case teclas.RIGHT:
		dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
		x = x + movimiento;
		break;
		case teclas.LEFT:
		dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
		x = x - movimiento;
		break;
		
	}
}
