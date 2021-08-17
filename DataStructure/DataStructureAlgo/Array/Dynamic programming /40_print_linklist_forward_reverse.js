// https://www.youtube.com/watch?v=K7J3nCeRC80&list=PL2_aWCzGMAwLPEZrZIcNEq9ukGWPfLT4A&index=7

printRecursive (node) {
  if(node === null) return;
  console.log(node.value);
  this.printRecursive(node.next);
}


printReverseRecursive (node) {
  if(node === null) return;
  this.printReverseRecursive(node.next);
  console.log(node.value);
}
