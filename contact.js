
// =========================
// Dark Mode
// =========================

const darkModeBtn =
    document.getElementById("darkModeBtn");

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

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

    });

    if (
        localStorage.getItem("darkMode") === "enabled"
    ) {

        document.body.classList.add("dark");

        darkModeBtn.textContent = "☀️";

    }

}

// =========================
// Cart Count
// =========================

const cartCount =
    document.getElementById("cartCount");


const cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];


if (cartCount) {

    cartCount.textContent = cart.length;

}

// =========================
// Contact Form
// =========================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm && formMessage) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("name")
                    .value
                    .trim();


            const email =
                document
                    .getElementById("email")
                    .value
                    .trim();


            const subject =
                document
                    .getElementById("subject")
                    .value
                    .trim();


            const message =
                document
                    .getElementById("message")
                    .value
                    .trim();


            // التحقق من البيانات

            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                formMessage.textContent =
                    "⚠️ يرجى تعبئة جميع الحقول.";

                formMessage.style.color =
                    "#ef4444";

                return;

            }


            // التحقق من البريد

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                formMessage.textContent =
                    "⚠️ أدخل بريدًا إلكترونيًا صحيحًا.";

                formMessage.style.color =
                    "#ef4444";

                return;

            }


            // نجاح الإرسال

            formMessage.textContent =
                "✓ تم إرسال رسالتك بنجاح.";

            formMessage.style.color =
                "#16a34a";


            // حفظ الرسالة

            const messages =
                JSON.parse(
                    localStorage.getItem("contactMessages")
                ) || [];


            messages.push({

                name: name,

                email: email,

                subject: subject,

                message: message,

                date: new Date().toLocaleString()

            });


            localStorage.setItem(
                "contactMessages",
                JSON.stringify(messages)
            );


            // تفريغ النموذج

            contactForm.reset();

        }
    );

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


// ==============================
// فتح نافذة البحث
// ==============================

if (
    myOpenSearch &&
    mySearchOverlay &&
    mySearchInput
) {

    myOpenSearch.addEventListener(
        "click",
        function () {

            mySearchOverlay.classList.add("show");

            mySearchInput.focus();

        }
    );

}


// ==============================
// إغلاق النافذة
// ==============================

if (
    myCloseSearch &&
    mySearchOverlay
) {

    myCloseSearch.addEventListener(
        "click",
        function () {

            mySearchOverlay.classList.remove("show");

        }
    );

}


// ==============================
// إغلاق عند الضغط على الخلفية
// ==============================

if (mySearchOverlay) {

    mySearchOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target === mySearchOverlay
            ) {

                mySearchOverlay.classList.remove("show");

            }

        }
    );

}


// ==============================
// البحث
// ==============================

if (
    mySearchButton &&
    mySearchInput
) {

    mySearchButton.addEventListener(
        "click",
        function () {

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

        }
    );

}


// ==============================
// البحث بالضغط على Enter
// ==============================

if (mySearchInput && mySearchButton) {

    mySearchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                mySearchButton.click();

            }

        }
    );

}


// ==============================
// إغلاق بـ Escape
// ==============================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            mySearchOverlay
        ) {

            mySearchOverlay.classList.remove("show");

        }

    }
);

