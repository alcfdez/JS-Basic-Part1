/*Escribe un programa que pida el nombre del usuario con un input y escriba un texto que diga “Hola <nombre-de-usuario>”


1º reservar-crear espacio HTML donde queremos imprimir la operación con un input usuario pueda escribir
2ºSobre el input de texto anterior, colocar un texto que diga "Escribe tu nombre de usuario"
3ºCrear input de texto 
4ºCrear botón al lado del input que diga "enviar"
5ºCrear variable js para obtener el nombre del input
6º crear variable sume texto saludo Hola más el nombre del input
7º crear variable sume las otras dos para obtener frase completa
8º hcaer una función para que imprima el texto completo en pantalla

*/

    
   


let inputUserName = document.getElementById('user-name')
   
let btnClick= document.getElementById('btn-click') ;

let result= document.getElementById('result')


btnClick.addEventListener ('click', inserText)

function userName() {
    return inputUserName.value;
    console.log(userName);
}

function inserText() {
    let name= userName();
    let respuesta= `Hola  ${name} `
    result.innerHTML=respuesta;
}

inserText();