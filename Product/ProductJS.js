// ketika tombol What is TeavoU di klik, maka lakukan scroll keatas halaman
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ketika tombol TeavoU Product di klik, maka lakukan scroll kebawah halaman (menu Teh)
function bottomFunction() {
  document.body.scrollTop = 750;
  document.documentElement.scrollTop = 750;
}

// Mengubah fungsi openTea menjadi fungsi Menu
function initMenu() {
  // Semua menu disembunyikan terlebih dahulu
  var allMenus = document.getElementsByClassName("menu");
  for (var i = 0; i < allMenus.length; i++) {
    allMenus[i].style.display = "none";
  }

  // Semua tablinks kehilangan class "active"
  var allTabLinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < allTabLinks.length; i++) {
    allTabLinks[i].classList.remove("active");
  }

  // Tampilkan menu "OriginTeaMenu"
  var defaultMenu = document.getElementById("OriginTeaMenu");
  defaultMenu.style.display = "block";

  // Beri class "active" pada tombol "OriginTea"
  var defaultTabLink = document.querySelector(".tablinks");
  defaultTabLink.classList.add("active");
}

// Tab Content pada Menu Product
function openMenu(evt, menuName) {
  var i, menuContent, tablinks;

  menuContent = document.getElementsByClassName("menu");
  for (i = 0; i < menuContent.length; i++) {
    menuContent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  document.getElementById(menuName + "Menu").style.display = "block";
  evt.currentTarget.classList.add("active");
}

// Read More Product
function expandText(button) {
  var content = button.previousElementSibling;
  content.classList.toggle("expanded");
  button.innerHTML = content.classList.contains("expanded") ? "Read Less" : "Read More";
}

// Panggil fungsi initMenu ketika halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  initMenu();
});




// feedback
const allStars = document.querySelectorAll('.star');
console.log(allStars);
let current_star_level = 0;

document.addEventListener('click', function (event) {
    const isStar = event.target.classList.contains('star');

    if (!isStar) {
        // Clicked outside the stars, reset to zero
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
