
var texto= document.getElementById("texto_line");
var boton = document.getElementById('botoncito');
boton.addEventListener("click",dibujoPorClick); 

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

//for(l=0;l < lineas;l++)

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal) 
{
	lienzo.beginPath();
	lienzo.strokeStyle =color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();	
}

function dibujoPorClick()
{
	var x = parseInt(texto.value);
	var lineas =x;
	var l = 0;
	var yi, xf;
	var xi, yf;
	var espacio = ancho / lineas;
	while (l < lineas)
		{
			yi= espacio * l;
			xf = espacio * (l + 1);
			xi= espacio * l;
			yf = espacio * (l + 1);
			dibujarLinea("AAF",0,yi,xf,300);
			dibujarLinea("AAF",yf,0,300,xi);
			console.log("linea "+ l)
			l = l + 1;
		}
}