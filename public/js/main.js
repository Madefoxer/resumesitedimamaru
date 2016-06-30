hiddenMenu = document.getElementById("hiddenMenu");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 300 && y <= 900) {
        hiddenMenu.className = "bottomMenu show"
    }
    else {
        hiddenMenu.className = "bottomMenu hide"
    }
};

window.addEventListener("scroll", myScrollFunc);
