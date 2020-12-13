'use strict';
(function () {
  const header = document.querySelector('.header');

  if (header) {
    const headerNavigation = header.querySelector('.header__navigation');
    const menuButton = header.querySelector('.header__navigation-buton');

    if (!headerNavigation.classList.contains('header__navigation--js')){
      headerNavigation.classList.add('header__navigation--js');
    }

    menuButton.addEventListener('click', function () {
      header.classList.toggle('header--menu-opened');
      headerNavigation.classList.toggle('header__navigation--menu-opened');
    });
  }

  // slider initialization

  const noveltys = document.querySelector('.noveltys');
  const items = noveltys.querySelector('.novetlys__items');

  items.classList.remove('novetlys__items--no-js');
  items.classList.add('swiper-container');
  items.querySelector('.noveltys__wrapper').classList.add('swiper-wrapper');
  items.querySelectorAll('.novetlys__item').forEach( (item) => {
    item.classList.add('swiper-slide');
  });

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.noveltys__next',
      prevEl: '.noveltys__prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4
      }
    }
  });

  // question init

  const questionList = document.querySelector('.questions__list');

  questionList.querySelectorAll('.questions__item').forEach((item) => {
    item.classList.add('questions__item--closed');
    item.addEventListener('click', () => {
      item.classList.toggle('questions__item--closed');
    })
  });

})();
