import { cubevolume } from `../cubevolume.js`

describe("calculates volume of a cube", function(){
    it("calculates volume when edge is 1", function(){
        expect(cubevolume(1)).toBe(1);
    });
      it("calculates volume when edge is 3", function(){
        expect(cubevolume(3)).toBe(27);
    });
      it("calculates volume when edge is 0", function(){
        expect(cubevolume(0)).toBe(0);
    });
});