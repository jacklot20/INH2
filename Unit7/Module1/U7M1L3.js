$(document).ready(function() {
    $(".box").mouseenter(function() {
        $(this).css("background-color", "#ADD8E6"); // Light Blue
    });

    $(".box").mouseleave(function() {
        $(this).css("background-color", "#90EE90"); // Light Green
        $(this).unbind("mouseleave");
    });
});
