'use strict'

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;   
    this.currentNode = null;  
  }

  append(value) {
    let newNode = new Node(value);
    
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.currentNode = newNode;
    } else {
      this.currentNode.next = newNode;
      this.currentNode = newNode;
    }
    
    this.size++;
  }

  prepend(value) {
    let newNode = new Node(value);

    this.head = newNode; 
    
    if (this.size !== 0) {
      newNode.next = this.currentNode;
    } else {
      this.tail = newNode;
    }
    
    this.currentNode = newNode;
    this.size++;
  };

  size() {
    return this.size;
  }

  head() {
   return this.head;  
  }

  tail() {
    
  }

  at(index) {
    
  }

  pop() {
    
  }

  contains(value) {
    
  }

  find(value) {
    
  }

  toString() {
    
  }

  insertAt(value, index) {
    
  }

  removeAt(index) (
    
  )
  
}

class Node {
  constructor(value) {
    this.value = null;
    this.next = null;
  }
}
