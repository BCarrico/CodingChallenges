// 

function getDivisorsCnt(n){
    let answers = []
    for (let i = 0; i <= n; i++){
      if (n % i == 0){
        console.log()
        answers.push(i)
      } 
      }
  
  return answers.length
    }