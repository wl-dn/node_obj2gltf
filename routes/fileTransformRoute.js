/*
 * @Author: your name
 * @Date: 2021-11-08 11:20:07
 * @LastEditTime: 2021-11-08 12:43:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \geoinfocentere:\PROGRAM\转换工具\node_obj2gltf\code\routes\fileTransformRoute.js
 */
var express = require('express');
var router = express.Router();

// 引入相关函数
const gltfobj = require('../utils/obj2gltf');
const ipath = "E:/PROGRAM/MDLDATA/obj/惠州数字模型/"
const opath = "E:/PROGRAM/MDLDATA/gltf/铁四院/"
const dpath = "E:/PROGRAM/MDLDATA/dracogltf/tempGltf/"

// gltfobj.objTransgltf(ipath,opath);
// gltfobj.dracogltf(opath,dpath);
// gltfobj.getFileName(ipath)

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;