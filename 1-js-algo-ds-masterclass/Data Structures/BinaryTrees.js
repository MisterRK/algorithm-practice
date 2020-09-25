class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

//creates an empty Binary Search Treet
class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	// inserts a node at the correct location in the tree.
	insert(value) {
		let newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		} else {
			let current = this.root;
			while (true) {
				if (value < current.value) {
					if (current.left === null) {
						current.left = newNode;
						return this;
					} else {
						current = current.left;
					}
				} else if (value > current.value) {
					if (current.right === null) {
						current.right = newNode;
						return this;
					} else {
						current = current.right;
					}
				}
			}
		}
	}

	//check a binary tree for a certain value
	find(value) {
		// check if the list is empty
		if (this.root === null) return false;
		// set up to look at a value and move through the tree
		let current = this.root;
		let found = false;
		while (current && !found) {
			// check if we should look left(less) or right(more)
			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			} else {
				// if we find the value exit the loop
				found = true;
			}
		}
		// loop also exits if there is nothing to look at
		if (!found) return false;
		return !!current;
	}

	// Breadth First search of a tree

	// create a queue ( this can be an array) and a variable to store the values of nodes visited
	// place the root node inot the queue
	// Loop as long as there is anything in the queue
	// Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
	// if there is a left property one the node dequeued - add it to the queue
	// if there is a right property on the node dequeued - add it to the queue
	// Return the variable that stores the values

	BFS() {
		debugger;
		let queue = []; // queue will store the nodes we will visit
		let visited = []; // visited will sotre the nodes we HAVE visited
		let current = this.root; // start at the root

		queue.push(current); // add the root to the nodes we will visit

		while (queue.length) {
			current = queue.shift(); // we are looking at the first node in the queue ... FIFO
			visited.push(current.value);
			if (current.left) queue.push(current.left);
			if (current.right) queue.push(current.right);
		}
		return visited;
	}
}

let tree = new BinarySearchTree();
