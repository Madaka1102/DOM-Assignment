const uname=document.getElementById('name');
const pass=document.getElementById('password');
const button=document.getElementById('btn');
// button.addEventListener('click',()=>{
    
//    if(uname.value.length>=3 && pass.value.length>=8){
//     alert('Form Validation Sucessfull!!');
//    }
//    else{
//     alert('Form Validation Failed!!');
//    }
// });


button.addEventListener('click',()=>{
   if(uname.value.length>=3 && pass.value.length>=8){
    alert('Form validation sucessful!!');
   }
   else{
    alert('Form validation failed!!');
   }
 });