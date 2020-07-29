function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	var estadia;
	var porcentaje;

	estadia=15000;

	if (estacionIngresada=="Invierno")
	switch(destinoIngresado)
	{
		case "Bariloche":
			porcentaje = 0.2;
		//alert (estadia*1.2);
			break;
		case "Cataratas":
		case "Cordoba":
			porcentaje = - 0.1;
		//alert(estadia-(estadia*0.1));
			break;
		case "Mar del plata":
			porcentaje = -0.2;
		//alert (estadia - (estadia*0.2));
			break;
	}
	else
	{
		if(estacionIngresada=="Verano")
		switch(destinoIngresado)
		{
			case "Bariloche":
				porcentaje = -0.2;
			//alert (estadia-(estadia*0.2));
				break;
			case "Cataratas":
			case "Cordoba":
				porcentaje = 0.1;
			//alert (estadia*1.1);
				break;
			case "Mar del plata":
				porcentaje = 0.2;
			//alert (estadia*1.2);
				break;			
		}
	else
	{
		if(estacionIngresada=="Otoño"|| estacionIngresada=="Primavera")
		switch(destinoIngresado)
		{
			case "Bariloche":
			case "Cataratas":	
			case "Mar del plata":	
				porcentaje = 0.1;
			//alert(estadia*1.1);
				break;			
			default:
				porcentaje = estadia;
			//alert(estadia);
				break;
		}
	}
	}
	alert (estadia+(estadia*porcentaje));
}//FIN DE LA FUNCIÓN
/*una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/