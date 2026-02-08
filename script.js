
// Se crea función para inicializar el programa (será llamada por evento onclick)
function start() {
    console.log("Bienvenido a la Aplicación");

    // Se solicita confirmación por prompt para iniciar programa y se almacena opción en variable inicio, convirtiéndola a número
    let inicio = parseInt(prompt("Por favor elija:\n1.Iniciar Calculadora\n2.Iniciar Analizador de Palabras\n3.Salir"));
    
    // Nos aseguramos que se ingrese una de las opciones válidas, de lo contrario se sale del programa
    if (inicio == 1 || inicio == 2 || inicio == 3) {
        console.log("Ingresando a la Aplicación...");
    } else {
        console.log("Por favor ingrese una de las alternativas");
        return;
    }

    // Se inicia bucle que vuelve a ejecutar programa si la variable inicio existe
    while (inicio) {
        switch (inicio) {
            case 1:
                // Primera opción: Calculadora. Solicitamos opciones por prompt
                let opcion = parseInt(prompt("Elija una opción:\n1.Sumar\n2.Restar\n3.Multiplicar\n4.Dividir"));
                let num1;
                let num2;
                if (opcion == 1) {
                    // Suma
                    num1 = parseInt(prompt("Ingrese el primer número"));
                    num2 = parseInt(prompt("Ingrese el segundo número"));
                    let resul = num1+num2;
                    alert(num1 + " + " + num2 + " = " + resul);
                } else if (opcion == 2) {
                    // Resta
                    num1 = parseInt(prompt("Ingrese el primer número"));
                    num2 = parseInt(prompt("Ingrese el segundo número"));
                    let resul = num1-num2;
                    alert(num1 + " - " + num2 + " = " + resul);
                } else if (opcion == 3) {
                    // Multiplicación
                    num1 = parseInt(prompt("Ingrese el primer número"));
                    num2 = parseInt(prompt("Ingrese el segundo número"));
                    let resul = num1*num2;
                    alert(num1 + " x " + num2 + " = " + resul);
                } else if (opcion == 4) {
                    // División
                    num1 = parseInt(prompt("Ingrese el primer número"));
                    num2 = parseInt(prompt("Ingrese el segundo número"));
                    let resul = num1/num2;
                    alert(num1 + " : " + num2 + " = " + resul);
                } else {
                    alert("Por favor seleccione una de las opciones");
                }
                // Volvemos a preguntar por qué sección de la aplicación usar
                inicio = parseInt(prompt("Seguir? Seleccione:\n1.Calculadora\n2.Analizador de Palabras\n3.Salir"));
                break;
            case 2:
                // Programa de palabras
                console.log("Programa de palabras");
                alert("Programa en construcción...");
                // Volvemos a preguntar por qué sección de la aplicación usar
                inicio = parseInt(prompt("Seguir? Seleccione:\n1.Calculadora\n2.Analizador de Palabras\n3.Salir"));
                break;
            case 3:
                // Si la variable inicio es 3 se sale del programa, damos a inicio el valor false para salir del switch y del bucle.
                inicio = false;
                break;
        }
    }
    console.log("Saliendo del programa");
}