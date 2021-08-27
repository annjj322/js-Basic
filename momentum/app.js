const h1 = document.querySelector(".hello h1");

function handleh1Click() {
    h1.classList.toggle("active");
};
//add and remove 를 한줄로 표현
//turn on, turn off 의 기능을 하는 것이 toggle



// const clickedClass ="active";
//    if(h1.classList.contains(clickedClass)){
//       h1.classList.remove(clickedClass);
//    } else{
//        h1.classList.add(clickedClass);
//    };
//이렇게 해야 sexy-font 라는 기존의 class에는 지장이 없다.




h1.addEventListener("click", handleh1Click);