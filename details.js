// ======================================
// Products Data
// ======================================

const products = [

    {
        id: 1,
        name: "iPhone 15",
        price: 799,
        category: "الهواتف",
        image: "images/213.png",
        description:
            "هاتف ذكي حديث بأداء قوي وكاميرا عالية الجودة."
    },

    {
        id: 2,
        name: "Monitor",
        price: 300,
        category: "الشاشات",
        image: "images/h15.png",
        description:
            "شاشة عالية الدقة مناسبة للعمل والألعاب."
    },

    {
        id: 3,
        name: "Samsung Galaxy A35",
        price: 350,
        category: "الهواتف",
        image: "images/h1.jpg",
        description:
            "هاتف ذكي بتصميم أنيق وأداء جيد للاستخدام اليومي."
    },

    {
        id: 4,
        name: "iPhone 13",
        price: 599,
        category: "الهواتف",
        image: "images/1-27.jpg",
        description:
            "هاتف iPhone بأداء قوي وكاميرا عالية الجودة."
    },

    {
        id: 5,
        name: "Xiaomi Redmi Note 13",
        price: 250,
        category: "الهواتف",
        image: "images/h9.jpg",
        description:
            "هاتف عملي بشاشة ممتازة وبطارية تدوم طويلًا."
    },

    {
        id: 6,
        name: "MacBook Air M2",
        price: 999,
        category: "اللابتوبات",
        image: "images/h3.jpg",
        description:
            "لابتوب خفيف وسريع مناسب للدراسة والعمل."
    },

    {
        id: 7,
        name: "Dell XPS 15",
        price: 1299,
        category: "اللابتوبات",
        image: "images/h6.webp",
        description:
            "لابتوب قوي بشاشة عالية الجودة وأداء ممتاز."
    },

    {
        id: 8,
        name: "HP Pavilion",
        price: 750,
        category: "اللابتوبات",
        image: "images/h7.png",
        description:
            "لابتوب عملي مناسب للعمل والدراسة والاستخدام اليومي."
    },

    {
        id: 9,
        name: "Lenovo IdeaPad",
        price: 650,
        category: "اللابتوبات",
        image: "images/h13.webp",
        description:
            "لابتوب اقتصادي وسريع للاستخدام اليومي."
    },

    {
        id: 10,
        name: "ASUS ROG Gaming",
        price: 1500,
        category: "اللابتوبات",
        image: "images/h15.png",
        description:
            "لابتوب ألعاب قوي بمعالج وأداء عالي."
    },

    {
        id: 11,
        name: "AirPods Pro",
        price: 249,
        category: "السماعات",
        image: "images/h4.jpg",
        description:
            "سماعات لاسلكية صغيرة بجودة صوت ممتازة وعزل للضوضاء."
    },

    {
        id: 12,
        name: "Sony WH-1000XM5",
        price: 399,
        category: "السماعات",
        image: "images/h8.png",
        description:
            "سماعات لاسلكية متقدمة مع عزل قوي للضوضاء."
    },

    {
        id: 13,
        name: "JBL Tune 760NC",
        price: 129,
        category: "السماعات",
        image: "images/h5.jpg",
        description:
            "سماعات مريحة بصوت واضح وبطارية تدوم طويلًا."
    },

    {
        id: 14,
        name: "Samsung Galaxy Buds",
        price: 149,
        category: "السماعات",
        image: "images/h10.jpg",
        description:
            "سماعات لاسلكية صغيرة مناسبة للموسيقى والمكالمات."
    },

    {
        id: 15,
        name: "Canon EOS R6",
        price: 1800,
        category: "الكاميرات",
        image: "images/h16.jpg",
        description:
            "كاميرا احترافية بجودة تصوير عالية مناسبة للتصوير الفوتوغرافي والفيديو."
    },

    {
        id: 16,
        name: "Sony Alpha A7",
        price: 2000,
        category: "الكاميرات",
        image: "images/h17.jpg",
        description:
            "كاميرا احترافية بأداء قوي وجودة صور ممتازة."
    },

    {
        id: 17,
        name: "Nikon D7500",
        price: 1100,
        category: "الكاميرات",
        image: "images/h18.jpg",
        description:
            "كاميرا رقمية مناسبة للتصوير الاحترافي والهواة."
    },

    {
        id: 18,
        name: "Apple Watch Series 9",
        price: 429,
        category: "الساعات الذكية",
        image: "images/s5.jpg",
        description:
            "ساعة ذكية أنيقة بشاشة رائعة ومراقبة متطورة للصحة."
    },

    {
        id: 19,
        name: "Samsung Galaxy Watch 6",
        price: 329,
        category: "الساعات الذكية",
        image: "images/s4.webp",
        description:
            "ساعة ذكية عملية بتصميم أنيق ومزايا صحية متعددة."
    },

    {
        id: 20,
        name: "Garmin Fenix 7",
        price: 699,
        category: "الساعات الذكية",
        image: "images/s3.jpg",
        description:
            "ساعة رياضية متطورة مخصصة لمحبي اللياقة والتحمل."
    },

    {
        id: 21,
        name: "Huawei Watch GT 4",
        price: 249,
        category: "الساعات الذكية",
        image: "images/s2.jpg",
        description:
            "ساعة ذكية ببطارية تدوم طويلًا وتصميم فاخر."
    },

    {
        id: 22,
        name: "Fitbit Sense 2",
        price: 199,
        category: "الساعات الذكية",
        image: "images/s1.jpg",
        description:
            "ساعة تتبع صحي متقدمة لمراقبة الحالة الصحية يوميًا."
    }

];


