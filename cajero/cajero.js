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
 
 var dinero = 210;
 var papeles;
 var div;
 var entregado = [];


 for (var a of caja )
 {
     if (dinero >= 0 )
     {
        div = Math.floor( dinero / a.valor )
        console.log(a);
        console.log(a.valor);
        if (div > a.valor )
        {
            papeles = a.cantidad;
            entregado.push(new billetes(a.valor,papeles));
            dinero= dinero -(a.valor * papeles);
        }
        else
        {
            papeles = div;
            entregado.push(new billetes(a.valor,papeles));
            dinero= dinero -(a.valor * papeles);
        }
     } 
 }
 