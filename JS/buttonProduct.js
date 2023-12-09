// ketua tombol What is TeavoU di klik, maka lakukan scroll keatas halaman
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ketua tombol TeavoU Product di klik, maka lakukan scroll kebawah halaman (menu Teh)
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

// Panggil fungsi initMenu ketika halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  initMenu();
});

// DROPDOWN NAVBAR
// const toogleBtn = document.querySelector(".toogle_btn");
// const toogleBtnIcon = document.querySelector(".toogle_btn i");
// const dropDdownMenu = document.querySelector(".dropdown_menu");

// tooogleBtn.onclick = function () {
//   dropDdownMenu.classList.toogle("open");
//   const isOpen = dropDdownMenu.classList.contains("open");

//   toogleBtnIcon.classList = isOpen ? "Asset/menu.svg" : "Asset/menu.svg";
// };
