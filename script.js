const hamburger = document.querySelector('#hamburger-nav-item');
const popupNav = document.querySelector('#popup-nav');
const closeButton = document.querySelector('#close');
const portfolioItem = document.querySelector('#portfolio-item');
const aboutItem = document.querySelector('#about-item');
const contactItem = document.querySelector('#contact-item');
const seeProjectButton = document.querySelectorAll('.see-project');
const popupWrapper = document.querySelector('#popup-wrapper');
const bodyWrapper = document.querySelector('.body-wrapper');
const popupWindowCloseButton = document.querySelector(
  '#popup-window-close-button',
);

const popupWindowHeader = document.querySelector('#popup-window-header');
const popupWindowLanguages1 = document.querySelector(
  '#popup-window-languages1',
);
const popupWindowLanguages2 = document.querySelector(
  '#popup-window-languages2',
);
const popupWindowLanguages3 = document.querySelector(
  '#popup-window-languages3',
);

const popUpImage = document.querySelector('#popup-image');
const popupWidowParagraphDetail = document.querySelector(
  '#popup-window-paragraph-detail',
);
const popupWindowTechonologies1 = document.querySelector(
  '#popup-window-technologies1',
);
const popupWindowTechonologies2 = document.querySelector(
  '#popup-window-technologies2',
);
const popupWindowTechonologies3 = document.querySelector(
  '#popup-window-technologies3',
);
const popupWindowTechonologies4 = document.querySelector(
  '#popup-window-technologies4',
);

const form = document.forms[0];
const emailInput = document.querySelector('#email');
const formEmailErrorSpan = document.querySelector('#form-email-error-span');

const cardObjectsArray = [{
  name: 'Tonic',
  languages: ['Canopy', 'Back End Dev', '2015'],
  description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  image: 'images/first-work-card.png',
  technologies: ['html', 'css', 'javascript'],
  liveVersion: '',
  linkToSource: '',
},
{
  name: 'Multi-Post Stories',
  languages: ['Facebook', 'Full Stack Dev', '2015'],
  description:
    'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  image: './images/second-work-card-desktop.png',
  technologies: ['html', 'Ruby on Rails', 'css', 'javascript'],
  liveVersion: '',
  linkToSource: '',
},
{
  name: 'Facebook 360',
  languages: ['Facebook', 'Full Stack Dev', '2015'],
  description:
    "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
  image: 'images/third-work-card-desktop.png',
  technologies: ['html', 'Ruby on Rails', 'css', 'javascript'],
  liveVersion: '',
  linkToSource: '',
},
{
  name: 'Uber Navigation',
  languages: ['Uber', 'Lead Developer', '2018'],
  description:
    'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  image: 'images/fourth-work-card-desktop.png',
  technologies: ['html', 'Ruby on Rails', 'css', 'javascript'],
  liveVersion: '',
  linkToSource: '',
},
];

function displayMenu() {
  popupNav.classList.remove('display-none');
}

function hideMenu() {
  popupNav.classList.add('display-none');
}

function togglePopup(i) {
  popupWrapper.classList.toggle('display-none');
  bodyWrapper.classList.toggle('opacity-main-content');
  popupWindowHeader.textContent = cardObjectsArray[i].name;
  const [l1, l2, l3] = cardObjectsArray[i].languages;
  popupWindowLanguages1.textContent = l1;
  popupWindowLanguages2.textContent = l2;
  popupWindowLanguages3.textContent = l3;
  popupWidowParagraphDetail.textContent = cardObjectsArray[i].description;
  popUpImage.src = cardObjectsArray[i].image;
  const [t1, t2, t3, t4] = cardObjectsArray[i].technologies;
  popupWindowTechonologies1.textContent = t1;
  popupWindowTechonologies2.textContent = t2;
  popupWindowTechonologies3.textContent = t3;
  popupWindowTechonologies4.textContent = t4;
  if (cardObjectsArray[i].technologies[3] === undefined) {
    popupWindowTechonologies4.style.display = 'none';
  }
  popupWindowHeader.textContent = cardObjectsArray[i].name;
  popupWrapper.scrollIntoView();
}

hamburger.addEventListener('click', displayMenu);
closeButton.addEventListener('click', hideMenu);
portfolioItem.addEventListener('click', hideMenu);
aboutItem.addEventListener('click', hideMenu);
contactItem.addEventListener('click', hideMenu);

for (let i = 0; i < seeProjectButton.length; i += 1) {
  seeProjectButton[i].addEventListener('click', () => {
    togglePopup(i);
  });
}

popupWindowCloseButton.addEventListener('click', togglePopup);

form.addEventListener('submit', (event) => {
  const lowerCase = emailInput.value.toLowerCase();

  if (lowerCase !== emailInput.value) {
    formEmailErrorSpan.classList.remove('display-none');
    formEmailErrorSpan.textContent = 'Email needs to be in lower case';
    event.preventDefault();
  } else {
    formEmailErrorSpan.classList.add('display-none');
    formEmailErrorSpan.textContent = '';
  }
});