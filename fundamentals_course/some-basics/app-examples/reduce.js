// Basically, .reduce applies a function to each item in an array to reacha single value.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

var scores = [89, 76, 47, 95];
var initialValue = 0;
var reducer = function (accumulator, item) {
  return accumulator + item;
}
var total = scores.reduce(reducer, initialValue);
var average = total / scores.length;
console.log(total);
console.log(average);

/*
.reduce can be used for more than transforming an array of numbers.
For example, if you want the end result to be an object (converting an array into an object),
have the initial value be an object and add properties to that object as you go.
Below we have an array of foods and we want to transform that array into an object whose keys
are the food itself and whose values are how many votes that food received.
*/
var votes = [
  'tacos',
  'pizza',
  'pizza',
  'tacos',
  'fries',
  'ice cream',
  'ice cream',
  'pizza'
]
var startingValue = {}
var reducify = function(tally, vote) {
  if (!tally[vote]) {
    tally[vote] = 1;
  } else {
    tally[vote] = tally[vote] + 1;
  }
  return tally;
}
var result = votes.reduce(reducify, startingValue);
console.log(result);
