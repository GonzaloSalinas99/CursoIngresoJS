/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var sumaDeLosPrecios;

	primerPrecio=txtIdPrecioUno.value;
	segundoPrecio=txtIdPrecioDos.value;
	tercerPrecio=txtIdPrecioTres.value;

	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=parseInt(tercerPrecio);

	sumaDeLosPrecios= (primerPrecio + segundoPrecio + tercerPrecio);

	alert("La suma de los todos los precios da como resultado " + sumaDeLosPrecios);
	
}
function Promedio () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var descubirElPromedio;

	primerPrecio=txtIdPrecioUno.value;
	segundoPrecio=txtIdPrecioDos.value;
	tercerPrecio=txtIdPrecioTres.value;

	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=parseInt(tercerPrecio);

	descubirElPromedio = (primerPrecio + segundoPrecio + tercerPrecio)/3;
	
	alert("El promedio de estos precio es " + descubirElPromedio);

}
function PrecioFinal () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var sumatoriaDePrecios
	var aumentoDeIva;
	var resultado

	primerPrecio=txtIdPrecioUno.value;
	segundoPrecio=txtIdPrecioDos.value;
	tercerPrecio=txtIdPrecioTres.value;

	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=parseInt(tercerPrecio);

	sumatoriaDePrecios=(primerPrecio + segundoPrecio + tercerPrecio);
	
	aumentoDeIva= sumatoriaDePrecios* 0.21;
	resultado= sumatoriaDePrecios + aumentoDeIva;

	alert(resultado);

}