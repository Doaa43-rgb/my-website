
// =========================
// Dark Mode
// =========================

const darkModeBtn = document.getElementById("darkModeBtn");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");

    if (darkModeBtn) {
        darkModeBtn.textContent = "☀️";
    }
}

if (darkModeBtn) {
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
}


// =========================
// Cart Count
// =========================

function updateCartCount() {

    const cartCount = document.getElementById("cartCount");

    if (!cartCount) return;

    const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    const count = cart.reduce(
        (total, product) =>
            total + (product.quantity || 1),
        0
    );

    cartCount.textContent = count;
}

updateCartCount();


// =========================
// Show / Hide Password
// =========================

const passwordInput =
    document.getElementById("password");

const togglePassword =
    document.getElementById("togglePassword");

if (passwordInput && togglePassword) {

    togglePassword.addEventListener("click", function () {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";
            togglePassword.textContent = "🙈";
            togglePassword.title = "إخفاء كلمة المرور";

        } else {

            passwordInput.type = "password";
            togglePassword.textContent = "👁️";
            togglePassword.title = "إظهار كلمة المرور";
        }
    });
}


// =========================
// Password Validation
// =========================

const passwordHint =
    document.getElementById("passwordHint");

if (passwordInput && passwordHint) {

    passwordInput.addEventListener("input", function () {

        const password = passwordInput.value;

        if (password.length === 0) {

            passwordHint.textContent =
                "🔒 8 أحرف على الأقل، حرف كبير، رقم ورمز خاص";

            passwordHint.className =
                "password-hint";

            return;
        }

        const valid =
            password.length >= 8 &&
            /[A-Z]/.test(password) &&
            /[a-z]/.test(password) &&
            /[0-9]/.test(password) &&
            /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (valid) {

            passwordHint.textContent =
                "✓ كلمة المرور قوية";

            passwordHint.className =
                "password-hint success";

        } else {

            passwordHint.textContent =
                "⚠️ يجب أن تحتوي على 8 أحرف، حرف كبير، رقم ورمز خاص";

            passwordHint.className =
                "password-hint error";
        }
    });
}


// =========================
// Login
// =========================

const loginForm =
    document.getElementById("loginForm");

const loginMessage =
    document.getElementById("loginMessage");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value;

        if (!email) {

            showLoginMessage(
                "يرجى إدخال البريد الإلكتروني.",
                "#ef4444"
            );

            return;
        }

        if (!isStrongPassword(password)) {

            showLoginMessage(
                "كلمة المرور لا تستوفي الشروط.",
                "#ef4444"
            );

            return;
        }


        // جلب الحساب المحفوظ

        const account =
            JSON.parse(
                localStorage.getItem("userAccount")
            );


        // إذا كان هناك حساب محفوظ

        if (account) {

            if (
                email !== account.email ||
                password !== account.password
            ) {

                showLoginMessage(
                    "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
                    "#ef4444"
                );

                return;
            }
        }


        // نجاح تسجيل الدخول

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        localStorage.setItem(
            "loggedEmail",
            email
        );

        showLoginMessage(
            "تم تسجيل الدخول بنجاح ✓",
            "#16a34a"
        );
    });
}


function showLoginMessage(message, color) {

    if (!loginMessage) return;

    loginMessage.textContent = message;
    loginMessage.style.color = color;
}


