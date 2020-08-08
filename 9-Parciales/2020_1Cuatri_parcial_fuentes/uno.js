
function mostrar() {
	var productoTipo;
	var precio;
	var marca;
	var cantidad;
	var fabricante;
	var acumuladorCantidadBarbijo;
	var acumuladorCantidadJabon;
	var acumuladorCantidadAlcohol;
	var bandera;
	var minimo;
	var minimoFabricanteAlcohol;
	var minimaCantidadAlcohol;

	var cantidadMaxima;
	var promedio;
	
	var contadorAlcohol;
	var contadorJabon;
	var contadorBarbijo;

	contadorAlcohol=0;
	contadorBarbijo=0;
	contadorJabon=0;	

	

	acumuladorCantidadAlcohol=0;
	acumuladorCantidadBarbijo=0;
	acumuladorCantidadJabon=0;
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
				acumuladorCantidadAlcohol+=cantidad;
				contadorAlcohol=contadorAlcohol+1;
			}
		else 
		{
			if(productoTipo=="jabon")
			{
				acumuladorCantidadJabon+=cantidad;
				contadorJabon=contadorJabon +1;

			}
			else
			{
				if(productoTipo=="barbijo")
				{
					acumuladorCantidadBarbijo+=cantidad;
					contadorBarbijo=contadorBarbijo+ 1;
				}
			}
		}
			
		}

	}	
	
	if(acumuladorCantidadBarbijo>acumuladorCantidadAlcohol && acumuladorCantidadBarbijo>acumuladorCantidadJabon)
	{
		cantidadMaxima=acumuladorCantidadBarbijo;
		promedio=cantidadMaxima/contadorBarbijo;
	}
	else
	{
		if(acumuladorCantidadAlcohol>acumuladorCantidadBarbijo && acumuladorCantidadAlcohol>acumuladorCantidadJabon)
		{
			cantidadMaxima=acumuladorCantidadAlcohol;
			promedio=cantidadMaxima/contadorAlcohol
		}
		else
		{
			if(acumuladorCantidadJabon>acumuladorCantidadBarbijo && acumuladorCantidadJabon>acumuladorCantidadAlcohol)
			{
				cantidadMaxima=acumuladorCantidadJabon;
				promedio=cantidadMaxima/contadorJabon;
			}
		}
	}

	document.write("el precio minimo del alcohol es " + minimo);
	document.write("<br>" + "el fabricante es " + minimoFabricanteAlcohol);
	document.write ("<br>" + "la cantidad de productos es de " + minimaCantidadAlcohol);
	
	document.write("<br>" + "el promedio de compra es de " + promedio);
	document.write("<br>" + "la cantidad de jabones que hay es de " + acumuladorCantidadJabon);

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
