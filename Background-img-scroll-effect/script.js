const hero = document.querySelector('.hero')

window.addEventListener('scroll',()=>{
    updateImage();
})

function updateImage() {
    hero.style.opacity  = 1 - window.pageYOffset/1000;
    hero.style. backgroundSize = 160 - window.pageYOffset/10 + "%"
}