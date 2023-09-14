const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const form = document.querySelector('#form')
const btn = document.querySelector('#btn')
const input = document.querySelector("#input");
const scoreEl = document.querySelector('#score');
function questionMaker() {
    num1.innerText = Math.floor(Math.random() * 10);
    num2.innerText = Math.floor(Math.random() * 10);
}
questionMaker()

let score = 0;
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let ans = Number(input.value);
    if (Number(num1.textContent) * Number(num2.textContent) === ans) {
        console.log("congratulations")
        input.value = " ";
        questionMaker()
        score++;

    }
    else {
        console.log("oh nno!");
        score > 0 ? score-- : score = 0;
    }
    scoreEl.innerHTML = `Score: ${score}`
})

