$(window).on("load", function () {
    $(".sl_hero-right-wrapper").css({ display: "block", transition: "all 300ms ease-in-out", transform: "translateX(0)" });
}),
    $(window).scroll(function () {
        $(window).scrollTop() > 100 ? $(".sl_navbar").addClass("on--scroll") : $(".sl_navbar").removeClass("on--scroll");
    }),
    $(".sl_nav-mobile-menu-wrapper").on("click", function () {
        $(".sl_nav-wrapper").toggleClass("is--open");
    }),
    $(".sl_nav-link, .sl_main-button, .sl_nav-mobile-menu-wrapper").on("click", function () {
        $(this).closest(".sl_nav-wrapper").removeClass("is--open");
    }),
    $("#t-gallery-button").on("click", function () {
        $(".sl_work-comp").toggleClass("is--expanded");
    }),
    $(".sl_expand-btn.is--testimonials").on("click", function () {
        $(".sl_testimonials-comp").toggleClass("is--expanded");
    }),
    $("#t-gallery-button").click(function () {
        $(this).text("Expand to see all" == $(this).text() ? "Okay, I got it" : "Expand to see all");
    }),
    $(".sl_expand-btn.is--testimonials").click(function () {
        $(this).text("See all recent reviews" == $(this).text() ? "Okay, I got it" : "See all recent reviews");
    }),
    $(document).ready(function () {
        $(".sl_faq-item").click(function () {
            $(".sl_faq-item").removeClass("faq-clicked"), $(this).addClass("faq-clicked");
        });
    });