var x =1;
var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokachu"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

/*un array es como que si una
tuviera cajitas
var cajitas = [];
ctrl + l limpias consolas lol
array se le puede empujar un nuevo dato, que se agrega al ultimo
cajita.push("ultimo");
se pueden crear array en los cuales las posiciones sean texto
llamado arrays asociativo
 
crea una coleccion de variables indexado 
con push by number
coleccion[0].nombre;
coleccion[1].hablar();
 */


var coleccion =[];
coleccion.push(new Monsters("Cauchin",100,40));
coleccion.push(new Monsters("Pokachu",70,90));
coleccion.push(new Monsters("Tocinauro",120,40));

/*existe un ciclo especial en 
javascript el cual opera
por la cantidad de objetos que
estan dentro de un array 
of 2015 nos muestra la instancia en vez
del indice
para cada variable dentro de collecion coloquelo en monster
of recorre los objectos 
in su indice
pero igual debe tener un indice
*/
for(var monster in coleccion)
{
	coleccion[monster].mostrar();
}
for(var y of coleccion)
{
  console.log(y);
}

for(var x in coleccion[0])
{
  console.log(x);
}

