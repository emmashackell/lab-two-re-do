import { clothingSuggestion } from '../clothingSuggestion.js';

describe("clothingSuggestion", function () {

    it("handles freezing weather", function () {
        expect(clothingSuggestion(-5)).toBe("wear a heavy winter coat");
    });

    it("handles cold weather", function () {
        expect(clothingSuggestion(8)).toBe("wear a jacket");
    });

      it("handles cool weather", function () {
        expect(clothingSuggestion(15)).toBe("wear a sweater");
    });

      it("handles warm weather", function () {
        expect(clothingSuggestion(25)).toBe("T-shirt is fine");
    });

      it("handles hot weather", function () {
        expect(clothingSuggestion(35)).toBe("wear shorts");
    });

});