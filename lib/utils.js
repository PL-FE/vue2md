const fs = require("fs");
const path = require("path");

/**
 * 创建文件
 * @param {any} content 
 * @param {String} inputPath 带名字的文件路径
 * @param {String} outputPath 文件目录
 * @param {String} ext 
 */
function createFile ({ content, outputPath, inputPath, ext }) {
  const markdownFilePath = path.join(
    outputPath,
    getFileName(inputPath)
  ) + ext;
  console.log('markdownFilePath', markdownFilePath);
  fs.writeFileSync(markdownFilePath, typeof content === 'string' ? content : JSON.stringify(content), "utf-8");
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
