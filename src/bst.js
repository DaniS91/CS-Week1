// On average, inserting, searching and removing nodes from a binary search tree has a Big O of O(log n). That's pretty good — and better than linear time (O(n)). Of course, there is a worst-case scenario of O(n) if the tree is severely unbalanced — but this is unlikely, especially in well-designed binary search tree algorithms which include tree rebalancing.

export default class BST {
  constructor() {
    this.root = null;
  }
  //inserting Nodes
  insertNode(insertedNode) {
    if (this.root === null) {
      this.root = insertedNode;
    } else {
      let currentNode = this.root;    
      while (true) {
        if (currentNode.data > insertedNode.data) {
          if (currentNode.left === null) {
            currentNode.left = insertedNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (currentNode.data < insertedNode.data) {
          if (currentNode.right === null) {
            currentNode.right = insertedNode;
            return this;
          } else {
            currentNode = currentNode.right
          }
        } else {
          return this;
        }
      }
    }
  }

  //searching Tree
  search(value) {
    if (this.root.data === value) {
      return true;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.data === value) {
          return true;
        } else if (currentNode.data > value) {
          currentNode = currentNode.left;
        } else if (currentNode.data < value) {
          currentNode = currentNode.right;
        }
        if (currentNode === null) {
          return false;
        }
      }
    }
  }
}

