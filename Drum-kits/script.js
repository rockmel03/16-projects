let drumKits = ['hard-kick', 'kick', 'snare', 'tom'];

const kitsContainer = document.querySelector('.kits-container');

drumKits.forEach((kit)=>{
    let kitEl = document.createElement('div');
    kitEl.classList.add('kits');
    kitEl.innerHTML = `<h3>${kit}</h3>`;
    kitEl.style.background = `url(./images/${kit}.jpg)`
    kitsContainer.append(kitEl)
    
    let audioEl = document.createElement('audio');
    audioEl.src = `./sounds/${kit}.mp3`;
    kitEl.appendChild(audioEl)

    kitEl.addEventListener('click',()=>{
        audioEl.play();
    })
    window.addEventListener('keydown',(e)=>{
        if(e.key === kit.slice(0,1)){
            audioEl.play();
            kitEl.style.transform = 'scale(.9)';
            
            setTimeout(() => {
            kitEl.style.transform = 'scale(1)'
            }, 100);
        }
    })
})