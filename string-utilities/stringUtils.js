// Define functions

function capitalize(str) {
	if (!str) return "";
	return str[0].toUpperCase() + str.slice(1);
}
function reverse(str) {
	if (!str) return "";
	return str.split("").reverse().join("");
}
function contains(str, substr) {
	if (!str || !substr) return false;
	return str.includes(substr);
}

// Export the functions
module.exports = { capitalize, reverse, contains };