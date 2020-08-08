function mostrar()
{
var nombre;
var edad;
var sexo;
var estadoCivil;
var temperatura;
var nombreConMasTemperatura;
var maximo;
var bandera;
var contadorMayorViudo;
var contadorHombreSolteroViudo;
var contadorAbuelosTemperaturaAlta;
var promedio;
var acumuladorEdad;
var contadorHombreSoltero;

acumuladorEdad=0;
contadorHombreSoltero=0;
contadorAbuelosTemperaturaAlta=0;
contadorHombreSolteroViudo=0;
contadorMayorViudo=0;
maximo = 0;
contadorTemperatura=0;
bandera = true;

while(bandera == true)
{

	nombre = prompt("ingrese su nombre");
	while (!isNaN(nombre))
	{
		nombre = prompt ("Reingrese su nombre");
	}

	edad =prompt ("ingrese su edad")
	edad = parseInt (edad);
	while(isNaN(edad) || edad<1)
	{
		edad =prompt ("reingrese su edad")
		edad = parseInt (edad);
	}

	sexo = prompt ("Ingreso su sexo")
	while(!isNaN(sexo) && sexo != "f" && sexo != "m")
	{
		sexo = prompt ("reingrese su sexo")
	}

	estadoCivil = prompt ("Ingreso su estado civil")
	while(!isNaN(sexo) && estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
	{
		estadoCivil = prompt ("reingrese su estado civil")
	}
	
	temperatura =prompt ("ingrese su temperatura")
	temperatura = parseInt (temperatura);
	while(isNaN(temperatura))
	{
		temperatura =prompt ("reingrese su temperatura")
		temperatura = parseInt (temperatura);
	}

	//A
	if(temperatura>maximo)
	{
		maximo = temperatura;		
		nombreConMasTemperatura=nombre;
	}
	else 
	{			
		//B
		if(estadoCivil=="viudo" && edad>18)
		{
			contadorMayorViudo++;
		}
		else 
		{
			//E
			if(estadoCivil=="soltero" && sexo == "m")
			{
				contadorHombreSoltero++;
				acumuladorEdad=acumuladorEdad+edad;
			}
			else
			{
				//C
				if(sexo == "m" && estadoCivil == "soltero" || estadoCivil == "viudo")
				{
					contadorHombreSolteroViudo++;
				}
				else 
				{
					//D
					if(edad>59 && temperatura>38)
					{
						contadorAbuelosTemperaturaAlta++;
					}
				}
			}
		}
	}

	bandera = confirm ("Desea seguir ingresando pasajeros??")
}

promedio=acumuladorEdad/contadorHombreSoltero; 


document.write (nombreConMasTemperatura +  " tiene la mayor temperatura de todos" + maximo + " grados");
document.write ("<br>"+contadorMayorViudo + "son las personas mayores de edad y viudos")
document.write ("<br>" + contadorHombreSolteroViudo + "son hombres y son viudos o solteros");
document.write ("<br>" + contadorAbuelosTemperaturaAlta + "personas de la terceder edad tienen mas de 38 grados de temperatura");
document.write ("<br>" +  "el promedio de edad entre hombres solteros es de " + promedio);


}




/*
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
