const btnEl = document.querySelector('.btn');
const videoContainer = document.querySelector('.trailarContainer')
const videoEl = document.querySelector('.trailarContainer> video')
const closeBtnEl = document.querySelector('#CloseBtn')
btnEl.addEventListener('click', () => {
    videoContainer.classList.add("active");
    videoEl.play(); //to play the video ;

})
closeBtnEl.addEventListener('click', () => {
    videoContainer.classList.remove("active");
    videoEl.pause(); // to pause the video
    videoEl.currentTime = 0; // to play video from start
})