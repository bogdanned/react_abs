// Call this to load voices
window.speechSynthesis.getVoices();


export default (text) => {
    var msg = new SpeechSynthesisUtterance(text);
    msg.voice = window.speechSynthesis.getVoices()[1]; //Each number is a diffrent type of speaker
    msg.voiceURI = 'native';
    window.speechSynthesis.speak(msg);
}


