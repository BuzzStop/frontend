var init = false;

function init_speech(){
    var fname="js/vendor/mespeak/voices/en/en-wm.json";
    meSpeak.loadConfig("js/vendor/mespeak_config.json");
    meSpeak.loadVoice(fname, voiceLoaded);
    init = true;
}

function speak(text) {
    if(!init){
        init_speech();
    }

    meSpeak.speak(text);
}

function voiceLoaded(success, message) {
  if (!success) {
    alert("Failed to load a voice: "+message);
  }
}
