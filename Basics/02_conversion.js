let score=33
console.log(typeof score)
console.log(typeof (score))
valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

score="33" 
console.log(typeof score)
console.log(typeof (score))
 valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)


score="33aa"
console.log(typeof score)
console.log(typeof (score))
valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)     //even after being converted in number its value would be NaN I.E Not a number


 score="Pratima"
console.log(typeof score)
console.log(typeof (score))
valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)   //even after being converted in number its value would be NaN I.E Not a number

score=true
console.log(typeof score)
console.log(typeof (score))
valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)  //we get 1 for true

//when we convert to booleam the same way 
//1->true 0->false
//""->false
//"pratima"->true

