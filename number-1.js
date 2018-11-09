// Given an array [1,4,5,7,12, 19, 45, 101], write a function that returns array that satisfies this condition: x*2 - (5 - x) == even number

function f(arr) {
  var result = []
  for (var i in arr) {
    var x = arr[i]
    var y = x*2-(5-x)
    if (y%2 === 0) 
      result.push(x)
  }
  return result;
}
