$(document).ready(function(){
 
    $(".login-box").click(function()
    {
        $('#loginbox-gris').fadeIn(300);
        var iddiv = $(this).attr("iddiv");
        $('#'+iddiv).fadeIn(300);
        $('#loginbox-gris').attr('opendiv',iddiv);
        return false;
    });
 
    $('#loginbox-gris, .loginbox-cancel').click(function()
    {
        var iddiv = $("#loginbox-gris").attr('opendiv');
        $('#loginbox-gris').fadeOut(300);
        $('#'+iddiv).fadeOut(300);
    });
 
});