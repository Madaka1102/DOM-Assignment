const file=document.getElementById('file');
const image=document.getElementById('image');
function changeProfile(){
    image.src=URL.createObjectURL(file.files[0]);
}
image.style.width='200px';


