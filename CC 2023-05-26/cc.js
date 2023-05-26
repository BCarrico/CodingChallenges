// Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

// Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

// Examples
// "1 beer"  -->  "1 glass of water"
// because you drank one standard drink

// "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
// because you drank ten standard drinks

function hydrate(s) {
    let nums = s.match(/\d+/g).map(Number).reduce((a,b)=>a+b,0)
    return nums > 1 ? `${nums} glasses of water` : `${nums} glass of water`
  }