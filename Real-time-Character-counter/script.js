const textareaEl = document.querySelector('.textarea');
const totalCounterEl = document.querySelector('#total-counter')
const remainingCounterEl = document.querySelector("#remaining-counter")

textareaEl.addEventListener("keyup", (dets) => {
    updateCounter();
})

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length;
    remainingCounterEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}

updateCounter();