const subScript = require("./sub-module");

function outputSomething(line) {
  return line;
}

outputSomething(subScript);
outputSomething(__filename);
outputSomething(__dirname);

module.exports = outputSomething;

return "test";
