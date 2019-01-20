$(document). ready(function(){
    console.log('js loaded');
    // cấu trúc ${selector}.method
    // console.log($);
    // $(".submit-button").hover(() =>{
    //     $(".submit-button").addClass("hover");
    // }, () =>{
    //     $(".submit-button").removeClass("hover");
    // });

    // $(".submit-button").hover(handleIn,handleOut);

    // $("#question").val("hello");
    $(".question-button").on('click', () => {
        console.log("click");
        // dùng xml để truyền dữ liệu từ server đến font end mà ko cần phải reload trang
        //tạo 1 request mới
        // const request = new XMLHttpRequest();
        // //tạo route để yêu cầu server gửi biến lên font end
        // request.open('GET' ,"/getTotalQuestion");
        // // gán vào hàm nêu hàm trả về thì sẽ chạy
        // request.onreadystatechange = () => {
        //     if(request.readyState === 4 && request.status === 200){
        //         // nhận biến từ server về từ response chuẩn bị dùng cho font end
        //         console.log(request.response);
        //         const response = JSON.parse(request.response);
        //         $(".total-question").text(response.totalQuestion);
        //     }else{
        //         console.log(request.status);
        //     }
        // };
        // request.send();

        //dung ajax 
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
    });
});
