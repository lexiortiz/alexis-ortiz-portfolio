// When the user clicks on <div>, open the popup
function showPhoneNumber() {
    let popup = document.getElementById("popNum");
    popup.classList.toggle("show");
}

function showEmail() {
    let popupMail = document.getElementById("popMail");
    popupMail.classList.toggle("show");
}

$(window).load(function () {
    $(".btn-nav").on("click tap", function () {
        $(".nav-content").toggleClass("showNav hideNav").removeClass("hidden");
        $(this).toggleClass("animated");
    });
});