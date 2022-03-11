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
const nameInput = document.querySelector('#form-name');
const descriptionInput = document.querySelector('#form-description');

const formEmailErrorSpan = document.querySelector('#form-email-error-span');
const seeLiveButton = document.querySelector('#see-live');
const seeSourceButton = document.querySelector('#see-source');

const cardObjectsArray = [{
  name: 'Starlite Shows',
  languages: ['Self-Employed', 'Front End', '2022'],
  description:
    '   The website displays the seasons and episodes of three chosen TV shows,'
    + 'as well as having a comment section for every episode connected to the involvement API,'
    + ' the project was built with HTML, CSS, JavaScript,'
    + 'bundled with Webpack and tested with Jest.',
  image: 'https://github.com/DyaryRaoof/javascript-capstone/raw/development/app_screenshot.png',
  technologies: ['html', 'css', 'javascript'],
  liveVersion: 'https://dyaryraoof.github.io/javascript-capstone/dist',
  linkToSource: 'https://github.com/DyaryRaoof/javascript-capstone',
},
{
  name: 'Budget',
  languages: ['Self-Employed', 'Back End Dev', '2022'],
  description:
    'This is a Ruby on Rails capstone project from Microverse curriculum. It is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
  image: './images/budget_screenshot.png',
  technologies: ['html', 'Ruby on Rails', 'css', 'Bootstrap'],
  liveVersion: 'https://budget-dyary.herokuapp.com/',
  linkToSource: 'https://github.com/DyaryRaoof/budget',
},
{
  name: 'Motors',
  languages: ['Self Employed', 'Full Stack Dev', '2022'],
  description:
    ' This is a website that allows users to login, see list of motorcycle models,'
    + 'register a motorcycle or delete motorcycles,'
    + 'create reservations for motorcycles with city and date and see list of reservation.'
    + 'All of this is handled with react and redux and gets info from the back-end api.'
    + 'this project was built as the final capstone project for the Microverse full-stack developer'
    + 'curriculum',
  image: 'https://github.com/DyaryRaoof/motors-frontend/raw/dev/screenshot1.png',
  technologies: ['html', 'Ruby on Rails', 'React js', 'javascript'],
  liveVersion: 'https://motors-frontend-d-p-m.herokuapp.com/',
  linkToSource: 'https://github.com/DyaryRaoof/motors-frontend',
},
{
  name: 'Moros Back End',
  languages: ['Self Employed', 'Full Stack Dev', '2022'],
  description:
    'This is a Ruby on Rails final capstone project from Microverse curriculum.'
    + 'This is a API that allows users to login, get list of motorcycle models,'
    + 'register a motorcycle or delete motorcycles,'
    + 'create reservations for motorcycles with city and date and get list of reservation.',
  image: 'https://github.com/DyaryRaoof/motors-frontend/raw/dev/screenshot1.png',
  technologies: ['Ruby on Rails', 'Ruby'],
  liveVersion: 'https://motors-frontend-d-p-m.herokuapp.com/',
  linkToSource: 'https://github.com/DyaryRaoof/motors-backend',
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
  seeLiveButton.onclick = () => { window.open(cardObjectsArray[i].liveVersion, '_blank'); };
  seeSourceButton.onclick = () => { window.open(cardObjectsArray[i].linkToSource, '_blank'); };
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

function storeFormDataLocally() {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    description: descriptionInput.value,
  };

  localStorage.setItem('formData', JSON.stringify(formData));
}

nameInput.addEventListener('input', () => {
  storeFormDataLocally();
});

emailInput.addEventListener('input', () => {
  storeFormDataLocally();
});

descriptionInput.addEventListener('input', () => {
  storeFormDataLocally();
});

window.addEventListener('load', () => {
  const data = localStorage.getItem('formData');
  const parseData = JSON.parse(data);
  if (parseData) {
    nameInput.value = parseData.name;
    emailInput.value = parseData.email;
    descriptionInput.value = parseData.description;
  }
});