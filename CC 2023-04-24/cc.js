// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

// Examples
// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"


function balance(left,right){
    let lsplit = left.split("")
    let rsplit = right.split("")
    let leftTotal = 0
    let rightTotal = 0
    for (let i = 0; i < lsplit.length; i++){
      if (lsplit[i] === "!"){
        leftTotal += 2
      } else {
        leftTotal += 3
      }
    }
  for (let i = 0; i < rsplit.length; i++){
      if (rsplit[i] === "!"){
        rightTotal += 2
      } else {
        rightTotal += 3
      }
    }
      
    
    
      if (leftTotal > rightTotal){
        return "Left"
      } else if (rightTotal > leftTotal){
        return "Right"
      } else {
        return "Balance"
      }
    
  }