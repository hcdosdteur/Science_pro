const sideMenuBtn = document.querySelector('#sideMenuBtn');
const sideMenu = document.querySelector('#sideMenu');
const header = document.querySelector('#header');
const headerHeight = header.getBoundingClientRect().height;
const title = document.querySelector('.title');
const introText = document.querySelector('.introText');
const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');

let sideMenuCheck = false;

text1.style.transform = 'translate(0%)';
text2.style.transform = 'translate(0%)';

window.addEventListener("scroll", () => {
    if(sideMenuCheck == false){
        if (window.scrollY > headerHeight) {
            header.setAttribute("style", "background: white; color: black;");
            title.style.color = 'black';
        } else {
            header.setAttribute("style", "background: transparent; color: white;");
            title.style.color = 'white';
        }
    }
});

sideMenuBtn.onclick = () =>{
    if(sideMenuCheck == false){
        sideMenuCheck = true;
        sideMenu.style.transform = 'translate(0%)';
        sideMenu.style.filter = 'opacity(100%)';
        header.setAttribute("style", "background: white; color: black;");
        title.style.color = 'black';
    }else{
        sideMenuCheck = false;
        sideMenu.style.transform = 'translate(-100%)';
        sideMenu.style.filter = 'opacity(0%)';
        if(window.scrollY < headerHeight){
            header.setAttribute("style", "background: transparent; color: white;");
            title.style.color = 'white';
        }
    }
}

