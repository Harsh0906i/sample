let mainmenu=document.querySelector(".mainmenu");
let openmenu=document.querySelector(".openmenu");
let closemenu=document.querySelector(".closemenu");
let links=document.querySelectorAll(".link");
openmenu.addEventListener("click",open);
closemenu.addEventListener("click",close);

function open(){
    mainmenu.style.display="flex";
    mainmenu.style.top='0';
}
function close(){
    mainmenu.style.top='-150%';
}
links.forEach((link)=>{
    link.addEventListener("click",close);
});
