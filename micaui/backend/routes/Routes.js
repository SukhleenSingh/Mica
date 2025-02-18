const express = require("express");
const router = express.Router();
const authController = require("../controllers/Auth");

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user by providing name, email, and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: User already exists
 *       500:
 *         description: Error registering user
 */
router.post("/register", authController.registerUser);

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: User login
 *     description: Authenticate a user and return a token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Error logging in
 */
router.post("/login", authController.loginUser);

/**
 * @swagger
 * /api/forgot-password:
 *   post:
 *     summary: Forgot password
 *     description: Request an OTP for password reset.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: OTP sent to your email
 *       400:
 *         description: User not found
 *       500:
 *         description: Error processing request
 */
router.post("/forget-password", authController.forgotPassword);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all registered users.
 *     responses:
 *       200:
 *         description: List of users
 *       500:
 *         description: Error fetching users
 */
router.get("/users", authController.getAllUsers);

module.exports = router;
