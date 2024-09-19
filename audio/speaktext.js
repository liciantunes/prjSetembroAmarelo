
// Função para ler o texto
function speakText(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Sua plataforma não suporta a síntese de voz.");
    }
}

// Adiciona eventos de mouse sobre os elementos com a classe "data-speech"
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('[data-speech]').forEach(element => {
        element.addEventListener('mouseover', function() {
            const textToRead = this.getAttribute('data-speech');
            speakText(textToRead);
        });
    });
});
