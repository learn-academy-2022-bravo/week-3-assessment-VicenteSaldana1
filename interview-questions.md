# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: 'this' is a keyword used in Javascript to reference an object or an object's property. In my experience working with objects and classes so far, I can recall that the word this is primarily used when calling on an object.  

  Researched answer: In JavaScript, the this keyword refers to an object. Which object depends on how this is being used or called.
  The this keyword refers to different objects depending on how it is used:
  In an object method, this refers to the object.
  Alone, this refers to the global object.
  In a function, this refers to the global object.
  In a function, in strict mode, this is undefined.
    -The value of this inside a function is usually defined by the function’s call. So, this can have different values inside it for each execution of the function.
  In an event, this refers to the element that received the event.
  Souce; W3schools, lecture notes.
  


2. What is React? Why would you use it?

  Your answer: React is a high-speed program created by Facebook for developers to create apps through a collection of code snippets that are already grouped in folders and are is easy to modify and adjust by the developer. React libraries are made up of a combination of html, javascript, css, and other similar programs, that work together to make an app come to live. You would use React if your goal is to make a dynamic web app that includes the programs saved in these libraries.  

  Researched answer: React is a JavaScript-based UI development library created by Facebook that makes it easier to create dynamic web applications because it requires less coding and offers more functionality. It uses a virtual DOM that helps create web applications faster. 
  Source: Reactjs.org, W3schools. 


3. Which lifecycle method is required in a React class component?

  Your answer: I believe the lifecycle that is required in a React class component is called render. The constructor method is also important but not required since the computer will recognize the code and add it for you. 

  Researched answer: The render() method is the only required method in a React class component. When called, it should examine this.props and this.state and return one of the following types:
  React elements. 
  Arrays and fragments. 
  String and numbers. 
  Booleans or null. 
  Source: Reactjs.org



4. What is JSX? What is one notable difference between HTML and JSX?

  Your answer: JSX is a syntax recognized in React apps that is made up of a combination of both HTML and JavaScript languages. The noticeable difference between HTML and JSX is that JSX includes JavaScript language. 

  Researched answer: JSX stands for JavaScript Syntax Extension. 
  JSX is an extension of JavaScript that allows developers to write HTML right within JavaScript. When you're writing JSX, technically you're writing JavaScript and HTML together. The main difference between HTML and JSX is that in JSX, you must return a single parent element, or it won't compile. You can do this by using a fragment <></>. 
  Source: freecodecamp, Reactjs.org. 


5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: Yarn is used when trying to run a jest test on our JavaScript code. The files that are modified in React when we run yarn are JavaScript files. 

  Researched answer: Yarn is a package manager for Node.js that is known for its fast speed, security, and consistency. The primary function of any package manager is to install a piece of code that serves a particular purpose from a global registry into an engineer's local, and this is done via the node_modules directory. Based on the information I could find online during my research, I now understand how running yarn in our terminal modifies the node_modules files when working with React. 
  Source: Reactjs.org, W3schools, and Meta. 


6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: I do not believe I can recall what the definition of an anonymous function is in JavaScript. If I were to make an educated guess, I would say it is a function that has no name or has not been declared. 

  Researched answer: An anonymous function is a function without a name. This type of function is not accesible after being created unless you assign a variable to it. Anonymous functions can be used as an argument to other functions or as an immediately invoked function execution. 
  Source: JS Tutorial Website, W3 schools. 


## Looking Ahead: Terms for Next Week

1. Conditional rendering:Conditional rendering is a term to describe the ability to render different user interface (UI) markup if a condition is true or false. In React, it allows us to render different elements or components based on a condition. This concept is applied often in the following scenarios:
Rendering external data from an API.
Showing or hiding elements.
Toggling application functionality.
Implementing permission levels.
Handling authentication and authorization.
This process is similar to how conditionals work in JS. 

2. Object-oriented programming: Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior.The main aim of OOP is to bind together the data and the functions that operate on them so that no other part of the code can access this data except that function. 

3. Ruby: Ruby is a dynamic, open source programming language with a focus on simplicity and productivity. In Ruby, everything is an object, including primitive data types.

4. Ruby blocks: A block is the same thing as a method, but it does not belong to an object. There are some important points about blocks in Ruby:
Block can accept arguments and returns a value.
Block does not have their own name.
Block consist of chunks of code.
A block is always invoked with a function or can say passed to a method call.
To call a block within a method with a value, yield statement is used.
Blocks can be called just like methods from inside the method that it is passed to.


5. Ruby hashes: in Ruby, hash is a collection of unique keys and their values. Hashes are sometimes called as associative arrays because it associates values with each of the keys but there is a difference between hashes and arrays. Arrays always use an integer value for indexing whereas hashes use the object. Hashes are also known as the maps because they map keys to values.
