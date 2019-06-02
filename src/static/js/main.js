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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: !false
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