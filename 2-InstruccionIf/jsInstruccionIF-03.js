function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt (edad);

	if(edad>17)
	{
		alert("mayor de edad");
	}
	else 
	{
		alert ("menor de edad");
	}
}//FIN DE LA FUNCIÓN