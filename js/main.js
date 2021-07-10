// wow animation
new WOW().init();


// HERO CAROUSEL FUNCTION INIT
$('.owl-hero-carousel').owlCarousel({
    margin: 40,
    nav: true,
    navText: ['<span class="material-icons">chevron_left</span>', '<span class="material-icons">chevron_right</span>'],
    loop: true,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplaySpeed: 1000,
    items: 1,
    autoHeight: true
});

// Recommended Software Slider
$('.recommended-software-slider').owlCarousel({
    margin: 40,
    nav: true,
    navText: ['<span class="material-icons">chevron_left</span>', '<span class="material-icons">chevron_right</span>'],
    loop: true,
    dots: true,
    // nav: false,
    center: false,
    autoplay: false,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1,
            autoHeight: true
        },
        768: {
            items: 2
        },
        1199: {
            items: 3
        }
    }
});


// Recommended Software Slider
$('.featured-companies-slider').owlCarousel({
    margin: 40,
    nav: true,
    navText: ['<span class="material-icons">chevron_left</span>', '<span class="material-icons">chevron_right</span>'],
    loop: false,
    dots: true,
    // nav: false,
    center: false,
    autoplay: false,
    autoplayTimeout: 4000,
    
    responsive: {
        0: {
            items: 1,
            autoHeight: true
        },
        768: {
            items: 2
        },
        1199: {
            items: 3
        }
    }
});
// featured-product-slider Slider
$('.featured-product-slider').owlCarousel({
    margin: 40,
    nav: true,
    navText: ['<span class="material-icons">chevron_left</span>', '<span class="material-icons">chevron_right</span>'],
    loop: true,
    dots: true,
    // nav: false,
    center: false,
    autoplay: false,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1199: {
            items: 3
        }
    }
});

$('.featured-cousers-slider').owlCarousel({
    margin: 80,
    nav: true,
    navText: ['<span class="material-icons">chevron_left</span>', '<span class="material-icons">chevron_right</span>'],
    loop: true,
    dots: true,
    nav: false,
    center: false,
    autoplay: false,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1199: {
            items: 3
        }
    }
});


$('.popular-instructors-slider').owlCarousel({
    margin: 10,
    nav: true,
    navText: ['<span class="material-icons">chevron_left</span>', '<span class="material-icons">chevron_right</span>'],
    loop: true,
    dots: true,
    nav: false,
    center: false,
    autoplay: false,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1199: {
            items: 3
        }
    }
});

$('.company-profile-recommended-software').owlCarousel({
    margin: 40,
    nav: true,
    navText: ['<span class="material-icons">chevron_left</span>', '<span class="material-icons">chevron_right</span>'],
    loop: true,
    dots: true,
    nav: false,
    center: false,
    autoplay: false,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1199: {
            items: 3
        }
    }
});

$('.resources-h-slider').owlCarousel({
    margin: 80,
    nav: true,
    navText: ['<span class="material-icons">chevron_left</span>', '<span class="material-icons">chevron_right</span>'],
    loop: true,
    dots: true,
    nav: false,
    center: false,
    autoplay: false,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1199: {
            items: 3
        }
    }
});

$('.company-slider-home').owlCarousel({
    margin: 80,
    nav: true,
    navText: ['<span class="material-icons">chevron_left</span>', '<span class="material-icons">chevron_right</span>'],
    loop: true,
    dots: true,
    nav: false,
    center: false,
    autoplay: false,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1199: {
            items: 3
        }
    }
});

$('.company-news-slider').owlCarousel({
    margin: 80,
    nav: true,
    navText: ['<span class="material-icons">chevron_left</span>', '<span class="material-icons">chevron_right</span>'],
    loop: true,
    dots: true,
    nav: false,
    center: false,
    autoplay: false,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1199: {
            items: 3
        }
    }
});


$('.homepage-main-slider').owlCarousel({
    margin: 0,
    nav: true,
    navText: ['<span class="material-icons">chevron_left</span>', '<span class="material-icons">chevron_right</span>'],
    loop: true,
    dots: true,
    nav: false,
    center: false,
    autoplay: false,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1199: {
            items: 1
        }
    }
});

// Select option jquery
$(document).ready(function() {
    $('select').niceSelect();
});

$(document).ready(function() {
    $(".search-btn").click(function() {
        $(".search-box").toggle();
        $("input[type='text']").focus();
    });
});


$(function() {
    var overlay = $('<div id="overlay"></div>');
    overlay.show();
    overlay.appendTo(document.body);
    $('.popup-onload').show();
    $('.close').click(function() {
        $('.popup-onload').hide();
        overlay.appendTo(document.body).remove();
        return false;
    });




    $('.x').click(function() {
        $('.popup').hide();
        overlay.appendTo(document.body).remove();
        return false;
    });
});


$('.ask-an-expert-toggle').hide();
$('.toggle-expert-row').click(function() {
    event.preventDefault();
    $('.ask-an-expert-toggle').slideToggle();
    var y = $(window).scrollTop()
    $(window).scrollTop(y+600);
})



// jQuery(document).ready(function($) {
//     jQuery('.featured-companies-item.featured-companies-services').children('.recommended-software-item-review').hide(250);
//     jQuery('.featured-companies-item.featured-companies-services').hover(function() {
//         jQuery(this).children('.recommended-software-item-review').slideToggle(250);
//         jQuery(this).children('.featured-companies-item-logo').slideToggle(250);
//     }, function() {
//         jQuery(this).children('.featured-companies-item-logo').slideToggle(250);
//         jQuery('.featured-companies-item.featured-companies-services').children('.recommended-software-item-review').hide(250);
//     });
// });


$('#ask-an-expert-modal').on('shown.bs.modal', function() {
    document.body.classList.add('modal-open');
});
$('#expert-details-modal').on('shown.bs.modal', function() {
    document.body.classList.add('modal-open');
});


$('#closeNewsletter').parent().addClass('closed');
$('#closeNewsletter').click(function() {
    if ($('#closeNewsletter').parent().hasClass('closed')) {
        $(this).parent().removeClass('closed');
        $(this).parent().addClass('opened');
    }
    else {
        $(this).parent().addClass('closed');
        $(this).parent().removeClass('opened');
    }
})

