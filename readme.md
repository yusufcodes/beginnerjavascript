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

### The DOM - Working with Classes

A HTML element can have a class associated with it, and in JavaScript we can use the **classList** property of an element to display a _DOMTokenList_ containing all of the classes. What is interesting about the classList is that within the prototype of this object, there are many methods that can be used. Examples:
add: Add a class to the element
toggle: Add/remove class depending on whether or not it already exists
contains: Pass in the class name and it will turn true/false depending on whether or not the class exists in the element

### The DOM - Build in and Custom Data Attributes

Attributes are any additional information provided to an HTML element such as _class, \_src_, etc.

You can use getters and setters to view attributes / alter the attributes of an element, for example:

```js
pic.alt = "Alt text here";
console.log(pic.alt);
```

If you want to create your own attributes, you can use **Custom Data Attributes.**
Using this, you can create your own named attributes and then retrieve them in JavaScript:

```js
// The name can be: data-anythingHere, so in this case I used -name
<img data-name="Yusuf" />;

// You can then access the data by accessing the dataset property
const custom = document.querySelector(".custom");
console.log(custom.dataset);
```

### The DOM - Creating HTML

This lecture goes through a way of inserting HTML into the DOM.

```js
document.createElement("p"); // Creation of an element specified by the tag name

document.body.insertAdjacentElement("positionHere", elementHere); // Adding the element to the DOM using the insertAdjacentElement method
```

### The DOM - HTML from Strings and XSS

HTML can be created using a string, rather than separately creating the element and populating it, so you'd be writing HTML within the string itself. This can be done using the backticks which are used in JavaScript.

**Example:** Below is some HTML written into a string, with some values inserted through other variables, using the notation _\${ ... }_ where _..._ represents a value that you want to insert into the HTML.

```js
const myHTML = `
<div class="wrapper">
  <h2>Some title and description: ${desc}</h2>
  <img src="${src}" alt="${desc}"/>
</div>
`;
```

A **downside** to this approach is that this is just a string, so any methods and attributes an element would normally have cannot be accessed. You need to insert the string into the DOM first, before being able to access any of this. (Note: There is a way to override this problem using some other methods: **createRange()** and then **createContextualFragment()** - I have not gone deeper into this).

Once your HTML string is ready, below is one way to insert the string into the DOM. As long as the string is written with valid HTML, it will be correctly inserted into the DOM.

```js
document.body.appendChild(htmlHere);
```

_Security Issue with HTML Strings - XSS_
XSS = Cross Site Scripting, where a script tag is included in some form of input from the user, meaning that any script could be executed based on the user's input.

### The DOM - Traversing and Removing Nodes

_Explore the differences between Elements and Nodes further?_

Traversing the DOM refers to selecting an element on the page based on its position.

Element: Ignores the text nodes but will include any other element types such as 'em' for emphasized text, and so on.

**Element Methods:**

- .children
- .firstElementChild
- .lastElementChild
- .previousElementSibling
- .nextElementSibling
- .parentElement

Node: Will include every single type of element, including the text nodes.

**Node Elements:**

- .childNodes
- .firstChild
- .lastChild
- .previousSibling
- .nextSibling
- .parentNode

**Removing Elements:** You can use the .remove() method on an element to remove it.

## Module 5: Events

### Events - Event Listener

#### Adding Event Listeners

There are three steps to adding an event listener to some element on the page:

1. Reference the element
2. Specify what event to listen for
3. Specify the function to be executed when this event happens

```js
const button = document.querySelector(".button"); // Find a button on the page with a class name of Button

// Listening for the 'click' event on the button we referenced, performing an anonymous function when this event is listened for
button.addEventListener("click", function() {
  console.log("You just clicked on this button!");
});
```

#### Adding Multiple Event Listeners

First we select multiple elements using querySelectorAll

querySelectorAll returns a NodeList. This can be iterated over using the forEach() method.

Using the forEach() method, we can reference the current 'button' we are on in the for loop interation, and add an event listener to it.

**Code Example:**

```js
const buttons = document.querySelectorAll("button.buy"); // Get all the 'button' elements with a class of 'buy'

buttons.forEach(function(value) {
  console.log("Binding event...");
  value.addEventListener("click", functionNameHere);
});
```

#### Removing Event Listeners

This can be done using the removeEventListener function. You specify what type of event to stop listening for, followed by the function to be removed from the binding event.

```js
button.removeEventListener("click", functionNameHere);
```

### Events - targets, bubbling, propagation, capture

The 'Event' object has information about the currently executed event, such as which element the event has been fired from. We can pass in an 'event' parameter, which is made available to us when any event is ran.

Properties of the Event object that are useful are **target** and **currentTarget**.

