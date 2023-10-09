import { ArmourDecorator } from "./ArmourDecorator";
import DifficultEnemy from "./DifficulEnemy";
import { HelmetDecorator } from "./HelmetDecorator";

let enemy = new DifficultEnemy();
let enemyWithHelmet = new HelmetDecorator(enemy);
let enemyWithHelmetAndArmour = new ArmourDecorator(enemyWithHelmet);

let computedDamaged = enemyWithHelmetAndArmour.takeDamage();
console.log(computedDamaged);