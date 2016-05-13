// Kelvin Kni- Chapter 4 Data Structures & Algorithms


// A Stack Implementation
/*
function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

function push(element) {
   this.dataStore[this.top++] = element;
}
function peek() {
return this.dataStore[this.top-1];
}
function pop() {
return this.dataStore[--this.top];
}
function clear() { this.top = 0;
}
function length() { return this.top;
}


var s = new Stack();
s.push("David");
s.push("Raymond");
 s.push("Bryan");
console.log("length: " + s.length());
 console.log(s.peek());
var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());
*/

// Multiple Base Conversions
/*
function mulBase(num, base) {
  var s = new Stack()

  do{
    s.push(num % base)
    num = Math.floor(num /= base)
  }while (num > 0)
  var converted = '';
  while (s.length() > 0) {
    converted += s.pop()
  }
  return converted;
}

var num = 32;
var base = 2;
var newNum = mulBase(num, base)
print(num+ ' converted to base ' +base+ ' is ' +newNum)
num = 125;
base = 8;
var newNum = mulBase(num, base)
print(num +' converted to base' +base+ ' is ' +newNum)

// Expected out: 32 converted to base 2 is 1000000
// 125 converted to base 8 is 175
*/

// Palindromes
/*
function isPalindrome(word) {
  var s = new Stack()
  for (var i = 0; i < word.length; ++i) {
    s.push(word[i])
  }
  var rword = ''

  while (s.length() > 0) {
    rword += s.pop()
  }
  if (word == rword) {
    return true;
  }
  else {
    return false;
  }
}


var word = 'hello';
if(isPalindrome(word)) {
  print(word+ ' is a palindrome.')
}
else {
  print(word + ' is not a palindrome.')
}
word = 'racecar'
if(isPalindrome(word)) {
  print(word+ ' is a palindrome.')
}
else {
  print(word + ' is not a palindrome.')
}

// expected output: Hello is not a palindrome
// racecar is a palindrome.
*/

// Demonstrating Recursion
