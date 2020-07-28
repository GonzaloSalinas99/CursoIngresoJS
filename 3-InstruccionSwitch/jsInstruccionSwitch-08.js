function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch (destinoIngresado)
	{
		case "Bariloche":
		case "Cordoba":
			alert("Hace Frio");
			break;
		
		case "Mar del plata":
		case "Cataratas":
			alert ("Hace Calor");
			break;
			
	}
	

}