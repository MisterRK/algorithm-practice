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

}