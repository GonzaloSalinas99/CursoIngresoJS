function mostrar()
{
  var ingreso;
  var cantidadBolsas;
  var precio;
  var total;
  var cantidadArena;
  var cantidadCal;
  var cantidadCemento;
  var precioArena;
  var precioCemento;
  var precioCal;
  var tipoProducto;
  var precioBruto;
  var contadorBolsas;
  var productoCaro;



  var respuesta;
  respuesta=true;

  cantidadCemento=0;
  precioCemento=0;
  
  cantidadArena=0;
  precioArena=0;
  
  contadorCal=0;
  precioCal=0;

  
  
  
  while(respuesta==true )
  {
    ingreso =prompt("ingrese un tipo de producto");

    while(ingreso!="arena" && ingreso!= "cal" && ingreso!="cemento")
    {
      ingreso=prompt("vuelva a ingresar el tipo del producto");
    }
    
    cantidadBolsas=prompt("ingrese una cantidad de bolsas");
    cantidadBolsas=parseInt(cantidadBolsas);

    while(isNaN (cantidadBolsas)) 
    {
      cantidadBolsas=prompt("Reingrese una cantidad de bolsas");
      cantidadBolsas=parseInt(cantidadBolsas);
      
    }
  
    precio=prompt("ingrese un precio");
    precio=parseInt(precio);

    while(isNaN(precio) || precio<1)
    {
      precio=prompt("Reingrese un precio");
    }

    


   
   
    if(ingreso =="cal")
    {
        cantidadCal=cantidadCal + cantidadBolsas;
        precioCal= precioCal +  precio ;
    }  
    else
    {
      if(ingreso =="cemento")
      {
        cantidadCemento=cantidadCemento + cantidadBolsas;
        precioCemento = precioCemento + precio;
        
      }
      else
      {
        if(ingreso =="arena")
        {
          cantidadArena=cantidadArena + cantidadBolsas;
          precioArena = precioArena + precio;
          
        }
      }
    }
       
    respuesta = confirm("Desea seguir ingresando productos??");
  }
  
  contadorBolsas = cantidadArena + cantidadCal + cantidadCemento;
  
  total=precio*contadorBolsas;
  
  if(contadorBolsas<10)
  {
    precioBruto= precio*contadorBolsas;
    document.write("debe pagar $" + precioBruto + " porque no tiene descuento");
  }
  else
  {
    if(contadorBolsas>10)
    {
      total=total*0.85;
    }
    else
    {
      if(contadorBolsas>30)
      {
        total=total*0.75;
      }
    }
  }
  
  if(cantidadCemento>cantidadCal && cantidadCemento>cantidadArena)
  {
      tipoProducto="cemento";
  }
  else 
  {
    if(cantidadCal>cantidadCemento && cantidadCal>cantidadArena)
    {          
      tipoProducto="cal";
    }
    else
    {
      if(cantidadArena>cantidadCemento && cantidadArena>cantidadCal)
      {              
        tipoProducto="arena";
      }
    }
  }

  if(precioCemento>precioArena && precioCemento>precioCal)
  {
      productoCaro="cemento";
  }
  else 
  {
    if(precioCal>precioArena && precioCal>precioCal)
    {          
      productoCaro="cal";
    }
    else
    {
      if(precioArena>precioCemento && precioArena>precioCal)
      {              
        productoCaro="arena";
      }
    }
  }

  
  document.write("<br>" + "Debe pagar $" + total + "porque se le hizo un descuento");
  document.write("<br>" + tipoProducto + " tiene la mayor cantidad de bolsas");
  document.write("<br>" + productoCaro + " es el tipo de producto mas caro");
  
}
