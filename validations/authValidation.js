// middlewares/authValidation.js

// EMAIL REGEX
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// PASSWORD: min 6 chars, 1 letter, 1 number
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;


// =========================
// REGISTER VALIDATION
// =========================

exports.validateRegister = (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || name.trim().length < 3) {
        return res.status(400).render('user/signup', {
            error: "Name must be at least 3 characters"
        });
    }

    if (!email || !emailRegex.test(email)) {
        return res.status(400).render('user/signup', {
            error: "Enter a valid email address"
        });
    }

    if (!password || !passwordRegex.test(password)) {
        return res.status(400).render('user/signup', {
            error: "Password must be minimum 6 characters and contain at least one number"
        });
    }

    if (password !== confirmPassword) {
        return res.status(400).render('user/signup', {
            error: "Passwords do not match"
        });
    }

    next();
};



// =========================
// LOGIN VALIDATION
// =========================

exports.validateLogin = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !emailRegex.test(email)) {
        return res.status(400).render('user/login', {
            error: "Enter a valid email"
        });
    }

    if (!password || password.length < 6) {
        return res.status(400).render('user/login', {
            error: "Password must be at least 6 characters"
        });
    }

    next();
};