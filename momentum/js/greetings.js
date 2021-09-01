const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";



function onLoginSubmit(event) {
    event.preventDefault(); //기본값 제어. default 값을 없애준다.
    loginForm.classList.add(HIDDEN_CLASSNAME); //숨겨주는 역할
    const username = loginInput.value; // value값을 불러오는 역할
    localStorage.setItem(USERNAME_KEY, username); // value값을 storage에 저장하는 역할
    paintGreetings(username); // paint greeting함수를 불러오는 역할
} // default를 제거하고 입력창을 없앤다음 입력한 value를 storage에 저장하는 함수.

function paintGreetings(username) {
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
} // 불러온 username을 화면에 출력시키는 함수.





const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername ===null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME); // form을 보여주는 역할.
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings(savedUsername);
}