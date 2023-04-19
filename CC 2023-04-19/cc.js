// Task
// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

// Notes:
// List size is at least 3.

// All numbers will be positive.

// Numbers could occur more than once , (Duplications may exist).

// Threshold K will always be reachable.

function minimumSteps(numbers, value){
    let sortedNum = numbers.sort((a,b)=>a-b)
    console.log(sortedNum)
    let count = 0
    let sum = sortedNum[0]
    for (let i = 0; i < sortedNum.length; i++){
      sum += sortedNum[i]
      if (sum <= value){
      count += 1
      } else {
        return count
      }
    }
   
  }