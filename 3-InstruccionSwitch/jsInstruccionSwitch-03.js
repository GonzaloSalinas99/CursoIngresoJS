function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	switch(mesDelAño)
	{
		case("Febrero"):
		{
			alert("Este mes tiene 29 dias");
			break;
		}
	}

	if (mesDelAño!="Febrero")
	{
		alert("Este mes tiene 30 o mas dias");
	}
	
	


}//FIN DE LA FUNCIÓN