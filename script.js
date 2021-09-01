const hamburger = document.querySelector("#hamburger-nav-item");
const popupNav = document.querySelector("#popup-nav");
const closeButton = document.querySelector("#close");
const portfolioItem = document.querySelector("#portfolio-item");
const aboutItem = document.querySelector("#about-item");
const contactItem = document.querySelector("#contact-item");
const seeProjectButton = document.querySelectorAll(".see-project");
const popupWrapper = document.querySelector("#popup-wrapper");
const bodyWrapper = document.querySelector(".body-wrapper");
const popupWindowCloseButton = document.querySelector(
  "#popup-window-close-button"
);

const popupWindowHeader = document.querySelector("#popup-window-header");
const popupWindowLanguages1 = document.querySelector(
  "#popup-window-languages1"
);
const popupWindowLanguages2 = document.querySelector(
  "#popup-window-languages2"
);
const popupWindowLanguages3 = document.querySelector(
  "#popup-window-languages3"
);

const popUpImage = document.querySelector("#popup-image");
const popupWidowParagraphDetail = document.querySelector(
  "#popup-window-paragraph-detail"
);
const popupWindowTechonologies1 = document.querySelector(
  "#popup-window-technologies1"
);
const popupWindowTechonologies2 = document.querySelector(
  "#popup-window-technologies2"
);
const popupWindowTechonologies3 = document.querySelector(
  "#popup-window-technologies3"
);
const popupWindowTechonologies4 = document.querySelector(
  "#popup-window-technologies4"
);

const cardObject1 = {
  name: "Tonic",
  languages: ["Canopy", "Back End Dev", "2015"],
  description:
    "A daily selection of privately personalized reads; no accounts or sign-ups required.",
  image: "images/first-work-card.png",
  technologies: ["html", "css", "javascript"],
  liveVersion: "",
  linkToSource: "",
};

const cardObject2 = {
  name: "Multi-Post Stories",
  languages: ["Facebook", "Full Stack Dev", "2015"],
  description:
    "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
  image: "./images/second-work-card-desktop.png",
  technologies: ["html", "Ruby on Rails", "css", "javascript"],
  liveVersion: "",
  linkToSource: "",
};

const cardObject3 = {
  name: "Facebook 360",
  languages: ["Facebook", "Full Stack Dev", "2015"],
  description:
    "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
  image: "images/third-work-card-desktop.png",
  technologies: ["html", "Ruby on Rails", "css", "javascript"],
  liveVersion: "",
  linkToSource: "",
};

const cardObject4 = {
  name: "Uber Navigation",
  languages: ["Uber", "Lead Developer", "2018"],
  description:
    "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
  image: "images/fourth-work-card-desktop.png",
  technologies: ["html", "Ruby on Rails", "css", "javascript"],
  liveVersion: "",
  linkToSource: "",
};

const cardObjectsArray = [cardObject1, cardObject2, cardObject3, cardObject4];

function displayMenu() {
  popupNav.classList.remove("display-none");
}

function hideMenu() {
  popupNav.classList.add("display-none");
}

function togglePopup(i) {
  popupWrapper.classList.toggle("display-none");
  bodyWrapper.classList.toggle("opacity-main-content");
  popupWindowHeader.textContent = cardObjectsArray[i].name;
  popupWindowLanguages1.textContent = cardObjectsArray[i].languages[0];
  popupWindowLanguages2.textContent = cardObjectsArray[i].languages[1];
  popupWindowLanguages3.textContent = cardObjectsArray[i].languages[2];
  popupWidowParagraphDetail.textContent = cardObjectsArray[i].description;
  popUpImage.src = cardObjectsArray[i].image;
  popupWindowTechonologies1.textContent = cardObjectsArray[i].technologies[0];
  popupWindowTechonologies2.textContent = cardObjectsArray[i].technologies[1];
  popupWindowTechonologies3.textContent = cardObjectsArray[i].technologies[2];
  popupWindowTechonologies4.textContent = cardObjectsArray[i].technologies[3];
  if (cardObjectsArray[i].technologies[3] === undefined) {
    popupWindowTechonologies4.style.display = "none";
  }
  popupWindowHeader.textContent = cardObjectsArray[i].name;
  popupWrapper.scrollIntoView();
}

hamburger.addEventListener("click", displayMenu);
closeButton.addEventListener("click", hideMenu);
portfolioItem.addEventListener("click", hideMenu);
aboutItem.addEventListener("click", hideMenu);
contactItem.addEventListener("click", hideMenu);

for (let i = 0; i < seeProjectButton.length; i++) {
  seeProjectButton[i].addEventListener("click", function () {
    togglePopup(i);
  });
}

popupWindowCloseButton.addEventListener("click", togglePopup);
