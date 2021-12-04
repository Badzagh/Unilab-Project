const hamburger =  document.querySelector(".hamburger");
const headerNav = document.querySelector("#header-navigation");
const headerNavIcons = document.querySelector(".menu-icons");
const avatar = document.querySelector("#profile");
const footer = document.querySelector("footer");
hamburger.addEventListener('click',show);

function show(){
    headerNav.style.visibility = 'visible';
    headerNav.style.opacity = '1';
    headerNavIcons.style.visibility = 'visible';
    headerNavIcons.style.opacity = '1';
    avatar.style.width = '16px';
    avatar.style.marginLeft = '-45px';
    footer.style.visibility = 'visible';
    footer.style.opacity = '1';
}
