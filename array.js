// //Question 1
// // Access First and Last Elements
// const numbers = [1, 2, 36, 7];
// const first = numbers[0];
// const last = numbers[numbers.length - 1];
// console.log("First:", first);
// console.log("Last:", last);

// //Question 2
// // Add Elements (at Beginning and End)
// const numbers = [1, 2, 36, 7];
// numbers.push(10);   
// numbers.unshift(0); 
// console.log(numbers); 

// //Question 3
// //  Remove Elements (from Beginning and End)
// const numbers = [1, 2, 36, 7];
// numbers.shift(); 
// numbers.pop();  
// console.log(numbers);


// //Question 4
// //Loop Through Array (for loop)
// const numbers = [1, 2, 36, 7];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// // Question 5
// //  Use forEach()
// const numbers = [1, 2, 36, 7];
// numbers.forEach(num => console.log(num));


// // Question 6
// //  Find Maximum and Minimum
// const numbers = [1, 2, 36, 7];
// const max = Math.max(...numbers);
// const min = Math.min(...numbers);
// console.log("Max:", max);
// console.log("Min:", min);




// // Check if 36 Exists
// const numbers = [1, 2, 36, 7];
// console.log(numbers.includes(36)); // true


// // Sum of All Elements
// const numbers = [1, 2, 36, 7];
// const sum = numbers.reduce((total, num) => total + num, 0);
// console.log("Sum:", sum);


// // Sort Array (Ascending)
// const numbers = [1, 2, 36, 7];
// const sorted = [...numbers].sort((a, b) => a - b);
// console.log(sorted); 


// // Reverse Array
// const numbers = [1, 2, 36, 7];
// const reversed = [...numbers].reverse();
// console.log(reversed); 

// //  Filter Numbers > 5
// const numbers = [1, 2, 36, 7];
// const filtered = numbers.filter(num => num > 5);
// console.log(filtered); 
