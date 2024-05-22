document.getElementById("mainHeading").addEventListener("click", function() {
    var subMessage = document.getElementById("subMessage");
    if (subMessage.style.display === "none") {
        subMessage.style.display = "block";
    } else {
        subMessage.style.display = "none";
    }
});
