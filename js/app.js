const loader = document.querySelector('.loader');
const capa = document.querySelector('.capa');


/*window.onload = () =>{
    capa.classList.add('capa__load');
    setTimeout(()=>{
        loader.classList.add('load');
    },3000);
}*/

/*$(document).ready(function(){
    setTimeout(()=>{
       $('.loader').animate({width: 0});
    },2000);
});*/

/*$(document).ready(function(){
    setTimeout(()=>{
       $('.hope').css
    },2000);
});*/


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


const div1 = document.querySelector('.transition__scene');
const div2 = document.querySelector('.transition__scene2');

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
     
    setTimeout( () => {
    div1.classList.toggle('active_scene');
  }, 500);
  
  setTimeout( () => {
    div2.classList.toggle('active_scene');
  }, 500);
  setTimeout( () => {
    div1.classList.toggle('active_scene2');
  }, 1500);
  
  setTimeout( () => {
    div2.classList.toggle('active_scene2');
  }, 1500);
      setTimeout(()=>{
    this.nextSlide();  
  },1500);
     
    setTimeout( () => {
    div1.classList.remove('active_scene');
    div1.classList.remove('active_scene2');
    div2.classList.remove('active_scene');
    div2.classList.remove('active_scene2');
  }, 1);
     
   
});


const back1 = document.querySelector('.transitionb__scene');
const back2 = document.querySelector('.transitionb__scene2');


/*ir atras*/
function prevSlide(){
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add('active');
}

 btn2.addEventListener('click' , () => {
       setTimeout( () => {
    back1.classList.toggle('activeb_scene');
  }, 500);
  
  setTimeout( () => {
    back2.classList.toggle('activeb_scene');
  }, 500);
  setTimeout( () => {
    back1.classList.toggle('activeb_scene2');
  }, 1500);
  
  setTimeout( () => {
    back2.classList.toggle('activeb_scene2');
  }, 1500);
      setTimeout(()=>{
    this.prevSlide(); 
  },1500);
     
    setTimeout( () => {
    back1.classList.remove('activeb_scene');
    back1.classList.remove('activeb_scene2');
    back2.classList.remove('activeb_scene');
    back2.classList.remove('activeb_scene2');
  }, 1);
     
});









const btn_control = document.querySelector('.control');
const content1 = document.querySelector('.content1')
const content2 = document.querySelector('.content2')

btn_control.addEventListener('click', ()=> {
   content1.classList.toggle('active__content1');
   content2.classList.toggle('active__content2');
});


const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const img5 = document.querySelector('.img5');
const btn_animation = document.querySelector('.animation');

btn_animation.addEventListener('click', ()=>{
   setTimeout(()=>{
    img1.classList.add('b__active');   
   },1000);
   setTimeout(()=>{
      img2.classList.add('b__active');   
   },2000);
    setTimeout(()=>{
     img3.classList.add('b__active');   
   },3000);
    setTimeout(()=>{
       img4.classList.add('b__active');   
   },4000);
    setTimeout(()=>{
        img5.classList.add('b__active');   
   },5000);
    setTimeout(()=>{
        img1.classList.remove('b__active');
        img2.classList.remove('b__active');
        img3.classList.remove('b__active');
        img4.classList.remove('b__active');
        img5.classList.remove('b__active');
    },100);
});
