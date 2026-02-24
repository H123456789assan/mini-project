// routes/authRoutes.js

const express = require('express');
const router = express.Router();

// Controllers
const authController = require('../controllers/authController');

// Validation Middlewares
const { validateRegister, validateLogin } = require('../validations/authValidation');


// ==========================
// GET ROUTES
// ==========================

// Show Signup Page
router.get('/signup', authController.loadSignup);

// Show Login Page
router.get('/login', authController.loadLogin);


// ==========================
// POST ROUTES
// ==========================

// Register User
router.post('/signup', validateRegister, authController.register);

// Login User
router.post('/login', validateLogin, authController.login);


// ==========================
// LOGOUT
// ==========================
router.get('/logout', authController.logout);


// ==========================
// EXPORT ROUTER
// ==========================
module.exports = router;