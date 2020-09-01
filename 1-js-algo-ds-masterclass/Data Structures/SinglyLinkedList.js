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
	get(index) {
		if (index < 0 || index >= this.length) return undefined;
		else {
			let counter = 0;
			let current = this.head;
			while (counter !== index) {
				current = current.next;
				counter++;
			}
			return current;
		}
	}

	//sets a new value at specific index in the SLL
	//returns true if the node was updated, and false if the request was invalid.
	set(index, value) {
		let node = this.get(index);
		if (node) {
			node.val = value;
			return true;
		}
		return false;
	}

	insert(index, value) {
		if (index < 0 || index > this.length) return false;
		if (index === 0) return !!this.unshift(value);
		if (index === this.length) return !!this.push(value);

		let newNode = new Node(value);

		let previousNode = this.get(index - 1);
		let followingNode = previousNode.next;
		previousNode.next = newNode;
		newNode.next = followingNode;
		this.length++;
		return true;
	}

	//removes a nod from the index you pass in
	//return the node that you removed
	remove(index) {
		if (index < 0 || index > this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length) return this.pop();

		let previousNode = this.get(index - 1);
		let removedNode = previousNode.next;
		previousNode.next = removedNode.next;
		this.length--;
		return removedNode;
	}

	//reverse a linked list IN PLACE!
	reverse(){
	let current = this.head
	this.head = this.tail
	this.tail = current
	let prev = null;
	let next;
		for(let i = 0; i < this.length; i++){
			next = current.next;
			current.next = prev;
			current = next;
			prev = current;
		}
	}

}
// common BigO of Singly Linked Lists
//insertion O(1)
//removal best O(1) average 0(n) 
//searching O(n)
//accessing O(n)