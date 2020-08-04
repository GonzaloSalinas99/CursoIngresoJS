/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	var numero;
    var respuesta; // undefined
    var maximo; // undefined
    var minimo;
    var primeraVez;
    var contador;
    // '' undefined null 0 false
    primeraVez = true;
    contador = 0;

    do {
        do {
            numero = prompt("Ingrese un numero");
            numero = parseInt(numero);
        } while (isNaN(numero));

        if (primeraVez == true) {
            primeraVez = false;

            maximo = numero;
            minimo = numero;
        } else {   
            if (numero > maximo) {
                maximo = numero;
            } 
            
            if (numero < minimo) {
                minimo = numero;
            }
        }

        contador = contador + 1;
        respuesta = confirm("Desea ingresa otro numero");
    } while (respuesta == true);


	
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN