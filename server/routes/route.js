const express = require('express');
const newsController = require('./../controller/NewsController');

const router = express.Router();

router.route('/news').get(newsController.getNews);

module.exports = router;