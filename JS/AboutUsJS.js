const slides_galleryTeam = document.querySelectorAll(".slide_galleryTeam");
const dots_galleryTeam = document.querySelectorAll(".dot_galleryTeam");

let currentSlidegalleryTeamProduct = 0;

function showSlide_galleryTeam(n) {
  slides_galleryTeam.forEach((slide_galleryTeam) =>
    slide_galleryTeam.classList.remove("active-galleryTeam")
  );
  dots_galleryTeam.forEach((dot_galleryTeam) =>
    dot_galleryTeam.classList.remove("active-dot")
  );
  currentSlidegalleryTeamProduct =
    (n + slides_galleryTeam.length) % slides_galleryTeam.length;
  slides_galleryTeam[currentSlidegalleryTeamProduct].classList.add(
    "active-galleryTeam"
  );
  dots_galleryTeam[currentSlidegalleryTeamProduct].classList.add("active-dot");
}

showSlide_galleryTeam(currentSlidegalleryTeamProduct);

dots_galleryTeam.forEach((dot_galleryTeam, index) => {
  dot_galleryTeam.addEventListener("click", () => {
    showSlide_galleryTeam(index);
  });
});

const slideInterval = setInterval(() => {
  showSlide_galleryTeam(currentSlidegalleryTeamProduct + 1);
}, 3000);
