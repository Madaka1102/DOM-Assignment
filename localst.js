// const uname=document.getElementById('uname');
// const head=document.querySelector('h1');
// head.innerHTML=localStorage.getItem('value');
// uname.addEventListener('keyup',display);
// function display(){
//    localStorage.setItem('value',uname.value);
//    head.innerHTML=localStorage.getItem('value');
// };

// const arr=[1,2,3,4,5,6];
// const numbers=arr.map((data)=>{
//    return data*2;
// })
// console.log(numbers);

// const inputdata=document.getElementById('uname');
// inputdata.addEventListener('input',function(event){
//       const value=event.target.value;
//       document.getElementById('para').innerHTML=value;
// });

// function returnFun(callback){
//      console.log('return function called....');
//      callback();
// }
// function fun(callback){
//       console.log('fun function called....');
//       callback();
// }
// function gun(){
//       console.log('gun function called');
// }
// returnFun(()=>{
//       return fun(()=>{
//             return gun();
//       })
// })


function function1(){
      return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                  resolve('function 1 called');
            },1000)
      })
}
function function2(fromfun1){
      return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                   resolve('function2 called');
                   console.log('recieved from function 1',fromfun1);
            },1000)

      })
}
function function3(fromfun2){
      return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                   resolve('final function called');
                   console.log('recieved from function 2',fromfun2);
            },1000)
      })
}
function1().then((result)=>{
     console.log(result);
     return function2(result);
})
.then((result2)=>{
     console.log(result2);
     return function3(result2);
})
.then((finalresult)=>{
      console.log(finalresult);
})
