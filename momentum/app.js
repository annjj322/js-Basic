const character = {
    handsome: true,
    heigh: 180,
    age: 21,
    name: "june",
}

console.log(character);
character.heigh=175;
console.log(character);
character.girlFriend=false;
console.log(character);
character.age=character.age + 5;
console.log(character);
console.log(character["name"]);