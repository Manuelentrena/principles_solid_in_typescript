//#region BAD EXAMPLE

// interface Workable  {
//   work(): void;
//   takeBreak(): void;
//   manageProject(): void;
//   attendMeeting(): void;
// }


// class Developer implements Workable  {
//   work() {
//     console.log("Writing code...");
//   }

//   takeBreak() {
//     console.log("Taking a break...");
//   }

//   manageProject() {
//     console.log("Managing project...");
//   }

//   attendMeeting() {
//     console.log("Attending meeting...");
//   }
// }
//#endregion

//#region GOD EXAMPLE
interface Workable {
  work(): void;
  takeBreak(): void;
}

interface ProjectManager {
  manageProject(): void;
}

interface MeetingAttendee {
  attendMeeting(): void;
}

// Class implementing specific interfaces
class Developer implements Workable {
  work() {
    console.log("Writing code...");
  }

  takeBreak() {
    console.log("Taking a break...");
  }
}

class Manager implements Workable, ProjectManager, MeetingAttendee {
  work() {
    console.log("Managing team...");
  }

  takeBreak() {
    console.log("Taking a break...");
  }

  manageProject() {
    console.log("Managing project...");
  }

  attendMeeting() {
    console.log("Attending meeting...");
  }
}
//#endregion