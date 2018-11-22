
const adder = function (num) {
  return num + 1;
};
// console.log(adder)

// function adder(num) {
//   return num + 1;
// };

Array.prototype.myEach = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }

  return result;
};

// console.log([1,2,3].myEach(adder));


Array.prototype.myMap = function (callback) {
  // const result = [];
  return this.myEach(callback);
};

console.log([2,3,4].myMap(adder));
