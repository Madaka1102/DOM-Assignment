const search=document.getElementById('search');
const listedItems=document.getElementById('unordered').getElementsByTagName('li');
search.addEventListener('input',()=>{
    const searchItem=search.value.toLowerCase();
    for(let i=0;i<listedItems.length;i++){
        const item=listedItems[i].innerText.toLowerCase();
        if(item.includes(searchItem)){
            listedItems[i].style.display='block';
        }
        else{
            listedItems[i].style.display='none';
        }
    }
})
