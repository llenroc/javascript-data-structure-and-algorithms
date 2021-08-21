// For - of loops is used for generator 

const colors  = ['red', 'green', 'blue'];
for (let color of colors) {
  console.log(color);
}

/**
 red
 green
 blue
 */

/*~~~~~~~~~~~~~~~~~~*/

// generator - two ways 

function* numbers() {}
function *numbers() {}


// Example 1
function* colors1() {
  yield 'red';
  yield 'green';
  yield 'blue';
}

const myColors = [];
for(let color of colors1()) {
  myColors.push(color);
}
console.log(myColors); // ['red', 'green', 'blue'];


// Example 2

const engineeringTeam = {
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave'
}

function *TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
}

const names = [];
for(let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

console.log(names);

/** ~~~~~~~~~~~~~~~~~~~~~~~ */

const testingTeam = {
  lead: "Max",
  tester: "Mime"
}

function *TestingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

function *TeamIterator1(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  const testTeamIterator = TestingTeamIterator(team.testingTeam);
  yield* testTeamIterator; // <--- Important 
}

const engineeringTeam1 = { ...engineeringTeam, testingTeam };

const names1 = [];
for(let name of TeamIterator1(engineeringTeam1)) {
  names1.push(name);
}

console.log(names1);
console.log("\n");

/** ~~~~~~~~~~~~~~~~~~~~~~~ */

const testingTeam2 = {
  lead: "Max",
  tester: "Mime",
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
}


function *TeamIterator2(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  yield* testingTeam2; // <--- Important 
}


const engineeringTeam2 = { ...engineeringTeam, testingTeam2 };

const names2 = [];
for(let name of TeamIterator2(engineeringTeam2)) {
  names2.push(name);
}

console.log(names2);
console.log("\n");

/** ~~~~~~~~~~~~~~~~~~~~~~~ */


const testingTeam3 = {
  lead: "Max",
  tester: "Mime",
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
}
const engineeringTeam3 = {
  testingTeam3,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam3;
  }
}


const names3 = [];
for(let name of engineeringTeam3) { // <-- check for loop difference
  names3.push(name);
}

console.log(names3);
console.log("\n");

/** ~~~~~~~~~~~~~~~~~~~~~~~ */

class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }
}

const children = [
  new Comment("good comment", []),
  new Comment("bad comment", []),
  new Comment("not very good comment", [])
];

const tree = new Comment("Great post!", children);
console.log(tree);
console.log("\n");


/** ~~~~~~~~~~~~~~~~~~~~~~~ */

class Comment1 {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    for(let child of this.children) {
      yield* child;
    }
  }
}

const children1 = [
  new Comment1("good comment", []),
  new Comment1("bad comment", []),
  new Comment1("not very good comment", [])
];

const tree1 = new Comment1("Great post!", children1);

const values = [];
for(let value of tree1) {
  values.push(value);
}
console.log(values);


