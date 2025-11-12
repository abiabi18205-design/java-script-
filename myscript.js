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





//presentation

console.log(typeof user)
console.log(Number.POSITIVE_INFINITY)
console.log(Number,MAX_value*2)
console.log(Number.MIN_value*2)


console.log(Number.EPSILON)
let name="abi";
console.log(name.length)

let name="abi";
let l_name="shanth"

x=name.touppercase();

let name=prompt"welcome to uki"
let l_name=("abishanth")

console.log("hello ,$(name).welcome to uki");

let name="abi";
 let l_name="shanth"
console.log(name.charAt(2));
console.log(l_name.slice(1,4));

console.log(name.includes("gt"));
console.log(l_name.substring(1,4))

let f_name="shanth"
console.log(f_name.trimStart());

console.log(f_name.trimend());

let x;
console.log(Boolean(x));

let y=10;
console.log(boolean(y));

let c=5;
console.log(boolean(c == 8));

let d=5;
console.log(boolean(d !=8));

let e=5;
let f=10;
console.log(Boolean(e<f));
console.log(Boolean(e>f));

let name=true
if(name){
    console.log("i am abishanth")
}
else{
    console.log("invalide name")
}

let num1=15;
let num2=20;
if (num1>num2){
    console.log("correct")
}
else{
    console.log("wrong")
}

let x1=false;
let y1=new Boolean(false);
console.log(x1 == y1)
console.log(y1 === x1)






let name = prompt("Enter your name:");
let percentage = prompt("Enter your percentage:");

let price = prompt("Enter the original price:");

// Convert values
percentage = Number(percentage);
price = Number(price);

// Check for null, undefined, or invalid values
if (!name || isNaN(percentage) || isNaN(price)) {
  console.log("⚠️ Please enter valid details (name, percentage, price).");
} else 
  // Convert name to uppercase
  name = name.toUpperCase();

  // Calculate discount and final price
  let discountAmount = (price * percentage) / 100;
  let finalPrice = price - discountAmount;

  // Determine rating/status (optional)
  let status = percentage >= 50 ? "Big Saver 💰" : "Small Saver 🛍️";


console.log("🧾 --- RECEIPT ---");
 console.log("NAME: " + name);
 console.log("DISCOUNT: " + percentage + "%");
  console.log("ORIGINAL PRICE: LKR" + price);
   console.log("DISCOUNT AMOUNT: LKR" + discountAmount.toFixed(2));
  console.log("FINAL PRICE: LKR" + finalPrice.toFixed(2));
  console.log("STATUS: " + status);
  console.log("-------------------");