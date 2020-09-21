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
	find(value){
		if(this.root === value) return false;
		let current = this.root;
		let found = false;
		while(current && !found){
			if(value<current.value){
				current = current.left;
			}else if (value > current.value){
				current = current.right;
			} else {
				found = true}
		}
		if(!found) return false;
		return !!current;
	}
}

let tree = new BinarySearchTree();
