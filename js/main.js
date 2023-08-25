//  Initialize Swiper

var swiperHero = new Swiper(".swiper-hero", {
    slidesPerView: 1, // Количество видимых слайдов
    spaceBetween: 0, // Отступ между слайдами
    pagination: {
        el: ".swiper-pagination",
      },
});

var swiperTeam = new Swiper(".swiper-team", {
    slidesPerView: 3, // Количество видимых слайдов
    spaceBetween: 20, // Отступ между слайдами
    navigation: {
        nextEl: ".team-button-next",
        prevEl: ".team-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1.5,
        },
        576: {
            slidesPerView: 2.3,
        },
        1600: {
            slidesPerView: 3,
        },
    }
});

var swiperSertificats = new Swiper(".swiper-sertificats", {
    slidesPerView: 4, // Количество видимых слайдов
    spaceBetween: 20, // Отступ между слайдами
    overflow: 'visible',
    watchOverflow: true,
    navigation: {
        nextEl: ".sertificats-button-next",
        prevEl: ".sertificats-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1.5,
        },
        576: {
            slidesPerView: 2.3,
        },
        1600: {
            slidesPerView: 4,
        },
    }
});

var swiperPartners = new Swiper(".swiper-partners", {
    slidesPerView: 4, // Количество видимых слайдов
    spaceBetween: 0, // Отступ между слайдами
    initialSlide: 0, // Устанавливаем начальный слайд (первый слайд)
    navigation: {
        nextEl: ".partners-button-next",
        prevEl: ".partners-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1.5,
        },
        450: {
            slidesPerView: 1.9,
        },
        576: {
            slidesPerView: 2.3,
        },
        1600: {
            slidesPerView: 4,
        },
    }
});


// Модуль работы с меню (бургер) =======================================================================================================================================================================================================================

document.addEventListener("click", function (e) {
    if (e.target.closest('.icon-menu')) {
        document.body.classList.toggle('_lock');
        document.documentElement.classList.toggle("menu-open");
    }
}); 


// Адаптивные размеры блока team item =======================================================================================================================================================================================================================

// Получаем коллекцию всех элементов с классом .team__item
var elements = document.querySelectorAll(".team__item");

// Проходим через каждый элемент и устанавливаем высоту на основе его ширины
elements.forEach(function(element) {
    var currentWidth = element.offsetWidth; // в пикселях
    var newHeight = currentWidth * 0.945 + "px"; // если высота 607 и ширина 574
    element.style.height = newHeight; // Устанавливаем новую высоту
});

// Переключение табов с услугами при наведении мыши =======================================================================================================================================================================================================================

document.addEventListener("DOMContentLoaded", function() {
    var tabs = document.querySelectorAll(".nav-link");

    tabs.forEach(function(tab) {
        tab.addEventListener("mouseenter", function() {
            var target = this.getAttribute("data-bs-target");
            document.querySelector(target).classList.add("active", "show");
            tabs.forEach(function(otherTab) {
                if (otherTab !== tab) {
                    var otherTarget = otherTab.getAttribute("data-bs-target");
                    document.querySelector(otherTarget).classList.remove("active", "show");
                }
            });
        });
    });
});

// Добавляем для табов с услугами поведение "аккордеон" на устройствах с шириной до 576 =======================================================================================================================================================================================================================

document.addEventListener("DOMContentLoaded", function() {
    var tabs = document.querySelectorAll(".nav-link");
    var contentContainer = document.querySelector("#myTabContent");

    if (window.innerWidth < 576) {
        tabs[0].insertAdjacentElement('afterend', contentContainer);

        tabs.forEach(function(tab, index) {
            tab.addEventListener("click", function() {
                tab.insertAdjacentElement('afterend', contentContainer);
            });
        });
    }
});


// Перемещаем телефон в хедере на устройствах с шириной до 576 =======================================================================================================================================================================================================================

document.addEventListener("DOMContentLoaded", function() {
    var menu = document.querySelector(".header__menu")
    var phone = document.querySelector(".header__phone-wrapper")

    if (window.innerWidth < 768) {
        menu.insertAdjacentElement('afterbegin', phone);
    }
});