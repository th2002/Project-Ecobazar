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

// Content element
const mainContent = document.querySelector('.main-content');

// List content
const dashBoard = document.querySelector('.container-dashboard');
const account = document.querySelector('.container-account');
const product = document.querySelector('.container-product');
const categories = document.querySelector('.container-categories');
const bill = document.querySelector('.container-bill');
const blog = document.querySelector('.container-blog');

const listContent = [dashBoard, account, product, categories, bill, blog];

// Click tab menu
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

// Statistical
// Users
const listUser = document.querySelectorAll('.user-row');
const countUser = document.getElementById('count-user');
countUser.innerHTML = listUser.length;

// Products
const listProduct = document.querySelectorAll('.product-row');
const countProduct = document.getElementById('count-product');
countProduct.innerHTML = listProduct.length;

// Bills
const listBill = document.querySelectorAll('.bill-row');
const countBill = document.getElementById('count-order');
countBill.innerHTML = listBill.length;

// Total money
const listMoney = document.querySelectorAll('.money-bill');
const totalMoney = document.getElementById('total-money');
console.log(listMoney)
let total = 0;
listMoney.forEach(money => {
    moneyNew = money.innerHTML.replace(/,/g, '');
    total += parseInt(moneyNew);
});
totalMoney.innerHTML = total.toLocaleString('vi', {style : 'currency', currency : 'VND'});
