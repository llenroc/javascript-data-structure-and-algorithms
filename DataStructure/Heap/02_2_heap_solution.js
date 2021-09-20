class Heap{
    constructor(func){
        this.heap = [];
        this.func = func;
    }
    siftDown(idx,end,heap){
        let child1 = idx*2+1;
        while (child1 <= end){
            let child2 = idx*2+2 <= end ? idx*2+2 : -1;
            let swapIdx;
            if (child2 !== -1 && this.shouldSwap(child2,child1)){
                swapIdx = child2;
            } else {
                swapIdx = child1;
            }
            if (this.shouldSwap(swapIdx,idx)){
                this.swap(swapIdx,idx,heap);
                idx = swapIdx;
                child1 = idx*2+1;
            } else return;
        }
    }
    siftUp(idx, heap){
        let parent = Math.floor((idx-1)/2);
        while (idx > 0 && this.shouldSwap(idx,parent)){
            this.swap(idx,parent,heap);
            idx = parent;
            parent = Math.floor((idx-1)/2);
        }
    }
    peek(){
        return this.heap[0];
    }
    poll(){
        this.swap(0, this.heap.length-1, this.heap);
        let valueToReturn = this.heap.pop();
        this.siftDown(0, this.heap.length-1, this.heap);
        return valueToReturn;
    }
    offer(val){
        this.heap.push(val);
        this.siftUp(this.heap.length-1, this.heap);
    }
    isEmpty(){
        return this.heap.length === 0;
    }
    size(){
        return this.heap.length;
    }
    swap(i,j,heap){
        [heap[i],heap[j]] = [heap[j],heap[i]];
    }
    shouldSwap(idx1,idx2){
        return this.func(this.heap[idx1],this.heap[idx2]);
    }
}