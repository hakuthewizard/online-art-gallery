const menu = document.querySelector('.exhibitions');
const exhibitionNames = document.querySelectorAll(".list");
const nav = document.querySelector('#wrapper');
const about = document.querySelector('.about');
const search = document.querySelector('.search');

menu.addEventListener('mouseover', openMenu)
function openMenu(){
    menu.classList.toggle('active');
    menu.appendChild(exhibitionNames);
    exhibitionNames.classList.toggle('exhibitionsList');
}
    

about.addEventListener('click', ()=> {
    about.classList.toggle('active');
    
}
)
const fullScreen = document.getElementById("myfullScreen");

const img = document.querySelectorAll("#myImg");

const modalImg = document.querySelectorAll("#img01");
img.onclick = function() {
    fullScreen.style.display = "block";
    modalImg.src = this.src;
}


const span = document.getElementsByClassName("close")[0];


span.onclick = function() {
    fullScreen.style.display = "none";
}