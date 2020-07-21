function mostrar()
{
	
	var numeroRandom;

	numeroRandom = Math.floor(Math.random()*((10+1)-1)+1);

	alert(numeroRandom);

	if(numeroRandom>8)
	{
			alert("EXCELENTE");
	}
			
	else 
	{
		if (numeroRandom>3)
		{
			alert ("APROBO");
		}
			
		else
		{
			alert("VAMOS LA PROXIMA SE PUEDE");
		}


	}

		
}