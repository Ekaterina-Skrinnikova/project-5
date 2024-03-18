const menuTitle = document.querySelector('.menu__title');
const menuList = document.querySelector('.menu__list');
const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
const closeBtnHeader = document.querySelector('.close-btn-header');
const mobileMenuHeader = document.querySelector('.mobile-menu-header');
const burger = document.querySelector('.burger');
const menuBirgerLink = document.querySelectorAll('.mobile-menu-item-link');
const bottomBurgerMenuBtn = document.querySelector('.link-wt');
const logo = document.querySelector('.logo__image');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

menuTitle.addEventListener('click', function() {
    menuList.classList.toggle('show');
});

closeBtnHeader.addEventListener('click', function() {
    mobileMenuHeader.classList.add('closeMenu');
    mobileMenuHeader.classList.remove('showMenu')
});


burger.addEventListener('click', function() {
    mobileMenuHeader.classList.add('showMenu');
    mobileMenuHeader.classList.remove('closeMenu')
})


menuBirgerLink.forEach(element => element.addEventListener('click', function() {
    mobileMenuHeader.classList.add('closeMenu');
    mobileMenuHeader.classList.remove('showMenu')  
}))


bottomBurgerMenuBtn.addEventListener('click', function() {
    
    mobileMenuHeader.classList.add('closeMenu');
    mobileMenuHeader.classList.remove('showMenu') 
})

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

logo.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})