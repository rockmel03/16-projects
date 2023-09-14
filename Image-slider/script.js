const prevBtnEl = document.querySelector('.prev');
const nextBtnEl = document.querySelector('.next');
const imgContainerEl = document.querySelector(".image-container")
const imgEl = document.querySelectorAll('.image-container img')
let currentImg = 1;
let timeout;

prevBtnEl.addEventListener('click', () => {
    clearTimeout(timeout)
    currentImg--;
    updateImg();
})
nextBtnEl.addEventListener('click', () => {
    clearTimeout(timeout)
    currentImg++;
    updateImg();
})

updateImg();

function updateImg(){
    if(currentImg > imgEl.length){
        currentImg = 1;
    }else if(currentImg < 1){
        currentImg = imgEl.length;
    }
    imgContainerEl.style.transform = `translateX(${(currentImg - 1)*-500}px)`;

    timeout = setTimeout(() => {
        currentImg++;
        updateImg();
    }, 3000);
    
};
