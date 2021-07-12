# Technical Spikes - Week 3 #

## CSS Architecture

#### Resources
- [CSS Guidelines](https://cssguidelin.es/)
- [BEM Methodology](http://getbem.com/introduction/)
- [Composition - Every Layout](https://every-layout.dev/rudiments/composition/)

### 1. Why are CSS naming conventions useful?

CSS naming conventions are hugely useful in making your code more strict, more transparent, and more informative. A good naming convention can help when working in a team, as everything needs to be clear so every member understands. A good naming convention tells us what type of thing a class does, where it can be used and what it might be related to. We can use BEM (_Block_, _Element_, _Modifier_) for example when deciding names. The __block__ being the sole root of the component, the __element__ being a component part of the block and the __modifier__ being a variant or extension of the block.

```
.room { } // BLOCK - Item
  .room__door { } // ELEMENT - A door is a part of a room
.room--kitchen { } // MODIFIER - A kitchen is a type/variant of a room
```
---

### 2. When might specificity become a problem?

The problem with specificity is that it sets precedents and trumps that cannot simply be undone. Specificity can prevent things from working as expected when moved into different environments and limit your ability to extend and manipulate a codebase.
The use of __IDs__ can cause problems when it comes to specificity as not only are IDs inherently non-reusable, they are also vastly more specific than any other selector, and therefore become specificity anomalies. 

---
### 3. How can composition help us build UIs?

Composition can help us build UIs through the use of layout primitives. A design system that does not leverage primitives is similarly problematic. If every component in your pattern library follows its own rules for layout, inefficiencies and inconsistencies will abound.
Layout primitives each have a simple responsibility: "space elements vertically", "pad elements evenly", "separate elements horizontally", etc. They are designed to be used in composition, as parents, children, or siblings of one another. They are also intrinsically responsive. That is, it will wrap and reconfigure internally to make sure the content is visible (and well-spaced) to fit any context/screen.

---
## Responsive Design

#### Resources
- [Units - Every Layout](https://every-layout.dev/rudiments/units/)
- [The lengths of CSS](https://css-tricks.com/the-lengths-of-css/)
- [How To Write Mobile-first CSS](https://zellwk.com/blog/how-to-write-mobile-first-css/)

### 1. What CSS units should we use for dimensions? What are absolute and relative units?

Everything you see on the web is composed out of pixels. However, __we shouldn't use pixels to size our elements__ as, for example, screen resolutions —how many pixels screens pack— differ, so while one “CSS pixel” (1px in CSS) may approximate one “device” or “hardware” pixel on a lower resolution screen, a high resolution screen may proffer multiple device pixels for each 1px of CSS. 
We should instead use ___relative units___ like em, rem, ch, and ex as they present no such problem because they are all units relative to the user’s default font size. 
  - __Paragraph elements should always be 1rem__ (1 times the root font size), because they represent body text. You don’t need to set 1rem explicitly, because it’s the default value.
  ```
  p {
  /* ↓ also redundant */
  font-size: 1rem;
}
  ```
  - __Headings, should be set relatively larger__ — otherwise hierarchy will be lost. My h2 might be 2.5rem, for example.
  ```
  h2 {
    /* ↓ 2.5 × the root font-size */
    font-size: 2.5rem;
  }
  ```
  _Absolute Units_ are pretty self-explanatory in that they are real measurements. Examples of these are _px_, _cm_ and _in_.
  
---
### 2. When should you use a media query? Are they only for screen size?

We should not use width-based media queries as they are hard coded and do not scale appropriately. Instead we should use __viewport units__, which are relative to the browser viewport’s size. Using viewport units and calc() we can create an algorithm whereby dimensions are scaled proportionately, but from a minimum value.

```
:root {
  font-size: calc(1rem + 0.5vw);
}
```
In this example, the ```1rem``` part of the equation ensures the font-size never drops below the default value. That is, ```1rem + 0vw``` is ```1rem```.

---
### 3. How can mobile-first CSS make responsive styling easier?

Code for larger screens is usually more complicated than the codes for smaller screens. This is why coding mobile first helps simplify your code. For example:

__Mobile__:
```
content {
  // Properties for smaller screens.
  // Nothing is required here because we can use the default styles

  // Properties for larger screens
  @media (min-width: 800px) {
    float: left;
    width: 60%;
  }
}
```
__Desktop__
```
.content {
  // Properties for larger screens.
  float: left;
  width: 60%;

  // Properties for smaller screens.
  // Note that we have to write two default properties to make the layout work
  @media (max-width: 800px) {
    float: none;
    width: 100%;
  }
}
```
With this one example, we save two lines of code. This may not seem like much but it adds up over a larger project.

---

## Advanced CSS

#### Resources
- [CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [A Whole Bunch of Amazing Stuff Pseudo Elements Can Do](https://css-tricks.com/pseudo-element-roundup/)
- [Under-Engineered Custom Radio Buttons and Checkboxen](https://adrianroselli.com/2017/05/under-engineered-custom-radio-buttons-and-checkboxen.html)

### Questions

1. What are “combinator” selectors? Can you provide examples where they’re useful?
2. What are pseudo-elements? Can you provide examples where they’re useful?
3. How might you create custom-styled checkboxes using both of the above?

### Answers
