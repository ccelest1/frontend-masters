/**
 * Create promise that resolves after time period
 * @param n number of ms before promise is resolved
 */

function timeout(n: number) {
    return new Promise((res) => setTimeout(res, n))
}
/**
 * add two #s
 * @param a first number
 * @param b second
 */

export async function addNumbers(a: number, b: number) {
    await timeout(500)
    return a + b
}

// == program runs == //
; (async () => {
    console.log(await addNumbers(3, 4))
})
