const audioHandler = {}

function playAudioOnce(audio){
    if(!audioHandler[audio]){
        const newAudio = new Audio(`./audio/${audio}.wav`)
        audioHandler[audio] = newAudio
    }

    audioHandler[audio].pause()
    audioHandler[audio].currentTime = 0
    audioHandler[audio].play()
}

function playFade(audio){
    audio.volume = 0
    audio.play()
    setTimeout(() => audio.volume = 0.2 , 20)
    setTimeout(() => audio.volume = 0.4 , 40)
    setTimeout(() => audio.volume = 0.6 , 60)
    setTimeout(() => audio.volume = 0.8 , 80)
    setTimeout(() => audio.volume = 1 , 100)

}

function stopFade(audio){
    setTimeout(() => audio.volume = 0.8 , 30)
    setTimeout(() => audio.volume = 0.6 , 60)
    setTimeout(() => audio.volume = 0.4 , 90)
    setTimeout(() => audio.volume = 0.2 , 120)
    setTimeout(() => audio.volume = 0 , 150)
    setTimeout(() => {
        audio.pause()
        audio.currentTime = 0
    }, 180)

}
