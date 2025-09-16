/**
 * Converts a string to camel case notation.
 *
 * This function transforms the input string into camelCase format.
 * It handles various word separators such as spaces, dashes, and underscores,
 * as well as mixed casing. The first word is converted to lowercase, and each
 * subsequent word is capitalized and concatenated without separators.
 *
 * Examples:
 *   toCamelCase("hello world")        // "helloWorld"
 *   toCamelCase("Hello_world-test")   // "helloWorldTest"
 *   toCamelCase("alreadyCamelCase")   // "alreadyCamelCase"
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The camel case formatted string. Returns an empty string if input is not a string.
 */

/**
 * Converts a string to dot.case notation.
 *
 * This function transforms the input string into dot.case format.
 * It replaces spaces, dashes, underscores, and camelCase boundaries with dots,
 * and converts the entire string to lowercase.
 *
 * Examples:
 *   toDotCase("hello world")        // "hello.world"
 *   toDotCase("Hello_world-test")   // "hello.world.test"
 *   toDotCase("alreadyDot.case")    // "already.dot.case"
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The dot.case formatted string. Returns an empty string if input is not a string.
 */
function toDotCase(str) {
    if (typeof str !== 'string') return '';
    return str
        .replace(/([a-z0-9])([A-Z])/g, '$1.$2') // camelCase boundaries
        .replace(/[\s_-]+/g, '.')               // spaces, underscores, dashes
        .replace(/\.+/g, '.')                   // multiple dots to single dot
        .replace(/^\.+|\.+$/g, '')              // trim leading/trailing dots
        .toLowerCase();
}

module.exports.toDotCase = toDotCase;
