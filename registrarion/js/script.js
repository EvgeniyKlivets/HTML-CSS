
const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
/*const iconClose = document.querySelector('.icon-close');*/

/*const registerlink = document.querySelector('.btnLogin-popun');*/

registerlink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

/*iconlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popun');
});*/

/*btnPopun.addEventListener('click', ()=>{
    wrapper.classList.add('active-popun');
});*/