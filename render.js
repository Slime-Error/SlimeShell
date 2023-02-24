// Required Modules For App Functionality
const ipcRenderer = require("electron").ipcRenderer;
// Set the CSS vars to settings from shellConfig.js for Visuals // --> Follow Examples Below for fetching from configs to edit your interface from the shellConfig.js
const config = require("./config/shellconfig.js"); // Fetch config and set it to "config" const.
const appBackground = config.appBackground; // Grabs the configs "appBackground" Exported Var
const cssBackground = document.getElementById('background'); // Grabs the HTML ID named 'background' and sets it to "cssBackground" const
cssBackground.style.backgroundImage = `url('${appBackground}')`; // Using the Grabbed ID we can set CSS styles of that ID Element as because the HTML has a direct link to the style.css file which we can edit
const shellColor = config.shellColor; // I think you get the point so the rest of these config sets below will not have comments
const cssShell = document.getElementById('console');
cssShell.style.backgroundColor = `${shellColor}`;

// Fetch Your Script here and run functions of that script inside of User Commands
const exampleWrite = require("./scripts/example_write.js");
const exampleClear = require("./scripts/example_clear.js");
const fs = require('./scripts/dataLog_fs.js')

/////////////////////////
// User Commands Below //
/////////////////////////

const welcome = () => {
	console.log("Sending Welcome Message!");
	fs.log("Shell Message: Welcome to SlimeShell ALPHA-0.2!");
	exampleWrite.writeOutput("Welcome to SlimeShell ALPHA-0.2!");
	cssShell.scrollTop = cssShell.scrollHeight;
};

const example = () => {
	console.log("Sending Example Script Message!");
	exampleWrite.writeOutput("I am the example script writting output here.");
};

const clearShell = () => {
	console.log("Clearing the Shell Console!");
	exampleClear.clearShell();
};