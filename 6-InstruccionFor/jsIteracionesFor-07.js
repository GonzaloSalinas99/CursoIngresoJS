function mostrar()
{

var numeroUsuario;
numeroUsuario=prompt("Ingrese un numero");
numeroUsuario = parseInt(numeroUsuario);

for(i=1;i<numeroUsuario;i=i+1)
{
	if(numeroUsuario%i==0)
	{
		document.write("<br>" + i);
	}
}


}//FIN DE LA FUNCIÓN