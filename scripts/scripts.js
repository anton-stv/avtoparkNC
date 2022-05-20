var buttonContacts = document.querySelector('.topBar .buttonContacts');
var contactInfo = document.querySelector('.topBar .contactInfo');

buttonContacts.addEventListener('click', function () {
    var info = contactInfo.classList.contains('visible');
    if (info>0) {
        contactInfo.classList.remove('visible');
    } else {
        contactInfo.classList.add('visible');
    }
})

var buttonBurger = document.querySelector('.burger');
var mobileMenu = document.querySelector('.mobileMenuWrap');
var body = document.querySelector('body');

buttonBurger.addEventListener('click', function () {
       mobileMenu.classList.add('open');
       body.style.overflow = 'hidden';
})

var mobile = document.querySelector('.mobileMenu');

mobileMenu.addEventListener( 'click', (e) => {
    const click = e.composedPath().includes(mobile);
    if ( !click ) {
        mobileMenu.classList.remove('open');
        body.style.overflow = 'initial';
    }
})

var hasSecondLevel = document.querySelector('.mobileMenuItemLink.hasSecondLevel');
var secondLevel = document.querySelector('.mobileMenuItem .dropdownGroup');

hasSecondLevel.addEventListener('click', function (e) {
    e.preventDefault;
    var second = secondLevel.classList.contains('open');
    if (second>0) {
        secondLevel.classList.remove('open');
    } else {
        secondLevel.classList.add('open');
    }
})