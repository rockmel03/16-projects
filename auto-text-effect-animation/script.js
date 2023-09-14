let textContainer = document.querySelector('.container');

let career = ['youtuber', 'web developer', 'freelancer', 'web designer'];

let careerIndex = 0;
let charIndex = 0;

updateText();
function updateText() {
    charIndex++;
    textContainer.innerHTML = `<h1> i am a ${career[careerIndex].slice(0, charIndex)}</h1>`;

    if (charIndex === career[careerIndex].length) {
        careerIndex++;
        charIndex = 0;
    }
    if (careerIndex === career.length) {
        careerIndex = 0;
    }
    setTimeout(() => {
        updateText();
    }, 100)
}
