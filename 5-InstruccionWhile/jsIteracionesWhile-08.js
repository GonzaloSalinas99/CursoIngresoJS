/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroingresado;
	var acumulador;
	var validacion;
	
	contador=0;
	//sumaPositivos=0;
	//multiplicacionNegativos = 1;
	respuesta= true;

	while (respuesta==true)
	{
		numeroingresado = prompt ("ingrese un numero");
		numeroingresado = parseInt (numeroingresado);

		acumulador = acumulador + numeroingresado;
		contador = contador +1;

		if(numeroingresado >0)
		{
			sumaPositivos = sumaPositivos + numeroingresado;
		}
		else 
		{
			if (numeroingresado<0)
			{
				multiplicacionNegativos = multiplicacionNegativos * numeroingresado;
			}
		}
		
		respuesta = confirm ("Desea ingresar otro numero?");
	}
	
	
	
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN