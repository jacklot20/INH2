document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("greeting").innerText = "Hello, JavaScript is working!";
    this.innerText = "Clicked!";
});
