//-------------------------------devtool-----------------------------//
function devTool(){
    $("#dev-tool").text(`H:${$(window).height()}px | W:${$(window).width()}px | S:${parseInt($(window).scrollTop())} | 1T:${$('.slide-1').offset().top} | BP: ${parseInt($('.slide-1 h3').css('background-position'))} VH: ${$(".video-header").outerHeight() + $('.grid-container').outerHeight()} | foot:${$('footer').css('top')}`);
}
$(document).ready(devTool);
$(window).resize(devTool);
$(window).scroll(devTool);
$(window).on('touchmove'(devTool);

//-------------------------------------------Get Media Size---------------------------------------//
/* SmartPhone Size (0-450px) */
/* Tablet Size (451-1000px) */
/* Laptop Size (1001-1500px) */
/* Dektop Size (1500px-2000px) */

// function mediaQueryWidth(){
//     if (window.matchMedia('(max-width: 400px)').matches) {
//         return 'phone';
//     } else if (window.matchMedia('((min-width: 401px) and (max-width: 600px))').matches) {
//         return 'tablet';
//     } else if (window.matchMedia('((min-width: 601px) and (max-width: 850px))').matches){
//         return 'big tablet'
//     } else if (window.matchMedia('((min-width: 851px) and (max-width: 1000px))').matches){
//         return 'small laptop'
//     } else if (window.matchMedia('((min-width: 1001px) and (max-width: 1500px))').matches) {
//         return 'laptop';
//     } else if (window.matchMedia('((min-width: 1501px) and (max-width: 2000px))').matches) {
//         return 'desktop';
//     }
// };
//--------------------------------------------Dark Mode-------------------------------------------//
//check if dark mode is on
function checkDarkMode() {
    var htmlColor = $("html").css("background-color");
    if (htmlColor === 'rgb(255, 255, 255)') {
        bgColor = 'rgb(255, 255, 255)'
        textColor = 'rgb(0, 0, 0)'
    } else {
        bgColor = '#3C1053'
        textColor = 'rgb(255, 255, 255)'
    }
    return {bgColor,textColor};
};

function darkMode() {
    $("html, input, select, .grid-container div").toggleClass("dark-mode");
    $(".contact-form-2 div button").toggleClass("bw-button");
    $(".dark-mode-div button").toggleClass("hide");
    $(".navbar nav div a img").toggleClass("hide-logo");
    $(".grid-container .slide-1 div ul li img").toggleClass("hide");

    var scroll = $(window).scrollTop();
    if (scroll > $('video').height()) {
        let colors = checkDarkMode();
        $("nav").css("background-color", colors.bgColor);
    } else {
        $("nav").css("background-color", 'transparent');
    };
};
$(".dark-mode-div button").click(darkMode);

$(document).ready(function() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        darkMode();
    }
});
//--------------------------------get hidden element height--------------------------------------------//
function getHiddenElementHeight(selector) {
    
    var height = $(selector).css({ 
        visibility: 'hidden', 
        display: 'block' 
    }).height(); 

    
    $(selector).css({
        visibility: '',
        display: ''
    });

    return height; 
}
// ------------------------dynamic positioning of footer-------------------------------//
// function adjustFooter() {
//     var fadeDiv = $('.fade-in');
//     var fadeBottom = fadeDiv.offset().top + fadeDiv.outerHeight();
//     var footer = $('.index-footer');
//     var footerTop = footer.offset().top;

//     footer.css('top', 4800 - (footerTop - fadeBottom));
//     if (footer.css('top') > 4800) {
//         footer.css('top', 4800)
//     };
// };

// $(document).ready(function() {
//     adjustFooter();
// });
// $(window).resize(function() {
//     adjustFooter();
// });

// ---------------------------------------Video Header Animations---------------------------------//
$(".header h1 div").height($(".header h1").height());
$(".header h1 div").css('top',$(".header h1 span").css('top'));
$(".header h2 div").height($(".header h2").height());
$(".header h1 div, .header h2 div").width('0px');
$(".header h1 span").hide();
$(".header h2 span").hide();


//-------------------------------------------Load Screen -----------------------------------------//
$(window).on('load',function() {
        $(".header h1 div").animate({
            backgroundColor: '#963CBD',
            width: $(".header h1").width(),
        }, 'slow', function() {
            $(".header h1 div").animate({
                right: '0%',
                left: '100%',
                width: '0px'
            }, 'slow', function(){
                $(".header h1 span").fadeIn('slow'); 
            });
        });
        $(".header h2 div").animate({
            backgroundColor: 'white',
            width: $(".header h2").width(),
            right: '100%',
            left: '0%',
        }, 'slow', function() {
            $(".header h2 div").animate({
                width: '0px',
            }, 'slow', function(){
                $(".header h2 span").fadeIn('slow'); 
        });
    });
});

