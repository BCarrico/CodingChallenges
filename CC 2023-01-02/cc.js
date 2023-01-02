// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

function minSum(arr) {
    let sortArr = arr.sort((a,b) => a - b)
    let result = 0
    for (let i = 1; i < (sortArr.length/2)+1; i++){
      
        result += sortArr[i-1]*sortArr[sortArr.length-i]
      }
    return result
  }