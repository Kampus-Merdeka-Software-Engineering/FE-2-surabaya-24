function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function bottomFunction() {
  document.body.scrollTop = 750;
  document.documentElement.scrollTop = 750;
}

function initMenu() {
  let allMenus = document.getElementsByClassName("menu");
  for (let i = 0; i < allMenus.length; i++) {
    allMenus[i].style.display = "none";
  }

  let allTabLinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < allTabLinks.length; i++) {
    allTabLinks[i].classList.remove("active");
  }

  let defaultMenu = document.getElementById("OriginTeaMenu");
  defaultMenu.style.display = "block";

  let defaultTabLink = document.querySelector(".tablinks");
  defaultTabLink.classList.add("active");
}

function openMenu(evt, menuName) {
  let i, menuContent, tablinks;

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

document.addEventListener("DOMContentLoaded", function () {
  initMenu();
});