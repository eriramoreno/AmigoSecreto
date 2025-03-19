// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

function agregarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nombre = amigoInput.value.trim();

    if (nombre !== "") {
        amigos.push(nombre);
        mostrarAmigos();
        amigoInput.value = ""; // Limpiar el input
    }
}

function mostrarAmigos() {
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizarla
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos dos amigos para sortear.");
        return;
    }

    const amigoSeleccionado = amigos[Math.floor(Math.random() * amigos.length)];
    alert(`Tu amigo secreto es: ${amigoSeleccionado}`);
}