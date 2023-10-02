const imgList = document.querySelectorAll('.img-banner');

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

const navLinks = document.querySelectorAll('.nav-items');


const mainContent = document.querySelector('.main-content');

const dashBoard = document.querySelector('.container-dashboard');
const account = document.querySelector('.container-account');
const product = document.querySelector('.container-product');

const listContent = [dashBoard, account, product];


navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        navLinks.forEach(otherLink => {
            otherLink.classList.remove('bg-[#f6f9fc]');
        })

        if (link !== navLinks[navLinks.length - 1]) {
             link.classList.add('bg-[#f6f9fc]');   
        }

        mainContent.innerHTML = listContent[index].innerHTML
        
    });
});

