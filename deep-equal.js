function deepEqual(value, reference) {
  if (typeof value === "object" && typeof reference === "object"){
    let valueArray = Object.keys(value);
    let referenceArray = Object.keys(reference);
    if (valueArray.length == referenceArray.length){
      for (let i = 0; i < valueArray.length; i++){
        if (valueArray[i] != referenceArray[i]){
          return false;
        }
        if (value[valueArray[i]] != reference[referenceArray[i]]){
          if (deepEqual(value[valueArray[i]], reference[referenceArray[i]]) === true){
            break;
          }
          return false;
        }
      }
      return true;
    }
    else {
      return false;
    }
  }
  else{
    return value === reference ? true : false;
  }
}






// tests
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
