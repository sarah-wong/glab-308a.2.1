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
    constructor (name, role, power=0, armor=0, dodge=8) {
      super(name);
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
      this.stats = {atk:power, def:armor, evd:dodge};
    }
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }

    // avg. damage value =
    //  (1 + target.stats.evd/20)*(this.stats.atk - target.stats.def)
    attack (target){
        if(!target instanceof Adventurer){
            console.error(`${target} is not a valid attack target`);
            return;
        }
        console.log(`${this.name} is attacking ${target.name}...`);
        const roll = super.roll(this.stats.atk)
        if(roll >= target.stats.evd){
            const dmg = roll - target.stats.def;
            target.health -= dmg;
            console.log(`Hit! ${target.name} takes ${dmg} damage!`);
        }
        else{
            console.log(`Miss! ${target.name} evaded the attack!`);
        }
        if(target.health <= 0){
            console.log(`${target.name} was knocked out!`);
        }
        else{
            console.log(`${target.name} was reduced to ${target.health} HP`);
        }
    }
}

const hero = new Adventurer("Robin","Fighter",4,3);
const enemy = new Adventurer("Goblin","Thief",0,0);

hero.attack(enemy);