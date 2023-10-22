// Close model
const closeIcon = document.querySelector('.close');
const model = document.querySelector('.model');

// Model Maketing
closeIcon.addEventListener('click', () => {
    model.classList.add('hidden');
});

model.addEventListener('click', (e) => {
    if(e.target === model) {
        model.classList.add('hidden');
    }
});

// Model cart
const icon_ShowCart = document.getElementById('icon_ShowCart');
const icon_close_ModelCart = document.getElementById('closeModelCart');
const model_cart = document.getElementById('model_cart');

icon_close_ModelCart.addEventListener('click', () => {
    model_cart.classList.add('hidden');
});

model_cart.addEventListener('click', (e) => {
    if(e.target === model_cart) {
        model_cart.classList.add('hidden');
    }
});

icon_ShowCart.addEventListener('click', () => {
    model_cart.classList.remove('hidden');
});

// Scroll
const imgLastNews = document.querySelectorAll('.scrollImgLastNew');

// Scroll Animations
ScrollReveal().reveal('.scrollCard', {delay: 300, easing: 'ease-in', reset: true, distance: '100px'});
ScrollReveal().reveal('.scrollCard_lastesNew', {delay: 300, easing: 'ease-in', reset: true, distance: '100px', origin: 'left'});
ScrollReveal().reveal('.scrollCard_feedBack', {delay: 300, easing: 'ease-in', reset: true, distance: '100px', origin: 'right'});
ScrollReveal().reveal('.scrollImgLastNew', {delay: 300, easing: 'ease-in', reset: true, distance: '100px', origin: 'left'});
ScrollReveal().reveal('.scrollContentLastNew', {delay: 300, easing: 'ease-in', reset: true, distance: '100px', origin: 'bottom'});

