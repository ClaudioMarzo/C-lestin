const menu = document.querySelector('.navigation');
const text = document.getElementsByClassName('item_text');

function eyeClick(){
    for(let i =0; i<text.length;i++){
        text[i].classList.toggle('hidden');
    }
    menu.classList.toggle('abrir');
}
