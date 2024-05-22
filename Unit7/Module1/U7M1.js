$(document).ready(function() {
    let h2MouseDownEnabled = true;

    $("h1, h2").click(function() {
        $(this).css("color", "yellow");
    });

    $("h1, h2").mouseenter(function() {
        $(this).css("color", "black");
    });

    $("h1, h2").mouseleave(function() {
        $(this).css("color", "green");
    });

    $("h1").mousedown(function() {
        $(this).css("background-color", "yellow");
    }).mouseup(function() {
        $(this).css("background-color", "transparent");
    });

    $("h2").mousedown(function() {
        if (h2MouseDownEnabled) {
            $(this).css("background-color", "blue");
        }
    }).mouseup(function() {
        if (h2MouseDownEnabled) {
            $(this).css("background-color", "transparent");
        }
    });

    $("h3").click(function() {
        h2MouseDownEnabled = !h2MouseDownEnabled;
        if (h2MouseDownEnabled) {
            alert("H2 mouse down and mouse up enabled");
        } else {
            alert("H2 mouse down and mouse up disabled");
        }
    });
});
