//Dribbble popup discount open

$(document).ready(function () {
    if (!Cookies.get('alert')) {
        setTimeout(function () {
            $('.popup_discount-overlay').css('display', 'flex');
            Cookies.set('alert', true, { expires: 1 });
        }, 7000);
    }
});

//When X Button is clicked the modal close

var hide = document.getElementsByClassName('popup_close-btn');
var show = document.getElementsByClassName('popup_discount-overlay');
for (var i = 0; i < hide.length; i++) {
    hide[i].addEventListener('click', function () {
        for (var j = 0; j < show.length; j++) {
            show[j].style.display = 'none';
        }
    });
};

//New date

var date = new Date();
date.setHours(date.getHours() + 17);
var dateString = date.toLocaleString();
var dateElement = document.getElementsByClassName('sl_popup-card-date')[0];
dateElement.innerHTML = dateString;

//Replace text "Dribbble" for "Copied"

$('.popup_code-value').click(function () {
    $(this).text('copied');
    setTimeout(function () {
        $(this).text('dribbble');
    }, 2000);
});
var dribbble = document.getElementsByClassName('popup_code-value');
for (var i = 0; i < dribbble.length; i++) {
    dribbble[i].addEventListener('click', function () {
        var textArea = document.createElement('textarea');
        textArea.value = 'dribbble';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
    });
}
//Videoask lazy load

$(window).on("load", function () {
    $(".sl_hero-right-wrapper").css({ display: "block", transition: "all 300ms ease-in-out", transform: "translateX(0)" });
});

//Navbar background change after scroll

$(window).scroll(function () {
    $(window).scrollTop() > 100 ? $(".sl_navbar").addClass("on--scroll") : $(".sl_navbar").removeClass("on--scroll");
});

//Mobile menu open nav menu

$(".sl_nav-mobile-menu-wrapper").on("click", function () {
    $(".sl_nav-wrapper").toggleClass("is--open");
});

//Elements inside nav menu close menu after click

$(".sl_nav-link, .sl_main-button, .sl_nav-mobile-menu-wrapper").on("click", function () {
    $(this).closest(".sl_nav-wrapper").removeClass("is--open");
});

//Logo gallery button change comp height on click

$("#t-gallery-button").on("click", function () {
    $(".sl_work-comp").toggleClass("is--expanded");
});

//Logo gallery toggle text on click

$("#t-gallery-button").click(function () {
    $(this).text("Expand to see all" == $(this).text() ? "Okay, I got it" : "Expand to see all");
});

//Testimonials button change comp height on click

$(".sl_expand-btn.is--testimonials").on("click", function () {
    $(".sl_testimonials-comp").toggleClass("is--expanded");
});

//Testimonials button toggle text on click

$(".sl_expand-btn.is--testimonials").click(function () {
    $(this).text("See all recent reviews" == $(this).text() ? "Okay, I got it" : "See all recent reviews");
});

//FAQ open on click

$(document).ready(function () {
    $(".sl_faq-item").click(function () {
        $(".sl_faq-item").removeClass("faq-clicked"), $(this).addClass("faq-clicked");
    });
});