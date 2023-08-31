//Слайдеры
const promoSwiper = new Swiper(".promo-swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    simulateTouch: false,
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 0,
    watchOverflow: true,
    navigation: {
        nextEl: ".promo-swiper-button-next",
        prevEl: ".promo-swiper-button-prev",
    },
    pagination: {
      el: '.promo-swiper-pagination',
      clickable: 'true',
    },
});


const complexMarketingSwiper = new Swiper(".complex-marketing-swiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    speed: 1000,
    simulateTouch: false,
    spaceBetween: 30,
    watchOverflow: true,
    watchSlidesProgress: 'true',
    navigation: {
        nextEl: ".complex-marketing-swiper-button-next",
        prevEl: ".complex-marketing-swiper-button-prev",
    },
    pagination: {
      el: '.complex-marketing-swiper-pagination',
      clickable: 'true',
    },
    breakpoints: {
        // when window width is >= 1200px
        1500: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30,
            simulateTouch: false,
            // autoHeight: false,
        },
        768: {
            slidesPerView: 2.4,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 1.4,
            slidesPerGroup: 1,
            spaceBetween: 20,
            simulateTouch: true,
        },
        300: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            // autoHeight: true,
        },
    },
});

const otherServicesSwiper = new Swiper(".other-services-swiper", {
    speed: 1000,
    simulateTouch: "false",
    watchOverflow: "true",
    pagination: {
        el: ".other-services-swiper-pagination",
        clickable: "true",
    },
    watchSlidesProgress: "true",
    breakpoints: {
        // when window width is >= 1200px
        1200: {
            grid: {
                fill: "row",
                rows: 3,
            },
            slidesPerView: 3,
            spaceBetween: 0,
        },
        768: {
            grid: {
                fill: "row",
                rows: 4,
            },
            slidesPerView: 2,
            spaceBetween: 0,
        },
        576: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        300: {
            slidesPerView: 1.2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    },
});


const sliderProjectGalleryThumbs = new Swiper(".slider__thumbs--projectgallery .swiper", {
	direction: "vertical",
	slidesPerView: 4,
	spaceBetween: 60,
	navigation: {
		nextEl: ".slider__thumbs--projectgallery__next",
		prevEl: ".slider__thumbs--projectgallery__prev"
	},
	mousewheel: "true",
	freeMode: "true",
	breakpoints: {
		0: {
			direction: "horizontal",
            spaceBetween: 5,
            slidesPerView: 5,
            mousewheel: "false",
		},
		575: {
            spaceBetween: 10,
            // slidesPerView: 5,
            slidesPerView: 4.5,
			direction: "horizontal",
		},
		768: {
            spaceBetween: 15,
            // slidesPerView: 5,
            slidesPerView: 3.5,
			direction: "vertical",
		},
        992: {
            spaceBetween: 20,
            slidesPerView: 3.5,
			direction: "vertical",
        },
        1200: {
            spaceBetween: 10,
            slidesPerView: 3.7,
        },
        1500: {
            spaceBetween: 10,
            slidesPerView: 3.7,
        },
        1700: {
            spaceBetween: 10,
            slidesPerView: 3.5,
        },
        1921: {
            spaceBetween: 15,
            slidesPerView: 3.4,
        }
	}
});


const sliderProjectGalleryImages = new Swiper('.slider__images--projectgallery .swiper', {
	direction: "vertical",
	slidesPerView: 1,
	spaceBetween: 20,
	mousewheel: false,
	navigation: {
		nextEl: ".slider__next",
		prevEl: ".slider__prev"
	},
	grabCursor: true,
	thumbs: {
		swiper: sliderProjectGalleryThumbs
	},
	breakpoints: {
		0: {
			direction: "horizontal",
		},
		768: {
			direction: "vertical",
		}
	}
});

const feedbackSwiper = new Swiper(".feedback-swiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    speed: 1000,
    simulateTouch: "true",
    spaceBetween: 30,
    watchOverflow: "true",
    centeredSlides: false,
    navigation: {
        nextEl: ".feedback-swiper-button-next",
        prevEl: ".feedback-swiper-button-prev",
    },
    // autoplay: "true",
    pagination: {
      el: ".feedback-swiper-pagination",
      clickable: "true",
      type: "fraction",
    },
    breakpoints: {
        300: {
            centeredSlides: true,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
            spaceBetween: 10,
            centeredSlides: true,
        },
        768: {
            slidesPerView: 1.7,
            slidesPerGroup: 1,
            spaceBetween: 10,
            centeredSlides: true,
        },
        992: {
            slidesPerView: 2.3,
            slidesPerGroup: 2,
            spaceBetween: 10,
            centeredSlides: false,
        },
        1200: {
            slidesPerView: 2.5,
            slidesPerGroup: 2,
            spaceBetween: 15,
        },
        1300: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 15,
            simulateTouch: "true",
        },
        1600: {
            spaceBetween: 20,
        },
    },
});

