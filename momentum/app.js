const age = parseInt( prompt("How old are you?"));
//function은 내부에서 외부로 실행된다.
//페이지에 경고창처럼 떠있음.
//지속되는 동안 js의 실행을 멈춘다.
//css또한 반응하지 않을정도로 오래된 방식.

//parseInt()==> string을 number로 만든다.
// isNaN => boolean type
//false => Number

if(isNaN(age)) {
    console.log("Please write a number")
} else {
    console.log("Thank you for writing your age.")
}
//condition = have to boolean.
