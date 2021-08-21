function myFun(str) {

  const charMap = {};

  for(let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

console.log(myFun("dashfkjhdkjsfhkjsdahjkl"));