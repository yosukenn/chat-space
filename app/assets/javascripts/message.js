$(function() {

function buildHTML(message) {
  var html = `<div class="content__message__name">
                ${message.user_name}
                  </div>
              <p class="content__message__date">
                ${message.created_at}
                  </p>
              <p class="content__message__text">
                ${message.body}
                </p>`
  return html;
}

  $('.new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.content__message').append(html);
      $('.content__message-send__content__text').val();
    })



  })
})
