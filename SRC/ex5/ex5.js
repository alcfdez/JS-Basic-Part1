//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.



//1º reservar-crear espacio HTML donde queremos imprimir la operación
//2º crear mensajes para recoger dos numeros
//3º crear las variables de los dos  valores que necesitamos
//4º hacer la operación de cuál es mayor
//5º imprimir resultado


let firstNumber = prompt("Escribe un número");
let secondNumber = prompt("Escribe otro número");

if  (firstNumber>secondNumber)  {
    document.write(firstNumber);
}
else  {
    document.write(secondNumber);
}