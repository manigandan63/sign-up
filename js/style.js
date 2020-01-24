$(document).ready(function() {
    $('button.sing-btn-n').click(function() {
        // $('.white-box').css('left', '32px');
        $('.white-box').addClass('sing-item');
        $('.white-box').removeClass('login-item');
        $('.form.form1').show();
        $('.form.form2').hide();

    });

    $('button.login-btn-n').click(function() {
        // $('.white-box').css('left', '367px');
        $('.white-box').addClass('login-item');
        $('.white-box').removeClass('sing-item');
        $('.form.form1').hide();
        $('.form.form2').show();
    });

    $("input").focus(function() {
        $(this).parent().css("border-bottom", "1px solid #f48a79");
        $(this).next().css("color", "#f48a79");
    });
    $("input").blur(function() {
        $(this).parent().css("border-bottom", "1px solid gray");
        $(this).next().css("color", "gray");
    });



});