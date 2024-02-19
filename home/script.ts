setInterval(displayDate, 1000); // Calling the clock for the Profile

// Logout buttons (one at the bottom of the page and
// the two others in the navbars
// (vertical and horizontal))

const body = document.body;

const logoutButton = document.querySelector("#logout") as HTMLInputElement;
const logoutSmallScreens = document.querySelector(
  "#logoutSmallScreens"
) as HTMLDivElement;
const logoutLargeScreens = document.querySelector(
  "#logoutLargeScreens"
) as HTMLDivElement;

const confirmDeconnexionDialog = document.querySelector(
  "#confirmDeconnexionDialog"
) as HTMLDialogElement;
const denyButton = document.querySelector("#denyButton") as HTMLInputElement;

let logoutItems = [logoutLargeScreens, logoutSmallScreens, logoutButton];

logoutItems.forEach((item) => {
  item.addEventListener("click", (): void => {
    confirmDeconnexionDialog.showModal();
    toggleconfirmDeconnexionDialog();
  });
});

denyButton.addEventListener("click", (): void => {
  confirmDeconnexionDialog.close();
  toggleconfirmDeconnexionDialog();
});

confirmDeconnexionDialog.addEventListener("cancel", (): void => {
  confirmDeconnexionDialog.close();
  toggleconfirmDeconnexionDialog();
});

function toggleconfirmDeconnexionDialog() {
  confirmDeconnexionDialog.classList.toggle("hidden");
  confirmDeconnexionDialog.classList.toggle("flex");
  body.classList.toggle("blur-sm");
}
// Click on the navbars elements triggers the redirection to the links inside them

// Large screens (large navbar)

const largeHome = document.querySelector("#largeHome") as HTMLDivElement;
const largeTools = document.querySelector("#largeTools") as HTMLDivElement;
const largeAbout = document.querySelector("#largeAbout") as HTMLDivElement;

// Small screens (small navbar)

const smallHome = document.querySelector("#smallHome") as HTMLDivElement;
const smallTools = document.querySelector("#smallTools") as HTMLDivElement;
const smallAbout = document.querySelector("#smallAbout") as HTMLDivElement;

/*The "go back to top" wrapper is also in this case, so I include it here.
  The bouncing button too all the grid tools also*/

const backToTopWrapper = document.querySelector("#backToTop") as HTMLDivElement;
const arrowDownbutton = document.querySelector(
  "#arrowDownbutton"
) as HTMLDivElement;
const spaceCalculator = document.querySelector(
  "#spaceCalculator"
) as HTMLDivElement;

let navbarSections = [
  largeHome,
  largeTools,
  largeAbout,
  smallHome,
  smallTools,
  smallAbout,
  backToTopWrapper,
  arrowDownbutton,
  spaceCalculator,
];

navbarSections.forEach((section: HTMLDivElement) => {
  section.addEventListener("click", (): void => {
    const link = section.querySelector("a") as HTMLAnchorElement;
    const redirectUrl = link.getAttribute("href") as string;
    window.location.href = redirectUrl;
  });
});

// Ping notification management

const menuBurgerButton = document.querySelector(
  "#menuBurgerButton"
) as HTMLButtonElement;
const smallProfile = document.querySelector("#smallProfile") as HTMLDivElement;
const largeProfile = document.querySelector("#largeProfile") as HTMLDivElement;

let domElements = [menuBurgerButton, smallProfile, largeProfile];

const pingNotificationBurger = document.querySelector(
  "#pingNotificationBurger"
);
const smallScreensNotification = document.querySelector("#smallNotification");
const bigScreensNotification = document.querySelector("#bigNotification");

let notifications = [
  pingNotificationBurger,
  smallScreensNotification,
  bigScreensNotification,
];

domElements.forEach((element) => {
  let index = domElements.indexOf(element);

  element.addEventListener("click", () => {
    notifications[index].classList.remove("flex");
    notifications[index].classList.add("hidden");
  });
});

smallProfile.addEventListener("click", () => {
  bigScreensNotification.classList.remove("flex");
  bigScreensNotification.classList.add("hidden");
});

largeProfile.addEventListener("click", () => {
  pingNotificationBurger.classList.remove("flex");
  pingNotificationBurger.classList.add("hidden");
  smallScreensNotification.classList.remove("flex");
  smallScreensNotification.classList.add("hidden");
});

// Animation for the title

const animatedText = document.getElementById("animatedText");
const cursor = document.querySelector(".cursor");
const textContent = animatedText.innerText;
const textLength = textContent.length;
let charIndex = 0;
let reverse = false;

