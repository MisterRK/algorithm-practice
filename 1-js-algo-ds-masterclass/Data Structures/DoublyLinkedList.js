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
		if (!this.head) return undefined;
		let oldTail = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = oldTail.prev;
			oldTail.prev = null;
			this.tail.next = null;
		}
		this.length--;
		return oldTail;
	}

	//remove the first value from the beginning of a Doubly Linked List
	shift() {
		if (this.length === 0 ) return undefined;
		let oldHead = this.head;
		if(this.length === 1 ){
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}
}
