function isEmpty(arrNum) {
  if(arrNum[0] == undefined) {
    return true
  } else {
    return false
  }
}

console.log('----------------isEmpty----------------');
console.log(isEmpty([])); // return true
console.log(isEmpty([1,2,3])); // return false

function count(num) {
  var total = num.reduce(function (index) {
    return index+1;
  }, 0);

  if(num[0] == undefined) {
    return 0
  } else {
    return total;
  }
}

console.log('----------------count----------------');
console.log(count([])); // return 0
console.log(count([1,2,3])); // return 3

function head(num) {
  if (num[0] == undefined) {
    return false
  } else {
    return num[0]
  }
}
console.log('----------------head----------------')
console.log(head([1,2,3])); // return 1
console.log(head([4,5,7])); // return 4

function tail(num) {
  var x = num.splice(0,1)
  return num
}

console.log('----------------tail----------------')
console.log(tail([1,2,3])); // return [2,3]
console.log(tail([2,3])); // return [3]


function flatten(arr) {
  return arr.join(',').split(',')
}

console.log('----------------flatten----------------')
console.log(flatten([1,[2,3],4,[5,[6,7]]])); // return [1,2,3,4,5,6,7]
