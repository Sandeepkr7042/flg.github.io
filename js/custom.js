// Fixed Header Start

$(window).scroll(function () {
    
    if ($(window).scrollTop() >= 1) {
        $('.header').addClass('fixedHeader');
    } else {
        $('.header').removeClass('fixedHeader');
    }
});

// Fixed Header End

// Sidebar Start

$('.navbar-toggler').click(function () {
    if ($(this).parents('.navbar').find('.navbar-collapse').hasClass('show')) {
        $('.navbar-expand-md .navbar-collapse').css('left', '-250px');
    } else {
        $('.navbar-expand-md .navbar-collapse').css('left', '0px');
    }
});

// Sidebar End

// Navbar Button Style Start

$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        if($(this).hasClass('active'))
        {
            $(this).removeClass('active')
        }
        else{
            $(this).addClass('active')
        }
    });
});

// Navbar Button Style End

//   Scroll To Section Start
$(document).ready(function() {
function scrollToSection(event) {
event.preventDefault();
var $section = $($(this).attr('href')); 
$('html, body').animate({
  scrollTop: $section.offset().top - 20
}, 2000);
}
$('[data-scroll]').on('click', scrollToSection);
}());
//   Scroll To Section End

// Add active class on menu start

$(window).on('load',function(){
$('.nav-link').on('click', function(){
    // alert();
    if($(this).hasClass('activeMenu')){
        $(this).addClass('activeMenu');
    }
    else{
        $('.nav-link').removeClass('activeMenu');
        $(this).addClass('activeMenu');
    }
})
})

// Add active class on menu end


// Animation Start
$(document).ready(function(){
new WOW().init();
})
// Animation End