

let audioItems = document.querySelectorAll('audio')
console.log (audioItems)


function playAudio(key){
    audioItems.forEach(audio=>{
        let audio_key = audio.getAttribute('data-key')
        if(audio_key == key){
            audio.play();
        }

    })
}


document.querySelectorAll('.key').forEach(btn=>{
  
    let audiokey = btn.getAttribute('data-key')
    console.log(audiokey)
    btn.addEventListener('click', function(e){
        console.log(e.target.parentElement)
        playAudio(audiokey)
    })
})