
const head=document.querySelector('h1');


function login(){
    localStorage.setItem('auth','true');
    window.location.reload();
}
function logout(){
    localStorage.setItem('auth','false');
    window.location.reload();
}
const loginStatus=localStorage.getItem('auth');
if(loginStatus != 'false'){
    head.innerHTML='User is logged in';
}
else{
    head.innerHTML='user has not logged in';
}
