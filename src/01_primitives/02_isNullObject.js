/**
 * Returns true if the given variable is null and typeof returns 'object'.
 *
 * @param {*} variable - The variable to be checked.
 * @returns {boolean} - True if the variable is null and typeof returns 'object'.
 */
function isNullObject(variable) {
    // Initial code
    // if ( typeof variable === 'object' ) {
    //   return variable === null || variable === undefined
    // }
    // return false

    // Optimized one
    return (typeof variable === 'object' && variable === null)
}

module.exports = isNullObject;
  