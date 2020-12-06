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
})();
