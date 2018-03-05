/*en programacion primero se evalua las operaciones matematicas luego las comparaciones y luego la instruccion completa*/
var numeros=100;
for(var i=1;i<=100;i++)
{
	if (esDivisible(i,3) && esDivisible(i,5))
	{
		document.write("FizzBuzz");
	}	
	else if(esDivisible(i,3))
	{
		document.write("Fizz");
	}
	else if(esDivisible(i,5))
	{
		document.write("Buzz");
	}
	else
	{
		document.write (i);
	}
	document.write ("<br />");
}
function esDivisible(num,divisor) {
	if (num % divisor == 0)
	{
		return true;
	}
	else
	{
		return false;
	}
	// body...
}
/*function esDivisible(num,divisor) {
	resultado =(num % divisor == 0)
	
		
		return resultado;
	
}*/


