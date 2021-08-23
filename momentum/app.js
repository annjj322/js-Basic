const playerName ="nico";
const playerPoints=1212;
const playerHandsome =false;
const playerFat = "little bit";

/*
player.name
player.points
player.handsome
*/
//이렇게 해야 정리가 잘된다. 


//const player =["nico", 1212, false, "little bit"];
//이런식은 좋지않음. 리스트가 뭘 뜻하는지 모름.
//player [0] == name 이런식의 힌트가 필요.

const player = {
    name: "nico",
    points: 10,
    fat: true,
    handsome: "little bit",
}

console.log(player);
//console.log(player.name);
console.log(player["name"]); 
//와 같은 역할

player.fat = false;
console.log(player);
//const는 수정이 안되지만 const 안의 무언가는 없데이트가 가능.

player.lastName ="potato";
console.log(player);
//추가하거나 업데이트 가능
