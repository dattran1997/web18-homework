'use strict'

var testArray = [187,158,442,474,154,73,228,205,370,320,399,494,100,84,462,275,335];

function generate(testLengthArray){
  // return Array.from({length : testLengthArray.length})
  //   .map(item => ({
  //     input: Array.from({length: item}).map(item => []),
  //     target: 0,
  //     output: -1
  //   })
  // ); // Remove this line and change to your own algorithm
  var length ;
  var target;
  var output = -1;
  var input;
  var result = new Array();
  var item;
  for(var i = 0; i < testLengthArray.length; i++){
    length = testLengthArray[i];
    input = new Array();
    for(var j = 0;j < length; j++){
      var ran_num = Math.floor(Math.random() * 9999*2) + -9999;
      input.push(ran_num);
    }
    input = sort_accending(input);
    if(i == 0){
      //not found
      target = 99999;
    }else if (i == 1){
      //first index
      target = input[0];
    }else if(i == 3){
      //last index
      target = input[input.length-1];
    }else{
      // not first not last
      target = Math.floor(Math.random() * 9999*2) + -9999;
    }
    output = search(input, target);
    item = {
      "input":input,
      "target":target,
      "output":output
    }
    result.push(item);
  }
  return result;
}

function sort_accending(list){
  var max;
  for(var i = 0; i < list.length; i++){
    for(var j =i+1; j < list.length; j++){
      if(list[i] > list[j]){
        max = list[i];
        list[i] = list[j];
        list[j] = max;
      }
    }
  }
  return list;
}

function search(input, target) {
  for(let i = 0; i < input.length; i ++){
      if(input[i] == target){
          return i;
      }
  }
  return -1;
}


// var array = generate(testArray);
// console.log(array);


// correct ex:

function generate(testLengthArray){
  for(let i = 0; i <testLengthArray.length;i++){
    let inputLeght = testLengthArray[i];
    let item ={
      "input":[],
      "target":null,
      "output":null,
    }
    for(let j=0;j<inputLeght;j++){
      let ran_num = Math.floor(Math.random() * 9999*2) + -9999;
      item.input.push(ran_num);
    }
    item.input.sort(function(a,b) {return a-b});
    item.target =  Math.floor(Math.random() * inputLeght);
    item.output = item.input.indexOf(item.target);
    result.push(item);
  }

  //call back function(inputLength,index,arr)
  testArray.forEach(function(inputLength,index,arr)){

  }

  // .map để thay đổi phần tử trong mảng
  // [1,2,3].map(function(item) {return 
  //   item 
  //   // có thể là điều kiện
  // })

  // .filter

  return result;
}


module.exports = generate
