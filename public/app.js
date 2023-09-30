// Đóng model
const closeIcon = document.querySelector('.close');
const model = document.querySelector('.model');

closeIcon.addEventListener('click', () => {
    model.classList.add('hidden');
});


const srcollProduct = document.getElementById('srcollProduct');

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    if (isElementInViewport(featureScoll)) {
      srcollProduct.classList.add("animate-product");
      window.removeEventListener("scroll", handleScroll);
    }
  }

  window.addEventListener("scroll", handleScroll);