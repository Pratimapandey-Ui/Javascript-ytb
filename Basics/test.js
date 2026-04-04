console.log("Pratima")
const accountId="787798"
let accountName="Pratima"
var accountBalance=100000
accountType="Savings"           // not good but variable could be stored like this as well
console.table({accountId,accountName,accountBalance,accountType})
//  accountId="787777"          cannot change the value of const  keyword
 accountName="Preet"
 accountBalance=200000
accountType="Current"

console.table({accountId,accountName,accountBalance,accountType})
// we should use let not var to define variable because var is function scope and let is block scope
let accountPassword;      // creates a null space only
 