const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const worksController = require('../controllers/worksController');
const photoGalleryController = require('../controllers/galleryController');

router.get('/', homeController.showHomePage);
router.get('/about', aboutController.showAboutPage);
router.get('/works', worksController.showWorksPage);
router.get('/photo_gallery', photoGalleryController.showPhotoGalleryPage);

module.exports = router;