function animateText() {
  animatedText.innerHTML =
    `<img src="../assets/icons/wave1.gif" alt="greeting" class="h-9 w-9 rounded-full sm:h-12 sm:w-12 relative bottom-1 sm:bottom-0 inline-block">` +
    `<div class="inline-block">${textContent.slice(
      0,
      charIndex + 1
    )}<span class="relative inline-block bg-gradient-to-tr cursor animate-ping from-purple-500 via-teal-500 to-pink-500  sm:w-5 sm:h-5"></span></div>`;

  charIndex = reverse ? charIndex - 1 : charIndex + 1;

  if (charIndex > textLength) {
    reverse = true;
  } else if (charIndex < 0) {
    reverse = false;
  }

  const delay = charIndex === 0 || charIndex === textLength ? 1000 : 200;
  setTimeout(animateText, delay);
}

animateText();

// animation for the tag main text

const mainText = document.getElementById("mainText");
const animatedTextContent = mainText.innerHTML;
let mainTextCharIndex = 0;
let reverseMain = false;

function animatemainText() {
  const currentChar = animatedTextContent.charAt(mainTextCharIndex);
  const isLineBreak =
    currentChar === "<" &&
    animatedTextContent.charAt(mainTextCharIndex + 1) === "b";

  mainText.innerHTML = `${animatedTextContent.slice(
    0,
    mainTextCharIndex + 1
  )}<span class="relative inline-block  bg-gray-200 cursor1 animate-ping sm:w-5 sm:h-5" id="mainCursor"></span>`;
  mainTextCharIndex = reverseMain
    ? mainTextCharIndex - 1
    : mainTextCharIndex + 1;

  if (mainTextCharIndex > animatedTextContent.length) {
    const mainCursor = document.querySelector("#mainCursor");
    mainCursor.classList.add("hidden");
    return;
  }

  const delay = isLineBreak
    ? 0.5
    : mainTextCharIndex === 0 ||
      mainTextCharIndex === animatedTextContent.length
    ? 1000
    : 1;
  setTimeout(animatemainText, delay);
}

animatemainText();

// js for the menu burger button

const menuburgerImg = document.querySelector("#menuBurgerImg");
let menuburgerImgAlt = menuburgerImg.alt;
const verticalNavbar = document.querySelector("#verticalNavbar");

menuBurgerButton.addEventListener("click", () => {
  if (menuburgerImgAlt === "menu-burger icon") {
    menuburgerImg.src = "../assets/icons/navbarIcons/cross.png";
    menuburgerImgAlt = "cross icon";
    addVerticalNavbar();
  } else {
    menuburgerImg.src = "../assets/icons/navbarIcons/menu-burger.png";
    menuburgerImgAlt = "menu-burger icon";
    removeVerticalNavbar();
  }
});

function addVerticalNavbar() {
  verticalNavbar.classList.toggle("opacity-0");
  verticalNavbar.classList.toggle("transit-final");
}

function removeVerticalNavbar() {
  verticalNavbar.classList.toggle("transit-final");

  setTimeout(() => {
    verticalNavbar.classList.toggle("opacity-0");
  }, 250);
}

// Dialog profile
const profileDialog = document.querySelector("#profileDialog");
const dateDiv = document.querySelector("#dateDiv");
const closeProfileButton = document.querySelector("#closeProfile");

let profile = [smallProfile, largeProfile];

profile.forEach((element) => {
  element.addEventListener("click", () => {
    profileDialog.showModal();
    toggleProfileDialog();
  });
});

profileDialog.addEventListener("cancel", () => {
  profileDialog.close();
  toggleProfileDialog();
});

// Close the dialog
closeProfileButton.addEventListener("click", () => {
  profileDialog.close();
  toggleProfileDialog();
});

function toggleProfileDialog() {
  profileDialog.classList.toggle("hidden");
  profileDialog.classList.toggle("flex");
  body.classList.toggle("blur-sm");
}

function displayDate() {
  let actualDate = new Date();
  let year = actualDate.getFullYear();
  let month = actualDate.getMonth();
  let date = actualDate.getDate();
  let day = actualDate.getDay();

  let hours = actualDate.getHours();
  let minutes = actualDate.getMinutes();
  let seconds = actualDate.getSeconds();

  function padUnit(unit) {
    return unit >= 10 ? unit : "0" + unit;
  }

  hours = padUnit(hours);
  minutes = padUnit(minutes);
  seconds = padUnit(seconds);

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "Juni",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  month = months[Number(month)];

  day === 0
    ? (day = daysOfWeek[daysOfWeek.length - 1])
    : (day = daysOfWeek[Number(day) - 1]);
  dateDiv.innerHTML = `${day} ${month} ${date}, ${year}

   <div class="font-bold grid grid-cols-3 place-items-center w-2/5 gap-0">
      <div class="w-6">${hours}:</div> 
      <div class="w-6">${minutes}:</div>
      <div class="w-6 text-start">${seconds}</div>
   </div>`;
}

// The "go back to top" position is treated here ...

window.onscroll = () => {
  if (body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopWrapper.classList.add("flex");
    backToTopWrapper.classList.remove("hidden");
  } else {
    backToTopWrapper.classList.remove("flex");
    backToTopWrapper.classList.add("hidden");
  }
};
