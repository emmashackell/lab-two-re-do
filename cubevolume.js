// input: length of one edge in meters
// output: volume in cubic meters

export function cubevolume(edge) {
    return edge * edge * edge;
}
if (import.meta.main) {
    console.log(`volume of cube with edge 3m is ${cubevolume(3)} cubic meters`);
}