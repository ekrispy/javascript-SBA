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

// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);

// function getLearnerData(course, ag, submissions) {
//   const newData = [];
//   console.log(newData)
//   let exist = false;
//   for (i = 0; i < submissions.length; i++) {
//     let student_id = submissions[i]["learner_id"];

//     for (let j = 0; j < newData.length; j++) {
//       if (newData[j].learner_id == student_id) exist = true;
//     }
//     if (!exist) {
//         newData.push(submissions[i]);
//       }
//   }
  
//   return newData;
// }

// console.log(getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions));
// let newData = [];
// for (let i = 0; i < LearnerSubmissions.length; i++) {
//   console.log(newData(LearnerSubmissions[i].learner_id));
// }
// function getLearnerData(course, ag, submissions) {
//   // Helper function to find the assignment by id
//   const findAssignment = (ag, id) => ag.assignments.find(assignment => assignment.id === id);

//   // Helper function to calculate the score percentage
//   const calculateScorePercentage = (submission, assignment) => submission.score / assignment.points_possible;

//   // Helper function to calculate the late penalty
//   const calculateLatePenalty = (submission, assignment) => {
//     const dueDate = new Date(assignment.due_at);
//     const submittedDate = new Date(submission.submitted_at);
//     if (submittedDate > dueDate) {
//       return -0.15;
//     }
//     return 0;
//   };

//   // Process the data
//   const result = [];
//   for (const subm of submissions) {
//     const learnerId = subm.learner_id;
//     const assignment = findAssignment(ag, subm.assignment_id);
//     const submission = subm.submission;
//     const scorePercentage = calculateScorePercentage(submission, assignment);
//     const latePenalty = calculateLatePenalty(submission, assignment);
//     const avg = (result[learnerId - 1]?.avg ?? 0) + (scorePercentage + latePenalty) / (ag.assignments.length * 2);
//     result[learnerId - 1] = {
//       id: learnerId,
//       avg: parseFloat(avg.toFixed(3)),
//       ...(result[learnerId - 1] || {}),
//       [submission.assignment_id]: parseFloat((scorePercentage + latePenalty).toFixed(3))
//     }
//   }

//   return result;
// }

// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
// console.log(result);

// function getLearnerData(course, assgnGroup, submissions) {
//   // Filter submissions based on the course and assignment group
//   const filteredSubmissions = submissions.filter(
//     (sub) => sub.assignment_id === assgnGroup.assignments.id && sub.learner_id === assgnGroup.course_id
//   );

//   // Calculate the total points possible and points scored
//   const totalPoints = assgnGroup.assignments.reduce((total, assignment) => {
//     return total + assignment.points_possible;
//   }, 0);

//   const totalPointsScored = filteredSubmissions.reduce((total, submission) => {
//     return total + (submission.submission.score || 0);
//   }, 0);

  // Calculate individual and average scores
//   const learnerData = [];
//   const learnerIds = [...new Set(submissions.map((sub) => sub.learner_id))];
//   for (const learnerId of learnerIds) {
//     const learnerSubmissions = submissions.filter((sub) => sub.learner_id === learnerId);
//     const learnerTotalPoints = learnerSubmissions.reduce((total, sub) => {
//       return total + (sub.submission.points_possible || 0);
//     }, 0);
//     const learnerTotalPointsScored = learnerSubmissions.reduce((total, sub) => {
//       return total + (sub.submission.score || 0);
//     }, 0);
//     const learnerAvg = (learnerTotalPointsScored / learnerTotalPoints).toFixed(4);
//     const learnerDataItem = {
//       id: learnerId,
//       avg: learnerAvg,
//     };
//     learnerSubmissions.forEach((submission) => {
//       const assignment = assgnGroup.assignments.find((assgn) => assgn.id === submission.assignment_id);
//       const score = (submission.submission.score || 0) / (assignment.points_possible || 1);
//       learnerDataItem[assignment.id] = parseFloat(score.toFixed(4));
//     });
//     learnerData.push(learnerDataItem);
//   }

//   return learnerData;
// }

// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
// console.log(result);

