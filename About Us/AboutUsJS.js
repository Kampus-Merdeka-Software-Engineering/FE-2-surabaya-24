// navbar dropdown click
/* Saat pengguna mengklik tombol, beralih antara menyembunyikan dan menampilkan konten dropdown */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Tutup dropdown jika pengguna mengklik di luarnya sisi buttonnya
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        }
      }
    }
  }





// They galleryTeam the tea

const slides_galleryTeam = document.querySelectorAll('.slide_galleryTeam');
const dots_galleryTeam = document.querySelectorAll('.dot_galleryTeam');

let currentSlidegalleryTeamProduct = 0;

function showSlide_galleryTeam(n) {
    slides_galleryTeam.forEach(slide_galleryTeam => slide_galleryTeam.classList.remove('active-galleryTeam'));
    dots_galleryTeam.forEach(dot_galleryTeam => dot_galleryTeam.classList.remove('active-dot')); // Perbaikan penamaan kelas di sini
    currentSlidegalleryTeamProduct = (n + slides_galleryTeam.length) % slides_galleryTeam.length;
    slides_galleryTeam[currentSlidegalleryTeamProduct].classList.add('active-galleryTeam');
    dots_galleryTeam[currentSlidegalleryTeamProduct].classList.add('active-dot'); // Perbaikan penamaan kelas di sini
}

showSlide_galleryTeam(currentSlidegalleryTeamProduct);

dots_galleryTeam.forEach((dot_galleryTeam, index) => {
    dot_galleryTeam.addEventListener('click', () => {
        showSlide_galleryTeam(index);
    });
});

const slideInterval = setInterval(() => {
    showSlide_galleryTeam(currentSlidegalleryTeamProduct + 1);
}, 3000);
