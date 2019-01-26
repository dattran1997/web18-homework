$(document). ready(function(){
    console.log('js loaded');
    $(".question-button").on('click', () => {
        console.log("click");
        
        $.ajax({
            url: "/getTotalQuestion",
            type: "GET",
            success: (data,statusCode)=>{
                console.log("server load sucessful");
                // const response = JSON.parse(request.response);
                $(".total-question").text(data.totalQuestion);
            },
            error: (xhr, statusCode, error) =>{
                console.log(error);
            },
        });

        $.ajax({
            
        });
    });
});
