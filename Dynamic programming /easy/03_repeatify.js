 /*
  Write a function for a string in such a way if we write 
  "hello".repeatify(3)  ==> hellohellohello
  "Sameer".repeatify(5) ==> SameerSameerSameerSameerSameer
*/

String.prototype.repeatify = function(n) {
  let str = '';
  for(let i = 0; i < n; i++) {
    str += this;
  }
  return str;
}