// https://www.youtube.com/watch?v=sYcOK51hl-A&list=PL2_aWCzGMAwLPEZrZIcNEq9ukGWPfLT4A&index=6

// Reverse a linkedlist - iterative method.
  reverseIterative() {
    let prev = null;
    let current = this.head;
    let firstElement = this.head;

    while(current !== null) {
      let next = current.next || null;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
    this.tail = firstElement;
    return this;
  } 


// https://www.youtube.com/watch?v=KYH83T4q6Vs&list=PL2_aWCzGMAwLPEZrZIcNEq9ukGWPfLT4A&index=8
  reverseRecursive(node) {
    if(node.next === null) {
      this.head = node;
      return;
    };
    this.reverseRecursive(node.next);
    let nextNode = node.next;
    nextNode.next = node;
    node.next = null;
    this.tail = node;
  }


