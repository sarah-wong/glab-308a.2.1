const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion","artifact"]
}

function showItems(){
    for (const item of adventurer.inventory) {
        console.log(item);
    }
}