//#region BAD EXAMPLE
// class Student {
//   id: number;
//   name: string;
//   courseId: number;
//   courseName: string;
//   courseSubjects: string[];
//   getCourseSubjects(): string {
//     return this.courseSubjects.join(", ");
//   }
// }
//#endregion
//#region GOOD  EXAMPLE WITH CLASS
var Student = /** @class */ (function () {
    function Student(id, name, course) {
        this._id = id;
        this._name = name;
        this._course = course;
    }
    return Student;
}());
var Course = /** @class */ (function () {
    function Course(id, name, subjects) {
        this._id = id;
        this._name = name;
        this._subjects = subjects;
    }
    Course.prototype.getCourseSubjects = function () {
        return this._subjects.join(", ");
    };
    return Course;
}());
var course = new Course(1, "Typescript", ["principle responsability", "open/closed", "principle segregation", "dependencies inversion", "liskov"]);
var student = new Student(1, "Manuel", course);
console.log(course.getCourseSubjects());
