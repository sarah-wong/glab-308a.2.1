//------------------------Part 1

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion","artifact"],
    companion:{
        name: "Leo",
        type: "Cat",
        companion:{
            name: "Frank",
            type: "Flea",
            inventory: ["small hat","sunglasses"]
        }
    },
    roll (mod=0) {
        const result = Math.floor(1+Math.random()*20)+mod;
        console.log(`${this.name} rolled a ${result}`);
    }
}

function showItems(){
    for (const item of adventurer.inventory) {
        console.log(item);
    }
}

const roll1 = adventurer.roll();
const roll2 = adventurer.roll(4);
const roll3 = adventurer.roll(-2);

console.log(`rolls: ${roll1}, ${roll2}, ${roll3}`);

//-----------------------------Part 2

class Character {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll(mod=0) {
        const result = Math.floor(1+Math.random()*20)+mod;
        console.log(`${this.name} rolled a ${result}`);
    }
}