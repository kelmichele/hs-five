//	Backbone v1.0, Copyright 2014, Joe Mottershaw, https://github.com/joemottershaw/
//	=======================================================================================

//	#Scroll To Top
//	==================================================

	// $(document).ready(function() {
	// 	$('.scroll-to-top').click(function() {
	// 		$('html, body').animate({ scrollTop: 0 }, 1600, 'easeInOutQuart');
	// 		return false;
	// 	});
	// });



	// JavaScript for themezinho
(function($) {
$(document).ready(function() {
	"use strict";


	// Scroll down opacity
		var divs = $('.int-header .hero');
		$(window).on('scroll', function() {
		var st = $(this).scrollTop();
		divs.css({ 'opacity' : (1 - st/400) });
		});


	// Testimonial
		$('.testimonials-carousel').slick({
		  dots: false
		}
		);

	// Parallax effect
		$.stellar({
			horizontalScrolling: false,
			responsive:true
		});

		$('.fade').slick({
		  dots: true,
		  infinite: true,
		  speed: 500,
		  fade: true,
		  cssEase: 'linear'
		});


	// Counter
		//$('.counter').counterUp({
         //   delay: 10,
         //   time: 1000
        //});

		$('.center').slick({
		  centerMode: true,
		  centerPadding: '0',
		  slidesToShow: 3,
		  responsive: [
		    {
		      breakpoint: 989,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '0',
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '0',
		        slidesToShow: 1
		      }
		    }
		  ]
		});

	});


	// Wow animations
		wow = new WOW(
      	{
       		animateClass: 'animated',
        	offset:       100
      	}
    	);
    	wow.init();




		// MASONRY
	$(window).load(function(){
		$('.portfolio-list').isotope({
			itemSelector: '.portfolio-list li',
			masonry: {
			  columnWidth: 0
			}
			});
		});


		$('.carousel').carousel({
			wrap: false,
			keyboard: true
		});



})(jQuery);
