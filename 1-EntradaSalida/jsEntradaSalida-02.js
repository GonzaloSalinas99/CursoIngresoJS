/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
	function mostrar()
	{
		/*Enunciado  a)”bandera a full”
		de una cantidad de espectadores  indeterminada debemos tomar lo siguiente datos
		sexo
		altura
		edad
		nombre
		se debe informar:
		
		1-el nombre de la más alta de las mujeres
		2-el nombre del  más viejo de los hombres 
		3-el nombre del primer adolescente ingresado, (solo mostrar si y sólo si  hay  algún adolescente)
		NOTA:pedir datos por "prompt()" y mostrar por console.log()*/
	
	var sexo;
	var altura;
	var edad;
	var nombreIngresado;
	var banderaInicio;
	var mujerMasAlta;
	var nombreMujerAlta;
	var hombreMasViejo;
	var nombreViejo;
	var primerAdolescente;
	var banderaAdolescente;
	var edadAdolescente;
	var banderaDos;
	var banderaUno;


	banderaAdolescente=true;
	banderaInicio=true;
	banderaUno=true;
	banderaDos=true;
	
	
	while(banderaInicio==true)
	{

	nombreIngresado=prompt("ingrese su nombre");
	while(!isNaN(nombreIngresado))
	{
		nombreIngresado=prompt("Reingrese su nombre");
	}

	edad=prompt("ingrese su edad");
	edad=parseInt(edad);
	while(isNaN(edad)||edad<1)
	{
		edad=prompt("Reingrese su edad");
		edad=parseInt(edad);
	}

	altura=prompt("ingrese su altura");
	altura=parseInt(altura);
	while(isNaN(altura))
	{
		altura=prompt("Reingrese su altura");
		altura=parseInt(altura);
	}

	sexo=prompt("ingrese su sexo");
	while(!isNaN(sexo) && sexo!="m" && sexo != "f")
	{
		sexo=prompt("Reingrese su sexo ingresando f o m");
	}

	if(sexo == "f") 
	{
		if(banderaUno==true|| mujerMasAlta>altura)
		{
			mujerMasAlta=altura;
			nombreMujerAlta=nombreIngresado;
			banderaUno=false;
			
		}
	}
	else
	{
		if(sexo=="m")
		{
			if(banderaDos==true || hombreMasViejo>edad)
			{
				hombreMasViejo = edad;
				nombreViejo=nombreIngresado;
				banderaDos=false;				
			}
			
			
		}
		
		

			if(banderaAdolescente==true)
			{
				if(edad>11 && edad<19) 
				{
					edadAdolescente=edad;
				}
					
				banderaAdolescente=false;
				
			}
		
	}



	
	



	
	
	bandera=confirm("desea seguir ingresando personas??")
	}



	console.log(nombreMujerAlta);
	console.log(nombreViejo);
	console.log(edadAdolescente);

}
