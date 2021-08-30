const hamburger = document.querySelector('#hamburger-nav-item');
const popupNav = document.querySelector('#popup-nav');
const closeButton = document.querySelector('#close');
const portfolioItem = document.querySelector('#portfolio-item');
const aboutItem = document.querySelector('#about-item');
const contactItem = document.querySelector('#contact-item');


function displayMenu (){
    popupNav.classList.remove('display-none');
}

function hideMenu (){
    popupNav.classList.add('display-none');
}

hamburger.addEventListener('click', displayMenu);
closeButton.addEventListener('click', hideMenu);
portfolioItem.addEventListener('click', hideMenu);
aboutItem.addEventListener('click', hideMenu);
contactItem.addEventListener('click', hideMenu);
