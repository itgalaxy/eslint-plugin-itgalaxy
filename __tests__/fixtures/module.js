import subModule from "./sub-module";

function outputSomething(line) {
  return line;
}

outputSomething(subModule);
outputSomething(import.meta.url);

export default outputSomething;
