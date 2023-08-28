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
// class Student {

//   private _id: number;
//   private _name: string;
//   private _course: Course;

//   constructor(id: number, name: string, course: Course) {
//     this._id = id;
//     this._name = name;
//     this._course = course;
//   }
// }

// class Course {
//   id: number;
//   name: string;
//   subjects: string[];

//   private _id: number;
//   private _name: string;
//   private _subjects: string[];

//   constructor(id: number, name: string, subjects: string[]) {
//     this._id = id;
//     this._name = name;
//     this._subjects = subjects;
//   }


//   getCourseSubjects(): string {
//     return this._subjects.join(", ");
//   }
// }

// const course = new Course(1,"Typescript",["principle responsability","open/closed","principle segregation","dependencies inversion", "liskov"])
// const student = new Student(1, "Manuel", course);

//console.log(course.getCourseSubjects());


//#region GOOD  EXAMPLE WITH TYPES
type Entity = {
    readonly id: number;
    readonly name: string;
};

type Course = Entity & {
    readonly subjects: ReadonlyArray<string>;
};

type Student = Entity & {
    course: Course;
};

const fetchEntity =
    <FetchedEntity extends Entity>(endpoint: string) =>
    (id: Entity["id"]) =>
        fetch(`${API}/${endpoint}/${id}`).then(
            response => response.json() as Promise<FetchedEntity>,
        );

const fetchCourse = fetchEntity<Course>("courses");
const fetchStudent = fetchEntity<Student>("students");

fetchStudent(42)
    .then(({ course }) => fetchCourse(course.id))
    .then(console.log)
    .catch(console.error);

//#endregion
