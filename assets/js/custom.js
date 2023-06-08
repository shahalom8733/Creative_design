$(document).ready(function(){
	$('.counter').counterUp({
		dealy:5000,
		time:500
	})
})

window.onscroll = function(){
	scrollFunction();
}
function scrollFunction(){
	if(document.body.scrollTop >30 || document.documentElement.scrollTop > 30){
		document.getElementById('header-menu').style.top = "0";	
	}
	else{
		document.getElementById('header-menu').style.top = "-100%";
	}	 
}
$(document).ready(function(){
    $('.vplay').magnificPopup({
        type: 'iframe',
      
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                      '<div class="mfp-close"></div>'+
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>', 
          
            patterns: {
              youtube: {
                index: 'youtube.com/',
          
                id: 'v=',
          
                src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
              },
              vimeo: {
                index: 'vimeo.com/',
                id: '/',
                src: 'https://player.vimeo.com/video/%id%?autoplay=1'
              },
              gmaps: {
                index: '//maps.google.',
                src: '%id%&output=embed'
              }

            },
          
            srcAction: 'iframe_src', 
          }  
    });
})
$(document).ready(function(){

$('.test-popup-link').magnificPopup({
  type: 'image',
      gallery: {
      enabled: true
    },
  // other options
});

/* Preloader */
// makes sure the whole site is loaded
jQuery(window).load(function() {
	$('.loder').delay(100).fadeOut('slow');
	$('#preloader').delay(500).fadeOut('slow');
	$('body').delay(500).css({'overflow':'visible'});
});


	$('nav ul li a').click(function(){
		$('nav ul li a').removeClass('active');
		$(this).addClass('active');
	})

	$('.bar-show').click(function(){
		$(this).removeClass('bar-show');
		$('.bar-x').addClass('bar-xing');
		$('.menu ul').show();
	})
	$('.bar-x').click(function(){
		$(this).removeClass('bar-xing');
		$('.fa-bars').addClass('bar-show');
		$('.menu ul').hide();
	})

	// swiper_js
	// swiper_js
	    var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop:true,
    });
    var swiper = new Swiper(".slideClient", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    var swiper = new Swiper(".tuching", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay:true
    });

	$('.mixitup-menu button').click(function(){
		$('.mixitup-menu button').removeClass('mixitup-active');
		$(this).addClass('mixitup-active');
	})
	var mixer = mixitup('.mixitup-area');

});

AOS.init();


$(document).ready(function(){

	$('.mixitup-menu button').click(function(){
		$('.mixitup-menu button').removeClass('mixitup-active');
		$(this).addClass('mixitup-active');
	})

	var mixer = mixitup('.work-images');
});


