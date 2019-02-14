function show_modal() {
	$('.modal-link').on('click', function() {
        var target = $(this).data('target');
        $('.modal__fon').css('visibility', 'visible').addClass('animated');
        $('#'+target).css('visibility', 'visible').addClass('animated');
        return false;
    });
}
function close_modal() {
	$('.modal__message__close, .modal__fon').on('click', function() {
        $('.modal__fon').css('visibility', 'hidden').removeClass('animated');
        $('.modal__message').each(function() {
        	$(this).removeClass('animated').css('visibility', 'hidden');
        })
    });
}
$(document).ready( function() {
    show_modal();
    close_modal();
});