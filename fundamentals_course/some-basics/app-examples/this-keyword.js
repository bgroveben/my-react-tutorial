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
