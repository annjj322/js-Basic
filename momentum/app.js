const mon ="mon";
const tue ="tue";
const wed ="wed";
const thu ="thu";
const fri ="fri";
const sat ="sat";

const dayOfWeek = [mon, tue, wed, thu, fri, sat]
/*""안에 넣어줘도 된다.*/

console.log(dayOfWeek);
/*컴퓨터는 0부터 숫자를 센다.*/

dayOfWeek.push("sun");

console.log(dayOfWeek);
//array는 하나의 항목안에 리스트를 만드는 것.

const apple ="apple";
//이런식으로는 너무 길어서 리스트를 만들 수 없다.

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab"); //kimbab을 array 안으로 추가
console.log(toBuy[2]);