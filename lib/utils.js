const fs = require("fs");
const path = require("path");

/**
 * 创建文件
 * @param {any} data 
 * @param {String} filePath 
 * @param {String} ext 
 */
function createFile (data, filePath, ext) {
  const markdownFilePath = path.join(
    path.dirname(filePath),
    getFileName(filePath)
  ) + ext;
  console.log('markdownFilePath', markdownFilePath)
  fs.writeFileSync(markdownFilePath, typeof data === 'string' ? data : JSON.stringify(data), "utf-8");
}

/**
 * 获取文件名
 * ./test/test.vue 生成文件名 test
 * ./test/test2/index.vue 生成文件名 test2
 * @param {String} filePath 
 * @returns 
 */
function getFileName (filePath) {
  const fileName = path.basename(filePath, path.extname(filePath))
  const basePath = path.dirname(filePath)
  return fileName === 'index' ? basePath.split('/').slice(-1)[0] : fileName
}



module.exports = {
  createFile,
  getFileName
}
