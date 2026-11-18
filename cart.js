// ===============================
// جلب السلة
// ===============================

function getCart() {

    return JSON.parse(
        localStorage.getItem("cart")
    ) || [];

}


// ===============================
// حفظ السلة
// ===============================

function saveCart(cart) {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}


// ===============================
// الوضع الليلي
// ===============================

const darkModeBtn =
    document.querySelector("#darkModeBtn");


if (
    localStorage.getItem("darkMode") === "enabled"
) {

    document.body.classList.add("dark");

    if (darkModeBtn) {

        darkModeBtn.textContent = "☀️";

    }

}


if (darkModeBtn) {

    darkModeBtn.addEventListener(
        "click",
        function () {

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

}


// ===============================
// عرض المنتجات
// ===============================

function renderCart() {

    const cart = getCart();

    const cartItems =
        document.querySelector("#cartItems");

    const empty =
        document.querySelector("#empty");


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        empty.style.display = "block";

    } else {

        empty.style.display = "none";

    }


    cart.forEach(product => {

        cartItems.innerHTML += `

            <article class="cart-item">

                <img
                    src="${product.image}"
                    onerror="this.src='images/h1.jpg'"
                    alt="${product.name}"
                >


                <div>

                    <h3>
                        ${product.name}
                    </h3>


                    <div class="price">
                        $${product.price}
                    </div>


                    <div class="controls">

                        <button
                            onclick="changeQuantity(${product.id}, 1)"
                        >
                            +
                        </button>


                        <span>
                            ${product.quantity}
                        </span>


                        <button
                            onclick="changeQuantity(${product.id}, -1)"
                        >
                            −
                        </button>

                    </div>

                </div>


                <div class="item-total">

                    <div>
                        $${product.price * product.quantity}
                    </div>


                    <button
                        class="remove"
                        onclick="removeItem(${product.id})"
                    >
                        حذف
                    </button>

                </div>

            </article>

        `;

    });


    calculateTotal();

    updateCartCount();

}


// ===============================
// تغيير الكمية
// ===============================

function changeQuantity(id, amount) {

    const cart = getCart();

    const product =
        cart.find(
            item => item.id === id
        );


    if (!product) {
        return;
    }


    product.quantity += amount;


    if (product.quantity <= 0) {

        const index =
            cart.indexOf(product);

        cart.splice(index, 1);

    }


    saveCart(cart);

    renderCart();

}


// ===============================
// حذف منتج
// ===============================

function removeItem(id) {

    const cart = getCart();


    const newCart =
        cart.filter(
            product => product.id !== id
        );


    saveCart(newCart);

    renderCart();

}


// ===============================
// حساب المجموع
// ===============================

function calculateTotal() {

    const cart = getCart();


    const quantity =
        cart.reduce(
            (total, product) =>
                total + product.quantity,
            0
        );


    const subtotal =
        cart.reduce(
            (total, product) =>
                total +
                product.price *
                product.quantity,
            0
        );


    const shipping =
        subtotal > 0 ? 10 : 0;


    const total =
        subtotal + shipping;


    document.querySelector("#quantity")
        .textContent = quantity;


    document.querySelector("#subtotal")
        .textContent = `$${subtotal}`;


    document.querySelector("#shipping")
        .textContent = `$${shipping}`;


    document.querySelector("#total")
        .textContent = `$${total}`;

}


// ===============================
// عدد المنتجات
// ===============================

function updateCartCount() {

    const cart = getCart();


    const count =
        cart.reduce(
            (total, product) =>
                total + product.quantity,
            0
        );


    const cartCount =
        document.querySelector("#cartCount");


    if (cartCount) {

        cartCount.textContent = count;

    }

}


// ==================================================
// النافذة المنبثقة
// ==================================================

const cartModal =
    document.querySelector("#cartModal");

const closeCartModal =
    document.querySelector("#closeCartModal");

const cartModalButton =
    document.querySelector("#cartModalButton");

const cartModalTitle =
    document.querySelector("#cartModalTitle");

const cartModalMessage =
    document.querySelector("#cartModalMessage");

const cartModalIcon =
    document.querySelector("#cartModalIcon");


// ===============================
// إظهار الرسالة
// ===============================

function showCartMessage(
    title,
    message,
    type = "success"
) {

    cartModalTitle.textContent =
        title;


    cartModalMessage.textContent =
        message;


    if (type === "success") {

        cartModalIcon.textContent = "✓";

        cartModalIcon.className =
            "cart-modal-icon";

    } else {

        cartModalIcon.textContent = "!";

        cartModalIcon.className =
            "cart-modal-icon error";

    }


    cartModal.classList.add("show");

}


// ===============================
// إغلاق الرسالة
// ===============================

function closeCartMessage() {

    cartModal.classList.remove("show");

}


if (closeCartModal) {

    closeCartModal.addEventListener(
        "click",
        closeCartMessage
    );

}


if (cartModalButton) {

    cartModalButton.addEventListener(
        "click",
        closeCartMessage
    );

}


if (cartModal) {

    cartModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target === cartModal
            ) {

                closeCartMessage();

            }

        }
    );

}


// ==================================================
// إفراغ السلة
// ==================================================

const clearButton =
    document.querySelector("#clear");


if (clearButton) {

    clearButton.addEventListener(
        "click",
        function () {

            const cart = getCart();


            if (cart.length === 0) {

                showCartMessage(
                    "السلة فارغة 🛒",
                    "لا توجد منتجات حاليًا في سلة المشتريات.",
                    "error"
                );

                return;

            }


            localStorage.removeItem(
                "cart"
            );


            renderCart();


            showCartMessage(
                "تم إفراغ السلة ✓",
                "تم حذف جميع المنتجات من سلة المشتريات.",
                "success"
            );

        }
    );

}


// ==================================================
// إتمام الطلب
// ==================================================

const checkoutButton =
    document.querySelector("#checkout");


if (checkoutButton) {

    checkoutButton.addEventListener(
        "click",
        function () {

            const cart = getCart();


            if (cart.length === 0) {

                showCartMessage(
                    "السلة فارغة 🛒",
                    "أضف بعض المنتجات إلى السلة أولًا.",
                    "error"
                );

                return;

            }


            localStorage.removeItem(
                "cart"
            );


            renderCart();


            showCartMessage(
                "تم إتمام الطلب 🎉",
                "تم استلام طلبك بنجاح! شكرًا لتسوقك من TechStore.",
                "success"
            );

        }
    );

}


// ===============================
// القائمة في الجوال
// ===============================

const menuBtn =
    document.querySelector("#menuBtn");

const navLinks =
    document.querySelector(".nav-links");


if (menuBtn && navLinks) {

    menuBtn.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle(
                "active"
            );

        }
    );

}


// ===============================
// تشغيل الصفحة
// ===============================

renderCart();


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