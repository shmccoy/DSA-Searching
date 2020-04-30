function Linear(arr, value){
  let operations = 0
  for(let i = 0; i < arr.length; i++){
    operations++
    if(arr[i] === value){
      return operations
    }
  }
}

module.exports = Linear