function getLearnerData(course, ag, submissions) {
  // Create a map to store learner data.
  const learnerData = new Map();

  // Iterate through the learner submissions.
  for (const submission of submissions) {
    const { learner_id, assignment_id, submission: sub } = submission;

    // Initialize learner data if it doesn't exist.
    if (!learnerData.has(learner_id)) {
      learnerData.set(learner_id, {
        id: learner_id,
        avg: 0,
        scores: {},
      });
    }

    const learner = learnerData.get(learner_id);
    const assignment = ag.assignments.find((a) => a.id === assignment_id);

    // Calculate the score for this assignment.
    const score = sub.score || 0;
    const maxScore = assignment.points_possible;
    const assignmentScore = score / maxScore;

    // Update the learner's average score.
    learner.avg =
      (learner.avg * (Object.keys(learner.scores).length) + assignmentScore) /
      (Object.keys(learner.scores).length + 1);

    // Update the learner's scores.
    learner.scores[assignment.id] = assignmentScore;
  }

  // Convert the Map to an array.
  const result = Array.from(learnerData.values());

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);


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


// trying to get the id for a specific learner

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

function getLearnerData(course, ag, submissions) {
const newData = [];
//   let avgScore = LearnerSubmissions[i].submission.score / ag.assignments[i].points_possible
//   let avg = LearnerSubmissions[i].submission.score / ag.assignments[i].points_possible
//   console.log(avg)
//   let found;
//   for (const iterator of AssignmentGroup["assignments"]) {
    
//     if (iterator["id"] === assignment_id) found = iterator
//   }
//   score =score/found.points_possible

for (i = 0; i < submissions.length; i++) {
    let exist = false;
  let student_id = submissions[i]["learner_id"] 
  let assignment_id = submissions[i]["assignment_id"] 
  let score = submissions[i].submission.score

  let found;
  for (const iterator of AssignmentGroup["assignments"]) {
      
    if (iterator["id"] === assignment_id) found = iterator
  }
  
  
      // find when assignment is late
      let dueDate =Date.parse(found.due_at)
      let submissionDate = submissions[i].submission.submitted_at
      console.log(dueDate)
      console.log(Date.parse(submissionDate))
      console.log(found.due_at)
      // when the submissioin is newer than the due date it is late
      if (submissionDate >dueDate) {
          console.log('late')
          // deduct 10% from score
          score =(score - found.points_possible*1)/found.points_possible
      // } else if(submissionDate<dueDate){
      //     console.log('do not count', submissions[i].submission.submitted_at, found.due_at)
      } else{
          console.log('right time')

      score =score/found.points_possible
          break;
  }

          

  for (let j = 0; j < newData.length; j++) {
    if (newData[j].id == student_id){
      newData[j][submissions[i].assignment_id]=submissions[i].submission.score 
      
      
      exist = true
  };

  }
  if (!exist) {
      
      let obj = {
          id:student_id,
          // [submissions[i].assignment_id]:submissions[i].submission.score
      }
      obj[submissions[i].assignment_id]=submissions[i].submission.score
      newData.push(obj);
  }
    
}



return newData

}
console.log(result);

// for (i = 0; i < newData.length; i++) {
//   console.log(newData[i].avg);
//   newData[i].avg = 'avergae' // total points total

// }

// let totalOfPointsPossible = 0
// AssignmentGroup.forEach(element => {
//     totalOfPointsPossible+=Item.points_possible
// })


// trying to get the score for a specific assignment


// function getLearnerData(course, ag, submissions) {
//   let newData = [];
//   let exist = false;
//   for (i = 0; i < ag.length; i++) {
//     let assignment_id = ag[i]["id"];

//     for (let j = 0; j <newData.length; j++)
//     {
//       if (newData[j].assignment_id == assignment_id) exist = true;
//     }
//     if (!exist) {
//       newData.push(ag[i]);
//     }
//   }
//    return newData
// }
// console.log(result)



// trying to get the score for a specific assignment

// function getLearnerData(course, ag, submissions) {
//   let newData = [];
//   let exist = false;

//   for (i = 0; i< submissions.length; i++) {
//     let student_score = submissions[i]["submission"]["score"];

//     for (let j = 0; j < newData.length; j++) {
//       if (newData[j].submission.submission.score == score) exist = true;
//     } if (!exist) {
//       newData.push(submissions[i]);
//     }
//     return newData
//   }
// }
// console.log(result)



// trying to the score for the total points possible for a specific assignment

