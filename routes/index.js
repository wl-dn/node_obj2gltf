/*
 * @Author: your name
 * @Date: 2021-11-02 10:07:06
 * @LastEditTime: 2021-11-02 11:41:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /geoinfocentere:/PROGRAM/转换工具/node_obj2gltf/code/routes/index.js
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
