/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt (numeroUno);
	numeroDos = parseInt (numeroDos);

	suma = (numeroUno + numeroDos);

	alert("El resultado de la suma es " + suma);
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt (numeroUno);
	numeroDos = parseInt (numeroDos);

	resta = (numeroUno - numeroDos);

	alert ("El resultado de la resta es " + resta);
	
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplicando;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt (numeroUno);
	numeroDos = parseInt (numeroDos);

	multiplicando = (numeroUno * numeroDos);

	alert("El resultado de la multiplicacion es " + multiplicando);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var dividiendo;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	
	numeroUno = parseInt (numeroUno);
	numeroDos = parseInt (numeroDos);

	dividiendo = (numeroUno / numeroDos);

	alert ("El resultado de la division es " + dividiendo);
}

