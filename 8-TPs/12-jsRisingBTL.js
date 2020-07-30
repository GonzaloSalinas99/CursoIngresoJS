/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoBruto;
	var legajo;
	var nacionalidad;

	edadIngresada = prompt ("ingrese su edad"); txtIdEdad.value
	edadIngresada = parseInt (edadIngresada); 
	
	while(edadIngresada<18 || edadIngresada>90)
	{
		edadIngresada = prompt ("Reingrese su edad"); 
		edadIngresada = parseInt (edadIngresada); 
	}
		txtIdEdad.value=edadIngresada;

	sexoIngresado = prompt ("Ingrese su sexo"); txtIdSexo.value
	
	while(sexoIngresado!="F" && sexoIngresado!="M")
	{
		sexoIngresado = prompt ("Reingrese su sexo"); 
	}
	switch (sexoIngresado)
	{
		case "F":
			sexoIngresado="Femenino";
			break;
		case "M":
			sexoIngresado="Masculino";
			break;		
	}
		txtIdSexo.value=sexoIngresado;

	estadoCivilIngresado = prompt ("Ingrese su estado civil"); 
	estadoCivilIngresado = parseInt(estadoCivilIngresado);

	while(estadoCivilIngresado<1 || estadoCivilIngresado>4)
	{
		estadoCivilIngresado = prompt ("Reingrese su estado civil"); 
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
	}
	switch(estadoCivilIngresado)
	{
		case 1:
			estadoCivilIngresado="Soltero";
			break;
		case 2:
			estadoCivilIngresado="Casado";
			break;
		case 3:
			estadoCivilIngresado= "Divorciado";
			break;
		case 4:
			estadoCivilIngresado= "Viudo";
			break;
			 
	}
	txtIdEstadoCivil.value = estadoCivilIngresado;

	sueldoBruto = prompt ("Ingrese su sueldo bruto"); 
	sueldoBruto = parseInt (sueldoBruto);
	
	while(sueldoBruto<8000)
	{
		sueldoBruto = prompt ("Reingrese su sueldo bruto"); 
		sueldoBruto = parseInt (sueldoBruto);
	}
		txtIdSueldo.value=sueldoBruto;

	legajo = prompt ("ingrese su numero de legajo");
	legajo = parseInt (legajo);

	while(legajo<1000 || legajo>9999)
	{
		legajo = prompt ("Reingrese su numero de legajo"); 
		legajo = parseInt (legajo);
	}
		txtIdLegajo.value=legajo;

	nacionalidad = prompt ("Ingrese su nacionalidad"); 

	while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N" )
	{
		nacionalidad = prompt ("Ingrese su nacionalidad");
	}
	switch(nacionalidad)
	{
		case "A":
			txtIdNacionalidad.value="Argentino";
			break;
		case "E":
			txtIdNacionalidad.value="Extranjero";
			break;
		case "N":
			txtIdNacionalidad.value="Nacionalizado";
			break;

	}



} 
