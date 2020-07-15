/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	var porcentaje;

	sueldo = txtIdSueldo.value;
	sueldo = parseInt(sueldo);

	porcentaje = sueldo * 0.1;

	resultado = porcentaje + sueldo;

		alert ("el porcentaje que se calculo es el " + porcentaje +"%");

	txtIdResultado.value=resultado;	
}