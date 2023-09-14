const containerEl = document.querySelector('.container');


for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement('div');
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl)
}
const colorContainerInnerEl = document.querySelectorAll(".color-container");

function generateColor(){
    colorContainerInnerEl.forEach((e) => {
        console.log(e);
        const newColorCode = randomColor();
        console.log(newColorCode);
        e.style.backgroundColor = "#" + newColorCode;
        e.innerText = "#" + newColorCode;
    })
}
function randomColor(){
    const chars = '0123456789abcdef';
    const colorCodeLength = 6;

    let colorCode = "";
    for(let i = 0 ; i < colorCodeLength; i++){
        const randomNum = Math.floor(Math.random()*chars.length);
        colorCode += chars.substring(randomNum,randomNum + 1);

        
    }
    return colorCode;
}



generateColor()