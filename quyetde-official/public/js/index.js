$(document).ready(() => {
  $.ajax({
    url: '/api/questions/getRandomQuestion',
    type: 'GET',
    success: (data) => {
      // display question
      $('.question-content').text(data.content);

      // handle vote yes
      $('.vote-yes').on('click', () => {
        $.ajax({
          url: '/api/questions',
          type: 'PUT',
          data: {
            questionId: data.id,
            vote: 'yes'
          },
          success: (voteYesdata) => {
            console.log(voteYesdata);
            window.location.href = `/answer/${data.id}`;
          },
          error: (_xhr, _statusCode, error) => {
            console.log(error);
          },
        });
      });

      // handle vote no
      $('.vote-no').on('click', () => {
        $.ajax({
          url: '/api/questions',
          type: 'PUT',
          data: {
            questionId: data.id,
            vote: 'no'
          },
          success: (voteNodata) => {
            console.log(voteNodata);
            window.location.href = `/answer/${data.id}`;
          },
          error: (_xhr, _statusCode, error) => {
            console.log(error);
          },
        });
      });
    },
    error: (_xhr, _statusCode, error) => {
      console.log(error);
    },
  });
});