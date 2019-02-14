function dropdownlist__expand() {
	$('.dropdown-expand').on('click', function() {
        var target = $(this).data('target');
        $(this).toggleClass('icon-plus')
        	   .parents('.dropdown-title')
        	   .toggleClass('dropdown-title--expanded');
        $('#'+target).toggleClass('hidden');
    });
}
$(document).ready( function() {
    dropdownlist__expand();
});