const audios = [
    { palabra: "manzana", src: "manzana.mp3" },
    { palabra: "banana", src: "banana.mp3" },
    { palabra: "pera", src: "pera.mp3" }
];

function playRandomAudio() {
    const audioPlayer = document.getElementById("audioPlayer");
    const randomAudio = audios[Math.floor(Math.random() * audios.length)];
    audioPlayer.src = randomAudio.src;
    audioPlayer.dataset.correctWord = randomAudio.palabra;
    audioPlayer.play();
}

document.getElementById("playAudio").addEventListener("click", playRandomAudio);

document.getElementById("checkWord").addEventListener("click", function() {
    const userInput = document.getElementById("wordInput").value.trim().toLowerCase();
    const correctWord = document.getElementById("audioPlayer").dataset.correctWord;
    const result = document.getElementById("result");

    if (userInput === correctWord) {
        result.textContent = "¡Correcto!";
        result.style.color = "green";
        result.classList.add('correct-animation');

        setTimeout(() => {
            resetGame();
        }, 2000); // Espera 2 segundos antes de reiniciar
    } else {
        result.textContent = "Incorrecto, inténtalo de nuevo.";
        result.style.color = "red";
        result.classList.add('incorrect-animation');
    }

    setTimeout(() => {
        result.classList.remove('correct-animation', 'incorrect-animation');
    }, 1000);
});

function resetGame() {
    document.getElementById("wordInput").value = ""; // Limpiar el campo de texto
    document.getElementById("result").textContent = ""; // Limpiar el mensaje de resultado
    playRandomAudio(); // Reproducir un nuevo audio
}


