$('.directions-block__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,    
    infinite: true,
    arrows: true,
    prevArrow: '<button class="prev directions-block__arrow"></button>',
    nextArrow: '<button class="next directions-block__arrow"></button>',
});

$('.stories-block__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,    
    infinite: true,
    arrows: true,
    prevArrow: '<button class="prev stories-block__arrow"></button>',
    nextArrow: '<button class="next stories-block__arrow"></button>',
});

$('.questions-block__heading').click( function () {
    $(this).toggleClass('in').next().stop().slideToggle(200).parent().toggleClass('active');
});