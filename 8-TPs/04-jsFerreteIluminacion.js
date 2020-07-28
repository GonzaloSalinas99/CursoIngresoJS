/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

function CalcularPrecio () 
{
   var cantidadDeLamparas;
   var marcaDeLamparas;
   var precioFinal;
    
   cantidadDeLamparas = txtIdCantidad.value;
   cantidadDeLamparas = parseInt (cantidadDeLamparas);
   marcaDeLamparas = document.getElementById("Marca").value;
   precioFinal= 35;
   
   if(cantidadDeLamparas>5)
   { 
       txtIdprecioDescuento.value= cantidadDeLamparas*(precioFinal-(precioFinal* 0.5));
   }
   else 
   {
       if(cantidadDeLamparas==5)
       switch (marcaDeLamparas)
       {
           case "ArgentinaLuz":
                txtIdprecioDescuento.value = 5*(precioFinal-(precioFinal*0.4));
                break;

            default:
                txtIdprecioDescuento.value = 5*(precioFinal-(precioFinal*0.3));
                break;
       }
       else 
       {
           if (cantidadDeLamparas==4)
           switch (marcaDeLamparas)
           {
               case "ArgentinaLuz":
                case "FelipeLamparas":
                txtIdprecioDescuento.value = 4 *(precioFinal-(precioFinal*0.25));
                break;  
                
                default:
                    txtIdprecioDescuento.value=4*(precioFinal-(precioFinal*0.2));
                    break;
                      
        }
        else
       {
           if (cantidadDeLamparas==3)
           switch (marcaDeLamparas) 
           {
                case "ArgentinaLuz":
                    txtIdprecioDescuento.value = 3*(precioFinal-(precioFinal*0.15));
                    break;
                case "FelipeLamparas":
                    txtIdprecioDescuento.value = 3*(precioFinal-(precioFinal*0.1));
                    break;
                default:
                    txtIdprecioDescuento.value = 3*(precioFinal-(precioFinal*0.05));
                    break;
           }
        }   
       }
   }









   /*else 
  {
       if(cantidadDeLamparas==5 && marcaDeLamparas=="ArgentinaLuz")
       {
           txtIdprecioDescuento.value = cantidadDeLamparas*(precioFinal-(precioFinal* 0.4));
       }
       else
       { 
           if(cantidadDeLamparas==5 && marcaDeLamparas!="ArgentinaLuz") 
           { 
               txtIdprecioDescuento.value = cantidadDeLamparas*(precioFinal-(precioFinal* 0.3));
           }
           else
           {
               if(cantidadDeLamparas==4 && marcaDeLamparas=="ArgentinaLuz")
               {
                   txtIdprecioDescuento.value = cantidadDeLamparas*(precioFinal-(precioFinal* 0.25));
               }
               else
               {   
                   if(cantidadDeLamparas==4 && marcaDeLamparas=="FelipeLamparas")
                   {
                       txtIdprecioDescuento.value = cantidadDeLamparas*(precioFinal-(precioFinal* 0.25));
                   }
                   else 
                   {
                       if(cantidadDeLamparas==4 && marcaDeLamparas!="ArgentinaLuz" &&  marcaDeLamparas!="FelipeLamparas")
                       {
                           txtIdprecioDescuento.value = cantidadDeLamparas*(precioFinal-(precioFinal* 0.2));
                       }
                       else 
                       {
                           if(cantidadDeLamparas==3 && marcaDeLamparas=="ArgentinaLuz")
                           {
                               txtIdprecioDescuento.value = cantidadDeLamparas*(precioFinal-(precioFinal* 0.15));
                           }
                           else
                           {
                               if(cantidadDeLamparas==3 && marcaDeLamparas=="FelipeLamparas")
                               {
                                   txtIdprecioDescuento.value = cantidadDeLamparas*(precioFinal-(precioFinal* 0.1));
                               }
                               else
                               {
                                   if(cantidadDeLamparas==3&&marcaDeLamparas!="ArgentinaLuz"&&marcaDeLamparas!="FelipeLamparas")
                                   {
                                       txtIdprecioDescuento.value = cantidadDeLamparas*(precioFinal-(precioFinal* 0.05));
                                   }
                                   
                                   
                               }
                           }
                       }
                   }
               }
           }
       }
   } */
     if(txtIdprecioDescuento.value>120)
    {
       alert ("$" + (txtIdprecioDescuento.value*0.1) + " de mas tiene que pagar por IIBB" );
        txtIdprecioDescuento.value = (txtIdprecioDescuento.value*1.1);
    }
    
       
}


