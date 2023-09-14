const clickToJoinBtn = document.querySelector('#cjoinBtn');
const popUpContainer = document.querySelector('.popup-container')
const closePopupBtn = document.querySelector('#CloseBtn');
const form = document.querySelector('#form')

clickToJoinBtn.addEventListener('click', () => {
    popUpContainer.classList.add('active');
})

closePopupBtn.addEventListener('click', () => {
    popUpContainer.classList.remove('active');
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    popUpContainer.classList.remove('active');
})
