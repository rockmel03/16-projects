const inputEl = document.querySelector('#dark-mode');
const bodyEl = document.querySelector('body');

inputEl.checked = JSON.parse(localStorage.getItem('mode')) ;
updateBody();
function updateBody(){
    if(inputEl.checked){
        bodyEl.style.backgroundColor = '#000000';
    }
    else{
        bodyEl.style.backgroundColor = '#ffffff'
    }
}
inputEl.addEventListener("input",() =>{
    updateBody();
    updateLocalStorage();
})

function updateLocalStorage(){
    localStorage.setItem('mode', JSON.stringify(inputEl.checked))
}