//-------------------------------------------FAQ dropdown-----------------------------------------//
$('.fade-in ul li h4').click(function() {
    var fadeHeight = $(".fade-in").height();
    var div = $(this).next('div'); 
    if (div.is(':visible')) {
        var heightToAdd = div.height(); 
    } else {
        var heightToAdd = getHiddenElementHeight(div);
    };
    

    if ($(this).next('div').is(':visible')){
        var operator = '-'
    } else {
        var operator = '+'
    };
    
    $(".fade-in").height(`${fadeHeight} ${operator} ${heightToAdd}`);
    $(".mobile-footer").animate({'top': `${operator}=${heightToAdd}`});
    $(".index-footer div ul").animate({'top': `${operator}=${heightToAdd} * 0.8`});
    $(".mini-footer").animate({'top': `${operator}=${heightToAdd} * 0.5`});

    $(this).next('div').slideToggle();
});

//-----------------------------------------Policy Dropdown----------------------------------------//
$('.policy-list ul li h4').click(function() {
    var div = $(this).next('div'); 
    var operator;
    var divHeight;
    if (div.is(':visible')) {
        divHeight = div.height() *1.1;
        operator = '+' 
    } else {
        divHeight = getHiddenElementHeight(div) *1.1;
        operator = '-'
    };

    $('.policy-bg, .policy-footer').animate({'bottom': `${operator}=${divHeight}`});

    div.slideToggle(); 
});

//policy footer
$('.policy-footer div div a').click(function(){
    var index = $(this).index() + 1;
    $('html, body').animate({
        scrollTop: $(`.policy-list ul li:nth-child(${index}) h4`).offset().top -200
    }, 1000);
    $(`.policy-list ul li:nth-child(${index}) h4`).trigger('click');
});

//------------------------------------------scroll to contact form------------------------------------------//

$(".contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#free-pass-timer").offset().top -200
    }, 1000);
});

//------------------------------------------scroll to top---------------------------------------//
$(".video-header .navbar nav div a").click(function(){
    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
});

//------------------------------------------scroll effects----------------------------------------//

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
}


$(window).on('touchmove'(debounce(function() {
    let colors = checkDarkMode();
    var scroll = $(window).scrollTop();

    //fill colour of navbar
    if (scroll > $('video').height()) {
        $("nav").animate({
            backgroundColor: colors.bgColor
        });
    } else {
        $("nav").animate({
            backgroundColor: 'transparent'
        });
    };

    // animate opacity change of features on slide 1
    // var opacity = scroll /1000
    // $('.slide-1 div ul li').animate({
    //     opacity: opacity
    // },50);

    //animate fill outlined text
    var divider = parseInt($('.slide-1 h3').width()) / 30;
    var scrollPercent = (scroll / ($(document).height() - $(window).height()) * 100);
    var backgroundPos

    if ($('.slide-1').offset().top <= (scroll * 1.3)){
        backgroundPos = divider - scrollPercent;
    } else {
        backgroundPos = 100;
    };
    $('.slide-1 h3').css('background-position', `${backgroundPos}%`)

    if (parseInt($('.slide-1 h3').css('background-position')) < 0) {
        $('.slide-1 h3').css({
            'background-image': 'none',
            'background-color': colors.textColor
        });
    } else {
        $('.slide-1 h3').css({
            'background-color':'transparent',
            'background-image':`linear-gradient(to right, ${colors.textColor} 50%, transparent 50%`,
            'background-position': `${backgroundPos}%`,
        },'slow');
    }

    // slide divs over each other
    $('.grid-container div:not(:nth-child(4))').each(function() {
        slideOffset = $(this).offset().top
        
        if (scroll >= slideOffset) {
            $(this).addClass('sticky')
        } else if (scroll < slideOffset) {
            $(this).removeClass('sticky')
        }
    });
    

}, 100)));
  
//-----------------------------------------------timer--------------------------------------------//
$(document).ready(function () {
    var timeLeft = 10 * 60;
    var countDown = setInterval(function(){
        var minutes = Math.floor(timeLeft / 60);
        var seconds = timeLeft % 60;
        var timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        $("#timer").text(timeString);
        $("#timer").css("transform", "scale(1.1)");
        setTimeout(function() {
            $("#timer").css("transform", "scale(1)");
        }, 400);
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(countDown);
            $("#timer").text("00:00");
        }
    }, 1000);
});

//-------------------------------------------chatbot button-------------------------------------//
$('.chatbot-button-div button').click(function(){

    var chatbotVis = `${$(window).width() - parseInt($('.chatbot-button-div div').width())}px`

    if (parseInt($('.chatbot-button-div div').css('left')) > $(window).width()) {
        $('.chatbot-button-div div').animate({
            left: chatbotVis
        }, 1000);
    } else {
        $('.chatbot-button-div div').animate({
            left: '167vw'
        }, 1000);
    }
    
});

//----------------------------------------dark mode event listen--------------------------------//
window.matchMedia('(prefers-color-scheme: dark)').addEventListener(function(e) {
    if (e.matches) {
        darkMode();
    };
});
