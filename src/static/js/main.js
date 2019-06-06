var bodyScrollOptions = {
    reserveScrollBarGap: true
};

function openModal(hrefModal) {
    
    if ($(hrefModal).length > 0){
        $(hrefModal).fadeIn(300);
    
        bodyScrollLock.clearAllBodyScrollLocks();
        bodyScrollLock.disableBodyScroll(hrefModal, bodyScrollOptions);
    }
    
    $(hrefModal).find('.slick-slider').slick('setPosition');
  
}

function closeModals() {
  if (scrollbarWidth > 0) {
    $('.popup-block:not(:hidden)').fadeOut(200, function() {
            bodyScrollLock.clearAllBodyScrollLocks();
        });
  } else {
    $('.popup-block:not(:hidden)').fadeOut(200);
    
    bodyScrollLock.clearAllBodyScrollLocks();
  }
}


$(document.body).on('click','[data-toggle="modal"]',function(e) {
  e.preventDefault();
  
  var hrefModal = $(this).attr('data-target');
  
  openModal(hrefModal);
});

$(document.body).on('click','.popup-block__overlay',function(e) {
  var closeButton = $(this).children('[data-toggle="dismiss"]');
  
  if (e.target != this) {
//    return false;
  } else {
    closeModals();
  }
});


$(document.body).on('click','[data-toggle="dismiss"]',function(e) {
  e.preventDefault();
  
  closeModals();
});

var block = $("<div>").css({
        height: "50px",
        width: "50px"
    }),
    indicator = $("<div>").css({
        height: "200px"
    }),
    scrollbarWidth = 0;
$("body").append(block.append(indicator));
var w1 = $("div", block).innerWidth();
block.css("overflow-y", "scroll");
var w2 = $("div", block).innerWidth();
$(block).remove();
scrollbarWidth = (w1 - w2);

$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $(this).toggleClass('active');
  $("#header-menu").toggleClass("active");
});

$("#menu-close").click(function(e) {
  e.preventDefault();
  $("#header-menu").removeClass("active");
});

$('.directions-block__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,   
    infinite: true,
    arrows: true,
    prevArrow: '<button class="prev directions-block__arrow"></button>',
    nextArrow: '<button class="next directions-block__arrow"></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
});

// Тут мы узнаем сколько вообще существует слайдов
var DirectionsSlidesCount = $('.directions-block__slider').children().length;
// В блок вписываем сколько всего слайдов
$('.directions-block__counter .directions-block__counter-total').text(DirectionsSlidesCount);
// Функция при смене слайда
$('.directions-block__slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
 var nextSlideNum = nextSlide + 1;
 $('.directions-block__counter .directions-block__counter-current').text(nextSlideNum);
});

var StoriesSlidesCount = $('.stories-block__slider').children().length;
$('.stories-block__counter .stories-block__counter-total').text(StoriesSlidesCount);
$('.stories-block__slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
 var nextSlideNum = nextSlide + 1;
 $('.stories-block__counter .stories-block__counter-current').text(nextSlideNum);
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

$(".rating-block").rateYo({
    starWidth: "18px",
    normalFill: "#f7941d",
    ratedFill: "#f7941d",
    fullStar: !0,
    readOnly: !0,
    spacing: "5px",
    starSvg: '<svg width="17" height="16" viewBox="0 0 17 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Canvas" transform="translate(-17817 -495)"><g id="Shape"><use xlink:href="#path0_fill" transform="translate(17817 495)"/></g></g><defs><path id="path0_fill" d="M 8.90195 0.263541L 11.0643 5.31475L 16.6003 5.78413C 16.9843 5.81685 17.1405 6.28968 16.849 6.53858L 12.6499 10.1291L 13.9082 15.4706C 13.9955 15.8418 13.588 16.1337 13.2581 15.9365L 8.50054 13.1047L 3.74296 15.9365C 3.41223 16.1329 3.00559 15.8409 3.09285 15.4706L 4.35118 10.1291L 0.151211 6.53772C -0.140248 6.28882 0.0150805 5.81599 0.399911 5.78326L 5.93588 5.31389L 8.09826 0.263541C 8.24835 -0.0878471 8.75186 -0.0878471 8.90195 0.263541Z"/></defs></svg>'
})

$(".rate-block").rateYo({
    rating: 2,
    starWidth: "28px",
    normalFill: "#fff",
    ratedFill: "#ffcc00",
    fullStar: !0,
    readOnly: !1,
    spacing: "5px",
    starSvg: '<svg width="17" height="16" viewBox="0 0 17 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Canvas" transform="translate(-17817 -495)"><g id="Shape"><use xlink:href="#path0_fill" transform="translate(17817 495)"/></g></g><defs><path id="path0_fill" d="M 8.90195 0.263541L 11.0643 5.31475L 16.6003 5.78413C 16.9843 5.81685 17.1405 6.28968 16.849 6.53858L 12.6499 10.1291L 13.9082 15.4706C 13.9955 15.8418 13.588 16.1337 13.2581 15.9365L 8.50054 13.1047L 3.74296 15.9365C 3.41223 16.1329 3.00559 15.8409 3.09285 15.4706L 4.35118 10.1291L 0.151211 6.53772C -0.140248 6.28882 0.0150805 5.81599 0.399911 5.78326L 5.93588 5.31389L 8.09826 0.263541C 8.24835 -0.0878471 8.75186 -0.0878471 8.90195 0.263541Z"/></defs></svg>'
});


$('img').Lazy({
    scrollDirection: 'vertical',
    effect: 'fadeIn',
    onError: function(element) {
        console.log('error loading ' + element.data('src'));
    }
});

$('.page-header__menu .page-header__nav li a').on('click', function() {
  $(this).toggleClass('active');
  $(this).next().slideToggle(200);
});