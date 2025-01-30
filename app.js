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

document.getElementById('amigo').addEventListener("keypress", function(event) {
    if (event.key === "Enter") {  // Verifica se a tecla pressionada foi "Enter"
        insertName();  // Chama a função
    }
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

