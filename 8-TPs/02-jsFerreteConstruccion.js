/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var calculo;

	largo = txtIdLargo.value;
	ancho = txtIdAncho.value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	calculo = (largo * 2 + ancho * 2)*3;

	alert("la cantidad de alambre que se debe comprar es de " + calculo + " metros");
}
function Circulo () 
{
	var radio;
	var calculo;
	var resultado;
	var mathPi;

	radio = txtIdRadio.value;
	radio = parseInt(radio);
	mathPi= 3.1416

	calculo = (mathPi*2)* radio;
	resultado= calculo*3;

	alert("la cantidad de alambre que se debe comprar es de " + resultado + " metros");

}
function Materiales () 
{
	var largo;
	var ancho;
	var calculo1;
	var calculo2;
	var cemento;
	var cal;
	largo = txtIdLargo.value;
	ancho = txtIdAncho.value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	cemento=2;
	cal=3;

	calculo1 = (largo * ancho) * cemento;
	calculo2 = (largo * ancho) * cal;

	alert("se necesitan " + calculo1 + " bolsas de cemento y " + calculo2 + (" bolsas de cal"));
}