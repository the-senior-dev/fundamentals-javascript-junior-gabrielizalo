/**
 * Write a function that makes a deep comparison between two objects.
 * Deep Comparison: two values are only considered equal if they're the same value or are objects with the same
 * properties whose values are also equal when compared with a recursive call to deepEqual.
 * @param {*} obj1
 * @param {*} obj2
 */
function compareObjects(obj1, obj2) {
    // SOLUCION DEL PROFE
    // if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    //     return true;
    // }
    // return false;

    // MI SOLUCION:
    let areEqual = true
    const keysObj1 = Object.keys(obj1).sort();
    const keysObj2 = Object.keys(obj2).sort();

    // First, compare keys length
    if (keysObj1.length !== keysObj2.length) {
        return false;
    }

    // Second, compare keys names
    let i = 0;
    while (areEqual && i < keysObj1.length) {
        if (keysObj1[i] !== keysObj2[i]) {
            areEqual = false;
        }
        i++;
    }

    // Third, compare values
    i = 0;
    while (areEqual && i < keysObj1.length) {
        if (typeof obj1[keysObj1[i]] === 'object' || typeof obj2[keysObj2[i]] === 'object') {
            areEqual = compareObjects(obj1[keysObj1[i]], obj2[keysObj2[i]]);
        } else {
            if (obj1[keysObj1[i]] !== obj2[keysObj2[i]]) {
                areEqual = false;
            }
        }
        i++;
    }

    return areEqual;
}

module.exports = compareObjects;
  