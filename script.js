console.log("Bienvenido a la Calculadora en Consola");
console.log("Elija una opción:");
console.log("1.Sumar");
console.log("2.Restar");
console.log("3.Multiplicar");
console.log("4.Dividir");

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