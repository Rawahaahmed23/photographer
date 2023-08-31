burger = document.querySelector('.burger')
nav = document.querySelector('.navigation')
navlist = document.querySelector('.navlist')
rightnav = document.querySelector('.rightnav')


burger.addEventListener('click', ()=>{
   rightnav.classList.toggle('v-class');
   navlist.classList.toggle('v-class');
   nav.classList.toggle('h-nav');
  


})
