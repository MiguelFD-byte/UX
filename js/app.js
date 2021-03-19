const loader = document.querySelector('.loader');
const capa = document.querySelector('.capa');


/*window.onload = () =>{
    capa.classList.add('capa__load');
    setTimeout(()=>{
        loader.classList.add('load');
    },3000);
}*/

$(document).ready(function(){
    setTimeout(()=>{
       $('.loader').animate({width: 0});
    },2000);
});

$(document).ready(function(){
    setTimeout(()=>{
       $('.hope').css
    },2000);
});


$(document).ready(function(){
   $('.btn__menu').click(function(){
    $('.menu__toggle').addClass('menu_active');
       $('.color').addClass('change');
     $('#close').click(function(){
        $('.menu__toggle').removeClass('menu_active');
        $('.color').removeClass('change');
     });
   }); 
});


const btn = document.querySelector('#nextDiv');
const btn2 = document.querySelector('#prevDiv');
const banner = document.querySelector('.banner__content');
const slides = banner.getElementsByTagName('div');
let i = 0;

function nextSlide(){
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
}

 btn.addEventListener('click' , () => {
    this.nextSlide();
});

function prevSlide(){
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add('active');
}

 btn2.addEventListener('click' , () => {
    this.prevSlide();
});