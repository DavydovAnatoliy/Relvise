function ibg(){
let ibg=document.querySelectorAll(".ibg");
    for (let elem of ibg) {
        let img = elem.querySelector('img');
if(img){
elem.style.backgroundImage = 'url('+img.getAttribute('src')+')';
}
}
}
ibg();

let logo = document.querySelector('.header-menu__logo');
let burger = document.querySelector('.header-menu__burger');
let menu = document.querySelector('.header-menu__menu');
burger.addEventListener('click', function () {
    this.classList.toggle('active');
    logo.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('lock');
});