// Responsible for changing favicon when browser changes state
$(window).focus(function() {
    $('#favicon').attr('href', '/img/branding/dark-favicon.png');
});

$(window).blur(function() {
    $('#favicon').attr('href', '/img/branding/light-favicon.png');
});