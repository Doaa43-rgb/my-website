// ==============================
// DOM Elements
// ==============================

const darkModeBtn =
    document.querySelector("#darkModeBtn");

const menuBtn =
    document.querySelector("#menuBtn");

const navLinks =
    document.querySelector(".nav-links");

const readMoreBtn =
    document.querySelector("#readMoreBtn");

const extraInfo =
    document.querySelector("#extraInfo");


// ==============================
// Dark Mode
// ==============================

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkModeBtn.textContent = "☀️";

        localStorage.setItem("darkMode", "enabled");

    } else {

        darkModeBtn.textContent = "🌙";

        localStorage.setItem("darkMode", "disabled");
    }

});

if (localStorage.getItem("darkMode") === "enabled") {

    document.body.classList.add("dark");

    darkModeBtn.textContent = "☀️";
}

// ==============================
// Read More
// ==============================

readMoreBtn.addEventListener("click", function () {

    extraInfo.classList.toggle("hidden");

    if (extraInfo.classList.contains("hidden")) {

        readMoreBtn.textContent = "اقرأ المزيد";

    } else {

        readMoreBtn.textContent = "إخفاء المعلومات";
    }

});

// ==============================
// About Image Slider
// ==============================

const aboutSliderImage =
    document.querySelector("#aboutSliderImage");

const aboutImages = [
    "images/h15.png",
    "images/h2.jpg",
    "images/h8.png",
    "images/h14.webp"
];

let aboutImageIndex = 0;

setInterval(function () {

    aboutImageIndex++;

    if (aboutImageIndex >= aboutImages.length) {
        aboutImageIndex = 0;
    }

    aboutSliderImage.src =
        aboutImages[aboutImageIndex];

}, 2000);

// ==============================
// Search Window
// ==============================

const myOpenSearch =
    document.querySelector("#myOpenSearch");

const mySearchOverlay =
    document.querySelector("#mySearchOverlay");

const myCloseSearch =
    document.querySelector("#myCloseSearch");

const mySearchInput =
    document.querySelector("#mySearchInput");

const mySearchButton =
    document.querySelector("#mySearchButton");



myOpenSearch.addEventListener("click", function () {

    mySearchOverlay.classList.add("show");

    mySearchInput.focus();

});


myCloseSearch.addEventListener("click", function () {

    mySearchOverlay.classList.remove("show");

});

mySearchButton.addEventListener("click", function () {

    const searchValue =
        mySearchInput.value.trim();

    if (searchValue === "") {

        alert("اكتب اسم المنتج أولاً");

        mySearchInput.focus();

        return;
    }

    window.location.href =
        "products.html?search=" +
        encodeURIComponent(searchValue);

});

mySearchInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        mySearchButton.click();

    }

});

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        mySearchOverlay.classList.remove("show");

    }

});