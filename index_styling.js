function myFunction() {
    var info_element = document.getElementById("app-info");
    var button_element = document.getElementById("ToggleVisibility");
    if (info_element.style.display === "none") {
        info_element.style.display = "block";
        button_element.textContent = "Hide app info";
    } else {
        info_element.style.display = "none";
        button_element.textContent = "Show app info";
    }
}

var info_element = document.getElementById("app-info");
info_element.style.display = "none";
var button_element = document.getElementById("ToggleVisibility");
button_element.onclick = myFunction