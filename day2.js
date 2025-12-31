//date and time
// const today = new Date();
// console.log(today.toDateString());
// console.log(toLocaleDateString())

const today = new Date();


console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());

console.log()


// Calculate days until New Year
const newYear = new Date(today.getFullYear() + 1, 0, 1);
const diffTime = newYear - today;
const remainingDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
console.log("Days until New Year:", remainingDays);
