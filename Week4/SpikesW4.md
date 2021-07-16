# Technical Spikes - Week 4

## Checking our code

#### Resources

- [How To Format Code with Prettier in Visual Studio Code](https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code)
- [ESLint Getting Started](https://eslint.org/docs/user-guide/getting-started)
- [ESLint About](https://eslint.org/docs/about/)

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

### 2. How can a linter help us avoid bugs?

Firstly, let's define what code linting means. **Code Linting** is a type of static analysis that is frequently used to find problematic patterns or code that doesn't adhere to certain style guidelines.

JavaScript, being a dynamic and loosely-typed language, is especially prone to developer error. Without the benefit of a compilation process, JavaScript code is typically executed in order to find syntax or other errors. Linting tools like **ESLint allow developers to discover problems with their JavaScript code without executing it**.
