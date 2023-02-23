// Get a reference to the output <pre> element
const outputElement = document.getElementById('output');

module.exports.clearShell = function () {
	outputElement.innerText = '';
};