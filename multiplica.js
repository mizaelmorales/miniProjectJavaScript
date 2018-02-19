var text= document.getElementById("texto");
var boton= document.getElementById("boton");
boton.addEventListener("click", Multi);

function Multi() 
{
	x= parseInt(text.value);	
		for(i=0;i!=11;i++)
		{
			mul = x * i;
			document.write("resultado = " + mul + ", ");
		}
}