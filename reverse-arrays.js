function reverseArray(arr) {
  let reversedArr = [];
  for (let i of arr){
    reversedArr.unshift(i);
  }
  return reversedArr;
}

function reverseArrayInPlace(arr) {
  let arrLength = arr.length;
  let jumpIndex = 0;
  for (let i = 0; i < arrLength; i++) {
    arr.unshift(arr[i + jumpIndex]);
    jumpIndex += 1;
  }
  arr.length = arrLength;
  return arr;
}






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]