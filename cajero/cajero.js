var boton = document.getElementById("botoncito");
var texto = document.getElementById("textoo");
boton.addEventListener("click", entregarDinero);
class billetes
{
    constructor(v,c)
    {
        this.valor = v;
        this.cantidad = c;
    }
}
 var caja = [];
 caja.push(new billetes(50,3));
 caja.push(new billetes(20,2));
 caja.push(new billetes(10,2));
 var dinero = 0;
 var papeles = 0 ;
 var div = 0 ;
 var entregado = [];
 var resultado = document.getElementById("resultado");
 function entregarDinero ()
 {
    dinero = parseInt(texto.value);
    for (var a of caja )
    {
        
        if (dinero > 0 )
        {
            
            div = Math.floor( dinero / a.valor );
            console.log(div);
            console.log(a.valor);
            if (div > a.cantidad)
            {
                papeles = a.cantidad;
            }
            else
            {
                papeles = div;
            }
            entregado.push(new billetes(a.valor,papeles));
            dinero= dinero - (a.valor * papeles);
            a.cantidad = a.cantidad - papeles ;
            console.log(a.cantidad); 
        } 
        if(dinero > 0)
        {
          resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :(";
        }
        else
        {
          for(var e of entregado)
          {
            if(e.cantidad > 0)
            {
                    resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
            }
          }
     } 
    console.log(entregado);
}
}    
    
 
 
 
 