# Technical Spikes - Week 10

## Checking our code

What are all the different ways to make sure our code is correct?

#### Resources

- [How To Format Code with Prettier in Visual Studio Code](https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code)
- [ESLint Getting Started](https://eslint.org/docs/user-guide/getting-started)
- [Static vs Unit vs Integration vs E2E Testing for Frontend Apps](https://kentcdodds.com/blog/static-vs-unit-vs-integration-vs-e2e-tests)

### 1. What is Prettier? How might it help us write better code?

**Prettier** is a code formatter, which is an extension for VSCode.

We can use the **Format Document** command to make the code more consistent with formatted spacing, line wrapping, and quotes. We can do this using `CTRL + SHIFT + P` and typing `Format Document`.

We can **format code on save**. To do this, we can go to settings using `CTRL + ,` and search `Editor: Format On Save`

We can also establish consistent formatting across a team by creating a configuration file for your project. We can do this by creating a new file called `.prettierrc.extension` with an extension. For me I would probably use `js`. Here is an example:

```
{
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": false,
  "singleQuote": true
}
```

---

### 2. What is static analysis? How can a linter help us avoid bugs?

**Static** anaylsis is used to catch typos and type errors as you write code.

For example:

```
for (var i = 0; i < 10; i--) {
  console.log(i)
}

// Lint would catch this error in the for loop
```

---

### 3. What are the pros and cons of unit, integration and end-to-end tests?

#### Unit Testing

**Unit** testing verifies that individual, isolated parts work as expected.

##### Pros

- Unit tests typically test something small that has no dependencies or will mock those dependencies (effectively swapping what could be thousands of lines of code with only a few).
- Faster and cheaper than end-to-end and integration testing

##### Cons

- Unit tests are incapable of ensuring that when you call into a dependency that you're calling it appropriately.

#### Integration Testing

**Integration** testing verifies that several units work together in harmony (_e.g Testing the form and calculator function is working in the Integration Testing workshop_).

##### Pros

- Tests more features than Unit Testing
- Faster and cheaper than end-to-end testing as it is less time consuming and there are fewer points of failure

##### Cons

- Integration tests are incapable of ensuring that you're passing the right data to your backend and that you respond to and parse errors correctly.

#### End-to-End Testing

**End-to-End** (or **Functional** Testing) acts as a helper robot that behaves like a user to click around the app and verify that it functions correctly

##### Pros

- Would run the entire application (both frontend and backend) and your test will interact with the app just like a typical user would.
- Gives the highest confidence of all tests as it is a complete run through of the entire application

##### Cons

- Most costly and slowest running test
- Most difficult to pinpoint errors if something goes wrong

---

## Testing methodologies

How do different testing methodologies try to improve the way we write tests?

#### Resources

- [TDD changed my life](https://medium.com/javascript-scene/tdd-changed-my-life-5af0ce099f80)
- [Behavior Driven Development and Functional Testing](https://medium.com/javascript-scene/behavior-driven-development-bdd-and-functional-testing-62084ad7f1f2)
- [Test Coverage](https://www.martinfowler.com/bliki/TestCoverage.html)

### 1. What is Test-Driven Development (TDD)? Can it help us write better code?

**Test-Driven Development** has three steps:

1. Before you write implementation code, write some code that proves that the implementation works or fails. Watch the test fail before moving to the next step
2. Write the implementation code and watch the test pass.
3. Refactor if needed. You should feel confident refactoring your code now that you have a test to tell you if you’ve broken something.

TDD helps us write better code by keeping UI components to a minimum.

---

### 2. What is Behavior-Driven Development (BDD)? How do we translate user requirements into automated tests?

**Behavior Driven Development** is a branch of Test Driven Development which uses human-readable descriptions of software user requirements as the basis for software tests.

---

### 3. What is test coverage? Can this tell us about the _quality_ of our tests?

**Test coverage** is a useful tool for finding untested parts of a codebase.

Test coverage is of little use as a numeric statement of how good your tests are.

A way to check if you're doing enough tests is if the following is met:

- You rarely get bugs that escape into production
- You are rarely hesitant to change some code for fear it will cause production bugs.
