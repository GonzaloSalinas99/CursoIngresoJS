function mostrar()
{
	var edad;
	var estadoCivil;

	edad = txtIdEdad.value;
	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad>17 && estadoCivil== "Soltero")
		{
			alert ("es soltero y no es menor");
		}
}

	/*if (edad < 18 && estadoCivil != "Soltero")
	{
	
	}
	else if(estadoCivil== "Soltero" && edad> 17)
	{
		alert ("Es soltero y no es menor");
	}*/
//FIN DE LA FUNCIÓNAl ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
// pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'