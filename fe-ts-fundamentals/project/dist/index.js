"use strict";
/**
 * Create promise that resolves after time period
 * @param n number of ms before promise is resolved
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNumbers = void 0;
function timeout(n) {
    return new Promise((res) => setTimeout(res, n));
}
/**
 * add two #s
 * @param a first number
 * @param b second
 */
async function addNumbers(a, b) {
    await timeout(500);
    return a + b;
}
exports.addNumbers = addNumbers;
// == program runs == //
;
(async () => {
    console.log(await addNumbers(3, 4));
});
