#!/usr/bin/env node

const Vuedoc = require("@vuedoc/parser");
const outputMd = require("../lib/outputMd");



// 使用示例
const args = process.argv.slice(2);
const parsedArgs = parseArguments(args);

const { input, i, output, o } = parsedArgs
const options = {
  component: '',
  inputPath: input || i,
  outputPath: output || o
}
console.log('options.outputPath', options.outputPath);
if (!options.inputPath) {
  console.error("Please provide a valid file path");
} else {
  Vuedoc
    .parse({ filename: options.inputPath })
    .then((component) => {
      options.component = component
      outputMd(options);
    })
    .catch((err) => console.error(err));
}


function parseArguments (args) {
  const parsedArgs = {};

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const nextArg = args[i + 1];

      if (nextArg && !nextArg.startsWith('--')) {
        parsedArgs[key] = nextArg;
        i++;
      } else {
        parsedArgs[key] = true;
      }
    }
  }

  return parsedArgs;
}
