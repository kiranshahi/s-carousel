$(document).ready(function(){
    
    $('.next-btn').on('click', function(){
        var currentSlide = $('.active');
        var nextSlide = currentSlide.next('.mySlides');
        if (nextSlide.length) {
        	nextSlide.addClass('active');    
        	currentSlide.removeClass('active');	
        } else {
            $('.mySlides').first().addClass('active');    
        	currentSlide.removeClass('active');
        }
    });

    $('.prev-btn').on('click', function() {
        var currentSlide = $('.active');
        var prevSlide = currentSlide.prev('.mySlides');
        if (prevSlide.length) {
        	prevSlide.addClass('active');
        	currentSlide.removeClass('active');
        } else {
            $('.mySlides').last().addClass('active');    
        	currentSlide.removeClass('active');
        }
    });

    setInterval(function(){
        var currentSlide = $('.active');
        var nextSlide = currentSlide.next('.mySlides');
        if (nextSlide.length) {
        	nextSlide.addClass('active');    
        	currentSlide.removeClass('active');	
        } else {
            $('.mySlides').first().addClass('active');    
        	currentSlide.removeClass('active');
        }
    }, 3000);
});