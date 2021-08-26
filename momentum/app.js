const h1 = document.querySelector(".hello h1");
//First. element setting

//console.log(h1.style.color);  nothing
//console.log(h1.style.color);  blue -> forever
function handleh1Click() {
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor == "blue") {
        newColor = "tomato";
    } else {
       newColor = "blue";
    }
    h1.style.color = newColor;
}
//Third. function


h1.addEventListener("click", handleh1Click);
//Second. listene events