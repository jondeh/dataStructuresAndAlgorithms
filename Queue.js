// Similar to a stack, but where the stack is 'first in, last out', the queue is 'first in, first out'.  Like waiting in line, the sooner you get in, the sooner you get out.  I.e. a printer queue.  Printers will go through the data structure in the order in which they are input.

function Queue () {
  collection = []
  this.print = function () {
    console.log(collection)
  }
  this.enqueue = function (element) {
    collection.push(element)
  }
  this.dequeue = function () {
    return collection.shift()
  }
  this.front = function () {
    return collection[0]
  }
  this.size = function () {
    return collection.length
  }
  this.isEmpty = function () {
    return collection.length === 0
  }
}

let q = new Queue()
q.enqueue('a')
q.enqueue('b')
q.enqueue('c')
q.print()
q.dequeue()
console.log(q.front())
q.print()
