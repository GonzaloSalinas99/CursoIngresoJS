/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var porcentaje;
	var resultado;

	importe=txtIdImporte.value;
	importe=parseInt(importe);
	
	porcentaje = importe * 0.25;

	resultado = importe - porcentaje;
	
	alert ("el porcentaje que se calculo es el " + porcentaje +"%");

	txtIdResultado.value = (resultado);
}
