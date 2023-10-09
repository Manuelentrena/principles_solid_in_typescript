"use strict";
exports.__esModule = true;
var EnemyDecorator = /** @class */ (function () {
    function EnemyDecorator(enemy) {
        this.enemy = enemy;
    }
    EnemyDecorator.prototype.takeDamage = function () {
        return this.enemy.takeDamage();
    };
    return EnemyDecorator;
}());
exports["default"] = EnemyDecorator;