// function getLearnerData(course, ag, submissions) {
//   let newData = [];
//   let exist = false;
//   for (let i = 0; i<ag.assignments[0].possible_score; i++) {
//     let assignmentScore = ag.assignments[i]["possible_score"];

//     for (let j = 0; j <newData.length; j++) {
//       if (newData[j].possible_score == assignmentScore) exist = true;
//     }
//     if (!exist) {
//       newData.push(ag.assignments[i].possible_score);
//     }
//     return newData
//     }
//   }
// console.log(result)

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


// trying to get the id for a specific learner

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

function getLearnerData(course, ag, submissions) {
const newData = [];
//   let avgScore = LearnerSubmissions[i].submission.score / ag.assignments[i].points_possible
//   let avg = LearnerSubmissions[i].submission.score / ag.assignments[i].points_possible
//   console.log(avg)
//   let found;
//   for (const iterator of AssignmentGroup["assignments"]) {
    
//     if (iterator["id"] === assignment_id) found = iterator
//   }
//   score =score/found.points_possible

for (i = 0; i < submissions.length; i++) {
    let exist = false;
  let student_id = submissions[i]["learner_id"] 
  let assignment_id = submissions[i]["assignment_id"] 
  let score = submissions[i].submission.score

  let found;
  for (const iterator of AssignmentGroup["assignments"]) {
      
    if (iterator["id"] === assignment_id) found = iterator
  }
  
  
      // find when assignment is late
      let dueDate =Date.parse(found.due_at)
      let submissionDate = submissions[i].submission.submitted_at
      console.log(dueDate)
      console.log(Date.parse(submissionDate))
      console.log(found.due_at)
      // when the submissioin is newer than the due date it is late
      if (submissionDate >dueDate) {
          console.log('late')
          // deduct 10% from score
          score =(score - found.points_possible*1)/found.points_possible
      // } else if(submissionDate<dueDate){
      //     console.log('do not count', submissions[i].submission.submitted_at, found.due_at)
      } else{
          console.log('right time')

      score =score/found.points_possible
          break;
  }

          

  for (let j = 0; j < newData.length; j++) {
    if (newData[j].id == student_id){
      newData[j][submissions[i].assignment_id]=submissions[i].submission.score 
      
      
      exist = true
  };

  }
  if (!exist) {
      
      let obj = {
          id:student_id,
          // [submissions[i].assignment_id]:submissions[i].submission.score
      }
      obj[submissions[i].assignment_id]=submissions[i].submission.score
      newData.push(obj);
  }
    
}



return newData

}
console.log(result);

// for (i = 0; i < newData.length; i++) {
//   console.log(newData[i].avg);
//   newData[i].avg = 'avergae' // total points total

// }

// let totalOfPointsPossible = 0
// AssignmentGroup.forEach(element => {
//     totalOfPointsPossible+=Item.points_possible
// })


// trying to get the score for a specific assignment


// function getLearnerData(course, ag, submissions) {
//   let newData = [];
//   let exist = false;
//   for (i = 0; i < ag.length; i++) {
//     let assignment_id = ag[i]["id"];

//     for (let j = 0; j <newData.length; j++)
//     {
//       if (newData[j].assignment_id == assignment_id) exist = true;
//     }
//     if (!exist) {
//       newData.push(ag[i]);
//     }
//   }
//    return newData
// }
// console.log(result)



// trying to get the score for a specific assignment

// function getLearnerData(course, ag, submissions) {
//   let newData = [];
//   let exist = false;

//   for (i = 0; i< submissions.length; i++) {
//     let student_score = submissions[i]["submission"]["score"];

//     for (let j = 0; j < newData.length; j++) {
//       if (newData[j].submission.submission.score == score) exist = true;
//     } if (!exist) {
//       newData.push(submissions[i]);
//     }
//     return newData
//   }
// }
// console.log(result)



// trying to the score for the total points possible for a specific assignment

// function getLearnerData(course, ag, submissions) {
//   let newData = [];
//   let exist = false;
//   for (let i = 0; i<ag.assignments[0].possible_score; i++) {
//     let assignmentScore = ag.assignments[i]["possible_score"];

//     for (let j = 0; j <newData.length; j++) {
//       if (newData[j].possible_score == assignmentScore) exist = true;
//     }
//     if (!exist) {
//       newData.push(ag.assignments[i].possible_score);
//     }
//     return newData
//     }
//   }
// console.log(result)

