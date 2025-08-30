// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    const input = document.getElementById('amigo');
    const nombre =  input.value.trim();

    if (nombre === ''){
        alert("Debes colocar un nombre valido.");
        return;
    }

    amigos.push(nombre);

    const lista = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);

    input.value = '';
}

function sortearAmigo(){
    if(amigos.length<2){
        alert('Deben de ser mas de dos amigos para poder jugar');
        return;
    }

    let sorteados = [...amigos];
    for (let i = sorteados.length-1; i>0; i--){
        let random = Math.floor(Math.random() * (i+1));
        [sorteados[i],sorteados[random]] = [sorteados[random],sorteados[i]];
    } 

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for(let i = 0; i < sorteados.length; i++){
        let actual = sorteados[i];
        let amigoSecreto = sorteados[(i+1) %sorteados.length];

        const li =document.createElement('li');
        li.textContent = `El amigo secreto de ${actual} es ${amigoSecreto}`;
        resultado.appendChild(li);

    }



}