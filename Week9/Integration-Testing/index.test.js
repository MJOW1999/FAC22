// Challenge 1 - Testing application logic

test("Calculate test should handle string inputs", () => {
    equal(calculate("5", "+", "5"), 10)
    equal(calculate(15, "-", "10"), 5)
    equal(calculate("5", "*", 5), 25)
    equal(calculate("16", "/", "4"), 4)
});

// Challenge 2 - Testing UI logic

test("Form should work correctly", () => {
    
})