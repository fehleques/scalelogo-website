//Dribbble popup discount open

$(document).ready(function () {
    if (!Cookies.get('alert')) {
        setTimeout(function () {
            $('.popup_discount-wrapper').css('display', 'flex');
            Cookies.set('alert', true, { expires: 1 });
        }, 6000);
    }
});

//When X Button is clicked the modal close

var hide = document.getElementsByClassName('popup_close-btn');
var show = document.getElementsByClassName('popup_discount-wrapper');
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