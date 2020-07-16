function mostrar()
{
	var edad; 

	edad = txtIdEdad.value;
	edad = parseInt (edad);

	if(edad>17)
	{
			alert ("es mayor de edad");
	}
	else if (edad>12)
	{
		alert ( "es un adolescente");
	}
	else
	{
		alert ("es un niño");
	}

}//Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
// o adolescente (entre 13 y 17 años) o niño (menor a 13 años).

