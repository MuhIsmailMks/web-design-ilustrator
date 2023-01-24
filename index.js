const benefitCol = document.querySelectorAll('.benefit-col-section .col .icon');
const bgDark = document.querySelector('.benefit-col-section .bg-dark-active');
const benefitContainer = document.querySelector('.benefit-col-section .benefit-article');
const slideAll = document.querySelectorAll(".swiper-slide")
const swiperSlide = document.querySelector(".swiper");
const btnMenu = document.querySelector('.btn-menu');
const ul = document.querySelector('nav ul')
btnMenu.addEventListener('click', () => {
    ul.classList.toggle('active')
})
benefitCol.forEach(col => {
        let parent = col.parentElement 
    col.addEventListener('click',() => {
        col.classList.toggle('active'); 
        if(col.className == "icon active" ){ 
            parent.classList.add('active');
        } else {
            parent.classList.remove('active');
        }
        bgDark.classList.add('active'); 
        if(parent.className == "col"){
            bgDark.classList.remove('active'); 
        } 
    })

    bgDark.addEventListener('click',() => { 
        parent.classList.remove('active');
        bgDark.classList.remove('active'); 
    })
})

// swiper 
const swiper = new Swiper('.swiper', {
    // Optional parameters
        direction: 'horizontal',
        loop: false,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },   
        breakpoints: {  
            // when window width is <= 999px
           900: {
                slidesPerView: 3,
                spaceBetweenSlides: 10
            }, 
            // when window width is <= 500px
            500: {
                slidesPerView: 2,
                spaceBetweenSlides: 30
            }
          
        }
        });

 
 