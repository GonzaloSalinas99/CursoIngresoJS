
function mostrar() {
	var productoTipo;
	var precio;
	var marca;
	var cantidad;
	var acumuladorTipo;
	var acumuladorPrecio;
	var acumuladorMarca;
	var contadorCantidadBarbijo;
	var contadorCantidadJabon;
	var contadorCantidadAlcohol;
	var bandera;
	var minimo;
	var minimoFabricanteAlcohol;
	var minimaCantidadAlcohol;
	var fabricante;
	
	acumuladorPrecio = 0;
	contadorCantidad = 0;
	acumuladorTipo;
	bandera=true;





	for (var i = 0; i < 2; i++) 
	{
		productoTipo=prompt("ingrese un tipo de producto");
		while(productoTipo!="jabon" && productoTipo!="barbijo" && productoTipo!="alcohol")
		{
			productoTipo=prompt("Reingrese un tipo de producto");
		}
	
		marca=prompt("ingrese una marca");

		fabricante=prompt("ingrese un fabricante");
		
		precio=prompt("ingrese un precio");
		precio=parseInt(precio);
		while(precio<100 || precio>300)
		{
			precio=prompt("Reingrese el precio");
			precio=parseInt(precio);
		}
		
		cantidad=prompt("ingrese una cantidad");
		cantidad=parseInt(cantidad);
		while(cantidad<1 || cantidad>1000)
		{
			cantidad=prompt("Reingrese una cantidad");
			cantidad=parseInt(cantidad);
		}
		
		if(productoTipo=="alcohol")
		{
			if(bandera==true || precio<minimo)
			{
				minimo=precio;
				bandera=false;
				minimoFabricanteAlcohol=fabricante;
				minimaCantidadAlcohol=cantidad;
			}
			
		}

	}	
	
	document.write("el precio minimo del alcohol es " + minimo);
	document.write ("la cantidad de productos es de " + cantidad);
	document.write("el fabricante es " + minimoFabricanteAlcohol);








	/*while (contador < 5) {
		productoTipo = prompt("Ingrese un tipo de producto pelotudo");

		if (productoTipo == "barbijo" || productoTipo == "alcohol" || productoTipo == "jabon") {
			alert("perfecto, ingrese otro producto");
			contador++;
		}
		else {
			if (productoTipo != "barbijo" || productoTipo != "alcohol" || productoTipo != "jabon") {
				alert("vuelva a ingresar un producto");
			}
		}


		acumulador += productoTipo;

	}*/

}

/*
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
/*

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
-el tipo (validar "barbijo" , "jabón" o "alcohol") ,
-el precio (validar entre 100 y 300),
-la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
-la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
*/
