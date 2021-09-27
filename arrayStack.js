// Stacks
//      The 'back' button. Every new URL adds one the 'stack' and the back button just goes back once in the stack.

let stack = [0, 1, 2, 3, 4, 5]

stack.push(6) // push is a stack method that adds to the top of the stack
stack.pop() // pop is a stack method that removes from the top

//  functions: push, pop, peek, length

let letters = []

let word = 'racecar'

let rword = ''

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i])
}

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += letters.pop()
}

if (rword === word) {
  console.log(word + ' is a palindrome.')
} else {
  console.log(word + ' is not a palindrome.')
}
