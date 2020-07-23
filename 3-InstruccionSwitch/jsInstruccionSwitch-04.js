function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	
	switch(mesDelAño)
	{
		case ("Enero"):
		case ("Marzo"):
		case ("Mayo"):	
		case ("Julio"):	
		case ("Agosto"):
		case ("Marzo"):			
		case ("Marzo"):
			alert("Tiene 31 dias");
			break;

		case ("Febrero"):
			alert ("Tiene 28 dias");
			break;

		default:
			alert("Tienen 30 dias");		
	}



}//FIN DE LA FUNCIÓNEnunciado:
/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/