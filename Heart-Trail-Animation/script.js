let body = document.querySelector('body')

window.addEventListener('mousemove',(dets)=>{

    //creating an heart span element 
     let heart =  document.createElement('span')
     //giving position to hearts
     let x = dets.clientX;
     let y = dets.clientY;
     heart.style.left = x + 'px';
     heart.style.top = y + 'px';
     //adding class to heart
     heart.classList.add("heart");
     // append (push) into body element
     body.appendChild(heart);
     // giving width & height to heart
     let size = Math.random()*100;
     heart.style.width = size +'px';
     heart.style.height = size +'px';
      //removing hearts after few seconds
        setTimeout(()=>{
            heart.remove();
        },1000)

})


