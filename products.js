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
    },



];


// ======================================
// DOM
// ======================================

const productsContainer =
    document.querySelector("#productsContainer");

const searchInput =
    document.querySelector("#searchInput");

const categoryFilter =
    document.querySelector("#categoryFilter");

const priceFilter =
    document.querySelector("#priceFilter");

const productsCountText =
    document.querySelector("#productsCountText");

const noProducts =
    document.querySelector("#noProducts");

const cartCount =
    document.querySelector("#cartCount");

const darkModeBtn =
    document.querySelector("#darkModeBtn");


const navLinks =
    document.querySelector(".nav-links");

const resetFilters =
    document.querySelector("#resetFilters");


// ======================================
// Product Modal Elements
// ======================================

const productModal =
    document.querySelector("#productModal");

const closeModal =
    document.querySelector("#closeModal");

const modalImage =
    document.querySelector("#modalImage");

const modalName =
    document.querySelector("#modalName");

const modalCategory =
    document.querySelector("#modalCategory");

const modalDescription =
    document.querySelector("#modalDescription");

const modalPrice =
    document.querySelector("#modalPrice");

const modalCartBtn =
    document.querySelector("#modalCartBtn");

let selectedModalProduct = null;


// ======================================
// Success Message Elements
// ======================================

const successModal =
    document.querySelector("#successModal");

const successMessage =
    document.querySelector("#successMessage");

const successClose =
    document.querySelector("#successClose");


// ======================================
// Get Cart
// ======================================

function getCart() {

    return JSON.parse(
        localStorage.getItem("cart")
    ) || [];

}


// ======================================
// Save Cart
// ======================================

function saveCart(cart) {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}


// ======================================
// Update Cart Count
// ======================================

function updateCartCount() {

    const cart = getCart();

    const count = cart.reduce(
        function(total, item) {

            return total + Number(item.quantity);

        },
        0
    );

    if (cartCount) {

        cartCount.textContent = count;

    }

}


// ======================================
// Show Success Message
// ======================================

function showSuccessMessage(productName) {

    successMessage.textContent =
        `تمت إضافة "${productName}" إلى سلة المشتريات.`;

    successModal.classList.add("show");

}


// ======================================
// Close Success Message
// ======================================

function closeSuccessMessage() {

    successModal.classList.remove("show");

}


successClose.addEventListener(
    "click",
    closeSuccessMessage
);


successModal.addEventListener(
    "click",
    function(event) {

        if (event.target === successModal) {

            closeSuccessMessage();

        }

    }
);


// ======================================
// Add To Cart
// ======================================

function addToCart(product) {

    const cart = getCart();

    const existingProduct =
        cart.find(function(item) {

            return item.id === product.id;

        });


    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            image: product.image,

            quantity: 1

        });

    }


    saveCart(cart);

    updateCartCount();

    showSuccessMessage(product.name);

}


// ======================================
// Filter Products
// ======================================

function filterProducts() {

    const searchValue =
        searchInput.value
            .trim()
            .toLowerCase();

    const categoryValue =
        categoryFilter.value;

    const priceValue =
        priceFilter.value;


    const filteredProducts =
        products.filter(function(product) {

            const matchesSearch =
                !searchValue ||
                product.name
                    .toLowerCase()
                    .includes(searchValue) ||
                product.category
                    .includes(searchValue) ||
                product.description
                    .toLowerCase()
                    .includes(searchValue);


            const matchesCategory =
                categoryValue === "all" ||
                product.category === categoryValue;


            let matchesPrice = true;


            if (priceValue === "low") {

                matchesPrice =
                    product.price < 100;

            } else if (priceValue === "medium") {

                matchesPrice =
                    product.price >= 100 &&
                    product.price <= 500;

            } else if (priceValue === "high") {

                matchesPrice =
                    product.price > 500;

            }


            return (
                matchesSearch &&
                matchesCategory &&
                matchesPrice 
            );

        });


    displayProducts(filteredProducts);

}


// ======================================
// Display Products
// ======================================

