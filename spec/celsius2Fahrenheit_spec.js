import { celsius2Fahrenheit } from "../celsius2Fahrenheit.js";

describe("testing celsius to fahrenheit", function(){
    it("tests for freezing of water", function(){
        let nFreezing = celsius2Fahrenheit(0);
        expect(nFreezing).toBe(32);
    });
    it("tests for boiling of water", function(){
        let nBoiling = celsius2Fahrenheit(100);
        expect(nBoiling).toBe(212);
    });
    it("tests for room temperature", function(){
        let nRoom = celsius2Fahrenheit(20);
        expect(nRoom).toBe(68);
    });
});
