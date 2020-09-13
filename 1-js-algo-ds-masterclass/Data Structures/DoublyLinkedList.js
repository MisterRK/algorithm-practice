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
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
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
		if (this.length === 0) return undefined;
		let oldHead = this.head;
		if (this.length === 1) {
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

	//adds a node to the beginning of a DoublyLinkedList
	unshift(val) {
		let newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	//takes an index and gets the node at that postiion and returns it.
	get(index) {
		if (index >= this.length || index < 0) return undefined;
		let count;
		let current;

		if (index <= this.length / 2) {
			console.log("working from head");
			count = 0;
			current = this.head;
			while (count !== index) {
				current = current.next;
				count++;
			}
		} else {
			console.log("working from tail");
			count = this.length - 1;
			current = this.tail;
			while (count !== index) {
				current = current.prev;
				count--;
			}
		}
		return current;
	}

	//takes an index and a piece of data
	//sets the item at the index given, and replaces the val with arguement given
	set(index, val) {
		let node = this.get(index);
		if (node !== null) {
			node.val = val;
			return true;
		}
		return false;
	}

	//takes an index and a value
	//creates a new node with that value and places it in the position you gave it
	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === 0) return !!this.unshift(val);
		if (index === this.length) return !!this.push(val);

		let newNode = new Node(val);
		let prevNode = this.get(index - 1);
		let afterNode = prevNode.next;

		prevNode.next = newNode;
		newNode.prev = prevNode;

		newNode.next = afterNode;
		afterNode.prev = newNode;

		this.length++;
		return true;
	}

	//remove takes an index, and removes it from the list.
	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if ((index === this.length - 1)) return this.pop();
		let foundNode = get(index);
		let prevNode = foundNode.prev;
		let nextNode = foundNode.next;

		//re-assign the surrounding pointer to skip the foundNode
		prevNode.next = nextNode;
		nextNode.prev = prevNode;

		//change the foundNode's pointers to null
		foundNode.prev = null;
		foundNode.next = null;

		return foundNode;
	}
}
