# Grid Classwork

![2 * 4](https://files.slack.com/files-tmb/T04766DG6AK-F05Q3AMTYKY-b1fcd4efad/image_720.png)

Here's what the DOM structure looks like, for a 2×4 grid:

```html
<div class="grid">
  <div class="row">
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
  </div>
  <div class="row">
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
  </div>
</div>
```

Your mission is to replicate this structure, but for a variable number of rows and columns.

Acceptance criteria:

- You've been given the template for a Grid component, which will be provided with a numRows prop for the number of rows, and a numCols prop for the number of columns.
- There should be X divs with a class of row, where X is equal to the numRows prop.
- Inside each row, there should be Y divs with a class of cell, where Y is equal to the numCols prop.
- You should use the provided range function to solve this problem.
- **There shouldn't be any key-related warnings in the console.**
