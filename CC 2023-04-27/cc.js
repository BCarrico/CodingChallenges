// Task
// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

function productArray(numbers){
  let result = []
  
  for (let i = 0; i < numbers.length; i++){
    let newArr = numbers.filter((item, index) => index != i)
    result.push(newArr.reduce((a,b)=>a*b))
  }
  return result
}