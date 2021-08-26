const h1 = document.querySelector(".hello h1");

function handleh1Click() {
    h1.style.color = "blue";
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("Now Its Okay");
}

h1.addEventListener("click", handleh1Click);
//= h1.onclick = handleh1Click;
//addEventLIstener를 사용하는 이유는 remove--를 사용하기 위함
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);


window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
