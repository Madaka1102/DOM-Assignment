const plus=document.getElementById('plus');
const minus=document.getElementById('minus');
let i=0;
plus.addEventListener('click',()=>{
      i++;
      document.getElementById('count').textContent=i;
  
})
minus.addEventListener('click',()=>{
   i--;
    if(i<0){
        alert('counter is going beyond 0.');
    }
    else{
        document.getElementById('count').textContent=i;
      
    }
});