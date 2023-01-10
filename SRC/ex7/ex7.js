//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a




//1º reservar-crear espacio HTML donde queremos imprimir el ejercicio
//2º crear espacio en js para que el usuario escriba una frase y dar en el boton con un elemento de escucha
//3º recuperar la frase del usuario
//4º en esa frase contar cuantas veces aparece la letra a
//5º imprimir el resultado en pantalla


const inputUserPhrase= document.getElementById('user-phrase');
const btnAñadir = document.getElementById('btn-añadir');

const result = document.getElementById ('result')

btnAñadir.addEventListener('click', renderNumberOfAs)


function recogerUserPhrase(){
    return inputUserPhrase.value;
}

function countAs(phrase){
    let count = 0;

    for (let index = 0; index <= phrase.length; index++) {
        if (phrase.charAt(index) === 'a') {
            count++
        }
        
    }
    return count;
}

function renderNumberOfAs(){
    const phrase= recogerUserPhrase();
    const numberOfAs = countAs (phrase);
    const respuesta= `La frase introducida tiene ${numberOfAs} "Aes"`

    result.innerHTML = respuesta
}


renderNumberOfAs()
