$(document).ready(function(){
    
    $('.next-btn').on('click', function(){
        var sliderSelecter = '.mySlides';
        slideNext(sliderSelecter);
    });

    $('.prev-btn').on('click', function() {
        var sliderSelecter = '.mySlides';
        slidePrev(sliderSelecter);
    });

    setInterval(function(){
        var sliderSelecter = '.mySlides';
        slideNext(sliderSelecter);
    }, 3000);

    function slideNext(sliderSelecter) {
        var currentSlide = $('.active');
        var nextSlide = currentSlide.next(sliderSelecter);
        if (nextSlide.length) {
        	nextSlide.addClass('active');    
        	currentSlide.removeClass('active');	
        } else {
            $(sliderSelecter).first().addClass('active');    
        	currentSlide.removeClass('active');
        }
    }

    function slidePrev(sliderSelecter) {
        var currentSlide = $('.active');
        var prevSlide = currentSlide.prev(sliderSelecter);
        if (prevSlide.length) {
        	prevSlide.addClass('active');
        	currentSlide.removeClass('active');
        } else {
            $(sliderSelecter).last().addClass('active');    
        	currentSlide.removeClass('active');
        }
    }
});