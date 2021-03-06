$(function() {

  var preInput;

  function appendUser(user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>追加</a>
                </div>`
    $('#user-search-result').append(html);
  }

  function appendNoUser(user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user}</p>
                </div>`
    $('#user-search-result').append(html);
  }

  function appendMember(user) {
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                  <input name='group[user_ids][]' type='hidden' value=${user.id}>
                  <p class='chat-group-user__name'>${user.name}</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                  </div>`
    $('#chat-group-users').append(html);
  }

  $('#user-search-field').on('keyup', function() {
    var input = $(this).val();
    if (input !== preInput && input.length !== 0) {
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      $('#user-search-result').empty();
      if (users.length !== 0) {
        users.forEach(function(user) {
          appendUser(user);
        });
      } else {
        appendNoUser("一致するユーザーはいません。")
      }
      preInput = input;
    })
    .fail(function() {
      alert('通信に失敗しました。')
    })
    } else if (input.length === 0) {
      $('#user-search-result').text('');
    }
  });

  $('#user-search-result').on('click', '.user-search-add', function() {
    $(this).parent().remove();
    // 選択されたユーザー情報を取得する
    var user = { id: $(this).data('userId'), name: $(this).data('userName') };
    // HTMLを追加する関数に渡す
    appendMember(user);
  })

  $('#chat-group-users').on('click', '.js-remove-btn', function() {
    $(this).parent().remove();
  })
});
