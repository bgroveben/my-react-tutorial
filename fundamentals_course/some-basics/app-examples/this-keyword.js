// Time to cover 'this'
/*
4 rules
- Implicit Binding
- Explicit Binding
- New Binding
- Window Binding
*/

// Where is this function invoked?

// Implicit Binding
// Left of the dot (.) at call time
console.log("-- Keyword 'this' with Implicit Binding --");
console.log();

var me = {
  name: "Ben",
  age: 25,
  sayName: function(){
    console.log(this.name);
  }
};
me.sayName();
console.log();

// Another example
var sayNameMixin = function(obj){
  obj.sayName = function(){
    console.log(this.name);
  };
};
var me = {
  name: 'Ben',
  age: 30
};
var you = {
  name: 'Tyler',
  age: 21
};
sayNameMixin(me);
sayNameMixin(you);
me.sayName();
you.sayName();
console.log();

// One more example
var Person = function(name, age){
  return {
    name: name,
    age: age,
    sayName: function(){
      console.log(this.name);
    },
    mother: {
      name: 'Stacey',
      sayName: function(){
        console.log(this.name);
      }
    }
  };
};
var jim = Person('Jim', 42);
jim.sayName();
jim.mother.sayName();
console.log();


// Explicit Binding
// call, apply, bind
console.log("-- Keyword 'this' with Explicit Binding --");
console.log();

var sayName = function() {
  console.log('My name is ' + this.name);
};
var stacey = {
  name: 'Stacey',
  age: 34,
};
sayName.call(stacey);
console.log();

var sayLanguage = function(lang1, lang2, lang3){
  console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', and ' + lang3 +'.');
};
var languages = ['JavaScript', 'Ruby', 'Python'];
console.log('.call --');
sayLanguage.call(stacey, languages[0], languages[1], languages[2]);
console.log('.apply --');
sayLanguage.apply(stacey, languages);
console.log('.bind --');
var newFunc = sayLanguage.bind(stacey, languages[0], languages[1], languages[2]);
newFunc();
console.log();


// new Binding
console.log("-- Keyword 'this' with keyword 'new' binding --");
console.log();
var Animal = function(color, name, type){
  // when the 'new' keyword is called, JS will create a new object -- this = {}
  // the following attributes are then bound to 'this'
  this.color = color;
  this.name = name;
  this.type = type;
};
var zebra = new Animal('black and white', 'Zorro', 'Zebra');
console.log(zebra);
console.log();


// window Binding
// if the keyword 'this' isn't bound by any other method, it defaults to binding to the 'window' object
/*
The following code will not work using node to run the file (it won't recognize the 'window' keyword).
Try it in the browser console or JSBin

console.log("-- Keyword 'this' with window object binding --");
console.log();
var sayAge = function(){
  // 'use strict';
  console.log(this.age);
};
var me = {
  age: 25
};
sayAge();
window.age = 35;
sayAge();
*/
