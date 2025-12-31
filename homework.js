// QUESTION 1
function compoundInterest(principal, rate, time) {
    let amount = principal * Math.pow((1 + rate / 100), time);
    let interest = amount - principal;
    return {amount,interest};
}
let P = 10000;  // principal
let R = 10;     // rate (%)
let T = 2;      // time (years)

let result = compoundInterest(P, R, T);
console.log("Total Amount: ",result.amount.toFixed(2));
console.log("Compound Interest: ",result.interest.toFixed(2));



// QUESTION 2
function findDistance(x1, y1, x2, y2) {
    let dx = x2 - x1;   // difference in x
    let dy = y2 - y1;   // difference in y
    let distance = Math.sqrt(dx * dx + dy * dy);
    return distance;
}
// Example values
let x1 = 2;
let y1 = 4;
let x2 = 6;
let y2 = 8;
let resultS = findDistance(x1, y1, x2, y2);
console.log("Distance between two points is: " + resultS.toFixed(2));


// QUESTION 3
function moveCar(x, y, speed, angleDeg) {
    // Convert degree to radians
    let angleRad = angleDeg * (Math.PI / 180);
    // Calculate new position
    let newX = x + speed * Math.cos(angleRad);
    let newY = y + speed * Math.sin(angleRad);

    return { newX, newY };
}
let resultss = moveCar(0, 0, 5, 60);
console.log("New X:", resultss.newX.toFixed(2));
console.log("New Y:", resultss.newY.toFixed(2));