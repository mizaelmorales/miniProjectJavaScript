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
 