const btnPopup=document.querySelector('.btnlogin-popoup');
const cover_box=document.querySelector('.cover_box');
const loginLink=document.querySelector('login-link');
const registerLink=document.querySelector('register-link');
const iconClose=document.querySelector('.icon-close');

function activateCoverBox(){
    cover_box.classList.add('active');
}

function deactivateCoverBox(){
    cover_box.classList.remove('acitve');

}

function activatePopup(){
    cover_box.classList.add('active-popup');

}
function deactivateCoverPopup(){
    cover_box.classList.remove('actived');
}

registerLink.addEventListener('click',activateCoverBox);
loginLink.addEventListener('click',deactivateCoverBox)
btnPopup.addEventListener('click',activatePopup);
iconClose.addEventListener('click',deactivateCoverPopup);