const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

// task 1 

function getSubjects (students) {
    let subKeys = Object.keys(students.subjects);
    // console.log(subKeys);
    // let res = toUpperKeys(subKeys);
    // function toUpperKeys() {
    //   let conclusion =  Object.keys(students.subjects).reduce((acc, key) => {
    //     acc[key.charAt(0).toUpperCase()+ key.slice(1)] = students[key];
    //     return acc;
    //   },[]);
    //   return conclusion;
    // }
    
    // return res;
    let newArr = [];
    for (let i = 0; i < subKeys.length; i++){
       newArr.push(subKeys[i].charAt(0).toUpperCase() + subKeys[i].slice(1));
    }
    return newArr;
  }
console.log('task1: Список предметів -' , getSubjects(students[0]));


// task 2

function getAverageMark(students){
  for (let value of Object.values(students.subjects)){
    let subMath1 = Object.values(students.subjects)[0];
    let subMath2 = Object.values(students.subjects)[1];
    let subMath3 = Object.values(students.subjects)[2];
    let resultConcat3Subject = subMath1.concat(subMath2,subMath3);
    let sum = [];
    let  sumThreeArrays = (subMath1 , subMath2, subMath3) => {
      for(let i=0; i < Math.max(subMath1.length, subMath2.length, subMath3.length); i++) {
         sum.push((subMath1[i] || 0) + (subMath2[i] || 0) + (subMath3[i] || 0) );
      };
      return sum;
   };
  sumThreeArrays(subMath1,subMath2,subMath3);
  function sumThreeArraysTotally(sum){
    let zero = 0;
    for (let i = 0; i < sum.length; i += 1) {
      zero += sum[i];
    }
    return zero;
  }
  sumThreeArraysTotally(sum);
  return  (sumThreeArraysTotally(sum) / resultConcat3Subject.length).toFixed(2);
  }
}
getAverageMark(students[0]);
console.log('task 2: ' + getAverageMark(students[2]));

// task 3 

function getStudentInfo(students){
  let newArr = Object.entries(students);
  console.log('task 3: Інформація про студента -\nname: ' + students.name + "\n"  + 'course: ' + students.course + '\n' + 'AverageMark: ' + getAverageMark(students));
}
getStudentInfo(students[1]);

// task 4 
function getStudentsNames(students){
  let newArr = [];
  newArr.push(students.map(({name}) => {
     console.log(name);
  
     
    })  ) 

};
getStudentsNames(students);


// function sortAlphabets(name) {
//   return name.split('').sort().join('');ф
// };
// console.log(sortAlphabets(name)); 
 