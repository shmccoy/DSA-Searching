function Binary(array, value, start, end, operations = 0){
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length : end;
  operations++

  if (start > end) {
      return operations;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  // console.log(start, end);
  if (item === value) {
      return operations;
  }
  else if (item < value) {
      return Binary(array, value, index + 1, end, operations);
  }
  else if (item > value) {
      return Binary(array, value, start, index - 1, operations);
  }
}

module.exports = Binary