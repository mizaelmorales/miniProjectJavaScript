var vp =document.getElementById('villa');
var papel= vp.getContext("2d");
var mapa ="tile.png";
/*a la definiciones completas de un objeto se les llama clase
la variable es una instancia, cuano se tiene la difinicion de un objeto se comienza la primera letra en mayuscula

new es una nueva definicion de objecto
*/

var imagen = new Image ();
imagen.src =mapa;

/*Recuerda:

Math.floor() devuelve el número entero por debajo de los decimales.

Math.ceil() devuelve el siguiente número entero arriba de los decimales

Math.random() devuelve un número aleatorio de 0 a 0.999..*/
var z; 
for(var i = 0; i < 10;i++)
{
	z = aleatorio(10,20);
	document.write(z + ",");
}
/*Funcion para soltar numero aletarios en un rango especifico*/
function aleatorio(min, maxi)
{
	var resultado
	resultado =Math.floor(Math.random()*(maxi - min + 1))+ min;
	return resultado;		
}
