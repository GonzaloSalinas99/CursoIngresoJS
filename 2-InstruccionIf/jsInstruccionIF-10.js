function mostrar()
{
	
	var notaExamen;

	notaExamen = Math.floor(Math.random()*10+1);
	
	if(notaExamen>8)
	{
			alert(notaExamen + " EXCELENTE");
	}
	else 
	{
		if (notaExamen>3)
		{
			alert (notaExamen + " APROBO");
		}			
		else
		{
			alert(notaExamen + " VAMOS LA PROXIMA SE PUEDE");
		}
	}

		
}