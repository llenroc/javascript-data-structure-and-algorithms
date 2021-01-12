const nemo = ["nemo"];
const everyone = ["dory", "bruce", "marlin", "nemo", "gill"];
const large = new Array(10000).fill("nemo");
function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Forunt Nemo");
    }
  }
}


const findNemo2 = array => {
  array.forEach(fish => {
    if(fish === "nemo") {
      console.log("Found NEMO!");
    }
  })
}

const findNemo3 = array => {
  for (let fish of array) {
    if(fish === "nemo") {
      console.log("Found NEMO!");
    }
  }
}

findNemo(everyone); // O(n)  ---> Linear Time
findNemo2(everyone);
findNemo3(everyone);

// there are diifernt ways to loop through the array objects. 