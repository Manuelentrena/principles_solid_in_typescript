import { Enemy } from "./Enemy";

export default class DifficultEnemy implements Enemy {
    takeDamage(): number {
        return 2;
    }
}