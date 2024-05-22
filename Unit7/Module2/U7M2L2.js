$(document).ready(function() {
    $(".article-title").click(function() {
        $(".article-content").slideToggle(1000, function() {
            $(".article-list").fadeToggle(1000);
        });
    });
});
