#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const Vuedoc = require("@vuedoc/parser");

// 从命令行参数中获取文件路径
const filePath = process.argv[2];

if (!filePath) {
  console.error("Please provide a valid file path");
} else {
  const options = {
    filename: filePath,
  };

  Vuedoc.parse(options)
    .then((component) => {
      const markdownFilePath =
        path.join(
          path.dirname(filePath),
          path.basename(filePath, path.extname(filePath))
        ) + ".json";
      fs.writeFileSync(markdownFilePath, JSON.stringify(component), "utf-8");
    })
    .catch((err) => console.error(err));
}
