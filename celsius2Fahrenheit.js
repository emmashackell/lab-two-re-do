// input parameter ... celsius
export function celsius2Fahrenheit(celsius) {
    // processing
    let fahrenheit = 9 / 5 * celsius + 32;
    // output
    return (fahrenheit)
}

if (import.meta.main) {
    console.log(`celsius2Fahrenheit(100) returns ${celsius2Fahrenheit(100)}`);
}