const Node = require('./node');

class LinkedList {
  constructor() {
    this.length = 0;
  }

  append(data) {
    var node = new Node(data, this._tail, null);

    if (this._tail != null) {
      this._tail.next = node;
    }

    this._tail = node;

    if (this._head == null) {
      this._head = this._tail;
    }

    this.length += 1;

    return this;
  }

  head() { 
    if (this._head != null) { 
      return this._head.data; 
    } else {
      return null;
    }
  }

  tail() {
    if (this._tail !=null) {
      return this._tail.data;
    } else {
      return null;
    }
  }

  at(index) {
    var i = 0;
    var position = this._head;

    while(position != null) {
      if (i == index) return position.data;
      position = position.next;
      i = i + 1;
    }
  }

  find(index) {
    var i = 0;
    var position = this._head;

    while(position != null) {
      if (i == index) return position;
      position = position.next;
      i = i + 1;
    }
  }

  insertAt(index, data) {
    let node = this.find(index);
    if (node == null) return this;

    let newNode = new Node(data);
    newNode.prev = node.prev;
    if (newNode.prev != null) {
      newNode.prev.next = newNode;
    }
    newNode.next = node;
    node.prev = newNode;

    this.length = this.length + 1;

    return this;
  }

  isEmpty() {
    return this.length == 0;
  }

  clear() {
    var position = this._head;

    while(position != null) {
      position = position.next;
      if (position != null) {
        position.prev = null;
      }
    }
    this._head = null;
    this._tail = null;
    this.length = 0;

    return this;
  }

  deleteAt(index) {
    let deletingNode = this.find(index);
    if (deletingNode == null) return this;

    if (deletingNode.next != null) {
      deletingNode.next.prev = deletingNode.prev;
    }

    if (deletingNode.prev != null) {
      deletingNode.prev.next = deletingNode.next;
    }

    this.length--;

    return this;
  }

  reverse() {
    var current = this._head;

    this._head = this._tail;
    this._tail = current;

    while(current != null) {
      var tmp = current.next;

      current.next = current.prev;
      current.prev = tmp;
      current = tmp;
    }
    return this;
  }

  indexOf(data) {
    var current = this._head;
    var result = 0;

    for(var i = 0; i < this.length; i++) {
      if(data == current.data) {
        result = i;
        return result;
      }
      current = current.next;
    }
    return -1;
  }
}

module.exports = LinkedList;
