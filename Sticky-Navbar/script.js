const navbarEl = document.querySelector('nav');
const page2El = document.querySelector('.page2');


console.log(navbarEl.offsetHeight);
window.addEventListener('scroll',()=>{
    if(window.scrollY > page2El.offsetTop - navbarEl.offsetHeight){
        navbarEl.classList.add("active")
    }
    else{
        navbarEl.classList.remove("active")
    }
})