function displayProducts(list) {

    // امسح محتوى حاوية المنتجات بالكامل.
    productsContainer.innerHTML = "";


    productsCountText.textContent =
        `عدد المنتجات: ${list.length}`;


    if (list.length === 0) {

        noProducts.style.display = "block";

        return;

    }


    noProducts.style.display = "none";


    list.forEach(function(product) {
// أنشئ لي عنصر HTML جديد من نوع article
        const card =
            document.createElement("article");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    onerror="this.src='images/h1.jpg'"
                >

                <span class="product-category">
                    ${product.category}
                </span>

            </div>


            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>

                <p class="product-description">
                    ${product.description}
                </p>

                <div class="price">
                    $${product.price}
                </div>


                <div class="product-buttons">

                    <button
                        class="product-btn details-btn"
                        data-id="${product.id}"
                        type="button"
                    >
                        التفاصيل
                    </button>

                    <button
                        class="product-btn cart-btn"
                        data-id="${product.id}"
                        type="button"
                    >
                        🛒 إضافة
                    </button>

                </div>

            </div>

        `;

// يقوم بإضافة بطاقة المنتج إلى الصفحة
        productsContainer.appendChild(card);

    });


    // ==================================
    // Cart Buttons
    // ==================================

    document
        .querySelectorAll(".cart-btn")
        .forEach(function(button) {

            button.addEventListener(
                "click",
                function(event) {

                    event.stopPropagation();

                    const id =
                        Number(button.dataset.id);

                    const product =
                        products.find(
                            item => item.id === id
                        );

                    if (product) {

                        addToCart(product);

                    }

                }
            );


            button.addEventListener(
                "mouseover",
                function() {

                    button.style.opacity = "0.8";

                }
            );


            button.addEventListener(
                "mouseout",
                function() {

                    button.style.opacity = "1";

                }
            );

        });


    // ==================================
    // Details Buttons
    // ==================================

    document
        .querySelectorAll(".details-btn")
        .forEach(function(button) {

            button.addEventListener(
                "click",
                function(event) {

                    event.stopPropagation();

                    const id =
                        Number(button.dataset.id);

                    openProductModal(id);

                }
            );

        });

}


// ======================================
// Open Product Modal
// ======================================

function openProductModal(id) {

    const product =
        products.find(
            item => item.id === id
        );


    if (!product) {

        return;

    }


    selectedModalProduct = product;


    modalImage.src =
        product.image;

    modalImage.alt =
        product.name;

    modalName.textContent =
        product.name;

    modalCategory.textContent =
        product.category;

    modalDescription.textContent =
        product.description;

    modalPrice.textContent =
        `$${product.price}`;


    productModal.classList.add("show");

}


// ======================================
// Close Product Modal
// ======================================

function closeProductModal() {

    productModal.classList.remove("show");

    selectedModalProduct = null;

}


closeModal.addEventListener(
    "click",
    closeProductModal
);


// ======================================
// Close Modal Outside
// ======================================

productModal.addEventListener(
    "click",
    function(event) {

        if (event.target === productModal) {

            closeProductModal();

        }

    }
);


// ======================================
// Keyboard
// ======================================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeProductModal();

            closeSuccessMessage();

        }

    }
);


// ======================================
// Add From Modal
// ======================================

modalCartBtn.addEventListener(
    "click",
    function() {

        if (selectedModalProduct) {

            addToCart(
                selectedModalProduct
            );

        }

    }
);


// ======================================
// Go To Details Page
// ======================================

const modalDetailsLink =
    document.querySelector("#modalDetailsLink");


modalDetailsLink.addEventListener(
    "click",
    function(event) {

        event.preventDefault();

        if (!selectedModalProduct) {

            return;
        }

        // حفظ المنتج المختار
        localStorage.setItem(
            "selectedProduct",
            String(selectedModalProduct.id)
        );

        // الانتقال إلى صفحة التفاصيل
        window.location.href =
            "product-details.html";
    }
);


// ======================================
// Search Event
// ======================================

searchInput.addEventListener(
    "input",
    
    filterProducts
);


// ======================================
// Category Event
// ======================================

categoryFilter.addEventListener(
    "change",
    filterProducts
);


// ======================================
// Price Event
// ======================================

priceFilter.addEventListener(
    "change",
    filterProducts
);


// ======================================
// Reset Filters
// ======================================

resetFilters.addEventListener(
    "click",
    function() {

        searchInput.value = "";

        categoryFilter.value = "all";

        priceFilter.value = "all";

        filterProducts();

    }
);


// ======================================
// Dark Mode
// ======================================

function loadDarkMode() {

    if (
        localStorage.getItem("darkMode")
        === "enabled"
    ) {

        document.body.classList.add("dark");

        darkModeBtn.textContent = "☀️";

    }

}


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




// ======================================
// Back To Top
// ======================================

const backToTop =
    document.querySelector("#backToTop");


window.addEventListener(
    "scroll",
    function() {

        if (window.scrollY > 300) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }
);


backToTop.addEventListener(
    "click",
    function() {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


// ======================================
// تشغيل الصفحة
// ======================================

loadDarkMode();

updateCartCount();

displayProducts(products);


// ======================================
// Get Category From URL
// ======================================

const urlParams =
    new URLSearchParams(
        window.location.search
    );

const selectedCategory =
    urlParams.get("category");


const categoryMap = {

    phones: "الهواتف",

    laptops: "اللابتوبات",

    headphones: "السماعات",

    cameras: "الكاميرات",

    smartwatches: "الساعات الذكية"

};


if (
    selectedCategory &&
    categoryMap[selectedCategory]
) {

    categoryFilter.value =
        categoryMap[selectedCategory];

    filterProducts();

}


// ======================================
// Get Search From URL
// ======================================

const selectedSearch =
    urlParams.get("search");


if (selectedSearch) {

    searchInput.value = selectedSearch;

    filterProducts();

}
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