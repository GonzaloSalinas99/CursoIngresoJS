
function mostrar()
{	
/*
Enunciado c)”mixing bandera”
de una cantidad de animales indeterminada del zoológico debemos tomar lo siguiente
raza
peso
temperatura media del lugar donde habita
edad
si está en peligro de extinción( si o no)
se debe informar:

1-el promedio de edad total
2-la raza del más pesado
3-la temperatura máxima ingresada de los animales en extinción
NOTA:pedir datos por "prompt()" y mostrar por console.log()
*/

var raza;
var peso;
var temperaturaLugar;
var edad;
var peligroDeExtincion;
var banderaInicio;
var contadorEdad;
var acumuladorEdad;
var promedio;
var mayorPeso;
var razaPesada;
var banderaPeso;
var banderaTemperatura;
var temperaturaMaxima;


banderaTemperatura=true;
banderaPeso=true;
banderaInicio=true;
contadorEdad=0
acumuladorEdad=0;


while(banderaInicio==true)
{
	raza=prompt("ingrese una raza");
	while(!isNaN(raza))
	{
		raza=prompt("ingrese una raza");
	}

	peso=prompt("ingrese una peso");
	peso = parseInt(peso);
	while(isNaN (peso) || peso<0)
	{
		peso=prompt("Reingrese un peso");
	}
	
	temperaturaLugar=prompt("ingrese una temperatura");
	temperaturaLugar = parseInt(temperaturaLugar);
	while(isNaN(temperaturaLugar))
	{
		temperaturaLugar=prompt("ingrese un temperatura");
	}
	
	edad=prompt("ingrese una edad");
	edad = parseInt(edad);
	while(isNaN(edad) || edad<0)
	{
		edad=prompt("ingrese un edad");
	}

	peligroDeExtincion=prompt("ingrese si esta en peligro de extincion");
	while(peligroDeExtincion!="si" && peligroDeExtincion != "no")
	{
		peligroDeExtincion=prompt("ingrese si esta en peligro de extincion");
	} 

	if(banderaPeso==true || mayorPeso<peso)
	{
		mayorPeso=peso
		razaPesada=raza;

		banderaPeso=false;
	}

	if(peligroDeExtincion=="si")
	{
		if(banderaTemperatura=true || temperaturaMaxima<temperaturaLugar)
		{
			temperaturaMaxima=temperaturaLugar;	
			banderaTemperatura=false;		
		}
		else
		{
			alert ("no hay animal en peligro de extincion");
		}
	}



	acumuladorEdad+=edad;
		contadorEdad++;

	banderaInicio=confirm("desea seguir ingresando animales??")
}
promedio=acumuladorEdad/contadorEdad;


console.log("el promedio de edad es de " + promedio);
console.log("la raza mas pesada es " + razaPesada);
console.log(temperaturaMaxima);




}

