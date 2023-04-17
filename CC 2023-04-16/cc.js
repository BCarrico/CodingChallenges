// Chingel is practicing for a rowing competition to be held on this saturday. He is trying his best to win this tournament for which he needs to figure out how much time it takes to cover a certain distance.

// Input

// You will be provided with the total distance of the journey, speed of the boat and whether he is going downstream or upstream. The speed of the stream and direction of rowing will be given as a string. Check example test cases!

// Output

// The output returned should be the time taken to cover the distance. If the result has decimal places, round them to 2 fixed positions.

// Show some love ;) Rank and Upvote!

export function time(distance:number,boatSpeed:number,stream:String):number{
    let streamSpeed : number = Number(stream.split(" ")[1])
    let newSpeed : number
    if (stream.split(" ")[0] === "Downstream"){
      newSpeed = boatSpeed + streamSpeed
    } else {
      newSpeed = boatSpeed - streamSpeed
    }
    let time : number = distance / newSpeed
    return Number(time.toFixed(2))
  }