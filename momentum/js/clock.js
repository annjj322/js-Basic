const clock = document.querySelector(".clock");

 //interval 매순간 일어나야되는 것. ex) 매 2초 -> 쓰이는 곳은 서버확인 혹은 api check 등등
 function sayHello() {
     console.log("hello");
 }

 setInterval(sayHello, 5000);