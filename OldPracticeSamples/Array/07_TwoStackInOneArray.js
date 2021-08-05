/*

Two stack in an array :- https://www.youtube.com/watch?v=cJgVdvWz4iU&index=14&list=PLeIMaH7i8JDjd21ZF6jlRKtChLttls7BG

array.push1();
array.pop1();

array.push2();
array.pop2();

*/



(function() {
    let logs = new ConsoleLog("F_E_M_TwoStackInOneArray", false);

    function TwoStackArray(size){
        this.array = new Array(size);
        this.top1 = 0;
        this.top2 = size-1;   
    };

    TwoStackArray.prototype.push1 = function(value) {
        if(this.top1 > this.top2) {
            return `push(${value}) = Stack is full`;
        }
        this.array[this.top1] = value;
        this.top1++; 
        return this;
    };
    TwoStackArray.prototype.push2 = function(value) {
        if(this.top1 > this.top2) {
            return `push(${value}) = Stack is full`;
        }
        this.array[this.top2] = value;
        this.top2--;
        return this;
    };
    TwoStackArray.prototype.pop1 = function() {
        if(this.top1 === 0) {
            return `Stack1 is empty. Nothing to pop`;
        }
        var value = this.array[--this.top1]
        this.array[this.top1] = null;
        return value;
    };
    TwoStackArray.prototype.pop2 = function() {
        if(this.top2 === this.array.length-1) {
            return `Stack2 is empty. Nothing to pop`;
        }
        var value = this.array[++this.top2];
        this.array[this.top2] = null;
        return value;
    };
    TwoStackArray.prototype.getStack = function() {
        return this.array;
    }
    

    var myArray = new TwoStackArray(5);
    logs.push(`twoStackArray = `, myArray.getStack());
    logs.push(`myArray.push1(5); = `, myArray.push1(5));
    logs.push(`myArray.push2(15) = `, myArray.push2(15));
    logs.push(`myArray.push1(4); = `, myArray.push1(4));
    logs.push(`myArray.push2(9) = `, myArray.push2(9));
    logs.push(`myArray.push1(25); = `, myArray.push1(25));
    logs.push(`myArray.push2(65) = `, myArray.push2(65));
    logs.push(`myArray.pop() = `, myArray.pop1());
    logs.push(`myArray.pop() = `, myArray.pop2());
    logs.push(`myArray.pop() = `, myArray.pop1());
    logs.push(`myArray.pop() = `, myArray.pop2());
    logs.push(`myArray.pop() = `, myArray.pop1());
    logs.push(`myArray.pop() = `, myArray.pop2());
    logs.push(`twoStackArray = `, myArray.getStack());
    logs.print();
})();