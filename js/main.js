$(document).ready(function() {
    $(".dropdown-menu li a").click(function(){
        $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret" style="position: absolute; right: 10px;"></span>');
        $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
      });
});