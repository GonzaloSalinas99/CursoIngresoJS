
function mostrar() 
{
	var productoTipo;
	var precio;


	marca = prompt("ingrese una marca");

	while(!isNaN(marca))
	{
		marca = prompt("ingrese una marca");
	}


	for(var i=0;i<5 ; i++)
{


		productoTipo = prompt("ingrese:");
	
		while(productoTipo != "barbijo" && productoTipo != "alcohol" && productoTipo != "jabon")
		{
			productoTipo = prompt("vuelva");
		}
	
		precio =prompt("ingrse precio");
		precio =parseInt(precio)
		while(isNaN (precio) || precio<100 || precio>300)
		{
			precio= prompt("ingrese de nuevo");		
		}


		marca = prompt("ingrese una marca");
		//while(si es un numero);
	
	
}	



	
	
	
	
	
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
