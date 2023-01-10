//Escribe un programa que pida una frase y escriba las vocales que aparecen




//1º reservar-crear espacio HTML donde queremos imprimir el ejercicio
//2º crear espacio en js para que el usuario escriba una frase y dar en el boton con un elemento de escucha
//3º recuperar la frase del usuario
//4º en esa frase contar qué vocales aparecen
//5º imprimir el resultado en pantalla


const inputUserPhrase= document.getElementById('user-phrase');
const btnAñadir = document.getElementById('btn-añadir');

const result = document.getElementById ('result')

btnAñadir.addEventListener('click', renderVocales)


function recogerUserPhrase(){
    return inputUserPhrase.value;
}




function renderVocales(){
    const phrase= recogerUserPhrase();
    const matchVocal = phrase.match(/[aeiou]/gi);
    const respuesta= `La frase introducida tiene  las vocales ${matchVocal} `

    result.innerHTML = respuesta
}


renderVocales()
