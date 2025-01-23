let nomes = [];

const botaoAdicionar = document.querySelector('.button-add');
botaoAdicionar.addEventListener('click', adicionarAmigo);

function adicionarAmigo() {
    const nomeLocal = document.getElementById("amigo").value;
    if (nomeLocal === "") {
        alert("Por favor, siga digitando um nome válido!");
        return;
    }
        const regex = /^[a-zA-Z\s]+$/;
        if (!regex.test(nomeLocal)) {
            alert("Digite um nome válido (apenas letras e espaços)");
            return;
    }
        if (nomes.includes(nomeLocal)) {
            alert("Este nome já foi adicionado. Digite outro nome.");
            return;
    }
    nomes.push(nomeLocal);
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