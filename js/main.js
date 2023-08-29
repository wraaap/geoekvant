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

// простое

// document.addEventListener("click", function (e) {
//     if (e.target.closest('.icon-menu')) {
//         document.body.classList.toggle('_lock');
//         document.documentElement.classList.toggle("menu-open");
//     }
// }); 

// с закрытием по клику в области вне 

document.addEventListener("click", function (e) {
    var menu = document.querySelector('.header__menu-wrapper'); // Замените на селектор вашего меню
    
    if (e.target.closest('.icon-menu')) {
        document.body.classList.toggle('_lock');
        document.documentElement.classList.toggle("menu-open");
    } else if (!menu.contains(e.target)) {
        // Если клик был вне меню, закрываем его
        document.body.classList.remove('_lock');
        document.documentElement.classList.remove("menu-open");
    }
});


// Адаптивные размеры блока team item =======================================================================================================================================================================================================================

function updateElementSizes() {

    // Получаем коллекцию всех элементов с классом .team__item
    var elements = document.querySelectorAll(".team__item");

    // Проходим через каждый элемент и устанавливаем высоту на основе его ширины
    elements.forEach(function(element) {
        var currentWidth = element.offsetWidth; // в пикселях
        var newHeight = currentWidth * 0.945 + "px"; // если высота 607 и ширина 574
        element.style.height = newHeight; // Устанавливаем новую высоту
    });
}

// Обновляем размеры элементов при загрузке страницы
updateElementSizes();

// Добавляем обработчик события resize
window.addEventListener("resize", updateElementSizes);


// Переключение табов с услугами при наведении мыши =======================================================================================================================================================================================================================

function hoverTabSwitching() {
    document.addEventListener("DOMContentLoaded", function() {
        var tabs = document.querySelectorAll(".nav-link");
        console.log(tabs);

        tabs.forEach(function(tab) {
            tab.addEventListener("mouseenter", function() {
                var target = this.getAttribute("data-bs-target");
                document.querySelector(target).classList.add("active", "show");
                tab.classList.add("active", "show"); 
                tabs.forEach(function(otherTab) {
                    if (otherTab !== tab) {
                        var otherTarget = otherTab.getAttribute("data-bs-target");
                        document.querySelector(otherTarget).classList.remove("active", "show");
                        otherTab.classList.remove("active", "show"); 
                    }
                });

                
            });
        });
    });
}

updateElementSizes();

window.addEventListener("resize", updateElementSizes);

// Добавляем для табов с услугами поведение "аккордеон" на устройствах с шириной до 576 =======================================================================================================================================================================================================================

function addAccordion() {
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
}

addAccordion();

window.addEventListener("resize", addAccordion);



// Перемещаем телефон в хедере на устройствах с шириной до 576 =======================================================================================================================================================================================================================

function movePhoneToHeader() {
    document.addEventListener("DOMContentLoaded", function() {
        var menu = document.querySelector(".header__menu")
        var phone = document.querySelector(".header__phone-wrapper")

        if (window.innerWidth < 768) {
            menu.insertAdjacentElement('afterbegin', phone);
        }
    });
}

movePhoneToHeader();

window.addEventListener("resize", movePhoneToHeader);