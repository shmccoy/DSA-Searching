function binarySearch(arr, value, start, end){
  let start = start === undefined ? 0: start
  let end = end === undefined ? arr.length: end

  if(start > end){
    return -1
  }

  const index = Math.floor((start + end) / 2)
  const item = arr[index]

  console.log(start, end)

  if(item == value){
    return index
  }
  else if(item < value){
    return binarySearch(array, value, index + 1, end)
  }
  else if(item > value){
    return binarySearch(array, value, start, index - 1)
  }
}

module.exports = binarySearch