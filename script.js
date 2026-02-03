console.log("Bienvenido a la Calculadora en Consola");

let inicio = prompt("Iniciar Calculadora?\n1.Sí\n2.No");

switch (inicio) {
    case "1":
        let opcion = prompt("Elija una opción:\n1.Sumar\n2.Restar\n3.Multiplicar\n4.Dividir");
        let num1;
        let num2;

        if (opcion == 1) {
            num1 = parseInt(prompt("Ingrese el primer número"));
            num2 = parseInt(prompt("Ingrese el segundo número"));
            let resul = num1+num2;
            alert(num1 + " + " + num2 + " = " + resul);
        }
        if (opcion == 2) {
            num1 = parseInt(prompt("Ingrese el primer número"));
            num2 = parseInt(prompt("Ingrese el segundo número"));
            let resul = num1-num2;
            alert(num1 + " - " + num2 + " = " + resul);
        }
        if (opcion == 3) {
            num1 = parseInt(prompt("Ingrese el primer número"));
            num2 = parseInt(prompt("Ingrese el segundo número"));
            let resul = num1*num2;
            alert(num1 + " x " + num2 + " = " + resul);
        }
        if (opcion == 4) {
            num1 = parseInt(prompt("Ingrese el primer número"));
            num2 = parseInt(prompt("Ingrese el segundo número"));
            let resul = num1/num2;
            alert(num1 + " : " + num2 + " = " + resul);
        }
        break;
    case "2":
        console.log("Saliendo del programa");
        break;
}

