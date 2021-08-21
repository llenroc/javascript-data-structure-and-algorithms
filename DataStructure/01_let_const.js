// https://dev.to/sethusenthil/var-vs-let-vs-const-1cgc




const abc = [1 ,2, 3 ];
const { length } = abc;
console.log(`length = ${length}`); // 3

const companies  = [
  "Facebook",
  "Google",
  "Uber"
];

const [ name, ...rest ] = companies;
console.log(name); // "Facebook"
console.log(rest); // ["Google, Uber"];


const Google = {
  locations: ["Mountain View", "New York", "London"]
}

const { locations } = Google;
console.log(locations); // ["Mountain View", "New York", "London"]

const {locations: [ location ]} = Google;
console.log(location); // Mountain View


