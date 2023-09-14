const imgContainerEl = document.querySelector('.image-container');

const LoadMoreBtnEl = document.querySelector('.btn');

LoadMoreBtnEl.addEventListener('click',()=>{
  imgnum = 8;
    loadMoreImg();
})

const loadMoreImg = () => {
    for(i = 0 ; i < imgnum ; i++){
        let imgEl = document.createElement("img");
        imgEl.src = `https://picsum.photos/300?${Math.floor(Math.random()*2000)}`
        imgContainerEl.appendChild(imgEl);
    }

}
