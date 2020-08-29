//piece of data val
//stores reference to next node

class Node {
   constructor(val){
      this.val = val;
      this.next=null;
   }
}

class SinglyLinkedList {
   constructor(){
      this.length = 0;
      this.head = null;
      this.tail = null;
   }

   //adds a node to the end of the linked list.
   push(val){
      let node = new node(val)
      if(!this.head){
         this.head = node
         this.tail = node

      } else {
         this.tail.next = node
         this.tail = node
      }
      this.length++
      return this
   }
   
   //remove a node from the end of the list
   pop(){
      if(!this.head) return undefined
      let current = this.head
      let newTail = current
      while(current.next){
         newTail = current;
         current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if(this.length === 0){
         this.head = null;
         this.tail = null;
      }
      return current;
   }

}