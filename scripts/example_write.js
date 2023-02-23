// Get a reference to the output <pre> element
const outputElement = document.getElementById('output');

module.exports.writeOutput = function (text) {
	outputElement.innerText += text + '\n';
};