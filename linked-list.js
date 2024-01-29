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
    return this.find(value) === null ? false : true;
  }

  find(value) {
    let index = 0;
    let currentNode = this.currentNode;
    
    while (currentNode !== null) {
      if (currentNode.value === value) return index;

      currentNode = currentNode.next;
      index++;
    }

    return null;
  }

  toString() {
    if (this.size === 0) return '';
    
    let string = '';
    let currentNode = this.head;
    
    while (currentNode !== null) {
      string = string.concat(currentNode.value);
      if (currentNode.next !== null) {
        string = string.concat(' -> ');
      }
      currentNode = currentNode.next;
    }
    
    return string
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      this.size++;
      return true;
    }
    
    if (index === this.size || index > this.size) {
      this.append(value);
      this.size++;
      return true;
    } 

    let newNode = new Node(value);
    let theNodeBefore = this.at(index);
    let theNodeAfter = this.at(index + 1);

    theNodeBefore.next = newNode;
    newNode.next = theNodeAfter;

    this.size++;
    return true;
  }
  

  removeAt(index) {
    
  }
  
}

class Node {
  constructor(value) {
    this.value = null;
    this.next = null;
  }
}
