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
	// BFS checks a tree horizontally. It checks the entirety of one 'leve' before going any 'deeper'
	// sample input tree
	//      70
	//   25    100
	// 20     99  125

	BFS() {
		debugger;
		let queue = []; // queue will store the nodes we will visit
		let visited = []; // visited will sotre the nodes we HAVE visited
		let current = this.root; // start at the root

		queue.push(current); // add the root to the nodes we will visit

		while (queue.length) {
			current = queue.shift(); // we are looking at the first node in the queue ... FIFO
			visited.push(current.value); // add the value of the node we are looking at to the visited array
			if (current.left) queue.push(current.left); // if there is a left => add it to the queue
			if (current.right) queue.push(current.right); // if there is a right => add it to the queue
		}
		return visited; // [70, 25, 100, 20, 99, 125]
	}

	DFSPreOrder() {
		let visited = []; // store the nodes we visit

		function DFSHelper(node) {
			visited.push(node.value);
			if (node.left) DFSHelper(node.left); // check all the lefts recursively
			if (node.right) DFSHelper(node.right); // check all the rights recursively
		}

		DFSHelper(this.root); // start on the root node
		return visited;
	}

	DFSPostOrder() {
		let visited = [];

		function postOrderHelper(node) {
			if (node.left) postOrderHelper(node.left);
			if (node.right) postOrderHelper(node.right);
			visited.push(node.value);
		}
		postOrderHelper(this.root);
		return visited;
	}

	DFSInOrder() {
		let visited = [];
		function inOrderHelper(node) {
			if (node.left) inOrderHelper(node.left);
			visited.push(node.value);
			if (node.right) inOrderHelper(node.right);
		}
		inOrderHelper(this.root);
		return visited;
	}
}

let tree = new BinarySearchTree();
