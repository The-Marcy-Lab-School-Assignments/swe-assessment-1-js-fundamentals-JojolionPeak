# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1

### Response:

The block of code would likely return a **reference error**.
This is because the programmer did not define `currentStatus` in the scope of the `react` function before logging it to the console. The `currentStatus` variable is only defined within the **if/else** statement in the function and so the programmer will receive an error for referencing a variable outside of it's **scope**. To avoid this error, the code should look like this:

```javaScript
 const react = (isReuben) => {
    let currentStatus
  if (isReuben) {
    currentStatus = 'Everything is just fine';
  } else {
    currentStatus = 'Time to panic.'
  }

  console.log(currentStatus);
}

react(true);
```

This is effective because we initialize the `currentStatus` variable in the same scope that we return it, so it will be defined when we go to use it.

### Question 2

The code logs `"Michael Jordan"` because objects are copied by **reference** and not by value. Since, when we make a copy of an object, we're copying the **reference** to the value and **not the actual value itself**, when we try and change something in the copied object, the original also changes. Since both the new object and original object are using the same references for their data, both objects get updated.

### Question 3

The code logs `'Laisha is the hardest working person in the room.'` and `'Laisha is also the hardest working person in the room.'`. The reason, the `theHustler` **variable** didn't get updated to `'Paul'` as expected is because `theHustler` was declared using const, meaning once we assign a value to that **variable**, we cannot change or update it.

### Question 4

**Rest parameters** can be used when we don't know the **amount of arguments** that will be inputted into the function, or if we don't yet know the **values of the arguments** that we will be inputting.

> According to MDN, **rest parameters** are a way to take in an indefinite amount of parameters.
> Documentation can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

We can turn a **parameter** into a **rest parameter** by using _three dots_ and the _name of the parameter_ in the usual section for parameters in a function. The **rest parameter** must be the last **parameter** added to the function.

#### Example:

```javaScript
const sum = (...params) => {
 let total = 0
 for (const num in params) {
   total = total + params[num]
 }
 return total
};
sum(1, 2, 10); // 13
sum(5); // 5
sum(100, 200, 800, 1, 1, 1); // 1103;
```

In the example above, we use a **rest parameter** because we might want to find the sum of an unknown number of inputs. the **rest parameter** allows us to be flexible with the amount of **arguments** that can be inputted into the function.

### Question 5

**Scope** is the context in which code values or expressions can be used, changed, or referenced. There are many different scopes, such as **global scope** or **block scope**. Variables that have been declared in the **global scope** can be used anywhere in your code, whereas variables declared in a **block scope** can only be used in that **block scope** and any **child-scopes**.

> According to MDN, the **scope** of a piece of code refers to the context of execution in which values and expressions are "visible". **Parent scopes DO NOT** have access to **child scopes**. Additional information about **scope** can be found [here](https://developer.mozilla.org/en-US/docs/Glossary/Scope)

You can think of **scope** as a sort of container. You are able to use whatever's stored inside of the container, but you can't access data from outside the scope you're currently in. You cannot reference or use data that is not within the **scope** of your code block.

#### Example:

```javaScript
const product = (num) => {
  if (num !== 0) { //checks if the number isn't equal to 0
    let product = num * num // creates product variable and assigns it a value
    return product; // expected output: num * num
  }
};
```

The code snippet above displays a good understanding of **scope**. The programmer declares the **variable** `product` inside the **if statement**, and they return the **variable** in the **same code block**. Since the **variable** is declared in the **code block** it's returned in, the output of this function is as expected.

### Question 6

**Modules** in **JavaScript** allow you to group together blocks of code, or **functions** that have similar functionality into a separate file. This code can then be accessed by other files in your directory by **exporting** and **importing** it into the file that you need it for.

One of the benefits of using modules in your code is for readability. If you have large blocks of code that all do different functions it gets hard to traverse the file and do **debugging** work. However, if you split up your code among different files, it's easier to see if anything's wrong with your code.

#### Export Example:

```JavaScript
module.exports = {
  petJudger,
  letterCaseCounts,
  loopFromOneUpToAnother,
};
```

In the above example, the programmer takes all the **functions** that they will need on other files and puts them in the **export statement**. This allows the programmer to import these functions to any other file they have and use the function without having to write it out entirely again.

#### Import Example:

```JavaScript
const {
petJudger,
letterCaseCounts,
loopFromOneUpToAnother,
} = require(./'from-scratch.js)
```

In this example, the programmer is **importing** functions tha have already been **exported**. They are doing this to call and/or use the function in a file that they have not written the function out.

### Question 7

```JavaScript
const removeLastPurely = (arr) => {
  const arr = [...arr];
  arrCopy.pop();
  return arrCopy;
}

const fruits = ['apple', 'banana', 'cherry', 'date'];
const fruitsMinusOne = removeLastFrom(fruits);
```

After the code in the example runs, the original fruits array will output `['apple', 'banana', 'cherry', 'date']` but the copy of the fruits array will output `['apple', 'banana', 'cherry']`. This is because the **spread operator** made a copy of the array and is **only changing the value of the copied array** and not the original.

We needed to make a copy of the array to make it a pure function because if we were altering the array itself, we would be **altering our input** and every time we run the function, we'd get a **different result**. Array's are **mutable** so we can mutate an array. Because of this, we make a copy of it before we start making changes.

We don't want to mutate the original array because we might be _reusing_ that array later on in our code, and if every time we run the code the value for this array changes, our code will not perform how we expect it to, and will output _erroneous values_.

### Question 8

I would use an **object** to represent a single item in a shopping cart because of an object's **key: value** pairs. For example, for the **key**, it could be the name of the item you're buying. For the **value**, it could be the amount of the item you have in the shopping cart. This would help you keep track of how many different items you have and how many total items you have.

I would use an **array** to represent the entire shopping cart because, I can have each element in the array be the **objects** from before to access each unique item in the shopping cart. Both **objects and arrays** can hold a list of data, but we can use an **array of objects** to access each **object** at a specific index, in the shopping cart array.

```JavaScript
const shoppingCart = [
    {apples: 2},
    {bananas: 4},
    {milk: 1},
    {tomatoes: 2},
]
```

In the example above, the `shoppingCart` **array** has 4 different **objects** for the different unique items that were purchased. The objects contain information on what the item is, and how many are in the shopping cart.
