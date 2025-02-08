function updateTimer(){
    const time=new Date();
    const hours=time.getHours().toString().padStart('2',0);
    const mins=time.getMinutes().toString().padStart('2',0);
    const secs=time.getSeconds().toString().padStart('2',0);
    const hexcode=`#${hours}${mins}${secs}`;
    document.getElementById('hours').innerText=hours;
    document.getElementById('minutes').innerText=mins;
    document.getElementById('secs').innerText=secs;
    document.body.style.backgroundColor=hexcode;
    console.log(hexcode);
}

setInterval(updateTimer,1000);