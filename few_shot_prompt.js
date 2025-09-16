/**
 * Converts a string to camel case notation.
 * Handles spaces, dashes, underscores, and mixed casing.
 * Example: "hello_world-test string" => "helloWorldTestString"
 * @param {string} str
 * @returns {string}
 */
function toCamelCase(str) {
    if (typeof str !== 'string') return '';
    return str
        .replace(/[_-\s]+(.)?/g, (_, chr) => chr ? chr.toUpperCase() : '')
        .replace(/^[A-Z]/, chr => chr.toLowerCase());
}

module.exports = toCamelCase;