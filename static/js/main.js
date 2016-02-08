var main = function() {
  $('.btn').click(function() {
    var nametext=$("#nametext").val();
    var contenttext=$("#contenttext").val();
    if ($("#nametext").val().replace(/(^\s*)|(\s*$)/g, "").length == 0) {
      nametext = "匿名";
    };
    $.post("/post",{name:nametext, comment:contenttext});
    window.location.href="/";
    $('.status-box').val('');
    $('.counter').text('140');
    $('.btn').addClass('disabled'); 
  });
  
  $('.status-box').keyup(function() {
    var postLength = $(this).val().length;
    var charactersLeft = 140 - postLength;
    $('.counter').text(charactersLeft);
  
    if(charactersLeft < 0) {
      $('.btn').addClass('disabled'); 
    }
    else if(charactersLeft == 140) {
      $('.btn').addClass('disabled');
    }
    else {
      $('.btn').removeClass('disabled');
    }
  });
  
  $('.btn').addClass('disabled');
}

$(document).ready(main);