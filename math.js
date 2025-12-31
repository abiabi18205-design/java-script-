

// function DisPrice(price,discount){
//  DisPrice=price.reduce((sum, total)=> sum+total,0);
//  discount=total*(discount/100);
// discountprice = DisPrice-discount;
// }
// return{
//     DisPrice: DisPrice,
//     discount:discount,
//     discountprice:discountprice

// }

// let price =  ([100,200,300],10);
// let discount=10;

// DisPrice(price,discount)
// console.log("total price:" DisPrice );
// console.log("discounted price:" , discountprice);


// let total=[ 

 
// ]
// function getTotalPrice(products){
//      return total.reduce((total, prices) => {
//     return total + prices;
//   }, 0);
// }

// let totals = getTotalPrice(items);
// console.log("Total Price:", total);
















// // find total price Method 1

function DisPrice(price, discount) {

  // total price
  let total = price.reduce((sum, item) => sum + item, 0);

  // discount amount
  let discountAmount = total * (discount / 100);

  // final price
  let discountPrice = total - discountAmount;

  // return all values
  return {
    total: total,
    discount: discountAmount,
    finalPrice: discountPrice
  };
}

// data
let price = [100, 200, 300];
let discount = 10;

// call the function
let result = DisPrice(price, discount);

console.log("Total Price:", result.total);
console.log("Discount:", result.discount);
console.log("Final Price:", result.finalPrice);


// // other way to find total Method 2
