/*var supportMsg = document.getElementById('msg');

if ('speechSynthesis' in window) {
    //supportMsg.innerHTML = 'Votre navigateur supporte la synthese de parole.';
} else {
    supportMsg.innerHTML = "Desole, votre navigateur ne supporte pas la synthese de la parole.";
}

var button = document.getElementById('speak');
var speechMsgInput = document.getElementById('speech-msg');
var voiceSelect = document.getElementById('voice');
// Get the attribute controls.
var volumeInput = document.getElementById('volume');
var rateInput = document.getElementById('rate');
var pitchInput = document.getElementById('pitch');

button.addEventListener("click", e => {
    console.log(speechMsgInput.value)
    speak(speechMsgInput.value)
});//speak(speechMsgInput.textContent));
*/
// Récupère la liste des voix et remplir option
function loadVoices() {
    
    console.log("loadVoices()")
    var voices = speechSynthesis.getVoices();
    // parcourir la liste des voix.
    voices.forEach(function(voice, i) {
        var option = document.createElement('option');
        option.value = voice.name;
        option.innerHTML = voice.name;
        // Add the option to the voice selector.
        voiceSelect.appendChild(option);
    });
}
loadVoices();

window.speechSynthesis.onvoiceschanged = function(e) { loadVoices(); };

function speak(text) {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    console.log("message = " +text)

    // Set les attributsyo
    
    msg.volume = parseFloat(0.2);
    msg.rate = parseFloat(2);
    msg.pitch = parseFloat(0.7);
    // Si une voix a été sélectionnée, faire les modifications nécessaires.
    if (voiceSelect.value) {
        msg.voice = speechSynthesis.getVoices().filter(function(voice)
        { 
            return voice.name == voiceSelect.value; 
        })[0];
    }
    // Ajouter ce texte (parole) à la liste de synthèse.
    window.speechSynthesis.speak(msg);
    console.log("on est sensé entendre quelque chose");
}
