function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value;
	var validacion;

	switch(estacionIngresada)
	{
		case("Invierno"):
		switch(destinoIngresado)
		{
			case("Bariloche"):
			validacion="Se viaja";
			break;
			default:
			validacion="No se viaja";
		}
		case("Verano"):
		switch(destinoIngresado)
		{
			case("Mar del plata"):
			case("Cataratas"):
				validacion="Se viaja";
				break;
			default:
				validacion="No se viaja";
		}
		case("Primavera"):
		switch(destinoIngresado)
		{
			case("Bariloche"):
				validacion="No se viaja";
				break;
			default:
				validacion="Se viaja";
		}
		default:
			validacion="Se viaja";
	}
	alert(validacion);

}//FIN DE LA FUNCIÓN
/*en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche*/ 