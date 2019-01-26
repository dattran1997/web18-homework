$(document).ready(() => {
  console.log('Document is ready');
  

  $(".ask").on("submit", (event) => {
    event.preventDefault();

    $.ajax({
      url : "/api/questions",
      type : 'POST',
      data : {
        questionContent : $("#question").value,
      },
      success : (data) => {
        window.location.href = `answer/${data.data_id}`;
      }
    });



  $('.questions-button').on('click', () => {
    console.log('test');

    $.ajax({
      url: '/getTotalQuestions',
      type: 'GET',
      success: (data, statusCode) => {
        // const response = JSON.parse(data);
        $('.total-questions').text(data.totalQuestion)
      },
      error: (xhr, statusCode, error) => {
        console.log(error);
      },
    });
  });
});