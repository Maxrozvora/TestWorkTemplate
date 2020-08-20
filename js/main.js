$(document).ready(function(){
	$('#hamburger').click(function(){
        $(this).toggleClass('open');
        $('#mobile-list').toggle();
    });
    
    $('.mobile-menu__link--has-child').click(function() {
        $(this).toggleClass('open');
        $(this).siblings( ".submenu" ).toggle();
    })
});