var text= document.getElementById("texto");
var boton= document.getElementById("boton");
boton.addEventListener("click", Multi);

function Multi() 
{
	x= parseInt(text.value);
	for(i=0;i<11;i++)
	{
		mul= operacion(x,i);
		document.write("resultado = " + mul + ", ");
	}
		
}

function operacion(x1,i1)
{
	mul = x1 * i1;
	return mul;
}