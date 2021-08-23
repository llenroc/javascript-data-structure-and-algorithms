/*

Q1. Implement emitter, to emit and sub.release method.

const emitter = new Emitter();

const sub = emitter.subscribe("eventName", callback);

emitter.emit("eventName", value1, value2);

sub.release();




--> Extended questions 
Q. How will you handle if I subscribe multiple callback with same name ?
Q. How will you write logic for release for above scenarios ( only single callback should be released)


*** Sameer questions  ***

*/

/*
  Side Question -> Can we use Map() vs Object 
  What will be the advantages ?
*/

class Emitter {
  constructor() {
    this.storage = {};
  }

  subscribe(eventName, callback) {
    this.storage[eventName] = callback;
    return {
      release: () => {
        delete this.storage[eventName];
      }
    }
  }

  emit(eventName, ...args) {
    const callback = this.storage[eventName];
    callback.apply(null, args);
  }
}


const emitter = new Emitter();
const sub = emitter.subscribe("eventName", callback);
emitter.emit("eventName", value1, value2);
sub.release();