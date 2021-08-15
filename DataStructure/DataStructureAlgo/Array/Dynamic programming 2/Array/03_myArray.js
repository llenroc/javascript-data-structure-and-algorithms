console.log("*********** myArray() ************");
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index){
    return this.data[index];
  }

  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop(){
    const item = this.data[this.length -1];
    delete this.data[this.length -1];
    this.length--;
    return item;
  }

  deleteAtIndex(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index){
    for(let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
}

const sample = new MyArray();
console.log(sample.push("My"));
console.log(sample.push("name"));
console.log(sample.push("is"));
console.log(sample.push("Coder"));
console.log(sample); // MyArray { length: 4, data: { 0: 'My', 1: 'name', 2: 'is', 3: 'Coder' } }
// console.log(sample.get(0));
// console.log(sample.pop());
// console.log(sample.pop());
// console.log(sample.deleteAtIndex(2));
sample.shiftItems(0)
console.log(sample); // MyArray { length: 3, data: { 0: 'name', 1: 'is', 2: 'Coder' } }

console.log("\n");

const actualArray = new Array();
console.log(actualArray.push("My"));
console.log(actualArray.push("name"));
console.log(actualArray.push("is"));
console.log(actualArray.push("engineer"));
console.log(`actualArray.length = ${actualArray.length}`);
console.log(`actualArray = ${actualArray}`); // My, name, is, engineer
// console.log(`actualArray[0] = ${actualArray[0]}`);
// console.log(actualArray.pop());
// console.log(actualArray.pop());
console.log(`actualArray.shift = ${actualArray.shift(0)}`);
console.log(`actualArray = ${actualArray}`); // name, is, engineer


console.log("\n");


const myArray = new MyArray();
myArray.push('hi');
myArray.push('you');
myArray.push('!');
myArray.pop();
myArray.deleteAtIndex(0);
myArray.push('are');
myArray.push('nice');
console.log(myArray); // MyArray { length: 3, data: { 0: 'you', 1: 'are', 2: 'nice' } }
myArray.shiftItems(0);
console.log(myArray); // MyArray { length: 2, data: { 0: 'are', 1: 'nice' } }