Array.prototype.bubbleSort = function () {
  let sorted = false;

  while (sorted === false) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++){
      num1 = this[i];
      num2 = this[i+1];
      if (num1 > num2) {
        smaller = num2;
        bigger = num1;
        this[i] = smaller;
        this[i+1] = bigger;
        sorted = false;
      }
    }
  }
  return this;
};

console.log([3,5,7,3,2,9,5].bubbleSort())
