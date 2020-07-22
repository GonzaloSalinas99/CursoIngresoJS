function mostrar()
{
	
	var notaExamen;

	notaExamen = Math.floor(Math.random()*((10+1)-1)+1);

	if(notaExamen>8)
	{
			alert("EXCELENTE");
	}
	else 
	{
		if (notaExamen>3)
		{
			alert ("APROBO");
		}			
		else
		{
			alert("VAMOS LA PROXIMA SE PUEDE");
		}
	}

		
}