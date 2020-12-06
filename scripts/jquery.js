$(function () {
    $("#header-html").load("header.html");
    $("#footer-html").load("footer.html");

    currentLoc = location.pathname.split("/").slice(-1)[0];

    setTimeout(function () {
        var list = document.getElementById("header-background");
        var items = list.getElementsByTagName("a");
        $(items).each(function () {
            if ($(this).attr("href") == currentLoc) {
                $(this).addClass("current");
            }
        });
    }, 100);
});