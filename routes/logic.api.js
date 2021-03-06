/**
 * Created by Microlv on 2015/9/16.
 */
'use strict';

var express = require('express');
var router = express.Router();
var controller = require('../controller');

//client
router.get('/test', function (req, res) {
  res.send({code: "OK"});
});

//admin
//post
router.post('/signIn', controller.signIn);
router.post('/saveArticle', controller.saveArticle);

//get
router.get('/getCategory', controller.getCategory);

router.get('/getArticleCount', controller.getArticleCount);
router.get('/getArticleList', controller.getArticleList);
router.get('/getArticleByCategoryId/:categoryId', controller.getArticleByCategoryId);
router.get('/getArticleDetailById/:id', controller.getArticleDetailById);

module.exports = router;

