const imgList = document.querySelectorAll('.img-banner');
console.log(imgList);
let currentIndex = 0;

// function animateImage() {
//             gsap.to(banner, { x: "-100%", duration: 0.5, onComplete: () => {
//                 banner.src = imgUrls[currentIndex];
//                 currentIndex = (currentIndex + 1) % imgUrls.length;
//                 gsap.fromTo(banner, { x: "100%" }, { x: "0%", duration: 0.5 });
//             } });
//         }

// setInterval(animateImage, 3000);

// function showNextSlide() {
//             imgList[currentIndex].classList.remove('opacity-100');
//             currentIndex = (currentIndex + 1) % imgList.length;
//             imgList[currentIndex].classList.remove('opacity-0');
//             imgList[currentIndex].classList.add('opacity-100');
//         }

//         setInterval(showNextSlide, 2000);