$(function () {
    $("#header-html").load("header.html");
    $("#footer-html").load("footer.html");

    currentLoc = location.pathname.split("/").slice(-1)[0];
    alert(currentLoc);

    var list = document.getElementById("header-background");
    var items = list.getElementsByTagName("a");
})