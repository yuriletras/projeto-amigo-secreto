let nomes = [];

const botaoAdicionar = document.querySelector('.button-add');
botaoAdicionar.addEventListener('click', adicionarAmigo);

function adicionarAmigo() {
    const nome = document.getElementById("amigo").value;
    if (nome === "") {
        alert("Digite um nome válido!!");
        return;
    }
    nomes.push(nome);
    atualizarLista();
    document.getElementById("amigo").value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    nomes.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nomes.length === 0) {
        alert("Adicione pelo menos um nome");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nomes.length);
    const amigoSecreto = nomes[indiceAleatorio];
    nomes.splice(indiceAleatorio, 1);

    document.getElementById("resultado").textContent = `O amigo secreto é ${amigoSecreto}`;
    atualizarLista();
}

function reiniciarJogo() {
    if (confirm("Tem certeza que deseja reiniciar o jogo?")) {
        nomes = [];
        atualizarLista();
        document.getElementById("resultado").textContent = "";
    }
}