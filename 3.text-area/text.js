$(document).ready(function(){

    // function textCount(textArea){
    //     var maxLength = 200;
    //     var textLength = textArea.value.length;
    //     if(textLength >= maxLength ){
    //         textArea.value = textArea.value.substring(0,maxLength);
    //     }else{
    //         $("text-count").text(maxLength - textLength,"/",maxLength);
    //     }
    // };

    var maxLength = $("#textarea").attr("maxlength");
    var textLength = 0;
    $("#text-count").text(textLength +"/"+ maxLength);

    $("#textarea").keyup(function(){
        textLength = $("#textarea").val().length;
        $("#text-count").text(textLength +"/"+ maxLength);
    });
});