function toKebabCase(str) {
    return str
        .trim() // Remove leading/trailing spaces
        .replace(/[_\s]+/g, ' ') // Replace underscores and multiple spaces with single space
        .replace(/[^a-zA-Z0-9 ]/g, '') // Remove non-alphanumeric characters except spaces
        .toLowerCase() // Convert to lowercase
        .split(' ') // Split into words
        .filter(Boolean) // Remove empty strings
        .join('-'); // Join with hyphens
}

// Example usage:
// console.log(toKebabCase('  Hello__World!  This_is a test__string  ')); // "hello-world-this-is-a-test-string"