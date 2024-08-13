class Character {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll(mod=0) {
        const result = Math.floor(1+Math.random()*20)+mod;
        console.log(`${this.name} rolled ${result}`);
        return result;
    }
}

class Adventurer extends Character {
    constructor (name, role, strength=0, armor=0) {
      super(name);
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
      this.stats = {atk:strength, def:armor};
    }
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }

    attack (target){
        if(!target instanceof Character){
            console.error(`${target} is not a valid attack target`);
            return;
        }
        console.log(`${this.name} is attacking ${target.name}...`);
        const roll = super.roll(this.stats.atk);
        let dmg = roll;
        if(target instanceof Adventurer){
            dmg -= target.stats.def;
        }
        if(dmg > 0){
            target.health -= dmg;
            console.log(`Hit! ${target.name} took ${dmg} damage!`);
        }
        else{
            console.log(`Miss! ${target.name} evaded!`);
        }
        if(target.health <= 0){
            console.log(`${target.name} took mortal damage!`);
        }
        else{
            console.log(`${target.name} was reduced to ${target.health} HP`);
        }
    }
}

const hero = new Adventurer("Robin","Fighter",4,10);
const enemy = new Character("Goblin");

hero.attack(enemy);