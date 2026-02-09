let palabras = [];

// Se crea función para inicializar el programa (será llamada por evento onclick)
function iniciar() {
    console.log("Bienvenido a la Aplicación");
    // Se solicita confirmación por prompt para iniciar programa y se almacena opción en variable inicio, convirtiéndola a número
    let inicio = 0;
    while (inicio == 0) {
        inicio = parseInt(prompt("Por favor elija:\n1.Iniciar Calculadora\n2.Iniciar Analizador de Palabras\n3.Salir"));
        // Nos aseguramos que se ingrese una de las opciones válidas, de lo contrario se sale del programa
        if (inicio == 1 || inicio == 2) {
            console.log("Ingresando a la Aplicación...");
            programas(inicio);
        } else if (inicio == 3) {
            // Si la variable inicio es 3 se sale del programa, damos a inicio el valor false para salir del bucle.
            console.log(inicio);
            inicio = false;
            console.log("Saliendo del programa");
            break;
        }
        else {
            alert("Por favor ingrese una alternativa válida");
            console.log("Por favor ingrese una alternativa válida");
            inicio = 0;
        }
    }
}

function programas(inicio) {
    switch (inicio) {
        case 1:
            // Primera opción: Calculadora. Solicitamos operación deseada
            let opcion = parseInt(prompt("Elija una opción:\n1.Sumar\n2.Restar\n3.Multiplicar\n4.Dividir"));
            
            // Encapsulamos solicitud de números por prompt en función que devuelve arreglo
            function numeros() {
                let num1 = parseInt(prompt("Ingrese el primer número"));
                let num2 = parseInt(prompt("Ingrese el segundo número"));
                return [num1,num2];
            }
            if (opcion == 1) {
                let numer = numeros();
                // Llamamos a función sumar y valor devuelto es desplegado en alert 
                alert(sumar(numer[0],numer[1]));
            } else if (opcion == 2) {
                let numer = numeros();
                // Llamamos a función restar y valor devuelto es desplegado en alert
                alert(restar(numer[0],numer[1]));
            } else if (opcion == 3) {
                let numer = numeros();
                // Llamamos a función multiplicar y valor devuelto es desplegado en alert
                alert(multi(numer[0],numer[1]));
            } else if (opcion == 4) {
                let numer = numeros();
                // Llamamos a función dividir y valor devuelto es desplegado en alert
                alert(divi(numer[0],numer[1]));
            } else {
                alert("Por favor seleccione una opción válida");
            }
            // Volvemos a preguntar por qué sección de la aplicación usar
            break;
        case 2:
            // Programa de palabras
            console.log("Programa de palabras");

            let altern = parseInt(prompt("Programa de Análisis de Palabras\nElija una opción:\n1. Ingresar nueva palabra\n2.Mostrar palabras\n3.Filtrar palabras por inicial\n4.Filtrar palabras por largo mayor a...\n5.Filtrar palabras por largo menor a..."));
            if (altern == 1) {
                // Llamamos a función para ingresar palabra
                ingresarPalabra();
            } else if (altern == 2) {
                if (palabras.length == 0) {
                    alert("No hay palabras guardadas");
                    ingresarPalabra();
                } else {
                    mostrarArreglo();
                }
            } else if (altern == 3) {
                if (palabras.length == 0) {
                    alert("No hay palabras guardadas");
                    ingresarPalabra();
                } else {
                    let ini = prompt("Ingrese letra");
                    alert(filtrarInicial(ini));
                }
            } else if (altern == 4) {
                if (palabras.length == 0) {
                    alert("No hay palabras guardadas");
                    ingresarPalabra();
                } else {
                    let mayorA = prompt("Ingrese número");
                    alert(filtrarMayores(mayorA));
                }
            } else if (altern == 5) {
                if (palabras.length == 0) {
                    alert("No hay palabras guardadas");
                    ingresarPalabra();
                } else {
                    let menorA = prompt("Ingrese número");
                    alert(filtrarMenores(menorA));
                }
            }
            
            break;
    }
    // Nos deshacemos del ciclo while innecesario llamando nuevamente a la función iniciar
    iniciar();
}

// Funciones de Calculadora

function sumar(num1,num2) {
    let resul = num1 + num2;
    const msj = num1 + " + " + num2 + " = " + resul;
    return msj;
}

function restar(num1,num2) {
    let resul = num1 - num2;
    const msj = num1 + " - " + num2 + " = " + resul;
    return msj;
}

function multi(num1,num2) {
    let resul = num1 * num2;
    const msj = num1 + " x " + num2 + " = " + resul;
    return msj;
}

function divi(num1,num2) {
    let resul = num1 / num2;
    const msj = num1 + " : " + num2 + " = " + resul;
    return msj;
}

// Funciones de Palabras

function ingresarPalabra() {
    let palabra = prompt("Ingrese una palabra").toLocaleString('es');
    // Verificamos que no se ingresen números o campos vacíos
    while (!isNaN(parseInt(palabra)) || palabra == "") {
        console.log(parseInt(palabra));
        palabra = prompt("Por favor, ingrese sólo palabras:");
    }
    palabras.push(crearObjeto(palabra));
    console.log(palabras);
    alert("Usted ingresó la palabra: " + palabra + "\nSu palabra tiene " + palabra.length + " letras");
}

function crearObjeto(pal) {
    let objeto = {
        palabra: pal,
        retornarLargo: function() {
            return this.palabra.length;
        },
        retornarInicial: function() {
            return this.palabra[0];
        }
    }
    return objeto;
}

function mostrarArreglo() {
    let msj = "";
    console.log(msj);
    for (let i = 0; i < palabras.length; i++) {
        console.log(palabras[i]);
        let ord = i+1;
        msj += "La palabra " + ord + " es : " + palabras[i].palabra + "\n";    
        console.log(msj);
    }
    console.log(msj);
    alert(msj);
}

function filtrarInicial(ini) {
    let filtrado = "";
    let contar = 0;
    let msj = "";
    palabras.forEach(pal => {
        if (pal.retornarInicial() == ini) {
            filtrado += (pal.palabra) + "\n";
            contar += 1;
        }
    })
    msj = "Se encontraron " + contar + " palabras que comienzan con " + ini + ":\n" + filtrado;
    return msj;
}

function filtrarMayores(num) {
    let filtrado = "";
    let contar = 0;
    let msj = "";
    palabras.forEach(pal => {
        if (pal.retornarLargo() >= num) {
            filtrado += (pal.palabra) + "\n";
            contar += 1;
        }
    })
    msj = "Se encontraron " + contar + " palabras con " + num + " letras o más:\n" + filtrado;
    return msj;
}

function filtrarMenores(num) {
    let filtrado = "";
    let contar = 0;
    let msj = "";
    palabras.forEach(pal => {
        if (pal.retornarLargo() <= num) {
            filtrado += (pal.palabra) + "\n";
            contar += 1;
        }
    })
    msj = "Se encontraron " + contar + " palabras con " + num + " letras o menos:\n" + filtrado;
    return msj;
}