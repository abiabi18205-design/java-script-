
let employee = {
  name: "abi shanth",
  age: 20,
  department: "IT",


  address: {
    city: "jaffna",
    zip: "40000",
  },
skills:["html", "css" , "bootstrap"]
};

//2. access zip code using bracket notation
console.log(employee);
console.log(employee.address.city);
console.log(employee["address"]["zip"]);

//3. destracture to extract name and department 
const{ name, department }= employee;
console.log(name);                 //output:abishanth
console.log(department);             //output:it 

//4. add a method introduce
employee.introduce=function(){
  console.log(`Hi, my name is ${this.name} and I work in ${this.department}`)
};
 employee.introduce();

 //5. arrow function
 employee.introduce = () => {
  console.log(`Hi, my name is ${this.name} and I work in ${this.department}`);
};
employee.introduce(employee);

//6. loop through skills array
employee.skills.forEach(a => console.log(a));


//Array
let students=[
{name:"abi", score:85},
{name:"kabi", score:75},
{name:"thuva", score:65},
{name:"saaji", score:55},
{name:"jeru", score:45}
];
//using foreach or print all 
students.forEach(student => {
  console.log(student.name);
});

//2. create new array of scores using map()
const scores=students.map(student=>student.score);
console.log(scores);

//3. filter students who scored more than 50
const topstudents = students.filter(student => student.score > 50);
console.log(topstudents);

//4. calculate average score using reduce()
const totalscore = students.reduce((sum,student) => sum + student.score);
const avgscore = totalscore /students.length;
console.log(avgscore);

console.log(students.some(student => student.score > 80));
console.log(students.every(student => student.score > 80));

const nested = [[1,2],[3,4],[5,6]];
console.log(nested.flat());
const flatMapped = nested.flatMap(arr => arr.map(n => n * 2));
console.log(flatMapped);
