let Tactile=document.querySelector('.boutonTactile')
let mm= document.querySelector('.menus')

Tactile.addEventListener('click',()=>{
Tactile.classList.toggle('Tactile')
mm.classList.toggle('menusactive')
})

window.addEventListener('load',()=>{
document.querySelector('.chargement').style.display='none';
document.querySelector('header').style.display= 'block';
document.querySelector('footer').style.display='block'
})