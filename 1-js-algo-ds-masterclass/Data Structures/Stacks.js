// data structure that follows a LIFO principle
//LAST IN FIRST OUT
//We are going to 'pile' things into the stack and remove them starting at the 'top' of the 'pile

//use cases in the real world
//call stack and recursive functions
//undo and redo => changes the last thing you did in your word document
//routing in React => the history object. The last page we visited is at the top of the stack.

//array implementation
let stack = [];
stack.push("google.com");
stack.push("instagram");
stack.push("youtube");
//removing from the end (or the last in)
stack.pop();
stack.pop();
stack.pop();
// you could also work by adding things to the front of the array
stack.unshift("created a new file");
stack.unshift("resized the file");
stack.unshift("edited something in the photo");
// you then would have to remove things from the front of the array to make LIFO happen
stack.shift();
stack.shift();
stack.shift();
// obviously the push/pop method is going to be more efficient from a bigO standpoint
//removing from the beginning means everything has to be re-indexed...which takes time

//building our own stack class => following the principles of a singly linked list
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

//were going to use the front of the list because we want the adding and the removal to be constant time
class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	in(val) {
		let newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			let oldFirst = this.first;
			this.first = newNode;
			newNode.next = oldFirst;
      }
      return ++this.size
	}

   //remove the last item that was added to our stack
   //in our implementation this is called this.first
	out() {
      if(!this.first) return null;
      let oldFirst = this.first;
      if(this.size === 1){
         this.last = null;
      } 
      this.first = oldFirst.next
      this.size--;
      return oldFirst.val;
   }
}
