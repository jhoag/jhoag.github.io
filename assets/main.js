$(function () {
    $(window).on("scroll", function () {
        var $body = $("body");
        if (this.pageYOffset > 80) {
            $body.addClass("scrolled");
        } else {
            $body.removeClass("scrolled");
        }
    });
});