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

**General Rule of Thumb When Declaring Variables:**

- Always use const first
- If needed, change this to let
- Fallback to var only if necessary

Wes states that this is his personal preference but as it makes sense to me, I'm going to try coding my JavaScript using these conventions.

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

### Scope

'Where are my functions and variables available to me?' - This is the exact question which scoping answers.

Global Variables: These variables are available anywhere in the application. Everything attached to this global scope is contained within 'Window'.

```js
const first = "yusuf"; // Function scoped
let second = "second"; // Function scoped
var age = 100; // Globally scoped - Window object
```

Functions: When functions are globally declared they are also attached to the Window object, so is available as a method of the Window object.

If variables are not found within a function, the program will go up one level in scope, such as to the global scope, to find the variable, until it cannot find it.

#### Block Scoping

Block Scoping is the concept where you assign and use variables which are **only** available in the scope that you are currently in. Block Scopes refer to areas of the code where you are dealing with a new set of curly braces, for example, within a conditional statement (for / if etc.)

'let' is block scoped, whereas 'var' is function scoped, meaning that you can refer to any var variable anywhere within a function and it will be available.

**Example:** Within a for loop, you'd want your incrementer variable to only be available withi this for loop, so you would declare it with a **let**:

```js
for (let i = 0; i < 10; i++) {
  // Some for loop code here
}
```

**Lexical Scoping:**
Variables are looked up relative to where the function is defined, not where it is run from. Lexical refers to 'position'.

### Hoisting

Hoisting allows for you to refer to a function or variable before they are 'defined'.

Two things are 'hoisted':

1. Function Declarations - you can call a function before its official definition, function declarations are 'moved' to the top of the code. This only happens with regular functions which are defined using the function keyword.
2. Variable Declarations - you can attempt to access a variable before it is set, this will return the value _undefined_. This happens because whilst the actual variable declaration is hoisted, the value associated with it is not. What is happening here is that the JavaScript Engine is preparing for this variable to contain some form of value, to be determined when the program is executed.

### Closures

Definition: The ability to access a **parent level scope** from a **child scope**, even **after** the parent function has been terminated.
**Example:**

```js
// Declaring functions
function createGame(gameName) {
  let score = 0;
  return function win() {
    score++;
    return `Your name ${gameName} score is ${score}`;
  };
}

const gameOne = createGame("gameOne");
const gameTwo = createGame("gameTwo");

// Running Functions
// These will increment the variable, win, and output this value, each time either of the functions run, even though the function has been run and returned. The variable's value is remembered.
gameOne();
gameTwo();
```

## The DOM - Working with HTML and CSS

### The DOM - Introduction to the document

The Window object contains information about the currently open window.
We can use the Document object with the DOM (Document Object Model) which includes all of the elements on the page.

### The DOM - Selecting Elements

#### Loading External JS

Place the script tag **before the closing body tag** to ensure all elements on the page have loaded before attempting to interact with them.

#### Selecting Elements

```js
document.querySelector("p"); // Selects the first matching paragraph element
document.querySelectorAll("div"); // Selects all matching div elements, a NodeList NOT an Array
```

There are also the methods 'getElementBy' ... which can be used, but the above two can grab all / most elements. (MDN for full syntax)

### The DOM - Element Properties and Methods

Elements have different properties and methods that can be accessed. Elements are objects.

**Example Properties**
.textContent
.innerText

**Example Method**
.insertAdjacentText

Many more available on MDN
