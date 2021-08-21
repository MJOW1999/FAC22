// Challenge 1 - Testing application logic

test("Calculate test should handle string inputs", () => {
    equal(calculate("5", "+", "5"), 10)
    equal(calculate(15, "-", "10"), 5)
    equal(calculate("5", "*", 5), 25)
    equal(calculate("16", "/", "4"), 4)
});

// Challenge 2 - Testing UI logic

test("Form should work correctly", () => {
  // get all three inputs
  const a = document.querySelector("input[name='a']");
  const sign = document.querySelector("select");
  const b = document.querySelector("input[name='b']");

  // enter test data into inputs
  a.value = "29";
  sign.value = "*";
  b.value = "4";

  // submit the form
  const submitButton = document.querySelector("button[type='submit']");
  submitButton.click();

  // verify that the page contains the expected result
  const result = document.querySelector("#result");
  equal(result.textContent, "116");

  // reset the page so it doesn't affect anything else
  result.textContent = "";
})