// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x){
    let split = x.split("")
    let result = []
    for (let i = 0; i < x.length; i++){
      if (split[i] == "a"){
        result.push("b")
      } else if (split[i] == "b"){
        result.push("a")
      } else {
        result.push("c")
      }
    }
      return result.join("")
    }