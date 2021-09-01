const clock = document.querySelector(".clock");

 //interval 매순간 일어나야되는 것. ex) 매 2초 -> 쓰이는 곳은 서버확인 혹은 api check 등등
 function getClock() {
     const date = new Date();
     const hours = String(date.getHours()).padStart(2, "0");
     const minutes = String(date.getMinutes()).padStart(2, "0");
     const seconds = String(date.getSeconds()).padStart(2, "0");
     clock.innerText = `${hours}:${minutes}:${seconds}`;
 }

 getClock() //1초 기다림 없이 새로고침하고 바로 동작
setInterval(getClock, 1000);