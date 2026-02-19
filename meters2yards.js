// input: distance in meters
// output: distance in yards

export function meters2yards(meters) {
    return meters * 1.09361;
}
if (import.meta.main) {
    console.log(`10 meters is ${meters2yards(10)} yards`)
}