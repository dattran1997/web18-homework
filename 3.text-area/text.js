$(document).ready(function(){

    // var maxLength = $("#textarea").attr("maxlength");
    // var textLength = maxLength;
    // $("#text-count").text(textLength +"/"+ maxLength);

    // $("#textarea").keyup(function(){
    //     textLength = $("#textarea").val().length;
    //     var textRemain = maxLength - textLength;
    //     $("#text-count").text(textRemain +"/"+ maxLength);
    // });
});

var totalText = 200;
console.log('hello');
document.getElementById("text-count").innerText = "200/200" ;

document.querySelector("textarea").addEventListener("input", function(){
    const length = document.querySelector("textarea").value.length;
    const textRemain = totalText - length;
    console.log(textRemain);
    document.getElementById("text-count").innerText = textRemain + "/" + totalText ;
});

// function textCount(textArea){
//         var maxLength = 200;
//         var textLength = textArea.value.length;
//         if(textLength >= maxLength ){
//             textArea.value = textArea.value.substring(0,maxLength);
//         }else{
//             $("text-count").text(maxLength - textLength,"/",maxLength);
//         }
//     };
