function ibg(){
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}
ibg();
const iconMenu = document.querySelector('.header__icon');
if(iconMenu){
    const menuBody = document.querySelector('.header__menu');
    iconMenu.addEventListener("click", function(e){
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
}
const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
    },
  });
          















