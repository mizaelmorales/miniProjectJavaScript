/*la definicion de un objeto se llama clase
las instancias de una clase se llama objecto
 new dispara un constructor
 funcion se dispara cuando se crea una
 nueva instancia de la clase se llama
 constructor= funcionan como una funcion dentro de 
 la clase
 para agregar una variable se agrega dentro del constructor
 osea serian sus atributos
 this es un indicador de la instancia donde 
 this se refiere a la variales dentro
 de la funcion y no a las q vienen
 por parametro
 */
class Monsters
{
	/*Declaracion de variables(Atributos)  con this*/
	constructor(n,v,a)
	{
		a=2;
		this.imagen = new Image();
		this.nombre=n;
		this.vida=v;
		this.ataque=a;
		this.imagen.src = imagenes[this.nombre];
		this.tipo = "Tierra";
	}
/*dentro de las clases no tienes que escribir function
porq  se entiende que todo bloque de codigo dentro 
de una clase es una funcion
*/
	hablar()
	{
		alert(this.nombre);
	}
	mostrar()
	{/*appenchild agregar un hijo al body*/
		b=2;
		document.body.appendChild(this.imagen);
		document.write("<p>");
		document.write("<strong>"+this.nombre+"</strong><br/>");
		document.write("Vida:"+this.vida+"<br/>");
		document.write("Ataque:"+this.ataque+"<br/>"+ "<hr />");
		document.write("</p>");
	}
}