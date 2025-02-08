// const options=['JavaScript','CSS','Java','HTML','C++'];
// const container=document.querySelector('.container');
// const head=document.createElement('h2');
// head.textContent="Choose one programing language: ";
// const span=document.createElement('span');
// const select=document.createElement('select');
// options.map((data)=>{
//    const option=document.createElement('option');
//    option.innerText=data;
//    option.value=data;
//    select.appendChild(option);
// });
// span.appendChild(select);
// head.appendChild(span);
// container.appendChild(head);

const option=['html','css','javaScript','java'];
const container=document.getElementById('container');
const head=document.createElement('h2');
head.textContent='choose one option: ';
const span=document.createElement('span');
const select=document.createElement('select');
option.map((data)=>{
   const option=document.createElement('option');
   option.innerText=data;
   option.value=data;
   select.appendChild(option);
})
span.appendChild(select);
head.appendChild(span);
container.appendChild(head);





