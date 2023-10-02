//#region BAD EXAMPLE
// Class implementing specific interfaces
var Developer = /** @class */ (function () {
    function Developer() {
    }
    Developer.prototype.work = function () {
        console.log("Writing code...");
    };
    Developer.prototype.takeBreak = function () {
        console.log("Taking a break...");
    };
    return Developer;
}());
var Manager = /** @class */ (function () {
    function Manager() {
    }
    Manager.prototype.work = function () {
        console.log("Managing team...");
    };
    Manager.prototype.takeBreak = function () {
        console.log("Taking a break...");
    };
    Manager.prototype.manageProject = function () {
        console.log("Managing project...");
    };
    Manager.prototype.attendMeeting = function () {
        console.log("Attending meeting...");
    };
    return Manager;
}());
//#endregion
