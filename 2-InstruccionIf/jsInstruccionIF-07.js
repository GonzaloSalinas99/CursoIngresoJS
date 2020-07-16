function mostrar()
{

	var edad;
	var estadoCivil;

	edad = txtIdEdad.value;

	//edad = document.getElementById("edad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad < 18 && estadoCivil != "Soltero")
	{
		alert("No podes estar " + estadoCivil + " siendo menor de edad rey");
	}
	else
	{
		alert("Usted esta: " + estadoCivil);
	}



}//FIN DE LA FUNCIÓN
 //el ID agregado como lo estabamos viendo antes no me lo reconoce, debe ser porque hay distintas opciones para elegir, en
 // este ejercicio, de estado civil. estadoCivil = estadoCivil.value (no me lo reconoce)
 // si o si lo tengo que escribir como   estadoCivil = document.getElementById ("estadoCivil").value