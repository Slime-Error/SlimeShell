// Required Modules For App Functionality
const { ipcRenderer } = require("electron");
// Set the CSS vars to settings from shellConfig.js for Visuals // --> Follow Examples Below for fetching from configs to edit your interface from the shellConfig.js
const config = require("./config/shellconfig.js"); // Fetch config and set it to "config" const.
const appBackground = config.appBackground; // Grabs the configs "appBackground" Exported Var
const cssBackground = document.getElementById('background'); // Grabs the HTML ID named 'background' and sets it to "cssBackground" const
cssBackground.style.backgroundImage = `url('${appBackground}')`; // Using the Grabbed ID we can set CSS styles of that ID Element as because the HTML has a direct link to the style.css file which we can edit
const shellColor = config.shellColor; // I think you get the point so the rest of these config sets below will not have comments
const cssShell = document.getElementById('console');
const shellOutput = document.getElementById('output');
cssShell.style.backgroundColor = `${shellColor}`;

// Fetch Your Script here and run functions of that script inside of User Commands
const exampleWrite = require("./scripts/example_write.js");
const exampleClear = require("./scripts/example_clear.js");
const dataLog = require('./scripts/dataLog.js')

/////////////////////////
// User Commands Below //
/////////////////////////

const welcome = () => {
	dataLog.write("Shell Message: Welcome to SlimeShell ALPHA-0.4!");
	exampleWrite.writeOutput("Welcome to SlimeShell ALPHA-0.4!");
	cssShell.scrollTop = cssShell.scrollHeight;
};

const example = () => {
	dataLog.write("Shell Message: I am the example script writting output here.");
	exampleWrite.writeOutput("I am the example script writting output here.");
};

const clearShell = () => {
	dataLog.write("Shell console cleared.");
	exampleClear.clearShell();
};

const reloadShell = () => {
	ipcRenderer.send('reload-app');
};

const shellLogs = () => {
	dataLog.read(function(data){exampleWrite.writeOutput(data)})
	cssShell.scrollTop = cssShell.scrollHeight;
};

const notepad = () => {
	dataLog.write("Created a Slimey Notepad in the Shell for the user!");
	const textarea = document.createElement('textarea');
	shellOutput.appendChild(textarea);
};

const updates = () => {
	dataLog.write("SlimeShell has sent the update log to the console.");
	// This long message here is temporary and will be moved to a fs read txt file in future -- DEV NOTE
	exampleWrite.writeOutput("------------------------Update Log------------------------\n1)SlimeShell now has a reload function\n2)SlimeShell Visual has been updated slightly\n3)SlimeShell now has a working InApp logging\n4)The Clear Button/Command has been optimized\n5)Slimeshell has been implimented with a nice and functional Notepad Box that gets Appended to the Shell while keeping the same style, This uses a <textarea> element and can be appened to any of the console shells text below and also gets removed as you Clear Shell\n----------------------------------------------------------\nTry out the new features and I hope you like it so far! Improvements will come shortly again and the Features of SlimeShell I had planned will be done soon enough.\n There may be up to 3-5 more updates to the alpha release before this goes into a Beta with High End Features to be added like Sideloaded Apps such as your personal Webbrowser Etc.");
}