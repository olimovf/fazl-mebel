// ========== video ===========
const video = document.querySelector('.about__video video');
const playBtn = document.querySelector('.play-btn');

video.addEventListener('click', playVideo);

function playVideo() {
    if (video.paused) {
        video.play();
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        playBtn.classList.add('anim');
    } else {
        video.pause();
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        playBtn.classList.remove('anim');
    }
}

// ========== tabs ==========
const tabs = document.querySelectorAll('.gallery__tabs-item');
const tabContents = document.querySelectorAll('.gallery__tabs-content');

tabs.forEach((tab, tabIndex) => {
    tab.addEventListener('click', () => {
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tabs[tabIndex].classList.add('active');
        tabContents[tabIndex].classList.add('active');
    });
});

// ========== swiper ==========
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

// ========== imask ==========
const telInputs = document.querySelectorAll('[data-tel]');
const maskOptions = {
    mask: '+998 00 000 00 00',
    lazy: false
};
telInputs.forEach(elem => {
    const mask = new IMask(elem, maskOptions);
});

// ========== modal ==========
const buttons = document.querySelectorAll('button[type="button"]');
// const modalTitles = [
//     'Buyurtma berish',
//     'Bepul konsultatsiya oling!',
//     'Yuklab olish uchun formani to\'ldiring'
// ];

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('show');
        document.body.style.overflowY = 'hidden';
        overlay.style.display = 'block';
    })
})

document.addEventListener('click', e => {
    if (e.target.classList[0] == 'overlay') {
        modal.classList.remove('show');
        document.body.style.overflowY = 'auto';
        overlay.style.display = 'none';
    }
})

const checkInput = (event) => {
    const errorEl = Array.from(event.target.parentNode.querySelectorAll('span'));

    if (event.target.value/trim() === '' && !errorEl.length) {
        event.target.insertAdjacentHTML('afterend', '<span class="text-danger">Required</span>');
    }

    if (errorEl && event.target.value !== '') {
        errorEl.forEach(elem => elem.remove());
    }
};

const inputFields = document.querySelectorAll('input');
console.log(inputFields)
inputFields.forEach(inp => {

    inp.addEventListener('blur', checkInput);
})