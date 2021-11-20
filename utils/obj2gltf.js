/*
 * @Author: your name
 * @Date: 2021-11-02 10:07:06
 * @LastEditTime: 2021-11-08 12:41:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /geoinfocentere:/PROGRAM/转换工具/node_obj2gltf/code/routes/index.js
 */

// 读取文件夹进行obj转gltf

const obj2gltf = require('obj2gltf');
const gltfPipeline = require("gltf-pipeline");
const processGltf = gltfPipeline.processGltf;
const fsExtra = require('fs-extra')
const join = require('path').join;


// 路径不能含有特殊字符和中文字符
function objTransgltf(ipath, opath) {
    let files = fsExtra.readdirSync(ipath);
    files.forEach(item => {
        let index = item.lastIndexOf('.');
        let subffix = item.substring(index + 1, item.length);
        let fileName = item.substring(0, index);
        if (subffix === "obj") {
            let fpath = join(ipath, item);
            obj2gltf(fpath).then(gltf => {
                const data = Buffer.from(JSON.stringify(gltf));
                console.log(data);
                fsExtra.writeFileSync(opath + fileName + ".gltf", data)
            })
        }

    })
}
// 路径不能含有特殊字符以及中文字符
async function dracogltf(ipath, opath) {
    let files = fsExtra.readdirSync(ipath);
    for (let i = 0; i < files.length; i++) {
        let index = files[i].lastIndexOf('.');
        let fileName = files[i].substring(0, index);
        let fpath = join(ipath, files[i]);
        const oriGltf = fsExtra.readJsonSync(fpath);
        const options = {
            dracoOptions: {
                compressionLevel: 10,
            }
        };
        try {
            const results = await processGltf(oriGltf, options);
            const dracGltf = Buffer.from(JSON.stringify(results.gltf))
            fsExtra.writeFileSync(opath + fileName + ".gltf", dracGltf)
        } catch (error) {
            console.log("错误的文件名：" + fpath);
        }

    }
}
// 读取对应文件夹
function getFileName(path) {
    let files = fsExtra.readdirSync(path);
    let fileNameList = new Set(); //  确保唯一值
    files.forEach(item => {
        let index = item.lastIndexOf('.');
        let fileName = item.substring(0, index);
        fileNameList.add(fileName)
    })
    return fileNameList
}
module.exports = { objTransgltf, dracogltf,getFileName }

