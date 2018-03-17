var boton = document.getElementById("pene");
boton.addEventListener("click", Procesar );

class cajero{
    constructor(v,c){
        this.valor = v;
        this.cantidad = c;
    }
}

//Crear Billetes
var Billetes = {
    1:{"c":1,"v":200},
    2:{"c":1,"v":100},
    3:{"c":1,"v":50},
    4:{"c":1,"v":20},
    5:{"c":1,"v":10}
};

function Procesar(){
    c_r = parseInt(document.getElementById("Dinero").value);
    var cant = 0;

    for (var B in Billetes) {
        if(c_r >= 1){
            cant = Math.floor(c_r / parseInt(Billetes[B]["v"]));
            Billetes[B]["c"] =  - cant;
            c_r =  - (cant * parseInt(Billetes[B]["v"]));
        }
    }
}

