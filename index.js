// ==============================
// Products Array + Objects
// ==============================

const products = [
    {
        id: 1,
        name: "هاتف ذكي",
        price: 450,
        image: "images/h2.jpg",
        category: "phones"
    },




    {
        id: 2,
        name: "لابتوب احترافي",
        price: 850,
        image: "images/h3.jpg",
        category: "laptops"
    },

    {
        id: 3,
        name: "سماعات لاسلكية",
        price: 120,
        image: "images/h5.jpg",
        category: "headphones"
    },

    {
        id: 4,
        name: "ساعة ذكية",
        price: 180,
        image: "images/s5.jpg",
        category: "smartwatches"
    }
    
];


// ==============================
// DOM Elements
// ==============================

const featuredProducts =
    document.querySelector("#featuredProducts");

const darkModeBtn =
    document.querySelector("#darkModeBtn");

const navLinks =
    document.querySelector(".nav-links");

const moreBtn =
    document.querySelector("#moreBtn");

const moreText =
    document.querySelector("#moreText");

const topBtn =
    document.querySelector("#topBtn");

const dateElement =
    document.querySelector("#date");

const timeElement =
    document.querySelector("#time");


// ==============================
// Display Products
// ==============================
function displayProducts() {

    featuredProducts.innerHTML = "";

    products.forEach(function(product) {

        featuredProducts.innerHTML += `
            <div class="product-card">

                <img src="${product.image}" 
                     alt="${product.name}">

                <div class="product-info">

                    <h3>${product.name}</h3>

                    <p class="price">
                        $${product.price}
                    </p>

                    <a
                        href="product-details.html"
                        class="product-details-link"
                        onclick="selectProduct(${product.id}); return false;"
                    >
                        عرض التفاصيل
                    </a>

                </div>

            </div>
        `;
    });


    // ==============================
    // حركة كروت المنتجات
    // ==============================

    const productCards =
        document.querySelectorAll(".product-card");


    productCards.forEach(function(card) {

        // سرعة الحركة
        card.style.transition =
            "all 0.3s ease";


        // عند مرور الماوس
        card.addEventListener(
            "mouseenter",
            function() {

                card.style.transform =
                    "translateY(-10px)";

                card.style.boxShadow =
                    "0 15px 30px rgb(12, 12, 57)";

            }
        );


        // عند خروج الماوس
        card.addEventListener(
            "mouseleave",
            function() {

                card.style.transform =
                    "translateY(0)";

                card.style.boxShadow =
                    "0 5px 15px rgba(8, 19, 100, 0.99)";

            }
        );

    });

}


function selectProduct(id) {

    localStorage.setItem(
        "selectedProduct",
        String(id)
    );

    window.location.href =
        "product-details.html";

}


displayProducts();


// ==============================
// Slider
// ==============================

const sliderImages = [
    "images/h17.jpg",
    "images/h14.webp",
    "images/h6.webp"
];

const sliderTitles = [
    "عالمك التقني يبدأ من هنا",
    "أحدث الإلكترونيات بين يديك",
    "اكتشف منتجاتنا المميزة"
];

const sliderTexts = [
    "اكتشف أحدث الأجهزة والإلكترونيات بأسعار مميزة.",
    "اختيارات متنوعة من المنتجات التقنية.",
    "تسوق بسهولة واستمتع بتجربة إلكترونية مميزة."
];

let currentSlide = 0;

const sliderImage =
    document.querySelector("#sliderImage");

const sliderTitle =
    document.querySelector("#sliderTitle");

const sliderText =
    document.querySelector("#sliderText");

const nextBtn =
    document.querySelector("#nextBtn");

const prevBtn =
    document.querySelector("#prevBtn");


function showSlide(index) {

    if (index >= sliderImages.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = sliderImages.length - 1;
    } else {
        currentSlide = index;
    }

    sliderImage.src = sliderImages[currentSlide];

    sliderTitle.textContent =
        sliderTitles[currentSlide];

    sliderText.textContent =
        sliderTexts[currentSlide];
}


nextBtn.addEventListener("click", function() {

    currentSlide++;

    showSlide(currentSlide);

});


prevBtn.addEventListener("click", function() {

    currentSlide--;

    showSlide(currentSlide);

});


// Automatic Slider

setInterval(function() {

    currentSlide++;

    showSlide(currentSlide);

}, 5000);


// ==============================
// Dark Mode
// ==============================

darkModeBtn.addEventListener("click", function() {

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
// Show More
// ==============================

moreBtn.addEventListener("click", function() {

    moreText.classList.toggle("hidden");

    if (moreText.classList.contains("hidden")) {

        moreBtn.textContent = "عرض المزيد";

    } else {

        moreBtn.textContent = "إخفاء";
    }

});


// ==============================
// Date & Time
// ==============================

function updateDateTime() {

    const now = new Date();

    dateElement.textContent =
        now.toLocaleDateString("ar-YE");

    timeElement.textContent =
        now.toLocaleTimeString("ar-YE");

}

updateDateTime();

setInterval(updateDateTime, 1000);


// ==============================
// Back To Top
// ==============================

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }

});


topBtn.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==============================
// Category Click
// ==============================

const categoryCards =
    document.querySelectorAll(".category-card");

categoryCards.forEach(function(card) {

    // سرعة الحركة والظل
    card.style.transition =
        "all 0.3s ease";


    // ==============================
    // عند الضغط على القسم
    // ==============================

    card.addEventListener("click", function() {

        const category =
            card.dataset.category;

        window.location.href =
            `products.html?category=${category}`;

    });


    // ==============================
    // عند مرور الماوس
    // ==============================

    card.addEventListener("mouseenter", function() {

        card.style.transform =
            "translateY(-8px)";

        card.style.boxShadow =
            "0 12px 30px rgb(12, 5, 74)";

    });


    // ==============================
    // عند خروج الماوس
    // ==============================

    card.addEventListener("mouseleave", function() {

        card.style.transform =
            "translateY(0)";

        card.style.boxShadow =
            "0 5px 15px rgba(8, 19, 100, 0.99)";

    });

});
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


// فتح نافذة البحث

myOpenSearch.addEventListener("click", function () {

    mySearchOverlay.classList.add("show");

    mySearchInput.focus();

});


// إغلاق النافذة

myCloseSearch.addEventListener("click", function () {

    mySearchOverlay.classList.remove("show");

});


// إغلاق عند الضغط على الخلفية

mySearchOverlay.addEventListener("click", function (event) {

    if (event.target === mySearchOverlay) {

        mySearchOverlay.classList.remove("show");

    }

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
