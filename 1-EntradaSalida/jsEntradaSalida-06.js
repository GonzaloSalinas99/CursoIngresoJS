/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{


	//MAXIMO CON FOR 
	(i==0 || maximo<numero)
	{
		maximo=numero;
	} 

	//MINIMO CON FOR
	(i==0 || minimo>numero)
	{
		minimo=numero;
	} 

	//MAXIMO CON WHILE (BANDERA)
	var bandera=true;
	(bandera==true || maximo<numero)
	{
		maximo=numero;
		bandera=false;
	} 

	//MINIMO CON WHILE (BANDERA)
	var bandera=true;
	(bandera==true || minimo>numero)
	{
		minimo=numero;
		bandera=false;
	} 

	nombre = prompt ("ingrese un nombre")
	while (!isNaN(nombre))
	{
		nombre = prompt ("reingrese un nombre");
	}

	numero = prompt ("ingrese un numero");
	numero = parseInt ( numero );
	while (isNaN ( numero ) )
	{
		numero = prompt ("ingrese un numero");
		numero = parseInt ( numero );
	}




}

