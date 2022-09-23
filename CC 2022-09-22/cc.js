// DESCRIPTION:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
    return x.reduce((a, b) => a * b)
   }


   function hero(bullets, dragons){
    if (bullets === 0){
        return false
    } else if (bullets % dragons === 0) {
        return true
    } else {
        return false
    }
}

function hero(bullets, dragons){
    return bullets >= dragons * 2
  }

//   each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

function last(x){
    let strArray = x.split(" ")
    return strArray.sort((a,b) => a.charAt(-1) > b.charAt(-1))
}