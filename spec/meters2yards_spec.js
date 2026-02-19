import { meters2yards } from '../meters2yards.js'

describe("converts meters to yards", function(){
    it("coverts 1 meter", function(){
        expect(meters2yards(1)).toBeCloseTo(1.09361);
    });
    it("coverts 10 meter", function(){
        expect(meters2yards(10)).toBeCloseTo(10.9361);
    });
    it("coverts 0 meter", function(){
        expect(meters2yards(0)).toBeCloseTo(0);
    });
});