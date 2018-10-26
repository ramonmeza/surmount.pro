// Shrink and unshrink the navbar brand logo
$(window).scroll(function() {
    if($(document).scrollTop() > 48) // 3em with 16px default font-size
    {
        $('#nav-logo').addClass('shrink');
    }
    else
    {
        $('#nav-logo').removeClass('shrink');
    }
});