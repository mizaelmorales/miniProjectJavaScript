var express = require("express");
var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);
function inicio(peticion,resultado)
{
resultado.send("HOME");
}
function cursos(peticion,resultado)
{
resultado.send("cursos");
}

aplicacion.listen(8989);
