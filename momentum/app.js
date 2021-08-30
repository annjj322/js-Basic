const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting")

const HIDDEN_CLASSNAME = "hidden";



function onLoginSubmit(event) {
    event.preventDefault(); //기본값 제어. default 값을 없애준다.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}




loginForm.addEventListener("submit", onLoginSubmit)