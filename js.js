const burgerBtn = document.getElementById('burger');
const menu = document.getElementById('navigation');


burgerBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    menu.classList.toggle('active');
})