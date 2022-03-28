(function () {
    var html = document.documentElement;
    function rem() {
        var vw = html.offsetWidth;
        if (vw <= 640) {
            html.style.fontSize = vw / 640 * 100 + "px";
        } else if (vw > 640) {
            html.style.fontSize = "100px"
        }
    }
    rem();
    window.onresize = rem;

    window.addEventListener("orientationchange", rem);
})();