// Shrink and unshrink the navbar brand logo
$(window).scroll(function() {
    if($(document).scrollTop() > 0) // 3em with 16px default font-size
    {
        $('nav.navbar').addClass('shrink');
        $('#nav-logo').addClass('shrink');
    }
    else
    {
        $('nav.navbar').removeClass('shrink');
        $('#nav-logo').removeClass('shrink');
    }
});