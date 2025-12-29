let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


const scriptURL ='https://script.google.com/macros/s/AKfycbwxGdwZPjywM5yCHA360dRM0I7XUMcO50CNKynwoItl2GzMv6gsI-m5Ng2Q_IhFzDFCvQ/exec'

const form = document.forms['consultation-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL,{method:'POST',body:new FormData(form)})
    .then(response => alert("Спасибо! Ваша заявка успешно отправлена."))
    .then(() => {window.location.reload();})
    .catch(error => console.error("Ошибка!",error.message)
    )
})