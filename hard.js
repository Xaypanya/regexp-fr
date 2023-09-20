// matching character with lazy matching
let string = "titanic"
let regex = /t[a-z]*?i/g
let result = string.match(regex)

console.log("Result ::", result)

let htmlText = "<h1>Winter is coming</h1>"
let myRegex = /<.*?>/g
let result2 = htmlText.match(myRegex)

console.log("Result2:: ", result2)

//find one or more criminals in a hunt

let crowd = "P1P2P3P4P5P6P7P8P9"

let reCriminals = /./;

let matchedCriminals = crowd.match(reCriminals)

console.log("matchedCriminals:: ", matchedCriminals)

let rickyAndCal = "Cal and Ricky both like racing."
let calREgex = /Cal/
let result3 = calREgex.test(rickyAndCal)

console.log("result3:: ", result3)

