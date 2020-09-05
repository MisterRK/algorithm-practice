class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

   //add a given value to the end of the Doubly Linked List
	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.previous = this.tail;
			this.tail = newNode;
			this.length++;
		}
		return this;
	}
   
   //remove the last value from the end of a Doubly Linked List
	pop() {
      if(!this.head) return undefined
      let oldTail = this.tail
      if(this.length === 1 ){
         this.head = null;
         this.tail = null;
      } else {
         this.tail = this.tail.prev
         this.tail.next = null
      }
      this.length--
      return oldTail
   }
}