function isStrongPassword(password) {

    return (
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[!@#$%^&*(),.?":{}|<>]/.test(password)
    );
}


// =========================
// Register Modal
// =========================

const registerModal =
    document.getElementById("registerModal");

const registerLink =
    document.getElementById("registerLink");

const closeRegister =
    document.getElementById("closeRegister");


if (registerLink && registerModal) {

    registerLink.addEventListener("click", function (event) {

        event.preventDefault();

        registerModal.classList.add("show");
    });
}


if (closeRegister) {

    closeRegister.addEventListener("click", function () {

        registerModal.classList.remove("show");
    });
}


// =========================
// Forgot Password Modal
// =========================

const forgotModal =
    document.getElementById("forgotModal");

const forgotPassword =
    document.getElementById("forgotPassword");

const closeForgot =
    document.getElementById("closeForgot");


if (forgotPassword && forgotModal) {

    forgotPassword.addEventListener("click", function (event) {

        event.preventDefault();

        forgotModal.classList.add("show");
    });
}


if (closeForgot) {

    closeForgot.addEventListener("click", function () {

        forgotModal.classList.remove("show");
    });
}


// =========================
// إغلاق النوافذ عند الضغط خارجها
// =========================

window.addEventListener("click", function (event) {

    if (event.target === registerModal) {

        registerModal.classList.remove("show");
    }

    if (event.target === forgotModal) {

        forgotModal.classList.remove("show");
    }
});


// =========================
// Register Account
// =========================

const registerForm =
    document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("registerName").value.trim();

        const email =
            document.getElementById("registerEmail").value.trim();

        const password =
            document.getElementById("registerPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const registerMessage =
            document.getElementById("registerMessage");


        if (!isStrongPassword(password)) {

            registerMessage.textContent =
                "⚠️ كلمة المرور لا تستوفي الشروط.";

            registerMessage.style.color =
                "#ef4444";

            return;
        }


        if (password !== confirmPassword) {

            registerMessage.textContent =
                "⚠️ كلمتا المرور غير متطابقتين.";

            registerMessage.style.color =
                "#ef4444";

            return;
        }


        // إنشاء الحساب

        const account = {

            name: name,

            email: email,

            password: password
        };


        localStorage.setItem(
            "userAccount",
            JSON.stringify(account)
        );


        registerMessage.textContent =
            "✓ تم إنشاء الحساب بنجاح!";

        registerMessage.style.color =
            "#16a34a";


        // تعبئة بيانات الدخول تلقائيًا

        document.getElementById("email").value =
            email;

        document.getElementById("password").value =
            password;


        setTimeout(function () {

            registerModal.classList.remove("show");

            registerForm.reset();
jj
            registerMessage.textContent = "";

        }, 1500);
    });
}


// =========================
// إظهار / إخفاء كلمة مرور التسجيل
// =========================

const registerPassword =
    document.getElementById("registerPassword");

const toggleRegisterPassword =
    document.getElementById("toggleRegisterPassword");

if (
    registerPassword &&
    toggleRegisterPassword
) {

    toggleRegisterPassword.addEventListener(
        "click",
        function () {

            if (registerPassword.type === "password") {

                registerPassword.type = "text";

                toggleRegisterPassword.textContent =
                    "🙈";

            } else {

                registerPassword.type = "password";

                toggleRegisterPassword.textContent =
                    "👁️";
            }
        }
    );
}


// =========================
// Forgot Password
// =========================

const forgotForm =
    document.getElementById("forgotForm");

if (forgotForm) {

    forgotForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email =
            document.getElementById("forgotEmail")
                .value
                .trim();

        const forgotResult =
            document.getElementById("forgotResult");

        const account =
            JSON.parse(
                localStorage.getItem("userAccount")
            );


        if (!account) {

            forgotResult.textContent =
                "⚠️ لا يوجد حساب مسجل حتى الآن.";

            forgotResult.style.color =
                "#ef4444";

            return;
        }


        if (email !== account.email) {

            forgotResult.textContent =
                "⚠️ لم نجد حسابًا بهذا البريد الإلكتروني.";

            forgotResult.style.color =
                "#ef4444";

            return;
        }


        forgotResult.textContent =
            "✓ تم العثور على حسابك. يمكنك إعادة تعيين كلمة المرور.";

        forgotResult.style.color =
            "#16a34a";


        setTimeout(function () {

            forgotModal.classList.remove("show");

            forgotForm.reset();

            forgotResult.textContent = "";

        }, 2000);
    });
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

