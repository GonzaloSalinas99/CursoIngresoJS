/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	/*
	Se debe ingresar 10:
	nombre
	edad(0 y 115)
	altura(30 y 230)
	sexo
	Dinero(puede ser positivo o negativo, pero debe ser un número)
	CantidadDeHijos(0 y 10)
	despues de validar todos los datos,
	se debe informar:

	1- nombre de la persona con edad más vieja
	2- promedio de altura de las mujeres
	3- nombre de la mujer más joven
	NOTA:pedir datos por "prompt()" y mostrar por console.log(),
	verificar que los datos  exitan antes de mostrarlos
	*/

var nombre;
var edad;
var altura;
var sexo;
var dinero;
var cantidadHijos;
var i;
var edadVieja;
var nombreVieja;
var contadorMujeres;
var acumuladorAlturaMujeres;
var promedio;
var edadMasJoven;
var nombreMujerJoven;


acumuladorAlturaMujeres=0;
contadorMujeres=0;

for(i=0;i<2;i++)
{
	nombre = prompt("ingrese su nombre");
	while(!isNaN(nombre))
	{
		nombre = prompt("Reingrese su nombre");
	}
	
	edad=prompt("Ingrese su edad");
	edad = parseInt(edad);
	while ( isNaN(edad) || edad < 1 && edad > 115)
	{
		edad=prompt("Reingrese su edad");
		edad = parseInt(edad);
	}

	altura=prompt("Ingrese su altura");
	altura = parseInt(altura);
	while ( isNaN(altura) ||altura < 30 && altura > 230)
	{
		altura=prompt("Reingrese su altura");
		altura = parseInt(altura);
	}

	sexo = prompt("ingrese su sexo");
	while( sexo != "m" && sexo != "f")
	{
		sexo = prompt("Reingrese su sexo");
	}

	dinero = prompt("ingrese su dinero");
	dinero = parseInt ( dinero);
	while(isNaN(dinero))
	{
		dinero = prompt("Reingrese su dinero");
	}

	cantidadHijos=prompt("Ingrese su cantidad de Hijos");
	cantidadHijos = parseInt(cantidadHijos);
	while (isNaN(cantidadHijos) || cantidadHijos <0 ||  cantidadHijos > 10)
	{
		cantidadHijos=prompt("Reingrese su cantidad de hijos");
		cantidadHijos = parseInt(cantidadHijos);
	}


	if (i==0 || edadVieja<edad) //maximo EDAD SEA MAYOR A VIEJA
	{
		edadVieja=edad;
		nombreVieja=nombre;
	}
	if(sexo=="f")
	{
		contadorMujeres++;
		acumuladorAlturaMujeres+=altura;

		if (i==0 || edadMasJoven>edad) //maximo EDAD SEA MAYOR A VIEJA
		{
		edadMasJoven=edad;
		nombreMujerJoven=nombre;
		}


	}



}

promedio=acumuladorAlturaMujeres/contadorMujeres;


console.log(nombreVieja);
console.log(promedio);
console.log(nombreMujerJoven);








}