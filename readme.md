## Module 1: The Basics

Note: I do not plan on writing the most detailed notes for this section as I have worked with JS before, this section will just allow for me to dump any bits of information I feel like I will find useful.

### Variables and Statements

Different types of variables:

- var
- let
- const

- The value contained in a var or let can be updated.
- Values in a const cannot be changed, as you will be greeted with an **Uncaught TypeError** error.
- 'use strict' will cause the JavaScript environment to follow **Strict Mode** meaning that, if you do not declare a variable, an error will be displayed in the console.
- Variable 'scope' describes where a variable is available to you in any given area of your code. 'var' (block scoped) is scoped differently to 'let' and 'const' (function scoped).

### Code Quality Tooling with Prettier and ESLint

- ESLint: JavaScript linter tool to find and report any issues. Examples are bad practices, design patterns, unused variables.
- Prettier: Formatting tool
- Current setup: When saving the JS file, all code will go through ESLint, which in turn will be formatted with Prettier.

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

**Operators:**
% - Modulo, outputs the remainder of a mathematical operation
** - Power, raises one number to the power of the other e.g 2**2 = 4
NaN = Not a Number
When outputting the 'typeof' of a NaN, it actually returns 'number' so the type of this is actually, a **number**. Note to self: Don't use this function to determine the type of a 'NaN'!

### Types - Objects

Generally, objects are used to group things together. A set of curly braces are used to create an object.

Note: Symbol is a type not fully covered in this section but good to know that it is a type!

### Types - Null and Undefined

undefined: used for variables which either do not exist, or exist with no value set to it.
null: An actual value stating that there is a value of 'nothing'.

### Types - Booleans and Equality

Boolean types are either **true** or **false**.

JavaScript best practice: use triple equals as opposed to double equals, which checks that the type of the two values being compared are the same.

## Module 2: Functions

### Parameters and Arguments

Parameters: Variables which we place within the function declaration parentheses, expecting them to be passed in when the function is called.

Arguments: The actual values which are passed into a function call, matching the function's parameters that it is expecting.

### Different Ways To Declare Functions

```js
// 1.
function doctorize(firstName)
{
    return `Dr. ${firstName}`;
}

// 2. Anonymous Function
function (firstName)
{
    return `Dr. ${firstName}`;
}

// 3. Function Expression
const doctorize = function (firstName)
{
    return `Dr. ${firstName}`;
}

// 4. Arrow Functions
// Concise syntax, 'this' keyword scoping is different
// Anonymous functions

// Normal Function
function inchToCM(inches)
{
    const cm = inches * 2.54;
    return cm;
}

// Arrow Function
// The value is implicitly returned as it is all on one line
const inchToCM = inches => inches * 2.54;

const add = (a, b = 3) => a + b;

// Implicitly returning an object, parentheses required
const makeABaby = (first, last) => ({name: `${first} ${last}`, age: 0});

// Immediately Invoked Function Expression (IIFE)
// My def: A function which is executed straight away, within its own scope. Promotes the idea of encapsulation if you need an isolated environment for your code to run.

//
(function(){
    console.log('Hi!');
})();

/* Methods: This is a piece of code, called by a name, which is associated with an object. For example:
console.log(): Console is the object, and log() is the method associated with the object.
*/

// Callback functions: These are functions which run when *something else* happens first, usually passed into some other function. Example: setting up an event listener may trigger a particular function to run in response to a user's action. This function is what is described as a Callback Function.
```

### Debugging Tools

'debugger' - if this is written as a statement, and the consoel is open, the code will 'stop' at this point allowing for you to view information abot the running code, e.g. the value of different variables at that point in time.

Network tab - you can see all the different files needed to load the currently open page.

Note: Video #16, mostly watched this as a reference. **This may be useful in the future when I might be working with JS! Debugging is a weaker area but something I feel will come with general development of an application.**

## Module 3: The Tricky Bits
