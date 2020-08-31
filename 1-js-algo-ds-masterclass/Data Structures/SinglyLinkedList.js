//piece of data val
//stores reference to next node

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	//adds a node to the end of the linked list.
	push(val) {
		let node = new node(val);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.length++;
		return this;
	}

	//remove a node from the end of the list
	//return the item removed
	pop() {
		if (!this.head) return undefined;
		let current = this.head;
		let newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	//remove a node from the beginning of the linked list
	// return the item removed
	shift() {
		if (!this.head) return undefined;
		let oldHead = this.head;
		this.head = oldHead.next;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return oldHead;
	}
   
   //add a node to; the beginning of the SinglyLinkedList
   //return the SinglyLinkedList
	unshift(val) {
		let newNode = new node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
      this.length++;
      return this;
   }
   
   //retrieves a node by its position in the SinglyLinkedList
   //returns the node you are looking for 
   get(index){
      if(index < 0 || index >= this.length) return undefined
      else {
         let counter = 0;
         let current = this.head
         while(counter !== index){
            current = current.next
            counter++
         }
         return current
      }
   }
}
