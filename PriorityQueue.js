// Behaves like a normal queue, except you can pass in a "priority" with each element.  Elements with higher priority go ahead of the elements with lower priority, but everything else behaves the same as a normal queue.

function PriorityQueue () {
  let collection = []
  this.printCollection = function () {
    console.log(collection)
  }
  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element)
    } else {
      let added = false
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element)
          added = true
          break
        }
      }
      if (!added) {
        collection.push(element)
      }
    }
  }

  this.dequeue = function () {
    let value = collection.shift()
    return value[0]
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

let pq = new PriorityQueue()
pq.enqueue(['Jon', 2])
pq.enqueue(['Dave', 3])
pq.enqueue(['Eric', 1])
pq.enqueue(['Nick', 2])
pq.printCollection()
pq.dequeue()
pq.front()
pq.printCollection()
