const hamburger = document.querySelector('#hamburger-nav-item');
const popupNav = document.querySelector('#popup-nav');
const closeButton = document.querySelector('#close');
const portfolioItem = document.querySelector('#portfolio-item');
const aboutItem = document.querySelector('#about-item');
const contactItem = document.querySelector('#contact-item');

const seeProjectButton = document.querySelectorAll('.see-project');
const popupWrapper = document.querySelector('#popup-wrapper');
const bodyWrapper = document.querySelector('.body-wrapper');
const popupWindowCloseButton = document.querySelector('#popup-window-close-button');
function displayMenu() {
  popupNav.classList.remove('display-none');
}

function hideMenu() {
  popupNav.classList.add('display-none');
}

function togglePopup() {
   popupWrapper.classList.toggle('display-none');
   bodyWrapper.classList.toggle('opacity-main-content');
}

hamburger.addEventListener('click', displayMenu);
closeButton.addEventListener('click', hideMenu);
portfolioItem.addEventListener('click', hideMenu);
aboutItem.addEventListener('click', hideMenu);
contactItem.addEventListener('click', hideMenu);

for (let i = 0; i < seeProjectButton.length; i++) {
    seeProjectButton[i].addEventListener('click', function () {
        togglePopup(i)
    });
}

popupWindowCloseButton.addEventListener('click',togglePopup);
