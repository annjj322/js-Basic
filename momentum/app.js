
const calculator = {
    add:function (a, b) {
        return a + b;
    },
    minus:function (a, b) {
        return a - b;
    },
    div:function (a, b) {
        return a / b;
    },
    powerOf:function (a, b) {
        return a ** b;
    },
};
/*
console은 외부로 표현되지 않는다.
alert 또한 경고하고 없어진다.
return 이후로는 실행되지 않는다.
return을 하고나면 결과값만 할당된다.
console에 보이는 것처럼 추측하고 싶다면 replacement 방법을 이용해라.
*/
const plusResult = calculator.add(2,3);
const minusResult = calculator.minus(plusResult,10);
const divResult = calculator.div(10,minusResult);
const powerOfResult = calculator.powerOf(minusResult,divResult);
/*
반환값을 function에서 얻는다.
위 값들은 상호 의존적 console로는 할 수 없었던 것.
*/

const age =96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

// age-> 96
//const krAge의 age -> 96
//ageOfForeigner -> 96
//return 되는 값 -> 98
//console.log(krAge); ==> 98

//return을 하는 이유는 콘솔이 아닌 화면에 결과값을 보여줘야되기 때문.