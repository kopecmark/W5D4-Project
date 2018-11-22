Array.prototype.uniq = function() {
  let unique = [];
  for (let i=0; i<this.length; i++){
    if (unique.includes(this[i])) {
      continue;
    } else {
      unique.push(this[i]);
    }
  }
  return unique;
};


Array.prototype.twoSum = function() {
  let answer = [];

  for (let idx1 = 0; idx1< this.length; idx1++) {
    for (let idx2 = idx1 + 1; idx2 < this.length; idx2++) {
      if (this[idx1] + this[idx2] === 0) {
        answer.push([idx1, idx2]);
      }
    }
  }

  return answer;
};

// console.log([1,2,3,3,4,5,5,5,5].twoSum());


Array.prototype.transpose = function() {
  let transpose = [];
  for (let idx1 = 0; idx1 < this[0].length; idx1++) {
    let tempArray = [];
    for (let idx2 = 0; idx2 < this.length; idx2++){
      tempArray.push(this[idx2][idx1]);
    }
    transpose.push(tempArray);
    tempArray = [];
  }
  return transpose;
};

// console.log([[1,2,3],[4,5,6]].transpose());