- event.target: Returns the element from which the event was fired from, eg. the button that a user clicked. This is handy to grab any information out of the button, such as the price of something.
- event.currentTarget: If a nested element is clicked, it will return the parent element from which the event is hooked on to.

Event Propagation: This is where an event is fired from a child element, and it 'bubbles' up, so that if there is another listener for the same event (such as a click), it can be recognised by the listener for an action to be performed.
This can be stopped, if you want, using the following code:

```js
event.stopPropagation();
```

'Bubble' is one direction, bottom-up, and Capture is an event moving from the top to the bottom.

### Events - Prevent Default and Form Events

There are elements which have a default action which you may wish to prevent. An example could be when a user clicks on a link to another page, in this case you may want to do something else before the user accesses this new page. This is where you could **prevent the default action from occurring:**

```js
// Inside any event listener function:
event.preventDefault();
```

Use cases for preventing the default action from occurring straight away:

- Submitting a form - you could check that certain things are correct in the field first, like a data sanity check

### Events - Accessibility Gotchas and Keyboard Codes

Difference between Buttons and Links

- Buttons: To be used to perfom some type of action in an application, not where you are changing to a different page
- Link: Change the page

Always check that any event you are listening for is not dependant on a particular piece of hardware, for example, a mouse. Example - not everyone may be using a mouse to browse the site, so any important action should be accessible in other ways, for example, 'tabbing' through the website using just the keyboard.

