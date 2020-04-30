function indexOf(arr, value){
  for(let i = 0; i < arr.length; i++){
    if(array[i] == value){
      return i
    }
  }
  return -1
}

module.exports = indexOf