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

const API = "https://jsonplaceholder.typicode.com";

type Geo = {
  lat: string;
  lng: string;
}

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
}

type Entity = {
    readonly id: number;
};

type User = Entity & {
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

type Post = Entity & {
  title: string;
  body: string;
  userId: number;
  user: User;
}

const fetchEntity =
    <FetchedEntity extends Entity>(endpoint: string) =>
    (id: Entity["id"]) =>
        fetch(`${API}/${endpoint}/${id}`).then(
            response => response.json() as Promise<FetchedEntity>,
        );

const fetchUser = fetchEntity<User>("users");
const fetchPost = fetchEntity<Post>("posts");

async function getPostAndUser(postId: number) {
  try {
    const post = await fetchPost(postId);
    const user = await fetchUser(post.userId);
    return { ...post, user };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

getPostAndUser(42).then((PostAndUser) => {
  if (PostAndUser) {
    console.log({PostAndUser});
  }
});







    
//#endregion
