#!/usr/bin/env node

const Vuedoc = require("@vuedoc/parser");
const outputMd = require("../lib/outputMd");
const { createFile } = require("../lib/utils");
// 从命令行参数中获取文件路径
const filePath = process.argv[2];

if (!filePath) {
  console.error("Please provide a valid file path");
} else {
  Vuedoc
    .parse({ filename: filePath })
    .then((component) => {
      createFile(component, filePath, '.json');
      outputMd(component, filePath);
    })
    .catch((err) => console.error(err));
}
