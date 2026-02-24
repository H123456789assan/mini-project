// ===============================
// IMPORTS
// ===============================
require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const connectDB = require('./config/db');

// Route Files
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Middlewares
const globalMiddleware = require('./middleware/globalmiddleware');
const errorMiddleware = require('./middleware/errormiddleware');


// ===============================
// INITIAL SETUP
// ===============================
const app = express();

// Connect Database
connectDB();


// ===============================
// VIEW ENGINE
// ===============================
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// ===============================
// MIDDLEWARES
// ===============================
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Global user attach middleware
app.use(globalMiddleware);


// ===============================
// ROUTES
// ===============================

// Home Page
app.get('/', (req, res) => {
    res.render('user/home');
});

// Route Mounting
// app.use('/', authRoutes);
// app.use('/', productRoutes);
// app.use('/', orderRoutes);
// app.use('/admin', adminRoutes);
console.log("authRoutes:", authRoutes);
console.log("productRoutes:", productRoutes);
console.log("orderRoutes:", orderRoutes);
console.log("adminRoutes:", adminRoutes);


// ===============================
// ERROR HANDLER (MUST BE LAST)
// ===============================
app.use(errorMiddleware);


// ===============================
// SERVER LISTEN
// ===============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
});