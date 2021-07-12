# Technical Spikes - Week 3 #

## CSS Architecture

#### Resources
- [CSS Guidelines](https://cssguidelin.es/)
- [BEM Methodology](http://getbem.com/introduction/)
- [Composition - Every Layout](https://every-layout.dev/rudiments/composition/)

### Questions

1. Why are CSS naming conventions useful?
2. When might specificity become a problem?
3. How can composition help us build UIs?

### Answers

1. CSS naming conventions are hugely useful in making your code more strict, more transparent, and more informative. A good naming convention can help when working in a team, as everything needs to be clear so every member understands. A good naming convention tells us what type of thing a class does, where it can be used and what it might be related to. We can use BEM (_Block_, _Element_, _Modifier_) for example when deciding names. The __block__ being the sole root of the component, the __element__ being a component part of the block and the __modifier__ being a variant or extension of the block.

```
.room { } // BLOCK - Item
  .room__door { } // ELEMENT - A door is a part of a room
.room--kitchen { } // MODIFIER - A kitchen is a type/variant of a room
```

2. The problem with specificity is that it sets precedents and trumps that cannot simply be undone. Specificity can prevent things from working as expected when moved into different environments and limit your ability to extend and manipulate a codebase.
The use of __IDs__ can cause problems when it comes to specificity as not only are IDs inherently non-reusable, they are also vastly more specific than any other selector, and therefore become specificity anomalies. 

3. Composition can help us build UIs through the use of layout primitives. A design system that does not leverage primitives is similarly problematic. If every component in your pattern library follows its own rules for layout, inefficiencies and inconsistencies will abound.
Layout primitives each have a simple responsibility: "space elements vertically", "pad elements evenly", "separate elements horizontally", etc. They are designed to be used in composition, as parents, children, or siblings of one another. They are also intrinsically responsive. That is, it will wrap and reconfigure internally to make sure the content is visible (and well-spaced) to fit any context/screen.


## Responsive Design

#### Resources
- [Units - Every Layout](https://every-layout.dev/rudiments/units/)
- [The lengths of CSS](https://css-tricks.com/the-lengths-of-css/)
- [How To Write Mobile-first CSS](https://zellwk.com/blog/how-to-write-mobile-first-css/)

### Questions

1. What CSS units should we use for dimensions? What are absolute and relative units?
2. When should you use a media query? Are they only for screen size?
3. How can mobile-first CSS make responsive styling easier?

### Answers

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
