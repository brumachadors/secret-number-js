const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.continuous = false;
recognition.interimResults = false;

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
};

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span> 
    `
};

var pushToTalk = document.getElementById('push-to-talk');
var recordingIcon = document.getElementById('recording-active');
const recordingAudio = new Audio('assets/recording-sound.mp3');

pushToTalk.addEventListener('click', function () {
        recognition.start();
        recordingAudio.play();
        pushToTalk.classList.add('btn-activate');
        recordingIcon.style.display = 'block';
    }
);

recognition.onspeechend = function () {
    recognition.stop();
    pushToTalk.classList.remove('btn-activate');
    recordingIcon.style.display = 'none';
};
