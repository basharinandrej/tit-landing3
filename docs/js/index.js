document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.burger-btn--js')
    const mainMenu = document.querySelector('.main-menu--js')

    burgerBtn.addEventListener('click', toggleMenuHandler)

    function toggleMenuHandler() {
        if (mainMenu) {
            mainMenu.classList.toggle('main-menu--open')
            this.classList.toggle('open')
        }
    }
    const nextArrow = `<div class="main-slider__next-arrow next-arrow">
        <svg width="22" height="22" role="img" class="next-arrow__svg">
            <use xlink:href="./images/sprite.svg#icon-vector"></use>
        </svg>

        <div class="slick-arrow__circle-small circle-small">
            <svg width="44" height="44" class="circle-small__svg">
                <circle class="bg" cx="22" cy="22" r="20"></circle>
                <circle class="progress one" cx="22" cy="22" r="20"></circle>
            </svg>
        </div>
    </div>`
    const prevArrow = `<div class="main-slider__prev-arrow prev-arrow">
         <svg width="22" height="22" role="img" class="next-arrow__svg">
            <use xlink:href="./images/sprite.svg#icon-vector"></use>
         </svg>
        
         <div class="slick-arrow__circle-small circle-small">
            <svg width="44" height="44" class="circle-small__svg">
                <circle class="bg" cx="22" cy="22" r="20"></circle>
            </svg>
         </div>
     </div>`


    $('.slider-text').owlCarousel({
        items: 1,
        dots: false,
        animateIn: 'fadeIn',
    });

    $('.main-slider').owlCarousel({
        center: true,
        items: 3,
        loop:true,
        nav:true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2500,
        navText: [prevArrow, nextArrow],
        responsive : {
            1200 : {
                nav: true,
                loop:true,
                autoplay: false
            },
            768 : {
                items: 1,
                nav: false,
                loop:true,
                autoplay: false
            },
            360 : {
                items: 1,
                nav: false,
                loop:true,
                autoplay: false
            },
            320 : {
                items: 1,
                nav: false,
                loop:true,
                autoplay: false
            }
        }
    });
}, false);



