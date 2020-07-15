/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheit;
	var convertidor;
	var centigrados;

 
	fahrenheit = txtIdTemperatura.value;
	fahrenheit = parseInt (fahrenheit);

	convertidor = (fahrenheit- 32);
	centigrados = (convertidor /1.8000);
	alert(fahrenheit + " Fahrenheit son " + centigrados.toFixed(2) + " Centígrados" );
}

function CentigradosFahrenheit () 
{
	var fahrenheit;
	var centigrados;
	var convercion;

	centigrados = txtIdTemperatura.value;
	centigrados = parseInt (centigrados);

	convercion = (centigrados * 1.8000); 
	fahrenheit = (convercion + 32);

	alert(centigrados + " Centigrados son " + fahrenheit + " Fahrenheit");
}