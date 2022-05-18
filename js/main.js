$(window).load( function() {	
    

    //PRELOADER
 $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.

    // PORTFOLIO ISOTOPE
     var $container = $('.isotope_items');
     $container.isotope();

    $('.portfolio_filter ul li').on("click", function(){
        $(".portfolio_filter ul li").removeClass("select-cat");
        $(this).addClass("select-cat");				 
        var selector = $(this).attr('data-filter');
        $(".isotope_items").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
    });
        return false;
    });  
    

    
}); // window load end 



$(document).ready( function() {	
    
    
	//smoth scroll 
	$('#down_arrow').smoothScroll()
        
        
         // WOW JS
    new WOW({ mobile: false }).init(); 

    //NAVBAR SHOW - HIDE
    $(window).scroll(function() {				
    var scroll = $(window).scrollTop();
    var homeheight = $(".home").height() -86;			

    if (scroll > homeheight ) {												
        $("nav").slideDown(100);
        } else {
        $("nav").slideUp(100);
        }
     }); 
    
    	
    // RESPONSIVE MENU
	$('.responsive').on('click', function (e) {
        $('.nav-menu').slideToggle();
    });
    
    
    // HOME PAGE HEIGHT
     function centerInit() {
        var hometext = $('.home')

        hometext.css({
            "height": $(window).height() + "px"
        });
    }
    centerInit();
    $(window).resize(centerInit);
    
    
    // HOME TYPED JS
     $(function(){
      $(".element").typed({
        strings: ["Md. Asaduzzaman Tanjil", "Web Developer",],
        typeSpeed: 10,
        loop:true,
        backDelay: 2000
      });
  });
    
  //jquery  scrollTo for menu
    
    
}); // document ready end 



