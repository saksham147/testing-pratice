const myFunctions = require("./script");

test("testing capitalization (1)", () => expect(myFunctions.capitalizeString("test")).toBe("Test"));
test("testing capitalization with string containing multiple words (2)", () => expect(myFunctions.capitalizeString("random string")).toBe("Random string"))

test("testing string reversing (1)", () => expect(myFunctions.reverseString("reverse")).toBe("esrever"));
test("testing string reversing (2)", () => expect(myFunctions.reverseString("test this string")).toBe("gnirts siht tset"));

test("testing calculator addition function", () => expect(myFunctions.Calculator.add(15, 6)).toBe(21));
test("testing calculator subtraction function", () => expect(myFunctions.Calculator.sub(1, 1)).toBe(0));
test("testing calculator multiply function", () => expect(myFunctions.Calculator.multiply(3, 23)).toBe(69));
test("testing calculator division function", () => expect(myFunctions.Calculator.divide(10, 3)).toBeCloseTo(3.33));


test("testing ceaser cipher (1)", () => expect(myFunctions.ceaserCipher("azb")).toBe("bac"));
test("testing ceaser cipher with strings containing uppercase letters (2)", () => expect(myFunctions.ceaserCipher("LxQ")).toBe("MyR"));
test("testing ceaser with strings containing non alphabets (3)", () => expect(myFunctions.ceaserCipher("Dog!")).toBe("Eph!"));
test("testing analyze array (1)", () => {
  expect(myFunctions.analyzeArray([1, 1, 1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 3,
  });
});

test("testing analyze array (2)", () => {
  expect(myFunctions.analyzeArray([2, 6, 8, 4])).toEqual({
    average: 5,
    min: 2,
    max: 8,
    length: 4,
  });
});