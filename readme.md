**Module 1 - The Basics**
Note: I do not plan on writing the most detailed notes for this section as I have worked with JS before, this section will just allow for me to dump any bits of information I feel like I will find useful.

### Variables and Statements

Different types of variables:

- var
- let
- const

The value contained in a var or let can be updated.

Values in a const cannot be changed, as you will be greeted with an **Uncaught TypeError** error.

'use strict' will cause the JavaScript environment to follow **Strict Mode** meaning that, if you do not declare a variable, an error will be displayed in the console.

Variable 'scope' describes where a variable is available to you in any given area of your code. 'var' (block scoped) is scoped differently to 'let' and 'const' (function scoped).

### Code Quality Tooling with Prettier and ESLint

ESLint: JavaScript linter tool to find and report any issues. Examples are bad practices, design patterns, unused variables.
Prettier: Formatting tool

Current setup: When saving the JS file, all code will go through ESLint, which in turn will be formatted with Prettier.

### Types - Introduction

**Different JavaScript types**
Primitives:

- String
- Number
- Boolean
- Null
- Undefined
- Symbol

Special case but still a type:

- Object

### Types - Strings

**Different ways to create a string**

- Single quotes ('...')
- Double quotes ("...")
- Backticks (`...`)

### Types - Numbers

Number is the general type used for all kinds of numbers such as whole, float etc.

Operators:
% - Modulo, outputs the remainder of a mathematical operation
** - Power, raises one number to the power of the other e.g 2**2 = 4

NaN = Not a Number
When outputting the 'typeof' of a NaN, it actually returns 'number' so the type of this is actually, a **number**. Note to self: Don't use this function to determine the type of a 'NaN'!

### Types - Objects

Generally, objects are used to group things together. A set of curly braces are used to create an object.

Note: Symbol is a type not fully covered in this section but good to know that it is a type!

### Types - Null and Undefined
