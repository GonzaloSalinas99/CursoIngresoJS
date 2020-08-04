function mostrar()
{
var numeroUsuario;
numeroUsuario=prompt("ingrese un numero");
numeroUsuario=parseInt(numeroUsuario);

	for(i=2;i<numeroUsuario/2;i=i+1);
	{
		if (numeroUsuario%i==0)
		{
			alert("Reingrese un numero primo");
		}
		else
		{
			alert("Es un numero primo");
		}
	}

}//FIN DE LA FUNCIÓN