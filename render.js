// Render Thread Communication
const ipcRenderer = require("electron").ipcRenderer;

// Fetch Your Script here and run functions of that script
const exampleWrite = require("./scripts/example_write.js");
const exampleClear = require("./scripts/example_clear.js");

// User Commands Below
const welcome = () => {
	console.log("Sending Welcome Message!");
	exampleWrite.writeOutput("Welcome to SlimeShell ALPHA-0.2!");
};

const example = () => {
	console.log("Sending Example Script Message!");
	exampleWrite.writeOutput("I am the example script writting output here.");
};

const clearShell = () => {
	console.log("Clearing the Shell Console!");
	exampleClear.clearShell();
};