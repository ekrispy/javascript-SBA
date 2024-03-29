// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];
// function getLearnerData(course, ag, submissions) {
// here, we would process this data to achieve the desired result.
//   const result = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0, // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
//       1: 0.78, // 39 / 50
//       2: 0.833, // late: (140 - 15) / 150
//     },
//   ];

//   return result;
// }

// function to get the learners data
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

function getLearnerData(course, ag, submissions) {
  const newData = []; // to store the data

  // loop through each learner and their submissions

  for (i = 0; i < submissions.length; i++) {
    let assignment_id = submissions[i].assignment_id;
    let score = submissions[i].submission.score;
    let found;
    // find the corresponding assignment
    for (const iterator of AssignmentGroup["assignments"]) {
      if (iterator["id"] === assignment_id) found = iterator;
    }

    // turns date string into a time stamp
    let dueDate = Date.parse(found.due_at);

    let submissionDate = Date.parse(submissions[i].submission.submitted_at);
    // console.log("***********"); create a seperation for the dates converted to a time stamp
    try {
      console.log("submissionDate", submissionDate, "dueDate", dueDate);
    } catch (error) {
      console.log(error);
    }
    if (submissionDate > dueDate) {
      // console.log("late", submissions[i].submission.submitted_at, found.due_at); used this to make sure the late time was correct
      // deduct 10 percent of the total score
      score = score - found.points_possible * 0.1;
    } else {
      // console.log("on time", submissions[i].submitted_at, found.due_at);
      score = score;
    }
    // add learner data to the newData array
    let exist = false;
    let student_id = submissions[i]["learner_id"]; // looping through to get id of each learner

    // check if the student already exist, update if yes, or else add entry
    for (let j = 0; j < newData.length; j++) {
      if (newData[j].id == student_id) {
        newData[j][assignment_id] =
          submissions[i].submission.score / found.points_possible;

        exist = true;
      }
    }
    if (!exist) {
      let obj = {
        id: student_id,
        [assignment_id]: score / found.points_possible,
        avg: score,
      };

      newData.push(obj);
    } else {
      for (let i = 0; i < newData.length; i++) {
        if (newData[i].id === student_id) {
            // newData[i].assignment_id = score / found.points_possible // This was an issue and made the assignment id push to the objects in the array with an average
            newData[i].avg += score;

          break;
        }
      }
    }
  }
  return newData;
}
// calcuate the average score for each learner id
let totalOfPointsPossible = 0;
AssignmentGroup.assignments.forEach((element) => {
  totalOfPointsPossible += element.points_possible;
});
let newData = result;
for (let i = 0; i < newData.length; i++) {
  newData[i].avg = newData[i].avg / totalOfPointsPossible;
}

console.log(result);
