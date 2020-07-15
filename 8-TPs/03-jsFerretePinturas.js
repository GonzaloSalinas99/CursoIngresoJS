/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheit;
	var convercion;
	var centigrados;


	fahrenheit=txtIdTemperatura.value;
	fahrenheit=parseInc(fahrenheit);

	convercion(fahrenheit- 32);
	centigrados(convercion /1.8000);
	alert(centigrados);
}

function CentigradosFahrenheit () 
{
	
}