# Prism Highlight
This is an adaptation of the [prismjs](https://github.com/PrismJS/prism)
library that works as an Angular component.

## Installation

Install `prism-highlight` with your favorite
package manager.

You will also need to install `prismjs`. Make sure that you
import the the libraries and styles you need from PrismJS
itself. For example, in `main.ts`:

    import 'prismjs';
    import 'prismjs/components/prism-typescript';
    import 'prismjs/themes/prism.css';
    import 'prismjs/themes/prism-dark.css';

## Usage
This module exports a single directive, `prismHighlight`
that takes the language for highlighting as an input.

    <pre prismHighlight="typescript">${tsCode}</pre>
