// Read More Product
function expandText(button) {
    var content = button.previousElementSibling;
    content.classList.toggle("expanded");
    button.innerHTML = content.classList.contains("expanded") ? "Read Less" : "Read More";
}
