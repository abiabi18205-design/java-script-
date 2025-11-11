// javascript variables

console.log("apisanth")
console.log("christian college")
console.log("watching movies")
console.log(100+100)


let name="abi";
var age="20";
const subject="english";

console.log(name)
console.log(age)
console.log(subject)

// let favcolor=prompt("input your favourite color");
// document.body.style.backgroundColor=favcolor;


let color=""
console.log(color)


let firstname="abi";
let lastname="shanth";

console.log("my name is"+" "+firstname+" "+lastname)


let ages="20";
console.log(typeof ages);




{
    let x=25;
    console.log(x)
}


    var x=25;
    console.log(x)
    
{
    const x=25;
    console.log(x)
}


//current date

const now = new Date();
const formatted = now.getFullYear() +"-"+
  String(now.getMonth() + 1).padStart(2, '0') +"-"+
  String(now.getDate()).padStart(2, '0') +" "+
  String(now.getHours()).padStart(2, '0') +":"+
  String(now.getMinutes()).padStart(2, '0') +":"+
  String(now.getSeconds()).padStart(2, '0');

console.log("Current Date & Time:", formatted);

//how many days have start to newyear

const today = new Date();
const newYear = new Date(today.getFullYear() + 1, 0, 1);
const diff = newYear - today; // milliseconds
const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

console.log(`Days left until New Year: ${daysLeft}`);

//BigInt to store a large ID and perform addition

const transactionID = 200507203297n;  // BigInt uses 'n'
const nextTransaction = transactionID + 1n;

console.log("Transaction ID:", transactionID);
console.log("Next ID:", nextTransaction);

//Create two Symbols and show they are unique
const s1 = Symbol('user');
const s2 = Symbol('user');

console.log(s1 === s2); // false

//Difference between null and undefined
let a;
let b = null;

console.log(a); // undefined → variable declared but no value assigned
console.log(b); // null → value intentionally empty

//Use Intl.DateTimeFormat to format date by locale

const date = new Date();
const formattedDate = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'full',
  timeStyle: 'long'
}).format(date);

console.log("Locale Date:", formattedDate);

//Store a log entry with timestamp and unique Symbol ID

const logID = Symbol('log');
const logEntry = {
  id: logID,
  message: "User logged in",
  timestamp: new Date().toISOString()
};

console.log(logEntry);


