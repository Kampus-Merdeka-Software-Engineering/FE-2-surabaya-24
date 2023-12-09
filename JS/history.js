// navbar dropdown click
/* Saat pengguna mengklik tombol, beralih antara menyembunyikan dan menampilkan konten dropdown */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Tutup dropdown jika pengguna mengklik di luarnya sisi buttonnya
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    {
    }
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function addDissolveAnimation() {
  const image = document.getElementById("teavou-1");
  const textElements = document.querySelectorAll(
    ".teavou-layout h5, .teavou-layout p"
  );
  image.classList.add("hidden");
  textElements.forEach((element) => {
    element.classList.add("hidden");
  });

  setTimeout(() => {
    image.classList.remove("hidden");
  }, 500);

  textElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.remove("hidden");
    }, 500 + index * 300);
  });
}

document.addEventListener("DOMContentLoaded", addDissolveAnimation);

function redirectToProduct() {
  window.location.href = "Product.html#product";
}