[Keyboard Information](https://www.keycode.info)

## Module 7 - Logic and Flow Control

### BEDMAS

### Coercion, Ternaries and Conditional Abuse

**Corercion**: Forcing something of a different type translated into a boolean
Example: Executing *!!*variableHere will return a true or false depending on whether or not the value exists. (Truthy / falsy values as reference). (A single ! will simply return the opposite of the value, so if a variable exists and you placed a ! before it, it will return false and vice versa).

**Ternary**: This is a shorthand 'if' statement.
Condition, condition when true, condition when false
**Recap - Example:**

```js
const count = 0;
const word = count === 1 ? "item" : "items";

// AND AND Trick
// Below is a basic ternary example:
isAdmin ? showAdminBar() : null;
// Adding null at the end can be seen as pointless so the following can be written instead:
isAdmin && showAdminBar();

// How it works: First it will check if isAdmin is true, and only upon confirming this will the showAdminBar() method actually be executed. This flow pattern is the same as the first ternary example.

// One liner if statement:
if (isAdmin) showAdminBar(); //
```

### Switch Statements

Note: I've covered this before in JS and other languages so this will only serve as a refresher for myself.

Things to note:

- The value you are switching against goes in the parentheses
- Each 'case' must correspond to the exact value you are looking for followed by a colon
- After the colon you perform some tasks which must the be broken out of. Without the break all of the other cases will end up being evaluated, defeating the purpose of the entire thing
- Default case to always be defined in case no matching element is found

```js
switch (valueHere) {
  case "ValueOne":
    // Do something
    break;
  case "ValueTwo":
    // Do something else
    break;
  default:
    // No matchig value so perform a default case
    break;
}
```

### Intervals and Timers

setTimeout() allows for something to happen after a specified time

```js
setTimeout(function() {
  console.log("Done");
}, 3000); // Run after 3000 milliseconds
```

This function is called a callback function, because if we stated a particular timeout and then afterwards, wrote some other code, it would **queue** up the timeout whilst it runs any other code after it. It is only after the specified time that the function passed into setTimeout will run. This is a way to explore the **asynchronous** nature of JavaScript.

setInterval() will run a particular method every x amount of milliseconds specified in the function.

#### Clearing Timers

You can use the **clearTimeout** method to clear any set timers by passing the timer into the method.

## Module 8: Data Types

### Objects

Quick recap of how an Object looks in JavaScript, using one of the common ways of creating one:

```js
// The name of this object is anObject, with properties of 'name' and 'currentAge'
const anObject = {
  name: "Yusuf",
  currentAge: "20",
  thisIsAMethod: function() {
    console.log(`I am ${name} and my current age is ${currentAge}`);
  }
};

// Adding properties
anObject.newProperty = "Hey";

// Removing properties
delete anObject.newProperty;
```

### Object Reference vs Values

The example below is about storing an object **by reference** in another variable.

As an example, say we have two objects called Person1 and Person2.

```js
const person1 = person2;
// We are creating a REFERENCE to person2, and storing it in person1.

person1.name = "Yusuf";
// This will update the name property in BOTH person1 AND person2, becaus all person1 is, is a reference to person2.
// This means that any changes made to person1 is directly applied to the person2 object.

// This is how to create a brand new object, with the same contents as the one referenced inside of the curly braces

// This is the 'Spread' operator
const person1 = { ...person2 };

// One thing to note about this is, however, that it only works on upper level values. So, if you change any inner values, it will also update it in the original object.
```

#### Merging two objects together using the Spread operator

```js
// Two objects to be merged
const objectOne = { ... };
const objectTwo = { ... };

const mergedObject = { ...objectOne, ...objectTwo };
```

### Maps

**Summary of when you should / should not use Maps **

- Use a Map if you need to maintain the order of the items
- Maps are for storing data, so unlike Objects, you cannot store functions as Map entries
- Currently, Maps are not compatible with JSON which is commonly used when dealing with Objects

**Code Examples of using Maps:**

```js
// Creating a new Map
const map = new Map();

// Adding values to the map: set()
map.set('name', 'Yusuf');
map.set(100, 'The number one hundred');

// Using an object as the reference of a Map value
const objExample = {
  name: 'Yusuf';
  age: '20';
}

map.set(objExample, 'A cool person');

// Iterating over a Map
// let prizes = a new map with some arbituary values:

// Use of destructuring to extract 'points' and 'prizes' from the *prizes* Map using the 'for .. of' syntax
for (const [points, prize] of prizes)
{
  console.log(`${points} ${prize}`);
}
```

### Arrays

An array is a structure where you can store data where the order of the array is important. Arrays are referenced by an 'index' starting from 0.

```js
// Creating an array and populating it with values
const names = ['value1', 'value2', ...]; // 'Array Literal'

Array.isArray(passInArrayHere); // Check if something is an array

// Arrays begin at 0 index, so this is how to grab the first value
console.log(names[0]);

names.length // Grab the number of items in an element

arrayName.findIndex(...) // Find the index of an element

// Adding an entry to the END of the array
names.push('newElement!');

// Adding an entry to the FRONT of the array
names.unshift('anotherNewElement!');

// .flat() method: If you have arrays inside of an array, flat() will turn the inner arrays into single elements: 2D Array -> 1D Array (chain it onto the end of the array)

// Adding entries to the middle
// There is no set method to adding an entry to the middle so the following steps need to be taken:
/*
1. Create a new array
2. Use the spread operator to copy over the content of the original array, using slice to get the elements up to the one before you are inserting the new item
3. Inserting your new item as another element in the array (comma separation)
4. Same as number 2, spread over the rest of the array to finish the middle-placement of the item
CODE:
*/
const bikes = ['one', 'two', 'four', 'five'];
const newBikes = [
  ...bikes.slice(0,2),
  'three',
  ...bikes.slice(2)
];

// Deleting an element using the Spread operator
const newBikes2 = [
  ...newBikes.slice(0,3); // Get everything up to and NOT including the third third element (we want to remove this)
  ...newBikes.slice(4); // Skip the third element and continue grabbing the rest of the elements from 4 onwards
];

// Note: Within the Prototype object of an Array, there are many methods that can be used against any array

```

**Mutable methods**: Perform mutation operations, where it changes the original version of the array
Example methods:

- reverse(): reverses the order of the array, changing the original one

Use a mutated method WITHOUT mutating the original:
Take a copy of the array

```js
// Use the Spread operator to copy the original array into the new array
const numbersReversed = [...numbers];
// Now you can use this NEW array to keep the original Array in-tact
```

**Immutable methods**: Does **not** change the original version of the array but instead, it will return a new copy of the original array, with the new changes

- slice(): Takes some part of the array with a start and end index, but makes a new copy of this rather than creating a new array

```js
// slice: mutable
// Returns an array from beginning (inclusive) to end (non-inclusive), original array is not modified

// splice: immutable
// Returns an array from beginning (inclusive) and then asks how many elements to go for, original array IS modified
// Letter p for persistent? Idk, this might help remember that original data is going to be modified?
```

### Array Cardio - Instance Methods (notes)

After completing the coding tasks for this section I wanted to add a summary of all the methods + what they do here:

#### Types of Array Methods:

1. Static Methods: These are attached to the Array object itself, rather than an instance of the Array object.

Example Methods:

- Array.of()
- Array.from()
- Array.isArray()

##### Aside: Object Methods

These methods are ran against the 'Object' object, however they return Arrays:

- Object.entries()
- Object.keys()
- Object.values()

1. Instance Methods: These are methods which rely on the existence of the associated object. For example, you need to have an actual Array to run the following methods against

Example: The following method is chained onto the array to be executed

```js
buns.join();
```

#### Examples of Instance Methods

- .join()
- .split() - A String method returning an Array
- .pop()
- .push()
- .shift()
- .unshift()

### Array Cardio - Callback Methods and Function Generation

1. Callback Methods: These are methods which take in a callback function, which determines the outcome of the method.

#### Examples of Callback Methods

- .find()
- .filter()
- .some()
- .every()
- .sort()

## Module 9: Looping and Iterating

### Array .forEach

This is a callback function which runs once per item in an Array, doing what we tell it to do.

### Array 'Mapping'

The map function takes in an array and for each item in the array, will perform some type of operation on it. It will always return the same number of elements as it started with. The current element is always made available to us, so can be referenced with any given name.

**Example:**

```js
// Adding 'Bos' at the end of an Array of names
const fullNames = ["Wes", "Kait", "Poppy"].map(name => `${name} Bos`);
```

The map function can be used on objects as well e.g. data sanitisation of data that has come from an API.

(DateTime converter)[epoch.now.sh]

### Array: Filter, Find and High Order Functions

#### Filter

This method, used on an Array, takes in a function specifying the conditions for which you want to 'filter' the data. You can then return true or false depending on the data you want to see. It is a good way of creating a 'subset' of data from an array.

**Example:**

```js
// Filtering based on a person being older than 40
const over40 = arrayHere.filter(function(person) {
  if (person.age > 40) {
    return true;
  } else {
    return false;
  }
});

// Shorthanded version
const over40 = arrayHere.filter(person => person.age > 40);
```

#### Find

This function is similar to Filter, except it will find and return the first instance of the search criteria specified in the function (one item), whilst filter will go over every single item using the criteria specified (returning an entire array).

**Example:**

```js
// High Order Function: A function that returns another function
function findById(id) {
  return function isStudent(student) {
    return student.id === id;
  };
}

// We can pass the High Order Function into 'find', this is better because we can reuse 'findById' rather than re-write the same 'stu.id === idHere'
const student = students.find(findById("idHere"));
```

### Reduce

Loop over each item in an array and return an accumulated result based on each item. It can remember the 'value' of the previous item in the array and use this information to perform some sort of operation.

**Parameters - for the inner function we are running:**
accumulator: The previous value from that instance of the reduce method
currentValue: Current value that the reduce function is on

**Parameters - for the actual .reduce() method:**
functionToRun: This is the first parameter and can be written as an anonymous function, or an external method (callback)
startingValue: Example with a number based reduce method this could be 0. With an object based method it could be an empty object to begin with.

**Example:**

```js
function tallyNumbers(tally, currentTotal) {
  console.log(`Current tally: ${tally}`);
  console.log(`Current total: ${total}`);
  return tally + currentTotal; // Accumulator becomes the sum of the current running tally and the current value added together.
}

// This will accumulate all of the values in orderTotals using the tallyNumbers function starting at the index 0. The value 0 does not need to be specified if you do not want to begin at the first element. It will otherwise default to the first two elements.
const allOrders = orderTotals.reduce(tallyNumbers, 0);
```

### Looping and Iterating: for, for of, for in and while loops

#### For Loop
Not written anything on these because I've written these many times in different languages (lol)

#### For Of loop
Used to be used on an iterable (things with some sort of length such as an array or string). The example below would print out each of the characters of the string.

Note: For ... of loop allows for the **await** keyword to be used inside of it, so if any data needs to be parsed in a particular way before an async/await runs, we can use for-of for this usecase.

```js
for (const letter of name)
{
  console.log(letter);
}
```

#### For In loop
This will return the **keys** of an array or object, for when you do not want the values.

Note: For an object, it will display the properties on both the object **and** the object's *prototype*. This is an individual usecase for using for ... in over using something like Object.entries, which does not display anything from an object's prototype.

```js
for (const prop in wes) {
  console.log(prop); // Returns the keys for each value in 'wes'
}
```

#### While and Do ... While loops
I know how these work but as a reference, this is the difference between the two:
**While loops** assess the condition first before continuing in the code, whilst a **Do ... While** loop will assess the condition *after* running the code it is given.

*NOTE:* End of this module reached. In Wes Bos' JavaScript30 course there are two days of 'Array Cardio' where I can practice everything learned in this module so far as well if needed.

## Module 10: Harder Practice Exercises
Note: I want to come back to this at a later stage so I can continue on with more theory first

## Module 11: Prototypes, 'this', 'new' and Inheritance

### The New Keyword

Using the **new** keyword in front of a function will create an instance of the function that is being used, instead of returning whatever is done inside the function itself.

```js
function Pizza() {
  console.log('Making a Pizza!')
}

const pepperoniPizza = new Pizza();
console.log(pepperoniPizza);

console.log(pepperoniPizza.constructor); // This will display the original function from which the object was created from
console.log(pepperoniPizza instanceof Pizza); // This will return True. This is a good way to check what sort of object a particular item is.
```

When we console.log the 'pepperoniPizza' it will return a Pizza object to us. This will currently be empty as we haven't populated the object with anything.