const clientFeedbackSwiper = new Swiper(".client-feedback-swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    simulateTouch: true,
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 0,
    watchOverflow: true,
    pagination: {
      el: '.client-feedback-swiper-pagination',
      clickable: 'true',
    },
});

//Подключение кастомного скролла при ширине экрана больше 991 пикселя 
if ($(window).width() > 991) {
    (function ($) {
        $(window).on("load", function () {
            $(".text-content-scroll").mCustomScrollbar({
                theme: 'dark',
                scrollInertia: "300",
                advanced: {
                    updateOnContentResize: "true",
                },
            });
        });
    })(jQuery);
};



//Подключение кастомного скролла при ширине экрана больше 991 пикселя
if ($(window).width() > 991) {
    (function ($) {
        $(window).on("load", function () {
            $(".text-content-scroll").mCustomScrollbar({
                theme: 'dark',
                scrollInertia: "300",
                advanced: {
                    updateOnContentResize: "true",
                },
            });
        });
    })(jQuery);
};


// Добавляем обработчики событий на заголовки для аккордеона
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.classList.toggle('active');
  });
});


// Отключаем аккордеон


    if (window.innerWidth <= 991) {
        document.querySelectorAll('.accordion-button').forEach(button => {
            button.setAttribute('data-bs-toggle', 'collapse');
            button.setAttribute('data-bs-target', '#' + button.parentElement.nextElementSibling.id);
            button.removeAttribute('aria-expanded');
            button.removeAttribute('aria-controls');
        });

        document.querySelectorAll('.accordion-collapse').forEach(collapse => {
            collapse.classList.add('collapse');
            collapse.classList.remove('show');
        });
    }


    const mediaQuery = window.matchMedia('(max-width: 991px)');

    function handleScreenChange(e) {
        if (e.matches) {
            document.querySelectorAll('.accordion-button').forEach(button => {
                button.setAttribute('data-bs-toggle', 'collapse');
                button.setAttribute('data-bs-target', '#' + button.parentElement.nextElementSibling.id);
                button.removeAttribute('aria-expanded');
                button.removeAttribute('aria-controls');
            });

            document.querySelectorAll('.accordion-collapse').forEach(collapse => {
                collapse.classList.add('collapse');
                collapse.classList.remove('show');
            });
        } else {
            document.querySelectorAll('.accordion-button').forEach(button => {
                button.removeAttribute('data-bs-toggle');
                button.removeAttribute('data-bs-target');
                button.setAttribute('aria-expanded', 'false');
                button.setAttribute('aria-controls', button.parentElement.nextElementSibling.id);
            });

            document.querySelectorAll('.accordion-collapse').forEach(collapse => {
                collapse.classList.remove('collapse');
                collapse.classList.add('show');
            });
        }
    }

    handleScreenChange(mediaQuery);
    mediaQuery.addListener(handleScreenChange);

