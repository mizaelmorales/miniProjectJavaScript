var vp =document.getElementById('villa');
var papel= vp.getContext("2d");
var cantidad= aleatorio(1,10);
document.addEventListener("keydown", dibujarTeclado);
/*a la definiciones completas de un objeto se les llama clase
la variable es una instancia, cuano se tiene la difinicion de un objeto se comienza la primera letra en mayuscula

new es una nueva definicion de objecto
*/
var teclas = 
{
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};
var fondo = {
	url:"tile.png",
	cargaOk:false
}
var vaca= {
	url: "vaca.png",
	cargarOK:false
};
var pollo= {
	url: "pollo.png",
	cargarOK:false
};

fondo.imagen = new Image ();
fondo.imagen.src =fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image ();
vaca.imagen.src= vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image ();
pollo.imagen.src= pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);
var x = 150;
var y = 150;
var movimiento = 10;

/*
var cerdo= new Image ();
cerdo.src= "cerdo.png";
cerdo.addEventListener("load", CargarCerdo);

var pollo = new Image ();
pollo.src= "pollo.png";
pollo.addEventListener("load", CargarPollo);

*/
function dibujarTeclado(evento)
{
	console.log(evento);
  // solo se dibujara si esta el click del mouse presionado
  
  switch(evento.keyCode)
	{
		case teclas.UP:
		dibujar();
		papel.drawImage(pollo.imagen, x, y - movimiento);
		y = y - movimiento;
		
		break;
		case teclas.DOWN:
		dibujar();
		papel.drawImage(pollo.imagen, x, y + movimiento);
		y = y + movimiento;
		
		break;
		case teclas.RIGHT:
		dibujar();
		papel.drawImage(pollo.imagen,x + movimiento, y);
		x = x + movimiento;
		
		break;
		case teclas.LEFT:
		dibujar();
		papel.drawImage(pollo.imagen, x - movimiento, y);
		x = x - movimiento;
		
		break;
		
	}
	

}
function cargarFondo()
{
	fondo.cargarOK = true;
	
	dibujar();
}
function cargarVacas()
{
	vaca.cargarOK = true;
	
	dibujar();
}
function cargarPollo()
{
	pollo.cargarOK = true;
		dibujar();
}
function dibujar() 
{
	if(fondo.cargarOK)
	{	
		
	papel.drawImage(fondo.imagen, 0, 0);
	}
	if(vaca.cargarOK)
	{	
	
		
	for(v=0;v < cantidad; v++ )
		{		
			var x = aleatorio(0,420);
			var y = aleatorio(0,420);	
			papel.drawImage(vaca.imagen, x, y);
		}
		
	}	
	if(pollo.cargarOK)
	{
			
			
		
	}
}

/*
function dibujarVaca() 
{
	papel.drawImage(vaca, 10, 10);
}
function dibujarCerdo() 
{
	papel.drawImage(cerdo, 10, 300);
}
function dibujarPollo() 
{
	papel.drawImage(fondo, 300, 150);
}
*/
/*Recuerda:

Math.floor() devuelve el número entero por debajo de los decimales.

Math.ceil() devuelve el siguiente número entero arriba de los decimales

Math.random() devuelve un número aleatorio de 0 a 0.999..*/

/*Funcion para soltar numero aletarios en un rango especifico*/
function aleatorio(min, maxi)
{
	var resultado
	resultado =Math.floor(Math.random()*(maxi - min + 1))+ min;
	return resultado;		
}
