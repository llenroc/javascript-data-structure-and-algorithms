console.log("WeakMap");

// WeakMap is also not iterable
// Methods -> delete, get, has, set 


const weakMap = new WeakMap();
const key1 = {
  id: 1
};

const key2 = {
  id: 2
};

const car1 = {
  make: 'Honda',
  model: 'Civic'
}

const car2 = {
  make: 'Tyota',
  model: 'Camry'
}

weakMap.set(key1, car1).set(key2, car2);
console.log(weakMap); // WeakMap {{…} => {…}, {…} => {…}}
