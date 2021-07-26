// https://replit.com/@bgando/k-stacks-one-array-solution?v=1

/* Create a data structure KStackIds that represents a set of k stacks. It should only use one array. The following methods must be supported by KStacks.

push(stackId, value) –> pushes value to stackId where stackId is from 0 to k-1
pop(stackId) –> pops an element from stackId number where stackId is from 0 to k-1
*/

/**
 * KStacks
 * @constructor
 */
class KStacks {
  constructor(k) {
    this._storage = [];
    this._lengths = new Array(k).fill(0);
  }

  _getLength(stackId) {
    return this._lengths[stackId - 1];
  }

  push(stackId, value) {
    let idx = this._getLength(stackId) * 3 + stackId - 1;
    this._storage[idx] = value;
    ++this._lengths[stackId - 1];
  }

  pop(stackId) {
    let length = this._getLength(stackId),
      value;
    if (length > 0) {
      let idx = (length - 1) * 3 + stackId - 1;
      value = this._storage[idx];
      this._storage[idx] = undefined;
      --this._lengths[stackId - 1];
    }
    return value;
  }

  peek(stackId) {
    let length = this._getLength(stackId),
      value;
    if (length > 0) {
      let idx = (length - 1) * 3 + stackId - 1;
      value = this._storage[idx];
    }
    return value;
  }

  isEmpty(stackId) {
    return this._getLength(stackId) === 0;
  }
}