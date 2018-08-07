$(function() {
  $('.new_message').on('submit', function(e) {
    e.preventDefault();
    input = $('#message_body').val();
  })
})
