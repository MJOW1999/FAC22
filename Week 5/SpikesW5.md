# Technical Spikes - Week 5

## Advanced DOM

#### Resources

- [NodeList | MDN](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
- [The Content Template Element | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
- [Template element example](https://codepen.io/oliverjam/pen/yLNEOQO?editors=1010)

### 1. What is a NodeList?

**NodeList** objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll().

#### How is it different from an array?

A **NodeList** object is basically a collection of DOM nodes extracted from the HTML document. An **array** is a special data-type in JavaScript, that can store a collection of arbitrary elements.

#### What’s the difference between “live” and “static” NodeLists?

A **live** NodeList is when changes in the DOM automatically update the collection.

A NodeList is **static**, where any changes in the DOM does not affect the content of the collection.

### 2. What is the `<template>` element?

The `<template>` HTML element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.

Think of a template as a content fragment that is being stored for subsequent use in the document.

#### How can we use this to render dynamic UI?

We can set all of the static properties in the html and only edit the dynamic elements using templates.

The code is also more streamlined when we use templates instead of using `document.createElement`.
