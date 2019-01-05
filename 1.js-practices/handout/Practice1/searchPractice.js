'use strict'

function search(input, target) {
    for(let i = 0; i < input.length; i ++){
        if(input[i] == target){
            return i;
        }
    }
    //chạy hết các phần tử trong list nếu ko trả về kết quả sẽ trả về -1
    return -1;
}

module.exports = search
