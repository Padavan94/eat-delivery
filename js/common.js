$('#preloader').show();

$(document).ready(function() {


	$(".shares__box").mouseenter( function(){
		$(this).addClass('active');
		if($(this).hasClass('shares__box--inverse')) {
			$(this).addClass('active');
			$(this).prev().addClass('active offset');
		}
	} ).mouseleave( function(){
		$(this).removeClass('active');
		if($(this).hasClass('shares__box--inverse')) {
			$(this).removeClass('active');
			$(this).prev().removeClass('active offset');
		}
	} );




	/*from menu to order*/

	$('.open.cart-menu').magnificPopup({
		type:'inline',
		midClick: true,
		showCloseBtn: false,
		callbacks: {
			beforeOpen: function() {
				$(".cart-form--your-choose").removeClass('active');
			}
		},
	});
	$('.close-order.cart-menu').click(function(event) {
		$.magnificPopup.close();
	});

	forSVG();
	//owl caroousel1
	var owl = $('.owl-carousel'); 

	owl.owlCarousel({
	    loop:true,
	    nav:false,
	    items: 1,
	    autoplay: 3000,
	    autoplaySpeed: 1500,
	})
	
	$('.slider__prev').click(function() {
	    owl.trigger('prev.owl.carousel');
	})
	$('.slider__next').click(function() {
	    owl.trigger('next.owl.carousel');
	})

	//owl carousel2
	var owl2 = $('.owl-carousel2');

	owl2.owlCarousel({
	    loop:true,
	    nav:false,
	    items: 3,
	    margin: 35,
	    autoplay: 3000,
	    autoplaySpeed: 1500,
	    responsive:{
	        0:{
	            items:1
	        },
	        550:{
	            items:2
	        },
	        991:{
	            items:3
	        }
	    }
	})

	$('.food-menu__novelty__prev').click(function() {
	    owl2.trigger('prev.owl.carousel');
	})
	$('.food-menu__novelty__next').click(function() {
	    owl2.trigger('next.owl.carousel');
	})

	//call menu on mobile
	$(".toggle-button").click(function(event) {
		$(".header-wrapper__nav-mob").fadeIn("slow");
		$(this).fadeOut("slow");
	});
		//close menu
		$(".header-wrapper__nav-mob__close").click(function(event) {
			$(".header-wrapper__nav-mob").fadeOut("slow");
			$(".toggle-button").fadeIn("slow");
		});

	//call second menu on mobile
	$(".food-menu__button-down").click(function(event) {
		$(".food-menu__nav").slideToggle("slow");
	});
	//call third menu for food-menu-page
	$(".food-menu__button-down--menu").click(function(event) {
		$(".food-menu__sidebar__body").slideToggle("slow");
	});

	//call to form on bottom
	
		//call his fom with mafinific
		$('.open-popup, .button__contact-us').magnificPopup({
		  type:'inline',
		  midClick: true,
		  showCloseBtn: false
		});


		/*(".callback__form__close mfp-close").click(function(event) {
			$.magnificPopup.close();
		});*/

	/*toggle cart menu*/
	$(".header__buttons__btn.cart").click(function(event) {
		$(".cart-form--your-choose").toggleClass('active');
		$(".cart-form__buttons__close.cart-menu").click(function(event) {
			$(".cart-form--your-choose").removeClass('active');
		});
	});

	//hide preloader
    $('#preloader').delay(500).fadeOut("slow");

});

function forSVG(){
    $('.svg').each(function () {
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }

        $svg = $svg.removeAttr('xmlns:a');
        $svg = $svg.removeAttr('fill');


        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');
});}