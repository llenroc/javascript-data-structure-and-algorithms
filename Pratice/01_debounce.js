function debounceES5(fn, wait) {
  
}


function debounceES6(fn, wait) {
  
}

function debounceImmediate(fn, wait, immediate) {
  
}



function hello(text) {
    console.log(`Hello ${text}!`);
}

hello("world");
hello("sameer");
hello("kumar");
hello("makhija");
console.log("\n");

const debounceHelloES5 = debounceES5(hello, 2000);

debounceHelloES5("world");
debounceHelloES5("sameer");
debounceHelloES5("kumar");
debounceHelloES5("makhija");
console.log("\n");

const debounceHelloES6 = debounceES6(hello, 2000);

debounceHelloES6("world");
debounceHelloES6("sameer");
debounceHelloES6("kumar");
debounceHelloES6("makhija");
console.log("\n");