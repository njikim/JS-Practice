const body = document.querySelector("body");
const IMG_NUMBER = 5;

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function paintImage(imgNum){
    const image = new Image();
    image.src = `images/${imgNum+1}.jpg`;
    body.appendChild(image);
}

function handleImgLoad(){
    console.log("finished loading")
}
function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber); 
}

init();