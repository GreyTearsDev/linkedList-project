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
      this.currentnewNode = newNode;
      this.tail = newNode;
    } else {
      this.currentNode.next = newNode;
    }
    
    this.size++;
  }

  prepend(value) {
    
  };

  size() {
    return this.size;
  }

  head() {
    
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
