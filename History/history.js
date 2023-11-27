function addDissolveAnimation() {
    const image = document.getElementById('teavou-1');
    const textElements = document.querySelectorAll('.teavou-layout h5, .teavou-layout p');
    image.classList.add('hidden');
    textElements.forEach(element => {
      element.classList.add('hidden');
    });

    setTimeout(() => {
      image.classList.remove('hidden');
    }, 500);

    textElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.remove('hidden');
      }, 500 + index * 300);
    });
  }

  document.addEventListener('DOMContentLoaded', addDissolveAnimation);