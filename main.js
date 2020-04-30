const bst = require('./bst')

function main(){
  // initialize binary search tree
  const myBst = new bst()

  // insert data
  let data = [
    25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22
  ]
  data.forEach(int => myBst.insert(int, int))
  
  // console log results of depth first search results
  // console.log(myBst.preOrder())
  // console.log(myBst.inOrder())
  console.log(myBst.postOrder())
}

main()