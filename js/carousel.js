(function ($) {

    $.fn.scarousel = function () {
        var settings = $.extend({
            sliderWrapper: '.mySlides'
        });
        var interval;

        startSlider();

        $('.next-btn').on('click', function () {
            slideNext();
        });

        $('.prev-btn').on('click', function () {
            slidePrev();
        });

        function slideNext() {
            var currentSlide = this.$('.active');
            var nextSlide = currentSlide.next(settings.sliderWrapper);
            if (nextSlide.length) {
                nextSlide.addClass('active');
                currentSlide.removeClass('active');
            } else {
                $(settings.sliderWrapper).first().addClass('active');
                currentSlide.removeClass('active');
            }
        }

        function slidePrev() {
            var currentSlide = this.$('.active');
            var prevSlide = currentSlide.prev(settings.sliderWrapper);
            if (prevSlide.length) {
                prevSlide.addClass('active');
                currentSlide.removeClass('active');
            } else {
                $(settings.sliderWrapper).last().addClass('active');
                currentSlide.removeClass('active');
            }
        }

        function startSlider() {
            interval = setInterval(function () {
                slideNext();
            }, 3000);
        }

        function pauseSlider() {
            clearInterval(interval);
        }

        this
            .on('mouseenter', pauseSlider)
            .on('mouseleave', startSlider);
    };

}(jQuery));