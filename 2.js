
const mode=document.getElementById('mode');
const mybtn=document.getElementById('btn');
mybtn.addEventListener('click',()=>{
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('h1').style.color='white';
    mode.textContent='Dark';
})
