const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";





function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){  // if local storage is empty
        askForName();
    } else {                    // if username is saved in local storage       
        paintGreeting(currentUser);
    }
}


function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function askForName(){
    form.classList.add(SHOWING_CN);
    // when submit the username, call fc handleSubmit
    form.addEventListener("submit", handleSubmit);  
}

function handleSubmit(event){
    event.preventDefault();  // when press submit from fc askForName, the text is not going away   
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function init(){
    loadName();
}
init();
