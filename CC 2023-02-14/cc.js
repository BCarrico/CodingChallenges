// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.



function isPangram(string){

    let alph = "abcdefghijklmnopqrstuvwxyz"
    let alphArr = alph.split("")
    let str = string.toLowerCase()
    
    if (str.length < 25){
      return false
    } else {
      for (let i = 0; i < str.length; i++){
        if (alphArr.includes(str[i])){
          let el = alphArr.indexOf(str[i])
          alphArr.splice(el, 1)
        }
        }
      if (alphArr.length > 0){
        return false
      } else {
        return true
      }
      }
    }
  

//React is "A JavaScript library for building user interfaces". It's become a popular option amongst JavaScript frameworks and now it's supported in Codewars!

// For this first React Kata, we'll be exploring how to create elements with React. React has a high level method React.createElement for exactly this purpose. It's usage is as simple as:

// React.createElement('div', { prop: 'value' }, 'Hello world!'); 
// Where the first argument is the element tag, the second argument is the element's properties and the third tag is the content you want to add into the element.

// Your task is to create two wrapper methods called createElement and createUnorderedList for our own purposes.

// The createElement method should take in a content, tag, and properties, similar to the React method. We should be able to call this method with just content like createElement('Hello World') and by default it should create a div with the content "Hello World".

// The createUnorderedList method should take in list, which is an array strings and create a ul element, whose children are li elements containing the values from the list. Given an array ['apples', 'oranges', 'bananas'], the createUnorderedList method should return a react element with this heirarchy:

// <ul>
//   <li>apples</li>
//   <li>oranges</li>
//   <li>bananas</li>
// </ul>
// Also, React suggests that you always supply a key property when creating dynamic children so be sure to create a unique key for each child li created.

// For more general information about React check out the docs!

var React = require("react");

function createElement(content, tag='div', props={}) {
  return React.createElement(tag, props, content);
}

function createUnorderedList(list) {
  return React.createElement('ul', {}, list.map((str, i) => React.createElement('li', {key : +i}, str)));
}

// United State of React
// Some say The United States has never been so divided. This Kata is a chance for you to unite a once great nation and MAKE AMERICA CODE AGAIN!

// What's Involved
// State
// Changing State
// Conditional Rendering based on state
// The challenge
// You will be given a component called States. You will need to establish an initial state for the component called united and for it to be set to false.

// Then write a unite function that changes this state to true.

// Then conditionally render a bespoke message in the component.

// If the States are united then display "Code for everyone"

// If the States aren't united then display "Make America code again"

import React from 'react';

export class States extends React.Component {
  constructor() {
    super();
    this.state = {
      united: false
    }
  }
  unite (){
    this.setState({united: !this.state.check})
  }
  render() {
    return <div className="status">{this.state.united ? "Code for everyone" : "Make America code again"}</div>
  } 
}