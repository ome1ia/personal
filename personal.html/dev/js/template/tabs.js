$(document).ready(function() {
    if(window.location.hash && $(window.location.hash+'.tabs__content').length) {
        activateTab(window.location.hash);
    } //else - use classes template

    $('.tab__title').on('click', function() {
        var id = $(this).attr('href');
        activateTab(id);
        return false;
    });

    function activateTab(id) {
        var buttonActive = $('.tab__title[href="'+id+'"]');
        var buttons = buttonActive.siblings('.tab__title');
        var contentActive = $(id);
        var content = contentActive.siblings('.tabs__content');

        if( !buttonActive.hasClass('tab__title-active') ) {
            buttonActive.addClass('tab__title-active');
        }
        buttons.each(function() {
            $(this).removeClass('tab__title-active');
        });

        if( !contentActive.hasClass('tabs__content-active') ) {
            contentActive.addClass('tabs__content-active');
        }
        content.each(function() {
            $(this).removeClass('tabs__content-active');
        });
    }
});
