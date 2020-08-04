function mostrar()
{
  var ingreso;
  var tipo;
  var respuesta;
  respuesta=true;
  var cantidadBolsas;
  var precio;
  var descuento;

  while(respuesta==true )
  {
    tipo =prompt("ingrese un tipo de producto");

    while(tipo!="arena" && tipo!= "cal" && tipo!="cemento")
    {
      tipo=prompt("vuelva a ingresar los tipos");
    }
    
    cantidadBolsas=prompt("ingrese cantidad de bolsas");
    cantidadBolsas=parseInt(cantidadBolsas);

    while(isNaN(cantidadBolsas))
    {
      cantidadBolsas=prompt("ingrese una cantidad razonable");
    }
  
    precio=prompt("ingrese precio");
    precio=parseInt(precio);

    while(isNaN(precio) || precio<1)
    {
      precio=prompt("ingrese una cantidad razonable");
    }
  
  
    respuesta = confirm("Desea seguir ingresando??");
  }

  if(cantidadBolsas>10)
  {
    descuento=precio*0.85;
  }
  else
  {
    if(cantidadBolsas>30)
    {
      descuento=precio*0.75;
    }
  }
  
}
//Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
//Tipo validad("arena";"cal";"cemento")
//Cantidad de bolsas,
//Precio por bolsa (más de cero ),
/*

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/