// ======================================
// DOM Elements
// ======================================

const productDetails =
    document.querySelector("#productDetails");

const cartCount =
    document.querySelector("#cartCount");

const darkModeBtn =
    document.querySelector("#darkModeBtn");

const menuBtn =
    document.querySelector("#menuBtn");

const navLinks =
    document.querySelector(".nav-links");


// ======================================
// Get Selected Product
// ======================================

const selectedProductId =
    localStorage.getItem("selectedProduct");

const product =
    products.find(function(item) {

        return (
            String(item.id) === selectedProductId
        );

    });




// ======================================
// Display Product
// ======================================

function displayProduct() {

    if (!product) {

        productDetails.innerHTML = `

            <div class="not-found">

                <h2>
                    المنتج غير موجود
                </h2>

                <p>
                    لم يتم اختيار منتج صحيح.
                </p>

            </div>

        `;

        return;
    }


    productDetails.innerHTML = `

        <div class="details-image">

            <img
                src="${product.image}"
                alt="${product.name}"
            >

        </div>


        <div class="details-info">

            <span class="details-category">
                ${product.category}
            </span>

            <h2>
                ${product.name}
            </h2>

            <p class="details-description">
                ${product.description}
            </p>

            <p class="details-price">
                $${product.price}
            </p>


            <div class="quantity-box">

                <button id="minusBtn">
                    −
                </button>

                <span id="quantity">
                    1
                </span>

                <button id="plusBtn">
                    +
                </button>

            </div>


            <button
                id="addCartBtn"
                class="add-cart-btn"
            >
                🛒 إضافة إلى السلة
            </button>

        </div>

    `;


    setupQuantity();

    setupAddToCart();

}


displayProduct();


// ======================================
// Quantity
// ======================================

function setupQuantity() {

    const minusBtn =
        document.querySelector("#minusBtn");

    const plusBtn =
        document.querySelector("#plusBtn");

    const quantityElement =
        document.querySelector("#quantity");


    let quantity = 1;


    plusBtn.addEventListener("click", function() {

        quantity++;

        quantityElement.textContent =
            quantity;

    });


    minusBtn.addEventListener("click", function() {

        if (quantity > 1) {

            quantity--;

            quantityElement.textContent =
                quantity;
        }

    });

}


// ======================================
// Add Product To Cart
// ======================================

function setupAddToCart() {

    const addCartBtn =
        document.querySelector("#addCartBtn");

    const quantityElement =
        document.querySelector("#quantity");


    addCartBtn.addEventListener(
        "click",
        function() {

            const quantity =
                Number(
                    quantityElement.textContent
                );


            let cart =
                JSON.parse(
                    localStorage.getItem("cart")
                ) || [];


            const existingProduct =
                cart.find(function(item) {

                    return item.id === product.id;

                });


            if (existingProduct) {

                existingProduct.quantity +=
                    quantity;

            } else {

                cart.push({

                    id: product.id,

                    name: product.name,

                    price: product.price,

                    image: product.image,

                    quantity: quantity

                });

            }


            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );


            updateCartCount();


            alert(
                "تمت إضافة المنتج إلى السلة بنجاح"
            );

        }
    );

}


// ======================================
// Cart Count
// ======================================

function updateCartCount() {

    const cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];


    let total = 0;


    cart.forEach(function(item) {

        total += item.quantity;

    });


    cartCount.textContent = total;

}


updateCartCount();


// ======================================
// Dark Mode
// ======================================

darkModeBtn.addEventListener(
    "click",
    function() {

        document.body.classList.toggle("dark");


        if (
            document.body.classList.contains("dark")
        ) {

            darkModeBtn.textContent = "☀️";

            localStorage.setItem(
                "darkMode",
                "enabled"
            );

        } else {

            darkModeBtn.textContent = "🌙";

            localStorage.setItem(
                "darkMode",
                "disabled"
            );

        }

    }
);


// Load Dark Mode

if (
    localStorage.getItem("darkMode") === "enabled"
) {

    document.body.classList.add("dark");

    darkModeBtn.textContent = "☀️";

}


// ======================================
// Mobile Menu
// ======================================

menuBtn.addEventListener(
    "click",
    function() {

        navLinks.classList.toggle("active");

    }
);

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


// البحث

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


// البحث بالضغط على Enter

mySearchInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        mySearchButton.click();

    }

});


// إغلاق بـ Escape

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        mySearchOverlay.classList.remove("show");

    }

});