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

