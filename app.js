//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
function insertName(){
    let input = document.querySelector('input');
    let name = input.value;
    if (name){
        listaAmigos.push(name);
        exibirTexto();
        input.value = "";
    }else{
        alert('Por favor, insira um nome!');
    }
    console.log(listaAmigos);

}

function sortearAmigo(){
    let nomeAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let nomeSorteado = listaAmigos[nomeAleatorio];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    let item = document.createElement("li");
    item.textContent = nomeSorteado;
    resultado.appendChild(item);
}

document.getElementById('amigo').addEventListener("keypress", function(event) {
    if (event.key === "Enter") {  // Verifica se a tecla pressionada foi "Enter"
        insertName();  // Chama a função
    }// Essa conditional vai fazer com que a função de Inserir nome tambem funione ao clicar enter.
});

function exibirTexto(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    listaAmigos.forEach(nome => {
        let item = document.createElement("li"); // Cria um novo <li>
        item.textContent = nome; // Define o texto do <li>
        lista.appendChild(item); // Adiciona à lista <ul>
    });
}

