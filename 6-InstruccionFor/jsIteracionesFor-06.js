function mostrar()
{
	var numeroPar;
	numeroPar=prompt("ingrese un numero");
	numeroPar=parseInt(numeroPar);

	for(i=0;i<numeroPar;i++)
	{
		if(i%2==0)
		{
			document.write("<br>" + i);
		}		
	}



}//FIN DE LA FUNCIÓN