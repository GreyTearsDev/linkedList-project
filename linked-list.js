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
    return this.tail; 
  }

  at(index) {
    if (index < 0 || index >= this.size) return undefined;

    let currentNode = this.head;
    
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;  
    }

    return currentNode;
  }
  
  

  pop() {
    if (this.size === 0) return false;
    let currentNode = this.head;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
      return true;
    }
    
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
      
    currentNode.next = null;
    this.tail = currentNode;
    this.size--;
    return true;
     
  }

  contains(value) {
    
  }

  find(value) {
    let index = 0;
    let currentNode = this.currentNode;
    
    while (currentNode !== null) {
      if (currentNode.value === value) return index;

      currentNode = currentNode.next;
      index++;
    }
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
