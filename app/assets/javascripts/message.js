$(function() {
  $('.new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
      url: groups,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })



  })
})
