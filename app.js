let amigos = [];

function validar() {
    let nome = document.getElementById('amigo').value.trim(); 
    if (nome === '') {
        alert('O campo não pode estar vazio');
        return false;
    }
    return true;
}

function adicionarAmigo() {
    if (validar()) {
        let nomeAmigo = document.getElementById('amigo').value.trim();
        amigos.push(nomeAmigo);
        
        console.log(`Amigo "${nomeAmigo}" adicionado com sucesso!`);
        
        document.getElementById('amigo').value = ''; 
        
        atualizarLista();
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    amigos.forEach((amigo) => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item); 
    });
}


function sortearAmigo(){
    if (amigos.length == ''){
        alert('Não há amigos para sortear');
    return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O sorteado foi: <strong>${sorteado}</strong></li>`;
}