$(document).ready(function(){

	let $menu = $(".header");

	$(window).scroll(function(){
		if ( $(this).scrollTop() > 500 && $menu.hasClass("default") ){
			$menu.removeClass("default").addClass("fixed");
		} else if($(this).scrollTop() <= 500 && $menu.hasClass("fixed")) {
			$menu.removeClass("fixed").addClass("default");
		}
	});

    let button = $('.to-top');
        button.on('click', function(){
        $('body, html').animate({
        scrollTop: 0
        }, 800);
        return false;
    });

    $(document).ready(function() {
        $('.navbar-toggler').click(function() {
            $('.header').toggleClass('header-toggle-height');
        })
    })

});