var init = false;

function init_speech(){
    console.log("speeck init");
    var fname="js/vendor/mespeak/voices/en/en-wm.json";

    if(typeof meSpeak !== undefined){
        meSpeak.loadConfig("js/vendor/mespeak_config.json");
        meSpeak.loadVoice(fname, voiceLoaded);
        init = true;
    }else{

    }

}

function speak(text) {
    console.log("speaking");
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
