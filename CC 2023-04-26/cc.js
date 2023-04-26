// Implement a function that returns the minimal and the maximal value of a list (in this order).

function getMinMax(arr){
    arr.sort((a,b)=>a-b)
    return [arr[0], arr[arr.length-1]]
  };