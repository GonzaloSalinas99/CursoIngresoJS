function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt (edad);

	if(edad>12 && edad<18)
	{
		alert ("usted es adolescente");
	}

}// o tambien se puede utilizar 
	//if(edad>12)
	//   if(edad < 18)

		// alert ("usted es adolescente")

		
		// entonces lo que hace es que primero evalua la condicion y si se ejecuta, pasa al otro if 
		// entonces si tambien se cumple la condicion del segundo if, se muestra el mensaje. 
		// pero si no se cumpliera el primer if, no pasaria al segundo.


		