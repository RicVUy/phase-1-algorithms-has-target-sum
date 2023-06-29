//function hasTargetSum(array, target) {
  // Write your algorithm here
  let i = 0;
let k = 0;
let m = 0;
//boolean b = false;
const array =[];
function hasTargetSum(arrInt, targetInt){
  for (i = 0; i <arrInt.length-1; i++){
    for (k= i+1;k< arrInt.length; k++ ){
      console.log(arrInt[i]);
      console.log(arrInt[k]);
       array.push((arrInt[i]) + (arrInt[k]));
      
    }console.log(array);
     m = array.find(function (num) {
    if (num === targetInt){
    return num }
  }); console.log(m);
    
  } if (m === targetInt){
      return true;
    }return false;
}
//console.log(hasTargetSum([3, 8, 12, 4, 11], 7));


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
