let btns = document.querySelectorAll('.btn');
let paras = document.querySelectorAll('.para')

btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        btns.forEach(btn => btn.classList.remove('live'))
        paras.forEach(para => {
            para.classList.remove('live');
            if(para.id === btn.getAttribute('data')){
                para.classList.add('live')
            }
        });
        btn.classList.add("live")


    })
})
