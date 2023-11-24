// Tab Content pada Menu Product
function openMenu(evt, menuName) {
    var i, tabcontent, tablinks;

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Read More Product
function expandText(button) {
    var content = button.previousElementSibling;
    content.classList.toggle("expanded");
    button.innerHTML = content.classList.contains("expanded") ? "Read Less" : "Read More";
}

// feedback
const allStars = document.querySelectorAll('.star');
console.log(allStars);
let current_star_level = 0;

document.addEventListener('click', function (event) {
    const isStar = event.target.classList.contains('star');

    if (!isStar) {
        // Klik selain star, star auto reset to zero
        current_star_level = 0;
        updateStarRatings();
    }
});

allStars.forEach((star, i) => {
    star.onclick = function () {
        current_star_level = i + 1;
        updateStarRatings();
    };
});

function updateStarRatings() {
    allStars.forEach((star, j) => {
        if (current_star_level >= j + 1) {
            star.innerHTML = '★';
        } else {
            star.innerHTML = '☆';
        }
    });
}