$(function() {

  function buildHTML(message) {
    var insertImage = ''
    if (message.image.url) {
      insertImage = `<img class="content__message__image" src="${message.image.url}">`
    }
    var html = `<div class="content__message__block" data-id="${message.id}">
                <div class="content__message__name">
                  ${message.user_name}
                    </div>
                <p class="content__message__date">
                  ${message.created_at}
                    </p>
                <p class="content__message__text">
                  ${message.body}
                  </p>
                ${insertImage}`
    return html;
  }

  function scrollBottom(content) {
    content.animate({scrollTop: content[0].scrollHeight}, 'fast');
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
      $('.new_message')[0].reset();
      $('.content__message-send__content__btn').removeAttr('disabled');
      // 一番下までスクロールする
      scrollBottom($('.content'))
    })
    .fail(function(data) {
      alert('通信に失敗しました。');
    })
  })

  // 'messages'を含むURLの場合に処理を行う
  $(window).on('load', function() {
    if(document.URL.match('messages')) {
      scrollBottom($('.content'));
      // 5秒に一回、非同期でリクエストを送信し、dataの内容をHTMLとして追加する
      setInterval(function() {
        var url = $('#new_message').attr('action');
        var latest_id = $('.content__message__block:last').data('id');
        if (latest_id) {
          $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            data: {
              'id': latest_id
            }
          })
          .done(function(data) {
            data.forEach(function(message) {
              var html = buildHTML(message);
              $('.content__message').append(html);
            });
            scrollBottom($('.content'));
          })
          .fail(function(data) {
            alert('通信に失敗しました。')
          })
        }
      }, 5000);
    }
  });

  //ユーザーがスクロールしたら.noticeを消す
  $(window).on('scroll', function() {
    if (document.URL.match('messages') && $('.notice')) {
      $('.notice').remove();
    }
  })
})
