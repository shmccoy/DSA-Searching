const bst = require('./bst')

function main(){
  // initialize binary search tree
  const ussEnterprise = new bst()

  // insert data
  let officers = [
    {key: 5, name: 'Cpt. Picard'},
    {key: 3, name: 'Cmdr. Riker'},
    {key: 2, name: 'Lt. Cmdr. Worf'},
    {key: 4, name: 'Lt. Cmdr. LaForge'},
    {key: 1, name: 'Lt. sec-officer'},
    {key: 6, name: 'Cmdr. Data'},
    {key: 8, name: 'Lt. Cmdr. Crusher'},
    {key: 7, name: 'Lt. Selar'},
  ]
  officers.forEach(officer => {
    ussEnterprise.insert(officer.key, officer.name)
  })
  
  // console.log(ussEnterprise)

  console.log(ussEnterprise.orderOfCommand(ussEnterprise))
}

main()