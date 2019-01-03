'use strict'

var abc = [10,11,20,25,30,18,1,2]

function sort(input) {
  var max;
  for(var i = 0; i < input.length; i++){
    for(var j =i+1; j < input.length; j++){
      if(input[i] > input[j]){
        // console.log("i: ",i);
        // console.log("j: ",j);
        max = input[i];
        input[i] = input[j];
        input[j] = max;
      }
    }
  }
  return input;
  // var max;
  // for(var i = 0; i < input.lenght; i++){
  //   for(var j =i+1; j < input.lenght; j++){
  //     if(input[i] > input[j]){
  //         console.log("i: ",i);
  //         console.log("j: ",j);
  //       max = input[i];
  //       input[i] = input[j];
  //       input[j] = max;
  //     }
  //   }
  // }
  // return input;
}

// var input_check = sort(abc)
// console.log(input_check)

module.exports = sort
