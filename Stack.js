// A stack is first in, last out.  The new elements "stack" on top of each other, and you navigate the stack from the top.  I.e. the 'Back' button.  The back button goes through the data structure starting from the most recent input and going backward.

let Stack = function () {
  this.count = 0
  this.storage = {}

  this.push = function (value) {
    this.storage[this.count] = value
    this.count++
  }

  this.pop = function () {
    if (this.count === 0) {
      return undefined
    }

    this.count--
    let result = this.storage[this.count]
    delete this.storage[this.count]
    return result
  }

  this.size = function () {
    return this.count
  }

  this.peek = function (value) {
    return this.storage[this.count - 1]
  }
}

let myStack = new Stack()

myStack.push(1)
myStack.push(2)
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())
myStack.push('jonde')
console.log(myStack.size())
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())
