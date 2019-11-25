import subModule from "./sub-module.mjs";

function outputSomething(line) {
  return line;
}

outputSomething(subModule);
outputSomething(import.meta.url);

export default outputSomething;
