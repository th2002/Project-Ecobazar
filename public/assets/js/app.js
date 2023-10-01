// Close model
const closeIcon = document.querySelector('.close');
const model = document.querySelector('.model');

closeIcon.addEventListener('click', () => {
    model.classList.add('hidden');
});


// Scroll Animations
ScrollReveal().reveal('.scrollCard', {delay: 300, easing: 'ease-in', reset: true, distance: '100px'});
ScrollReveal().reveal('.scrollCard_lastesNew', {delay: 300, easing: 'ease-in', reset: true, distance: '100px', origin: 'left'});
ScrollReveal().reveal('.scrollCard_feedBack', {delay: 300, easing: 'ease-in', reset: true, distance: '100px', origin: 'right'});

//Slide show
// $('.slideShowTest').slick({
//   slidesToShow: 2,
//   slidesToScroll: 2,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });