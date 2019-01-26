$(document).ready(() => {
  const questionId = window.location.pathname.split('/')[2];

  $.ajax({
    url: `/api/questions/getQuestionById/${questionId}`,
    type: 'GET',
    success: (data) => {
      const yesPercent = (Number(data.yes) / (Number(data.yes) + Number(data.no)) * 100).toFixed(2);
      const noPercent = 100 - yesPercent;

      // display question
      $('.question-content').text(data.content);
      $('.total-vote').text(`${Number(data.yes) + Number(data.no)} votes`);
      $('.yes-percent').text(`Yes: ${yesPercent}%`);
      $('.no-percent').text(`No: ${noPercent}%`);

      // other question button
      $('.other-question').on('click', () => {
        window.location.href = '/';
      });
    },
    error: (_xhr, _statusCode, error) => {
      console.log(error);
    },
  });
});