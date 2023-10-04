const express = require('express');
const router = express.Router();
const {
    createUser,
    readUser,
    updateUser,
    deleteUser,
} = require('../Controllers/userController');

const {
    createAdmin,
    readAdmin,
    updateAdmin,
    deleteAdmin,
} = require('../Controllers/adminController');

const {
    createSubAdmin,
    readSubAdmin,
    updateSubAdmin,
    deleteSubAdmin,
} = require('../Controllers/subAdminController');

const {
    createPost,
    readPost,
    updatePost,
    deletePost,
} = require('../Controllers/userController');

// User Routes
router.get('/user/create', createUser);
router.get('/user/read', readUser);
router.get('/user/update', updateUser);
router.get('/user/delete', deleteUser);

// Admin Routes
router.get('/admin/create', createAdmin);
router.get('/admin/read', readAdmin);
router.get('/admin/update', updateAdmin);
router.get('/admin/delete', deleteAdmin);


// Sub Admin routes
router.get('/subAdmin/create', createSubAdmin);
router.get('/subAdmin/read', readSubAdmin);
router.get('/subAdmin/update', updateSubAdmin);
router.get('/subAdmin/delete', deleteSubAdmin);


// Post Routes
router.get('/post/create', createPost);
router.get('/post/read', readPost);
router.get('/post/update', updatePost);
router.get('/post/delete', deletePost);
// Add similar routes for other controllers

module.exports = router;
