// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

function maxGap (numbers){
    let gap = 0
    let sorted = numbers.sort((a,b) => b - a)
    for (let i = 0; i < sorted.length-1; i++){
      let temp = sorted[i] - sorted[i+1]
      if (temp > gap){
        gap = temp
      }
    }
    return gap
  }