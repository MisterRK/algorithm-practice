class Node {
   constructor(val){
      this.val = val;
      this.next = null
   }
}

class Queue {

   constructor(){
      this.first = null; // this has the highest priority to get out of the queue
      this.last = null; // this is the lowest priority in the queue
      this.size = 0;
   }

   // add a value to the end of the queue ( becomes the new this.last)
   enqueue(val){
      let newNode = new Node(val)
      if(!this.first){
         this.first = newNode;
         this.last = newNode;
      } else {
         this.last.next = newNode;
         this.last = newNode;
      }
      return ++this.size
   }

   // removes a value from the beginning of the queue ( this.first)
   dequeue(){
      if(!this.first) return null;
      let oldFirst = this.first;
      if(this.first === this.last) {
         this.last = null;
      }
      //take the first item and re-assign it to the next item in the list
      this.first =  this.first.next;
      this.size--;
      return oldFirst.val;
   }
}


//implementing a Queue with an array.
let q = [];
// we are going to add to the end of the array using push
q.push("FIRST")
q.push("SECOND")
q.push("THIRD") // ['FIRST', 'SECOND', 'THIRD']

// removing has to happen from the beginning of the list FIFO
q.unshift() // FIRST
q.unshift() // SECOND
q.unshift() // THIRD

// you could also add the items to the beginning
q.shift("FIRST")
q.shift("SECOND")
q.shift("THIRD") // ['FIRST', 'SECOND', 'THIRD']

// and remove them from the end FIFO
q.pop() // FIRST
q.pop() // SECOND
q.pop() // THIRD