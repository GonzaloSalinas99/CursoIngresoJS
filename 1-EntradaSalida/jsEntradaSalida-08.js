/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroDividendo;
	var numeroDivisor;
	var sacarResto;

	numeroDividendo = txtIdNumeroDividendo.value;
	numeroDivisor = txtIdNumeroDivisor.value;

	numeroDividendo = parseInt (numeroDividendo);
	numeroDivisor = parseInt (numeroDivisor);

	sacarResto = (numeroDividendo % numeroDivisor);
		
		alert ("el resto de la operacion es " + sacarResto);

}
